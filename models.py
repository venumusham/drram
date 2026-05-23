"""
Pydantic models for medical/clinical content generation.
These models enforce strict schemas to prevent hallucinations (YMYL guardrails).
"""
from typing import List, Dict, Any, Optional
from pydantic import BaseModel, Field, field_validator


class PaperAnalysis(BaseModel):
    """
    Model for analyzing individual medical research papers.
    Ensures structured extraction of clinical data with validation.
    """
    title: str = Field(..., description="The full title of the research paper")
    doi: str = Field(..., description="Digital Object Identifier of the paper")
    abstract: str = Field(..., description="The complete abstract text")
    clinical_summary: str = Field(
        ..., 
        description="Concise clinical summary suitable for practitioners"
    )
    linkability_score: int = Field(
        ..., 
        ge=1, 
        le=5, 
        description="Score from 1-5 indicating how well this links to existing content"
    )

    @field_validator('linkability_score')
    @classmethod
    def validate_linkability_score(cls, v: int) -> int:
        if not 1 <= v <= 5:
            raise ValueError('linkability_score must be between 1 and 5')
        return v


class DailyBriefArticle(BaseModel):
    """
    Model for generating daily brief articles summarizing new research.
    """
    title: str = Field(..., description="Article title")
    slug: str = Field(
        ..., 
        description="URL-friendly slug for the article (lowercase, hyphens)"
    )
    intro: str = Field(..., description="Introduction paragraph for the brief")
    takeaways: List[str] = Field(
        ..., 
        min_length=1,
        description="List of key takeaways from analyzed papers"
    )
    conclusion: str = Field(..., description="Concluding remarks for the brief")

    @field_validator('slug')
    @classmethod
    def validate_slug(cls, v: str) -> str:
        if not v:
            raise ValueError('slug cannot be empty')
        if v != v.lower():
            raise ValueError('slug must be lowercase')
        if ' ' in v:
            raise ValueError('slug must use hyphens instead of spaces')
        return v


class WeeklySynthesisArticle(BaseModel):
    """
    Model for generating weekly synthesis articles comparing multiple studies.
    Includes YAML frontmatter for Netlify CMS compatibility.
    """
    title: str = Field(..., description="Article title")
    slug: str = Field(
        ..., 
        description="URL-friendly slug for the article"
    )
    yaml_frontmatter: Dict[str, Any] = Field(
        ..., 
        description="YAML frontmatter dictionary for Netlify (title, date, tags, etc.)"
    )
    executive_summary: str = Field(
        ..., 
        description="High-level executive summary of the week's research"
    )
    markdown_comparison_table: str = Field(
        ..., 
        description="Markdown-formatted table comparing studies"
    )
    clinical_implications: str = Field(
        ..., 
        description="Clinical implications section for practitioners"
    )

    @field_validator('slug')
    @classmethod
    def validate_slug(cls, v: str) -> str:
        if not v:
            raise ValueError('slug cannot be empty')
        if v != v.lower():
            raise ValueError('slug must be lowercase')
        if ' ' in v:
            raise ValueError('slug must use hyphens instead of spaces')
        return v

    @field_validator('yaml_frontmatter')
    @classmethod
    def validate_frontmatter(cls, v: Dict[str, Any]) -> Dict[str, Any]:
        required_keys = ['title', 'date']
        for key in required_keys:
            if key not in v:
                raise ValueError(f'yaml_frontmatter must contain "{key}"')
        return v
