import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import ServicesList from '../components/sections/ServicesList';
import ServiceProcess from '../components/sections/ServiceProcess';
import FAQShort from '../components/sections/FAQShort';
import CTASection from '../components/sections/CTASection';

const ServicesPage: React.FC = () => {
  return (
    <div className="ServicesPage">
      <PageHeader 
        title="Our Services" 
        description="Comprehensive plastic surgery procedures customized for your aesthetic goals"
      />
      <div className="container mx-auto px-4 py-12">
        <ServicesList />
        <ServiceProcess />
        <FAQShort />
        <CTASection />
      </div>
    </div>
  );
};

export default ServicesPage;