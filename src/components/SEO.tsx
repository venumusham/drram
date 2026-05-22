import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

const siteName = 'Dr. Ram Prabhu Plastic Surgery Clinic';

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  image = '/images/logo.png',
  url = 'https://drramprabhu.com',
  type = 'website'
}) => {
  const defaultKeywords = [
    // Location-based keywords
    'plastic surgeon hyderabad',
    'cosmetic surgery hyderabad',
    'best plastic surgeon telangana',
    'top-rated plastic surgeon in telangana',
    'trusted cosmetic surgeons in south india',
    'best cosmetic clinics near me hyderabad',
    'cosmetic procedures in banjara hills hyderabad',
    'hyderabad city hair transplant services',
    'man boobs surgery hyderabad kondapur gachibowli',

    // Procedure-specific keywords
    'affordable cosmetic surgery in hyderabad',
    'affordable plastic surgery options india',
    'benefits of rhinoplasty for breathing issues',
    'facial reconstruction hyderabad',
    'rhinoplasty in hyderabad',
    'skin rejuvenation services hyderabad',
    'summer body transformation surgeries hyderabad',
    'tummy tuck surgery india',
    'top rated surgeons for breast augmentation telangana',

    // Non-surgical keywords
    'non-surgical cosmetic procedures telangana',
    'popular non-invasive treatments hyderabad',
    'latest cosmetic surgery trends india',
    'wedding season cosmetic treatments telangana',

    // General keywords
    'how to choose a plastic surgeon in hyderabad',
    'dr ram prabhu',
    'cosmetic surgery',
    'reconstructive surgery'
  ];

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])].join(', ');

  // NOTE: The site-wide MedicalBusiness + Physician + AggregateRating schema
  // lives in index.html (single source of truth). Per-page Schema here is
  // intentionally minimal to avoid conflicting signals (rating/hours/geo).
  // Add page-specific MedicalProcedure schema in individual pages instead.
  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description: description,
      url: url,
      image: image,
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://drramprabhu.com/#website',
        name: siteName,
        url: 'https://drramprabhu.com/'
      },
      about: { '@id': 'https://drramprabhu.com/#clinic' },
      primaryImageOfPage: image
    }),
    [description, image, title, url]
  );

  useEffect(() => {
    const upsertMeta = (selector: string, attrs: Record<string, string>) => {
      const tagName = selector.startsWith('link') ? 'link' : 'meta';
      let el = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;

      if (!el) {
        el = document.createElement(tagName) as HTMLMetaElement | HTMLLinkElement;
        Object.entries(attrs).forEach(([key, value]) => el?.setAttribute(key, value));
        document.head.appendChild(el);
        return;
      }

      Object.entries(attrs).forEach(([key, value]) => el?.setAttribute(key, value));
    };

    document.title = title;
    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: allKeywords });
    upsertMeta('link[rel="canonical"]', { rel: 'canonical', href: url });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: siteName });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });

    let schema = document.head.querySelector('script[data-route-webpage-schema="true"]') as HTMLScriptElement | null;
    if (!schema) {
      schema = document.createElement('script');
      schema.type = 'application/ld+json';
      schema.dataset.routeWebpageSchema = 'true';
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(structuredData);
  }, [allKeywords, description, image, structuredData, title, type, url]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO; 
