import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/sections/HeroSection';
import AboutDoctorSection from '../components/sections/AboutDoctorSection';
import AffiliationsSection from '../components/sections/AffiliationsSection';
import ServicesHighlightSection from '../components/sections/ServicesHighlightSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';
import StatisticsSection from '../components/sections/StatisticsSection';
import YouTubeSection from '../components/sections/YouTubeSection';

const HomePage: React.FC = () => {
  // Structured data for business information
  const businessStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Dr. Ram Prabhu - Plastic Surgeon',
    telephone: '9949808628',
    url: 'https://drramprabhu.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN'
    },
    medicalSpecialty: 'Plastic Surgery'
  };

  return (
    <>
      <SEO
        title="Dr. M. Ram Prabhu | Plastic & Cosmetic Surgeon Hyderabad"
        description="Plastic surgeon in Kondapur Hyderabad — Dr. M. Ram Prabhu, DNB (Super Speciality). 16+ yrs, 6,000+ procedures, 140+ Google reviews. Gynecomastia, liposuction, rhinoplasty, breast surgery. Call 9949808628."
        keywords={[
          'best plastic surgeon hyderabad',
          'cosmetic surgery hyderabad',
          'reconstructive surgery hyderabad',
          'rhinoplasty hyderabad',
          'breast augmentation hyderabad',
          'facelift hyderabad',
          'body contouring hyderabad',
          'dr ram prabhu plastic surgeon'
        ]}
        image="/images/hero.jpg"
        url="https://drramprabhu.com"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessStructuredData) }}
      />
      <div className="HomePage">
        <HeroSection />
        <AboutDoctorSection />
        <AffiliationsSection />
        <ServicesHighlightSection />
        <StatisticsSection />
        <TestimonialsSection />
        <YouTubeSection />
        <CTASection />
      </div>
    </>
  );
};

export default HomePage;