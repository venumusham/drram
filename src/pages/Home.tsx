import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/sections/HeroSection';
import AboutDoctorSection from '../components/sections/AboutDoctorSection';
import ServicesHighlightSection from '../components/sections/ServicesHighlightSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';
import YouTubeSection from '../components/sections/YouTubeSection';
import TrustCredentialsSection from '../components/sections/TrustCredentialsSection';

const HomePage: React.FC = () => {
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
        image="/banner.webp"
        url="https://drramprabhu.com"
      />
      <div className="HomePage">
        <HeroSection />
        <TrustCredentialsSection />
        <AboutDoctorSection />
        <YouTubeSection />
        <TestimonialsSection />
        <ServicesHighlightSection />
        <CTASection />
      </div>
    </>
  );
};

export default HomePage;
