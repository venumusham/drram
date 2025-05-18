import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import ClinicLocation from '../components/sections/ClinicLocation';
import AppointmentForm from '../components/sections/AppointmentForm';

const ContactPage: React.FC = () => {
  return (
    <div className="ContactPage">
      <PageHeader
        title="Contact Us"
        description="Get in touch with us for consultations and appointments"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ClinicLocation />
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;