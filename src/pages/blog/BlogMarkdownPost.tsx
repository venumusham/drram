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
  const videoSchema = meta.youtubeVideoId
    ? {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: meta.youtubeTitle ?? meta.title,
        description: meta.excerpt,
        thumbnailUrl: [`https://img.youtube.com/vi/${meta.youtubeVideoId}/hqdefault.jpg`],
        uploadDate: meta.publishedAt,
        embedUrl: `https://www.youtube.com/embed/${meta.youtubeVideoId}`,
        contentUrl: `https://www.youtube.com/watch?v=${meta.youtubeVideoId}`,
        publisher: { '@id': `${SITE}/#clinic` },
      }
    : undefined;
  const gynecomastiaSeoSchemas =
    meta.slug === 'gynecomastia-surgery-hyderabad'
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            '@id': `${SITE}/blog/${meta.slug}#medicalwebpage`,
            url: `${SITE}/blog/${meta.slug}`,
            name: meta.title,
            description: meta.excerpt,
            about: {
              '@type': 'MedicalCondition',
              name: 'Gynecomastia',
              alternateName: 'Male breast enlargement',
            },
            reviewedBy: {
              '@type': 'Physician',
              name: 'Dr. M. Ram Prabhu',
              medicalSpecialty: 'Plastic Surgery',
              url: `${SITE}/about`,
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            '@id': `${SITE}/blog/${meta.slug}#faq`,
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Can gynecomastia go away on its own without surgery?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Mild adolescent gynecomastia may settle as hormones stabilise, but persistent firm gland tissue beyond the teenage years usually does not resolve without surgery.',
                },
              },
              {
                '@type': 'Question',
                name: 'Will exercise reduce gynecomastia?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Exercise can build pectoral muscle and improve chest shape, but it cannot remove breast gland tissue. Established gland tissue needs surgical treatment.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the recovery time after gynecomastia surgery in Hyderabad?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Most patients return to desk work within 2 to 3 days, avoid heavy lifting for 4 to 5 weeks, and see final contour improve over 3 to 6 months.',
                },
              },
              {
                '@type': 'Question',
                name: 'Will there be visible scars after gynecomastia surgery?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Incisions are usually placed along the natural edge of the areola, where they heal with minimal visibility. Skin excision scars are discussed during consultation if needed.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the cost of gynecomastia surgery in Hyderabad?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Cost depends on grade, fat and gland volume, skin excess, anaesthesia and hospital setup. A precise estimate is given after examination.',
                },
              },
            ],
          },
        ]
      : [];

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
      {videoSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      )}
      {gynecomastiaSeoSchemas.map((schema) => (
        <script
          key={schema['@id']}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {meta.youtubeVideoId && (
        <div className="mb-10 overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-sm">
          <div className="relative pb-[56.25%]">
            <iframe
              className="absolute inset-0 h-full w-full border-0"
              src={`https://www.youtube.com/embed/${meta.youtubeVideoId}?rel=0&modestbranding=1`}
              title={meta.youtubeTitle ?? meta.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}

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
