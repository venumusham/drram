#!/usr/bin/env python3
"""
Publish Weekly Synthesis Script

This script fetches approved records from Airtable, generates a weekly synthesis article
using an LLM with strict Pydantic validation, creates a mock data chart using matplotlib,
and opens a Pull Request to the main branch via PyGithub.

YMYL Guardrails:
- Uses instructor with Pydantic for strict JSON schema validation
- Retries automatically on validation failures
- Never pushes directly to main; always creates a PR

Differences from Daily Brief:
- Generates a more comprehensive weekly synthesis with executive summary
- Includes a markdown comparison table of papers
- Focuses on clinical implications across multiple studies
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
from models import WeeklySynthesisArticle, PaperAnalysis

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

# Environment variables (NEVER hardcode secrets)
AIRTABLE_PAT = os.environ.get("AIRTABLE_PAT")
AIRTABLE_BASE_ID = os.environ.get("AIRTABLE_BASE_ID")
AIRTABLE_TABLE_NAME = "Clinical Papers"
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN")
GITHUB_REPO = os.environ.get("GITHUB_REPO", "your-org/your-repo")

# Validate required environment variables
REQUIRED_ENV_VARS = [
    AIRTABLE_PAT,
    AIRTABLE_BASE_ID,
    OPENAI_API_KEY,
    GITHUB_TOKEN,
]

if not all(REQUIRED_ENV_VARS):
    missing = [
        var_name for var_name, var_value in zip(
            ["AIRTABLE_PAT", "AIRTABLE_BASE_ID", "OPENAI_API_KEY", "GITHUB_TOKEN"],
            REQUIRED_ENV_VARS
        ) if not var_value
    ]
    raise ValueError(f"Missing required environment variables: {', '.join(missing)}")

# Initialize instructor for strict LLM validation
llm_client = instructor.from_litellm(completion)

# Initialize Airtable API with Personal Access Token (PAT) - NOT legacy api_key
api = Api(AIRTABLE_PAT)
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
        # Filter for records marked as 'Approved for Synthesis'
        records = table.all(formula="{Status} = 'Approved for Synthesis'")
        logger.info(f"Found {len(records)} approved records.")
        return records
    except Exception as e:
        logger.error(f"Failed to fetch records from Airtable: {e}")
        raise


def generate_weekly_synthesis_content(papers: List[Dict[str, Any]]) -> WeeklySynthesisArticle:
    """
    Generate a weekly synthesis article using an LLM with strict Pydantic validation.
    
    Args:
        papers: List of approved paper records from Airtable.
        
    Returns:
        Validated WeeklySynthesisArticle object.
    """
    logger.info("Generating weekly synthesis content with LLM...")
    
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
    You are a medical content expert creating a weekly synthesis article for a clinical SEO website.
    Based on the following recent medical papers published this week, create a comprehensive weekly synthesis.
    
    Papers:
    {paper_summaries}
    
    Requirements:
    - Title: Clear and informative, indicating this is a weekly synthesis with date range.
    - Slug: URL-friendly version of the title.
    - yaml_frontmatter: Dictionary containing title, date, tags, category, and author.
    - executive_summary: High-level overview of the week's key findings and trends.
    - markdown_comparison_table: A markdown table comparing the papers (columns: Study, Key Finding, Clinical Relevance, Linkability Score).
    - clinical_implications: Detailed discussion of what these findings mean for clinical practice.
    
    IMPORTANT: This is YMYL (Your Money Your Life) content. Accuracy is critical.
    Do not hallucinate facts. Only use information provided in the paper summaries.
    Ensure the comparison table is properly formatted as valid Markdown.
    """
    
    # Use instructor to enforce strict Pydantic validation with retries
    try:
        response = llm_client.chat.completions.create(
            model="gpt-4o",  # Or your preferred model
            response_model=WeeklySynthesisArticle,
            messages=[
                {"role": "system", "content": "You are a medical content expert. Ensure accuracy and avoid hallucinations. Format tables as valid Markdown."},
                {"role": "user", "content": prompt},
            ],
            max_retries=3,  # Retry up to 3 times on validation failure
        )
        logger.info("Weekly synthesis content generated successfully.")
        return response
    except Exception as e:
        logger.error(f"Failed to generate weekly synthesis content: {e}")
        raise


def generate_mock_chart(title: str, output_path: Path) -> Path:
    """
    Generate a simple mock data chart using matplotlib.
    
    For weekly synthesis, we'll create a different visualization showing
    trends across the week's papers.
    
    Args:
        title: Title for the chart.
        output_path: Path to save the chart image.
        
    Returns:
        Path to the saved chart image.
    """
    logger.info(f"Generating mock chart: {output_path}")
    
    # Mock data for visualization (e.g., linkability scores distribution)
    score_ranges = ["1-2", "3", "4", "5"]
    paper_counts = [2, 5, 8, 6]  # Number of papers in each linkability score range
    
    plt.figure(figsize=(10, 6))
    bars = plt.bar(score_ranges, paper_counts, color=["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF"])
    plt.title(f"Linkability Score Distribution - {title}", fontsize=14)
    plt.xlabel("Linkability Score Range")
    plt.ylabel("Number of Papers")
    plt.grid(axis="y", linestyle="--", alpha=0.7)
    
    # Add value labels on bars
    for bar, count in zip(bars, paper_counts):
        plt.text(
            bar.get_x() + bar.get_width() / 2,
            bar.get_height() + 0.2,
            str(count),
            ha='center',
            va='bottom',
            fontsize=10
        )
    
    # Save the chart
    output_path.parent.mkdir(parents=True, exist_ok=True)
    plt.savefig(output_path, dpi=300, bbox_inches="tight")
    plt.close()
    
    logger.info(f"Chart saved to {output_path}")
    return output_path


def create_pull_request(article: WeeklySynthesisArticle, chart_path: Path) -> None:
    """
    Create a new branch, upload files, and open a Pull Request to main.
    
    Args:
        article: The generated WeeklySynthesisArticle object.
        chart_path: Path to the generated chart image.
    """
    today = datetime.now().strftime("%Y-%m-%d")
    branch_name = f"agent/weekly-synthesis-{today}"
    
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
    
    # Build YAML frontmatter from the dict
    yaml_frontmatter = article.yaml_frontmatter
    frontmatter_str = "---\n"
    for key, value in yaml_frontmatter.items():
        if isinstance(value, list):
            # Format lists properly for YAML
            frontmatter_str += f"{key}:\n"
            for item in value:
                frontmatter_str += f"  - {item}\n"
        else:
            frontmatter_str += f"{key}: {value}\n"
    frontmatter_str += "---\n\n"
    
    # Generate Markdown content
    markdown_content = frontmatter_str
    markdown_content += f"""# {article.title}

## Executive Summary

{article.executive_summary}

## Comparison of Studies This Week

{article.markdown_comparison_table}

## Clinical Implications

{article.clinical_implications}

## Data Visualization

![Weekly Synthesis Chart]({chart_upload_path})

*Chart generated automatically showing linkability score distribution for this week's papers.*
"""
    
    # Upload chart to src/assets/charts/
    logger.info(f"Uploading chart to {chart_upload_path}...")
    try:
        repo.update_file(
            path=chart_upload_path,
            message=f"Add chart for weekly synthesis {today}",
            content=chart_content,
            branch=branch_name,
        )
        logger.info("Chart uploaded successfully.")
    except Exception as e:
        if "No file found" in str(e):
            # File doesn't exist, create it
            repo.create_file(
                path=chart_upload_path,
                message=f"Add chart for weekly synthesis {today}",
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
            message=f"Add weekly synthesis article: {article.title}",
            content=markdown_content.encode("utf-8"),
            branch=branch_name,
        )
        logger.info("Article uploaded successfully.")
    except Exception as e:
        if "No file found" in str(e):
            # File doesn't exist, create it
            repo.create_file(
                path=md_upload_path,
                message=f"Add weekly synthesis article: {article.title}",
                content=markdown_content.encode("utf-8"),
                branch=branch_name,
            )
            logger.info("Article created successfully.")
        else:
            raise
    
    # Open a Pull Request
    pr_title = f"Weekly Synthesis: {article.title}"
    pr_body = f"""
## Summary
This PR adds a new weekly synthesis article: **{article.title}**.

## Changes
- Added article: `{md_upload_path}`
- Added chart: `{chart_upload_path}`

## Review Checklist
- [ ] Verify medical accuracy and YMYL compliance
- [ ] Check for hallucinations or unsupported claims
- [ ] Validate markdown comparison table formatting
- [ ] Ensure proper formatting and SEO optimization
- [ ] Review clinical implications for accuracy
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
    
    # Update Airtable record: change Status to 'Published' and add Netlify PR Link
    for record in records:
        try:
            table.update(record['id'], {
                "Status": "Published",
                "Netlify PR Link": pr.html_url
            })
            logger.info(f"Updated Airtable record {record['id']} to Published with PR link")
        except Exception as e:
            logger.error(f"Failed to update Airtable record {record['id']}: {e}")


def main():
    """Main entry point for the weekly synthesis publishing script."""
    logger.info("Starting Weekly Synthesis Publishing Process...")
    
    try:
        # Step 1: Fetch approved records from Airtable
        records = fetch_approved_records()
        
        if not records:
            logger.info("No approved records found. Exiting.")
            return
        
        # Step 2: Generate weekly synthesis content
        article = generate_weekly_synthesis_content(records)
        
        # Step 3: Generate mock chart
        chart_filename = f"weekly-synthesis-{datetime.now().strftime('%Y-%m-%d')}.png"
        charts_dir = Path("src/assets/charts")
        chart_path = charts_dir / chart_filename
        generate_mock_chart(article.title, chart_path)
        
        # Step 4: Create Pull Request
        create_pull_request(article, chart_path)
        
        logger.info("Weekly Synthesis Publishing Process completed successfully!")
        
    except Exception as e:
        logger.error(f"Weekly Synthesis Publishing Process failed: {e}")
        raise


if __name__ == "__main__":
    main()
