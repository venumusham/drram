"""
PubMed Ingestion Script

Queries PubMed E-utilities for recent papers, analyzes them with LLM,
and stores validated data in Airtable.
"""

import os
import time
import xmltodict
import requests
from datetime import datetime, timedelta, timezone
from typing import List, Optional, Dict, Any

import instructor
from pydantic import BaseModel, Field
from litellm import completion
from pyairtable import Api
from tenacity import retry, stop_after_attempt, wait_exponential, retry_if_exception_type

# Import models from models.py
import sys
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from models import PaperAnalysis

# Configuration
PUBMED_BASE_URL = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils"
AIRTABLE_PAT = os.environ.get("AIRTABLE_PAT")
AIRTABLE_BASE_ID = os.environ.get("AIRTABLE_BASE_ID")
AIRTABLE_TABLE_NAME = "Clinical Papers"
OPENAI_MODEL = os.environ.get("OPENAI_MODEL", "gpt-4o-mini")

if not all([AIRTABLE_PAT, AIRTABLE_BASE_ID]):
    raise ValueError("Missing required Airtable environment variables: AIRTABLE_PAT, AIRTABLE_BASE_ID")

# Initialize Airtable with Personal Access Token (PAT) - NOT legacy api_key
api = Api(AIRTABLE_PAT)
table = api.table(AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME)

# Initialize Instructor for strict LLM validation
client = instructor.from_litellm(completion)


class PubMedSearchError(Exception):
    """Custom exception for PubMed API errors"""
    pass


class PubMedFetchError(Exception):
    """Custom exception for PubMed fetch errors"""
    pass


class LLMAnalysisError(Exception):
    """Custom exception for LLM analysis errors"""
    pass


@retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(multiplier=1, min=2, max=10),
    retry=retry_if_exception_type((requests.RequestException, PubMedSearchError, PubMedFetchError)),
    reraise=True
)
def search_pubmed(mesh_term: str, max_results: int = 10) -> List[str]:
    """
    Search PubMed for papers matching the MeSH term.
    
    Args:
        mesh_term: The MeSH term to search for
        max_results: Maximum number of paper IDs to return
        
    Returns:
        List of PubMed IDs
    """
    search_params = {
        "db": "pubmed",
        "term": f'"{mesh_term}"[MeSH Terms] AND ("2 days"[Date - Publication] : "3000"[Date - Publication])',
        "retmax": max_results,
        "retmode": "json",
        "sort": "pub_date"
    }
    
    try:
        response = requests.get(
            f"{PUBMED_BASE_URL}/esearch.fcgi",
            params=search_params,
            timeout=30
        )
        response.raise_for_status()
        
        data = response.json()
        
        if "esearchresult" not in data:
            raise PubMedSearchError(f"Invalid response from PubMed: {data}")
        
        id_list = data["esearchresult"].get("idlist", [])
        
        if not id_list:
            print(f"No results found for MeSH term: {mesh_term}")
            return []
        
        print(f"Found {len(id_list)} papers for '{mesh_term}'")
        return id_list
        
    except requests.RequestException as e:
        raise PubMedSearchError(f"Failed to search PubMed: {str(e)}")


@retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(multiplier=1, min=2, max=10),
    retry=retry_if_exception_type((requests.RequestException, PubMedFetchError)),
    reraise=True
)
def fetch_paper_details(paper_ids: List[str]) -> List[Dict[str, Any]]:
    """
    Fetch detailed information for a list of PubMed IDs.
    
    Args:
        paper_ids: List of PubMed IDs
        
    Returns:
        List of paper details dictionaries
    """
    if not paper_ids:
        return []
    
    fetch_params = {
        "db": "pubmed",
        "id": ",".join(paper_ids),
        "retmode": "xml",
        "rettype": "abstract"
    }
    
    try:
        response = requests.get(
            f"{PUBMED_BASE_URL}/efetch.fcgi",
            params=fetch_params,
            timeout=30
        )
        response.raise_for_status()
        
        # Parse XML response
        xml_data = xmltodict.parse(response.text)
        
        papers = []
        pubmed_articles = xml_data.get("PubmedArticleSet", {}).get("PubmedArticle", [])
        
        # Handle case where there's only one article (not a list)
        if isinstance(pubmed_articles, dict):
            pubmed_articles = [pubmed_articles]
        
        for article in pubmed_articles:
            try:
                medline_citation = article.get("MedlineCitation", {})
                article_data = article.get("Article", {})
                
                # Extract basic information
                pmid = medline_citation.get("PMID", {}).get("#text")
                
                # Get title
                article_title = article_data.get("ArticleTitle", "")
                
                # Get abstract
                abstract_section = article_data.get("Abstract", {})
                abstract_text = ""
                
                if abstract_section:
                    abstract_list = abstract_section.get("AbstractText", [])
                    if isinstance(abstract_list, str):
                        abstract_text = abstract_list
                    elif isinstance(abstract_list, list):
                        abstract_text = " ".join([str(item) for item in abstract_list])
                    elif isinstance(abstract_list, dict):
                        abstract_text = str(abstract_list.get("#text", ""))
                
                # Get publication date
                pub_date = article_data.get("Journal", {}).get("JournalIssue", {}).get("PubDate", {})
                
                # Try to get ISO date from various formats
                pub_date_str = None
                if "Year" in pub_date:
                    year = pub_date.get("Year", "")
                    month = pub_date.get("Month", "01")
                    day = pub_date.get("Day", "01")
                    pub_date_str = f"{year}-{month.zfill(2)}-{day.zfill(2)}"
                elif "MedlineDate" in pub_date:
                    # Handle MedlineDate format (e.g., "2024 Jan-Feb")
                    medline_date = pub_date.get("MedlineDate", "")
                    # Simple parsing - just extract year for now
                    parts = medline_date.split()
                    if parts and parts[0].isdigit():
                        pub_date_str = f"{parts[0]}-01-01"
                
                # Get DOI
                doi = ""
                elocation_ids = article_data.get("ELocationID", [])
                if isinstance(elocation_ids, str):
                    elocation_ids = [elocation_ids]
                
                for eid in elocation_ids:
                    if isinstance(eid, dict) and eid.get("@EIdType") == "doi":
                        doi = eid.get("#text", "")
                        break
                    elif isinstance(eid, str) and eid.startswith("10."):
                        doi = eid
                        break
                
                # Get authors
                authors = []
                author_list = article_data.get("AuthorList", {}).get("Author", [])
                if isinstance(author_list, dict):
                    author_list = [author_list]
                
                for author in author_list:
                    if isinstance(author, dict):
                        last_name = author.get("LastName", "")
                        fore_name = author.get("ForeName", "")
                        full_name = f"{fore_name} {last_name}".strip()
                        if full_name:
                            authors.append(full_name)
                
                papers.append({
                    "pmid": pmid,
                    "title": article_title,
                    "abstract": abstract_text,
                    "doi": doi,
                    "pub_date": pub_date_str,
                    "authors": authors
                })
                
            except Exception as e:
                print(f"Error processing article: {str(e)}")
                continue
        
        print(f"Successfully fetched {len(papers)} papers")
        return papers
        
    except requests.RequestException as e:
        raise PubMedFetchError(f"Failed to fetch paper details: {str(e)}")


def is_recent_paper(pub_date_str: Optional[str], hours: int = 48) -> bool:
    """
    Check if a paper was published within the last N hours.
    
    Args:
        pub_date_str: Publication date string (YYYY-MM-DD)
        hours: Number of hours to check within
        
    Returns:
        True if paper is recent, False otherwise
    """
    if not pub_date_str:
        return False
    
    try:
        pub_date = datetime.strptime(pub_date_str, "%Y-%m-%d").replace(tzinfo=timezone.utc)
        cutoff_date = datetime.now(timezone.utc) - timedelta(hours=hours)
        return pub_date >= cutoff_date
    except ValueError:
        return False


@retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(multiplier=1, min=2, max=10),
    retry=retry_if_exception_type((LLMAnalysisError)),
    reraise=True
)
def analyze_paper_with_llm(paper: Dict[str, Any]) -> PaperAnalysis:
    """
    Analyze a paper using LLM with strict Pydantic validation.
    
    Args:
        paper: Dictionary containing paper details
        
    Returns:
        Validated PaperAnalysis object
    """
    prompt = f"""
    You are a medical research analyst. Analyze the following scientific paper abstract and provide a structured summary.
    
    Title: {paper.get('title', 'N/A')}
    Authors: {', '.join(paper.get('authors', [])) or 'N/A'}
    DOI: {paper.get('doi', 'N/A')}
    
    Abstract:
    {paper.get('abstract', 'No abstract available')}
    
    Provide a clinical summary that a healthcare professional can understand. 
    Assess the linkability score (1-5) based on how well this paper supports evidence-based content creation:
    1 = Weak evidence, case report only
    2 = Limited evidence, small study
    3 = Moderate evidence, reasonable sample size
    4 = Strong evidence, well-designed study
    5 = Very strong evidence, systematic review or large RCT
    
    Be precise and avoid hallucinations. Only use information present in the abstract.
    """
    
    try:
        response = client.chat.completions.create(
            model=OPENAI_MODEL,
            response_model=PaperAnalysis,
            messages=[
                {"role": "system", "content": "You are a precise medical research analyst. Never hallucinate information. Only use facts present in the provided text."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.1,  # Low temperature for precision
            max_tokens=1000
        )
        
        # Add DOI and link to the response if available
        if paper.get('doi'):
            response.link = f"https://doi.org/{paper['doi']}"
        
        return response
        
    except Exception as e:
        raise LLMAnalysisError(f"Failed to analyze paper with LLM: {str(e)}")


def push_to_airtable(paper_analysis: PaperAnalysis, pmid: str) -> Dict[str, Any]:
    """
    Push validated paper analysis to Airtable.
    
    Args:
        paper_analysis: Validated PaperAnalysis object
        pmid: PubMed ID of the paper
        
    Returns:
        Created Airtable record
    """
    record_data = {
        "Title": paper_analysis.title,
        "DOI": paper_analysis.doi,
        "PMID": pmid,
        "Abstract": paper_analysis.abstract,
        "Clinical Summary": paper_analysis.clinical_summary,
        "Linkability Score": paper_analysis.linkability_score,
        "Link": paper_analysis.link,
        "Analyzed At": datetime.now(timezone.utc).isoformat(),
        "Status": "Pending Review"
    }
    
    try:
        record = table.create(record_data)
        print(f"Pushed paper '{paper_analysis.title}' to Airtable (ID: {record['id']})")
        return record
    except Exception as e:
        print(f"Failed to push to Airtable: {str(e)}")
        raise


def ingest_pubmed_papers(mesh_term: str, max_results: int = 10) -> int:
    """
    Main ingestion pipeline for PubMed papers.
    
    Args:
        mesh_term: MeSH term to search for
        max_results: Maximum number of papers to process
        
    Returns:
        Number of papers successfully ingested
    """
    print(f"Starting PubMed ingestion for MeSH term: {mesh_term}")
    
    # Step 1: Search PubMed
    paper_ids = search_pubmed(mesh_term, max_results=max_results)
    
    if not paper_ids:
        print("No papers found to process")
        return 0
    
    # Step 2: Fetch paper details
    papers = fetch_paper_details(paper_ids)
    
    if not papers:
        print("No paper details retrieved")
        return 0
    
    # Step 3: Filter recent papers and analyze
    ingested_count = 0
    
    for paper in papers:
        # Filter by publication date
        if not is_recent_paper(paper.get('pub_date')):
            print(f"Skipping paper {paper.get('pmid')} - older than 48 hours")
            continue
        
        print(f"Analyzing paper: {paper.get('title', 'N/A')[:50]}...")
        
        try:
            # Analyze with LLM
            analysis = analyze_paper_with_llm(paper)
            
            # Push to Airtable
            push_to_airtable(analysis, paper.get('pmid', ''))
            
            ingested_count += 1
            
            # Rate limiting - be nice to APIs
            time.sleep(1)
            
        except Exception as e:
            print(f"Failed to process paper {paper.get('pmid')}: {str(e)}")
            continue
    
    print(f"Ingestion complete. Successfully processed {ingested_count} papers.")
    return ingested_count


if __name__ == "__main__":
    # Example usage
    mesh_term = os.environ.get("PUBMED_MESH_TERM", "Diabetes Mellitus")
    max_results = int(os.environ.get("MAX_RESULTS", "10"))
    
    try:
        count = ingest_pubmed_papers(mesh_term, max_results)
        print(f"Pipeline finished. Ingested {count} papers.")
    except Exception as e:
        print(f"Pipeline failed: {str(e)}")
        sys.exit(1)
