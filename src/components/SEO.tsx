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

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Idea Clinic - Dr. Ram Prabhu Plastic Surgery',
    image: image,
    url: url,
    description: description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '61B, 3rd Street, Near Burfighar Sweetshop, Sri Ram Nagar',
      addressLocality: 'Kondapur',
      addressRegion: 'Hyderabad',
      postalCode: '500084',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '17.4847',
      longitude: '78.3494'
    },
    telephone: '+91-XXXXXXXXXX',
    priceRange: '₹₹₹',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '09:00',
      closes: '17:00'
    },
    sameAs: [
      'https://www.facebook.com/drramprabhu',
      'https://www.instagram.com/drramprabhu',
      'https://www.linkedin.com/in/drramprabhu'
    ],
    medicalSpecialty: [
      'Plastic Surgery',
      'Cosmetic Surgery',
      'Reconstructive Surgery',
      'Rhinoplasty',
      'Breast Augmentation',
      'Tummy Tuck',
      'Facial Reconstruction',
      'Hair Transplant'
    ],
    areaServed: [
      'Kondapur',
      'Hyderabad',
      'Telangana',
      'South India'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Surgical Procedures',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Rhinoplasty',
            description: 'Nose reshaping surgery for aesthetic and functional improvement'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Breast Augmentation',
            description: 'Surgical procedure to enhance breast size and shape'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Tummy Tuck',
            description: 'Surgical procedure to remove excess fat and skin from the abdomen'
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

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