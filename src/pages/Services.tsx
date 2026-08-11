import React from 'react';
import ServicesList from '../components/sections/ServicesList';
import ServiceProcess from '../components/sections/ServiceProcess';
import FAQShort from '../components/sections/FAQShort';
import CTASection from '../components/sections/CTASection';
import AppointmentForm from '../components/sections/AppointmentForm';
import SEO from '../components/SEO';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Plastic Surgery Services Hyderabad | 16+ Procedures | Dr. Ram Prabhu"
        description="16+ plastic surgery services in Kondapur Hyderabad — gynecomastia, liposuction, rhinoplasty, breast surgery, facelift, tummy tuck, scar revision, microvascular reconstruction. By Dr. Ram Prabhu, DNB. Call 07969084439."
        keywords={[
          'plastic surgery services hyderabad',
          'cosmetic surgery treatments',
          'body contouring hyderabad',
          'facial plastic surgery india',
          'breast surgery specialist hyderabad'
        ]}
        image="/images/services/body.webp"
        url="https://drramprabhu.com/services"
      />
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
          <section className="py-12" aria-labelledby="slot-booking-title">
            <div className="mb-8 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">Check availability</p>
              <h2 id="slot-booking-title" className="text-3xl font-serif font-bold text-gray-900">
                Book a Slot via WhatsApp
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600">
                Select your procedure and preferred consultation time. WhatsApp opens with all details filled in, so the
                clinic can confirm quickly.
              </p>
            </div>
            <div className="mx-auto max-w-4xl">
              <AppointmentForm />
            </div>
          </section>
          <ServiceProcess />
          <FAQShort />
          <CTASection />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
