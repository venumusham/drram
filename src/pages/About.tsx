import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import AboutDoctorSection from '../components/sections/AboutDoctorSection';
import ClinicInformation from '../components/sections/ClinicInformation';
import CTASection from '../components/sections/CTASection';

const AboutPage: React.FC = () => {
  return (
    <div className="AboutPage">
      <PageHeader 
        title="About Dr. M. Ram Prabhu" 
        description="Meet our lead plastic surgeon with over 20 years of experience in aesthetic and reconstructive surgery."
      />
      <div className="container mx-auto px-4 py-12">
        <AboutDoctorSection />
        <ClinicInformation />
        <CTASection />
      </div>
    </div>
  );
};

export default AboutPage;