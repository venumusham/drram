import React from 'react';
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
    <div className="HomePage">
      <HeroSection />
      <AboutDoctorSection />
      <StatisticsSection />
      <AffiliationsSection />
      <ServicesHighlightSection />
      <YouTubeSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;