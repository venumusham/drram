import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/ui/PageHeader';

const updatedAt = '22 May 2026';

const TermsOfService: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms of Service | Dr Ramprabhu Clinic"
        description="Terms of Service for using the Dr Ramprabhu Clinic website. Website information is educational and does not replace an in-person medical consultation."
        keywords={['dr ramprabhu terms', 'plastic surgery clinic terms hyderabad']}
        url="https://drramprabhu.com/terms-of-service"
      />
      <PageHeader
        title="Terms of Service"
        description="Important terms for using this website and contacting the clinic."
      />
      <main className="bg-white">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <p className="mb-8 text-sm text-gray-500">Last updated: {updatedAt}</p>

          <div className="prose prose-gray max-w-none">
            <h2>Educational Information</h2>
            <p>
              The information on this website is provided for general patient education. It should not be treated as a
              diagnosis, prescription, emergency instruction, or a substitute for consultation with a qualified doctor.
            </p>

            <h2>Consultation Required</h2>
            <p>
              Plastic, cosmetic, and reconstructive procedures require individual assessment. Suitability, risks,
              recovery, costs, and expected outcomes vary from patient to patient and are discussed during consultation.
            </p>

            <h2>Medical Emergencies</h2>
            <p>
              This website is not intended for emergency care. For urgent symptoms, trauma, severe pain, bleeding, or
              infection, contact emergency medical services or visit the nearest hospital.
            </p>

            <h2>Results and Expectations</h2>
            <p>
              Before-and-after information, videos, blogs, and educational content are illustrative. Individual outcomes
              depend on anatomy, health status, healing, compliance with aftercare, and procedure complexity.
            </p>

            <h2>Appointments and Communication</h2>
            <p>
              Appointment requests submitted through the website, phone, or WhatsApp are subject to confirmation by the
              clinic. Online communication may be used for coordination but does not establish treatment until a formal
              consultation occurs.
            </p>

            <h2>Website Content</h2>
            <p>
              Website text, images, videos, and design elements may not be copied or reused without permission. External
              platform links, including YouTube and Google Maps, are governed by their own terms.
            </p>

            <h2>Contact</h2>
            <p>
              For questions about these terms, contact Dr Ramprabhu Clinic at{' '}
              <a href="tel:+919949808628">9949808628</a> or use the{' '}
              <Link to="/contact">contact page</Link>.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default TermsOfService;
