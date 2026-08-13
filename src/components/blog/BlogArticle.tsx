import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import { PHONE_INTL, WHATSAPP_INTL } from '../FloatingSocialBar';
import WhatsappLink from '../ui/WhatsappLink';

const SITE = 'https://drramprabhu.com';

export interface BlogArticleLayoutProps {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  /** Absolute URL for og:image and primary schema image */
  ogImage: string;
  /** BlogPosting `image` — one URL or several */
  schemaImages: string | string[];
  publishedAt: string;
  readMin: number;
  /** Last segment of breadcrumb (short label) */
  breadcrumbLabel: string;
  /** Shown under H1, e.g. "12 May 2026" */
  publishedLabel: string;
  /** Optional ISO date for schema `dateModified` */
  dateModified?: string;
  /** Optional media between hero header and prose (figures, etc.) */
  lead?: React.ReactNode;
  children: React.ReactNode;
}

export const BlogArticleLayout: React.FC<BlogArticleLayoutProps> = ({
  slug,
  title,
  metaDescription,
  keywords,
  ogImage,
  schemaImages,
  publishedAt,
  readMin,
  breadcrumbLabel,
  publishedLabel,
  dateModified,
  lead,
  children,
}) => {
  const url = `${SITE}/blog/${slug}`;
  const images = Array.isArray(schemaImages) ? schemaImages : [schemaImages];
  const modified = dateModified ?? publishedAt;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#blogposting`,
    headline: title,
    description: metaDescription,
    image: images.length === 1 ? images[0] : images,
    datePublished: publishedAt,
    dateModified: modified,
    author: {
      '@type': 'Person',
      name: 'Dr. M. Ram Prabhu',
      url: `${SITE}/about`,
    },
    publisher: { '@id': `${SITE}/#clinic` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: breadcrumbLabel, item: url },
    ],
  };

  return (
    <>
      <SEO
        title={title}
        description={metaDescription}
        keywords={keywords}
        image={ogImage}
        url={url}
        type="article"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="min-h-screen bg-white">
        <header className="pt-24 pb-10 px-4 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
          <div className="max-w-3xl mx-auto">
            <nav className="text-xs text-primary-200 mb-3" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">›</span>
              <Link to="/blog" className="hover:text-white">
                Blog
              </Link>
              <span className="mx-2">›</span>
              <span className="text-white">{breadcrumbLabel}</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3">{title}</h1>
            <p className="text-primary-100 text-sm">
              By Dr. M. Ram Prabhu · {publishedLabel} · {readMin} min read
            </p>
          </div>
        </header>

        {lead ? <div className="bg-white pb-2">{lead}</div> : null}

        <div className="max-w-3xl mx-auto py-10 pl-4 pr-20 md:px-4">
          {children}
        </div>
      </article>
    </>
  );
}

/** Rounded hero image block (pulls slightly under header) */
export const BlogHeroFigure: React.FC<{
  src: string;
  alt: string;
  caption: string;
  fetchPriority?: 'high' | 'low';
}> = ({ src, alt, caption, fetchPriority = 'low' }) => (
  <div className="max-w-3xl mx-auto -mt-6 relative z-10 pl-4 pr-20 md:px-4">
    <figure className="not-prose">
      <div className="rounded-xl overflow-hidden shadow-xl ring-1 ring-gray-200/90 bg-gray-100">
        <img
          src={src}
          alt={alt}
          className="w-full aspect-[16/9] sm:aspect-[21/9] object-cover object-center"
          decoding="async"
          fetchPriority={fetchPriority}
        />
      </div>
      <figcaption className="text-center text-sm text-gray-500 mt-2 px-2">{caption}</figcaption>
    </figure>
  </div>
);

export interface BlogPillarCtaProps {
  title: string;
  body: string;
  pillarHref: string;
  pillarButtonLabel: string;
  whatsappMessage: string;
}

export const BlogPillarCta: React.FC<BlogPillarCtaProps> = ({
  title,
  body,
  pillarHref,
  pillarButtonLabel,
  whatsappMessage,
}) => {
  const waUrl = `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(whatsappMessage)}`;
  return (
    <div className="not-prose bg-primary-50 border-l-4 border-primary-700 p-5 my-8 rounded">
      <h3 className="font-bold text-primary-900 text-lg mb-2">{title}</h3>
      <p className="text-gray-700 mb-3">{body}</p>
      <div className="flex flex-wrap gap-3">
        <a
          href={`tel:${PHONE_INTL}`}
          className="bg-primary-700 text-white font-semibold px-5 py-2 rounded shadow hover:bg-primary-800 transition"
        >
          Call 07969084439
        </a>
        <WhatsappLink
          href={waUrl}
          formType="Blog Article WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white font-semibold px-5 py-2 rounded shadow hover:bg-green-600 transition"
        >
          WhatsApp
        </WhatsappLink>
        <Link
          to={pillarHref}
          className="bg-yellow-400 text-primary-900 font-semibold px-5 py-2 rounded shadow hover:bg-yellow-300 transition"
        >
          {pillarButtonLabel}
        </Link>
      </div>
    </div>
  );
};

export const BlogAuthorBio: React.FC = () => (
  <div className="not-prose mt-12 p-5 bg-gray-50 border border-gray-200 rounded">
    <h3 className="font-bold text-primary-900 mb-2">About the Author</h3>
    <p className="text-sm text-gray-700">
      <strong>Dr. M. Ram Prabhu</strong> is a plastic surgeon with 16+ years of experience and 6,000+ procedures performed.
      He holds DNB (Super Speciality) Plastic Surgery from the National Board of Examinations, New Delhi (2019). Member of
      IAAPS and APSI. TSMC Registration #66931. Practices at Idea Clinic, Kondapur, Hyderabad.{' '}
      <Link to="/about" className="text-primary-700 underline">
        Read full bio →
      </Link>
    </p>
  </div>
);
