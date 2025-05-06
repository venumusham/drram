import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import FAQList from '../components/sections/FAQList';
import CTASection from '../components/sections/CTASection';

const FAQPage: React.FC = () => {
  return (
    <div className="FAQPage">
      <PageHeader 
        title="Frequently Asked Questions" 
        description="Find answers to common questions about our procedures and care"
      />
      <div className="container mx-auto px-4 py-12">
        <FAQList />
        <CTASection />
      </div>
    </div>
  );
};

export default FAQPage;