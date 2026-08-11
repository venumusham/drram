import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/ui/PageHeader';

const updatedAt = '22 May 2026';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | Dr Ramprabhu Clinic"
        description="Privacy Policy for Dr Ramprabhu Clinic, Kondapur Hyderabad. Learn how consultation enquiries, contact details, website analytics, and patient communication are handled."
        keywords={['dr ramprabhu privacy policy', 'plastic surgery clinic privacy hyderabad']}
        url="https://drramprabhu.com/privacy-policy"
      />
      <PageHeader
        title="Privacy Policy"
        description="How Dr Ramprabhu Clinic handles website enquiries and patient communication."
      />
      <main className="bg-white">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <p className="mb-8 text-sm text-gray-500">Last updated: {updatedAt}</p>

          <div className="prose prose-gray max-w-none">
            <p>
              Dr Ramprabhu Clinic respects your privacy. This policy explains what information may be collected when you
              use this website, send an enquiry, call, or contact us through WhatsApp.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We may collect your name, phone number, email address, message details, preferred appointment timing, and
              any information you choose to share while requesting a consultation. Website analytics may collect basic
              technical information such as device type, browser, pages visited, and approximate location.
            </p>

            <h2>How We Use Information</h2>
            <p>
              Information is used to respond to enquiries, schedule consultations, share clinic directions, improve the
              website, and provide relevant patient support. Medical advice, diagnosis, and treatment planning are given
              only after a proper consultation with Dr. M. Ram Prabhu.
            </p>

            <h2>WhatsApp, Phone, and Email</h2>
            <p>
              If you contact us by phone, WhatsApp, or email, your communication may be used by the clinic team to
              coordinate appointments and follow-up information. Please avoid sharing sensitive photographs or medical
              records unless requested through an appropriate consultation process.
            </p>

            <h2>Sharing of Information</h2>
            <p>
              We do not sell personal information. Information may be shared only with clinic staff, service providers
              who help operate the website or communication systems, or when required by law.
            </p>

            <h2>Data Security</h2>
            <p>
              We take reasonable steps to protect enquiry data, but no internet-based system is completely risk-free.
              Patients should use direct clinic contact for urgent or sensitive medical concerns.
            </p>

            <h2>Your Choices</h2>
            <p>
              You may request correction or deletion of your enquiry details by contacting the clinic. Some information
              may need to be retained where required for appointment, legal, or clinical record purposes.
            </p>

            <h2>Contact</h2>
            <p>
              For privacy questions, contact Dr Ramprabhu Clinic at{' '}
              <a href="tel:07969084439">9949808628</a> or visit the{' '}
              <Link to="/contact">contact page</Link>.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
