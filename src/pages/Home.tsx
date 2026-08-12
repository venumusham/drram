import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/sections/HeroSection';
import AboutDoctorSection from '../components/sections/AboutDoctorSection';
import ServicesHighlightSection from '../components/sections/ServicesHighlightSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';
import YouTubeSection from '../components/sections/YouTubeSection';
import TrustCredentialsSection from '../components/sections/TrustCredentialsSection';

const HomeFactsSection: React.FC = () => (
  <section className="bg-white py-14">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
          Clinic facts for patients
        </p>
        <h2 className="font-serif text-2xl font-bold text-gray-950 md:text-3xl">
          Dr Ramprabhu Clinic, Plastic Surgery in Kondapur Hyderabad
        </h2>
        <div className="mt-5 grid gap-5 text-sm leading-7 text-gray-700 md:grid-cols-2">
          <p>
            Dr. M. Ram Prabhu is a DNB Super Speciality Plastic Surgeon in Hyderabad with
            16+ years of experience and 6,000+ procedures. His clinic in Kondapur treats
            aesthetic and reconstructive concerns including gynecomastia, liposuction,
            rhinoplasty, breast surgery, tummy tuck, circumcision, lipoma removal,
            sebaceous cyst excision, scar revision, keloid care, wound reconstruction,
            diabetic foot care, earlobe repair, skin grafting, and facial aesthetic surgery.
          </p>
          <p>
            The clinic is located at Lux Hospitals, Plot No.116 Lumbini Avenue, Gachibowli Near IKEA, 
            Hyderabad – 500081. Patients can call 07969084439 for appointment availability. Procedure planning includes
            examination, realistic outcome discussion, scar placement, recovery timeline,
            safety considerations, and follow-up instructions. His published clinical work
            includes a 2023 nasal reconstruction case report using a two-staged nasolabial flap.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Dr. M. Ram Prabhu | Plastic & Cosmetic Surgeon Hyderabad"
        description="Plastic surgeon in Kondapur Hyderabad — Dr. M. Ram Prabhu, DNB (Super Speciality). 16+ yrs, 6,000+ procedures, 140+ Google reviews. Gynecomastia, liposuction, rhinoplasty, breast surgery. Call 07969084439."
        keywords={[
          'best plastic surgeon hyderabad',
          'cosmetic surgery hyderabad',
          'reconstructive surgery hyderabad',
          'rhinoplasty hyderabad',
          'breast augmentation hyderabad',
          'facelift hyderabad',
          'body contouring hyderabad',
          'dr ram prabhu plastic surgeon'
        ]}
        image="/banner.webp"
        url="https://drramprabhu.com"
      />
      <div className="HomePage">
        <HeroSection />
        <TrustCredentialsSection />
        <AboutDoctorSection />
        <HomeFactsSection />
        <YouTubeSection />
        <TestimonialsSection />
        <ServicesHighlightSection />
        <CTASection />
      </div>
    </>
  );
};

export default HomePage;
