import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { BLOG_POSTS } from '../../data/blog-posts';
import { getBlogMarkdown } from '../../content/blog/markdownBySlug';
import BlogMarkdownBody from '../../components/blog/BlogMarkdownBody';
import { BlogArticleLayout, BlogAuthorBio, BlogHeroFigure, BlogPillarCta } from '../../components/blog/BlogArticle';
import NotFoundPage from '../NotFound';

const SITE = 'https://drramprabhu.com';

const BlogMarkdownPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const meta = useMemo(() => BLOG_POSTS.find((p) => p.slug === slug), [slug]);
  const body = useMemo(() => (slug ? getBlogMarkdown(slug) : undefined), [slug]);

  if (!slug || !meta || !body) {
    return <NotFoundPage />;
  }

  const absImage = meta.image.startsWith('http') ? meta.image : `${SITE}${meta.image}`;
  const publishedLabel = new Date(meta.publishedAt).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const crumb = meta.breadcrumbLabel ?? (meta.title.length > 42 ? `${meta.title.slice(0, 40)}…` : meta.title);
  const wa =
    meta.whatsappPrefill ??
    `Hello Dr. Ram Prabhu, I read your article "${meta.title}" on your website and would like to book a consultation.`;

  return (
    <BlogArticleLayout
      slug={meta.slug}
      title={meta.title}
      metaDescription={meta.excerpt}
      keywords={meta.keywords ?? ['plastic surgery hyderabad', 'dr ram prabhu blog']}
      ogImage={absImage}
      schemaImages={absImage}
      publishedAt={meta.publishedAt}
      dateModified={meta.dateModified}
      readMin={meta.readMin}
      breadcrumbLabel={crumb}
      publishedLabel={publishedLabel}
      lead={
        <BlogHeroFigure
          src={meta.image}
          alt={meta.imageAlt ?? meta.title}
          caption={meta.heroCaption ?? meta.excerpt}
          fetchPriority="high"
        />
      }
    >
      <BlogMarkdownBody content={body} />

      <BlogPillarCta
        title={meta.pillarCtaTitle ?? 'Talk to Dr. Ram Prabhu in Hyderabad'}
        body={
          meta.pillarCtaBody ??
          `If you would like personalised advice, book a consultation at Idea Clinic, Kondapur.`
        }
        pillarHref={meta.pillarPage}
        pillarButtonLabel={meta.pillarButtonLabel ?? 'View procedure hub'}
        whatsappMessage={wa}
      />

      <BlogAuthorBio />
    </BlogArticleLayout>
  );
};

export default BlogMarkdownPost;
