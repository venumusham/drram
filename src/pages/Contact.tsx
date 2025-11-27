import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import ClinicLocation from '../components/sections/ClinicLocation';
import AppointmentForm from '../components/sections/AppointmentForm';
import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Dr. Ram Prabhu Clinic | Book a Plastic Surgery Consultation in Hyderabad"
        description="Call +91 99498 08628 or submit the appointment form to reach Dr. Ram Prabhu’s plastic surgery clinic in Kondapur, Hyderabad. Get directions, clinic hours, and consultation support."
        keywords={[
          'contact dr ram prabhu',
          'plastic surgery appointment hyderabad',
          'book consultation kondapur',
          'plastic surgeon phone number',
          'idea clinic directions'
        ]}
        image="/images/banner.png"
        url="https://drramprabhu.com/contact"
      />
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
    </>
  );
};

export default ContactPage;