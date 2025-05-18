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