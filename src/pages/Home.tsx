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
import FloatingSocialBar from '../components/FloatingSocialBar';

const HomePage: React.FC = () => {
  // Structured data for business information
  const businessStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Dr. Ram Prabhu - Plastic Surgeon',
    telephone: '+919949808628',
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
        title="Dr. Ram Prabhu - Best Plastic Surgeon in Hyderabad | Cosmetic & Reconstructive Surgery"
        description="Expert plastic surgeon in Hyderabad offering cosmetic and reconstructive procedures. Specializing in rhinoplasty, breast augmentation, facelift, and body contouring. Book your consultation today."
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
      <FloatingSocialBar />
    </>
  );
};

export default HomePage;