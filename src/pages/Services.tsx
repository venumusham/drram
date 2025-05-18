import React from 'react';
import ServicesList from '../components/sections/ServicesList';
import ServiceProcess from '../components/sections/ServiceProcess';
import FAQShort from '../components/sections/FAQShort';
import CTASection from '../components/sections/CTASection';

const ServicesPage: React.FC = () => {
  return (
    <div className="ServicesPage">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg text-primary-50 mb-8">
              Comprehensive plastic surgery solutions tailored to your unique needs. 
              Experience excellence in surgical care with Dr. Ram Prabhu.
            </p>
          </div>
        </div>
      </div>

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