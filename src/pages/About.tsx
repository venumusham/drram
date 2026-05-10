import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import ServicesHighlightSection from '../components/sections/ServicesHighlightSection';
import AboutDoctorSection from '../components/sections/AboutDoctorSection';
import AffiliationsSection from '../components/sections/AffiliationsSection';
import ClinicInformation from '../components/sections/ClinicInformation';
import CTASection from '../components/sections/CTASection';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About Dr. M. Ram Prabhu | DNB Plastic Surgeon Kondapur Hyderabad"
        description="Learn about Dr. M. Ram Prabhu — DNB (Super Speciality) Plastic Surgery, 16+ years experience, 6,000+ procedures in aesthetic and reconstructive surgery. IAAPS & APSI member. Kondapur, Hyderabad."
        keywords={[
          'about dr ram prabhu',
          'plastic surgeon biography hyderabad',
          'board certified plastic surgeon telangana',
          'reconstructive surgeon profile',
          'cosmetic surgeon experience hyderabad'
        ]}
        image="/images/breast/breast-hero.jpg"
        url="https://drramprabhu.com/about"
      />
      <div className="AboutPage">
        <PageHeader 
          title="About Dr. M. Ram Prabhu" 
          description="Meet our lead plastic surgeon with 16+ years of experience in aesthetic and reconstructive surgery. DNB (Super Speciality) Plastic Surgery, NBE."
        />
        <div className="container mx-auto px-4 py-12">
          <ServicesHighlightSection />
          <AboutDoctorSection />
          <AffiliationsSection />
          <ClinicInformation />
          <CTASection />
        </div>
      </div>
    </>
  );
};

export default AboutPage;