import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import ContactForm from '../components/sections/ContactForm';
import ClinicLocation from '../components/sections/ClinicLocation';
import BusinessHours from '../components/sections/BusinessHours';

const ContactPage: React.FC = () => {
  return (
    <div className="ContactPage">
      <PageHeader 
        title="Contact Us" 
        description="Schedule a consultation or get in touch with our clinic"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <div>
            <ClinicLocation />
            <BusinessHours />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;