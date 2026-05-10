import React from 'react';
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
  const structuredData = {
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
  };

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