import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import FAQList from '../components/sections/FAQList';
import CTASection from '../components/sections/CTASection';
import SEO from '../components/SEO';

const FAQPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Plastic Surgery FAQs | Dr. Ram Prabhu Clinic Hyderabad"
        description="Find answers to common questions about plastic surgery costs, recovery timelines, safety protocols, and financing options at Dr. Ram Prabhu’s Hyderabad clinic."
        keywords={[
          'plastic surgery faq hyderabad',
          'cosmetic surgery questions',
          'gynecomastia recovery info',
          'plastic surgery cost hyderabad',
          'dr ram prabhu patient info'
        ]}
        image="/images/reconstruction/before-after.jpg"
        url="https://drramprabhu.com/faq"
      />
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
    </>
  );
};

export default FAQPage;