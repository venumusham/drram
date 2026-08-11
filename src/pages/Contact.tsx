import React from "react";
import PageHeader from "../components/ui/PageHeader";
import ClinicLocation from "../components/sections/ClinicLocation";
import AppointmentForm from "../components/sections/AppointmentForm";
import SEO from "../components/SEO";

const ContactPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Book Appointment | Dr. Ram Prabhu Plastic Surgery Clinic Kondapur"
        description="Book a plastic surgery consultation with Dr. Ram Prabhu at Idea Clinic, Kondapur Hyderabad. Call or WhatsApp 07969084439. Mon-Sat 10AM-12PM & 7PM-8PM. Free parking. Get directions."
        keywords={[
          "contact dr ram prabhu",
          "plastic surgery appointment hyderabad",
          "book consultation kondapur",
          "plastic surgeon phone number",
          "idea clinic directions",
        ]}
        image="/banner.webp"
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
