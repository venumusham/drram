#!/usr/bin/env python3
"""
Publish Daily Brief Script

This script fetches approved records from Airtable, generates a daily brief article
using an LLM with strict Pydantic validation, creates a mock data chart using matplotlib,
and opens a Pull Request to the main branch via PyGithub.

YMYL Guardrails:
- Uses instructor with Pydantic for strict JSON schema validation
- Retries automatically on validation failures
- Never pushes directly to main; always creates a PR
"""

import os
import logging
from datetime import datetime, timedelta
from pathlib import Path
from typing import List, Dict, Any

import instructor
import matplotlib.pyplot as plt
from pyairtable import Api
from github import Github
from litellm import completion

# Import our strict Pydantic models
from models import DailyBriefArticle, PaperAnalysis

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

# Environment variables (NEVER hardcode secrets)
AIRTABLE_API_KEY = os.environ.get("AIRTABLE_API_KEY")
AIRTABLE_BASE_ID = os.environ.get("AIRTABLE_BASE_ID")
AIRTABLE_TABLE_NAME = os.environ.get("AIRTABLE_TABLE_NAME", "ApprovedPapers")
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN")
GITHUB_REPO = os.environ.get("GITHUB_REPO", "your-org/your-repo")

# Validate required environment variables
REQUIRED_ENV_VARS = [
    AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID,
    OPENAI_API_KEY,
    GITHUB_TOKEN,
]

if not all(REQUIRED_ENV_VARS):
    missing = [
        var_name for var_name, var_value in zip(
            ["AIRTABLE_API_KEY", "AIRTABLE_BASE_ID", "OPENAI_API_KEY", "GITHUB_TOKEN"],
            REQUIRED_ENV_VARS
        ) if not var_value
    ]
    raise ValueError(f"Missing required environment variables: {', '.join(missing)}")

# Initialize instructor for strict LLM validation
llm_client = instructor.from_litellm(completion)

# Initialize Airtable API
api = Api(AIRTABLE_API_KEY)
table = api.table(AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME)

# Initialize GitHub
gh = Github(GITHUB_TOKEN)
repo = gh.get_repo(GITHUB_REPO)


def fetch_approved_records() -> List[Dict[str, Any]]:
    """
    Fetch approved records from Airtable.
    
    Returns:
        List of record dictionaries containing paper analysis data.
    """
    logger.info("Fetching approved records from Airtable...")
    try:
        # Filter for records marked as approved
        records = table.all(formula="{Approved} = 1")
        logger.info(f"Found {len(records)} approved records.")
        return records
    except Exception as e:
        logger.error(f"Failed to fetch records from Airtable: {e}")
        raise


def generate_daily_brief_content(papers: List[Dict[str, Any]]) -> DailyBriefArticle:
    """
    Generate a daily brief article using an LLM with strict Pydantic validation.
    
    Args:
        papers: List of approved paper records from Airtable.
        
    Returns:
        Validated DailyBriefArticle object.
    """
    logger.info("Generating daily brief content with LLM...")
    
    # Prepare paper data for the LLM
    paper_summaries = []
    for record in papers:
        fields = record.get("fields", {})
        paper_summaries.append({
            "title": fields.get("Title", "Unknown Title"),
            "doi": fields.get("DOI", ""),
            "abstract": fields.get("Abstract", ""),
            "clinical_summary": fields.get("ClinicalSummary", ""),
            "linkability_score": fields.get("LinkabilityScore", 3),
        })
    
    # Construct the prompt for the LLM
    prompt = f"""
    You are a medical content expert creating a daily brief for a clinical SEO website.
    Based on the following recent medical papers, create a concise daily brief article.
    
    Papers:
    {paper_summaries}
    
    Requirements:
    - Title: Clear and informative, including the date.
    - Slug: URL-friendly version of the title.
    - Intro: Brief introduction summarizing the day's key findings.
    - Takeaways: List of key takeaways from each paper (include title, summary, and clinical relevance).
    - Conclusion: Summary of overall implications for clinicians.
    
    IMPORTANT: This is YMYL (Your Money Your Life) content. Accuracy is critical.
    Do not hallucinate facts. Only use information provided in the paper summaries.
    """
    
    # Use instructor to enforce strict Pydantic validation with retries
    try:
        response = llm_client.chat.completions.create(
            model="gpt-4o",  # Or your preferred model
            response_model=DailyBriefArticle,
            messages=[
                {"role": "system", "content": "You are a medical content expert. Ensure accuracy and avoid hallucinations."},
                {"role": "user", "content": prompt},
            ],
            max_retries=3,  # Retry up to 3 times on validation failure
        )
        logger.info("Daily brief content generated successfully.")
        return response
    except Exception as e:
        logger.error(f"Failed to generate daily brief content: {e}")
        raise


def generate_mock_chart(title: str, output_path: Path) -> Path:
    """
    Generate a simple mock data chart using matplotlib.
    
    Args:
        title: Title for the chart.
        output_path: Path to save the chart image.
        
    Returns:
        Path to the saved chart image.
    """
    logger.info(f"Generating mock chart: {output_path}")
    
    # Mock data for visualization (e.g., number of papers analyzed per day)
    days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    paper_counts = [5, 8, 6, 10, 7, 4, 9]
    
    plt.figure(figsize=(10, 6))
    plt.bar(days, paper_counts, color="#4CAF50")
    plt.title(title, fontsize=14)
    plt.xlabel("Day of Week")
    plt.ylabel("Number of Papers Analyzed")
    plt.grid(axis="y", linestyle="--", alpha=0.7)
    
    # Save the chart
    output_path.parent.mkdir(parents=True, exist_ok=True)
    plt.savefig(output_path, dpi=300, bbox_inches="tight")
    plt.close()
    
    logger.info(f"Chart saved to {output_path}")
    return output_path


def create_pull_request(article: DailyBriefArticle, chart_path: Path) -> None:
    """
    Create a new branch, upload files, and open a Pull Request to main.
    
    Args:
        article: The generated DailyBriefArticle object.
        chart_path: Path to the generated chart image.
    """
    today = datetime.now().strftime("%Y-%m-%d")
    branch_name = f"agent/daily-brief-{today}"
    
    logger.info(f"Creating branch: {branch_name}")
    
    # Get the main branch reference
    main_branch = repo.get_branch("main")
    
    # Create a new branch from main
    try:
        repo.create_git_ref(ref=f"refs/heads/{branch_name}", sha=main_branch.commit.sha)
        logger.info(f"Branch {branch_name} created successfully.")
    except Exception as e:
        if "Reference already exists" in str(e):
            logger.warning(f"Branch {branch_name} already exists. Skipping branch creation.")
        else:
            raise
    
    # Prepare file paths
    chart_upload_path = f"src/assets/charts/{chart_path.name}"
    md_filename = f"{article.slug}.md"
    md_upload_path = f"src/content/reviews/{md_filename}"
    
    # Read chart image
    with open(chart_path, "rb") as f:
        chart_content = f.read()
    
    # Generate Markdown content
    markdown_content = f"""---
title: "{article.title}"
date: {today}
tags: ["daily-brief", "medical-research"]
---

# {article.title}

{article.intro}

## Key Takeaways

"""
    
    for takeaway in article.takeaways:
        markdown_content += f"""### {takeaway.title}
{takeaway.summary}

**Clinical Relevance:** {takeaway.clinical_relevance}

"""
    
    markdown_content += f"""## Conclusion

{article.conclusion}

![Daily Brief Chart]({chart_upload_path})
"""
    
    # Upload chart to src/assets/charts/
    logger.info(f"Uploading chart to {chart_upload_path}...")
    try:
        repo.update_file(
            path=chart_upload_path,
            message=f"Add chart for daily brief {today}",
            content=chart_content,
            branch=branch_name,
        )
        logger.info("Chart uploaded successfully.")
    except Exception as e:
        if "No file found" in str(e):
            # File doesn't exist, create it
            repo.create_file(
                path=chart_upload_path,
                message=f"Add chart for daily brief {today}",
                content=chart_content,
                branch=branch_name,
            )
            logger.info("Chart created successfully.")
        else:
            raise
    
    # Upload Markdown file to src/content/reviews/
    logger.info(f"Uploading article to {md_upload_path}...")
    try:
        repo.update_file(
            path=md_upload_path,
            message=f"Add daily brief article: {article.title}",
            content=markdown_content.encode("utf-8"),
            branch=branch_name,
        )
        logger.info("Article uploaded successfully.")
    except Exception as e:
        if "No file found" in str(e):
            # File doesn't exist, create it
            repo.create_file(
                path=md_upload_path,
                message=f"Add daily brief article: {article.title}",
                content=markdown_content.encode("utf-8"),
                branch=branch_name,
            )
            logger.info("Article created successfully.")
        else:
            raise
    
    # Open a Pull Request
    pr_title = f"Daily Brief: {article.title}"
    pr_body = f"""
## Summary
This PR adds a new daily brief article: **{article.title}**.

## Changes
- Added article: `{md_upload_path}`
- Added chart: `{chart_upload_path}`

## Review Checklist
- [ ] Verify medical accuracy and YMYL compliance
- [ ] Check for hallucinations or unsupported claims
- [ ] Ensure proper formatting and SEO optimization
- [ ] Approve for merge to main

Generated by AI Agent on {datetime.now().isoformat()}.
"""
    
    logger.info(f"Opening Pull Request: {pr_title}")
    pr = repo.create_pull(
        title=pr_title,
        body=pr_body,
        head=branch_name,
        base="main",
    )
    
    logger.info(f"Pull Request created: {pr.html_url}")


def main():
    """Main entry point for the daily brief publishing script."""
    logger.info("Starting Daily Brief Publishing Process...")
    
    try:
        # Step 1: Fetch approved records from Airtable
        records = fetch_approved_records()
        
        if not records:
            logger.info("No approved records found. Exiting.")
            return
        
        # Step 2: Generate daily brief content
        article = generate_daily_brief_content(records)
        
        # Step 3: Generate mock chart
        chart_filename = f"daily-brief-{datetime.now().strftime('%Y-%m-%d')}.png"
        charts_dir = Path("src/assets/charts")
        chart_path = charts_dir / chart_filename
        generate_mock_chart(article.title, chart_path)
        
        # Step 4: Create Pull Request
        create_pull_request(article, chart_path)
        
        logger.info("Daily Brief Publishing Process completed successfully!")
        
    except Exception as e:
        logger.error(f"Daily Brief Publishing Process failed: {e}")
        raise


if __name__ == "__main__":
    main()
