import React from 'react';
import FloatingSocialBar from '../components/FloatingSocialBar';
import FAQAccordion from '../components/FAQAccordion';
import CollapsibleComparisonTable from '../components/CollapsibleComparisonTable';
import ProceduresAccordion from '../components/ProceduresAccordion';

const GynecomastiaLanding: React.FC = () => (
  <div className="relative min-h-screen bg-gradient-to-br from-primary-50 to-white">
    <FloatingSocialBar />

    {/* Hero Section */}
    <section className="pt-8 pb-6 px-2 bg-primary-900 text-white">
      <div className="max-w-lg mx-auto flex flex-col items-center">
        <div className="h-6"></div>
        <h1 className="text-2xl font-bold mb-3 text-center">
          Restore Your Confidence with Gynecomastia Surgery in Hyderabad
        </h1>
        <div className="flex flex-wrap justify-center gap-2 mb-3">
          <span className="bg-primary-700 px-3 py-1 rounded-full text-xs font-semibold">Affordable Male Chest Reduction</span>
          <span className="bg-primary-700 px-3 py-1 rounded-full text-xs font-semibold">Laser + Liposuction Specialist</span>
          <span className="bg-primary-700 px-3 py-1 rounded-full text-xs font-semibold">Scarless Finish</span>
          <span className="bg-primary-700 px-3 py-1 rounded-full text-xs font-semibold">1–2 Days Recovery</span>
          <span className="bg-primary-700 px-3 py-1 rounded-full text-xs font-semibold">0% EMI</span>
        </div>
        <div className="text-lg font-bold text-yellow-300 mb-2">Surgery from ₹50,000 Onwards</div>
        {/* Action Cards - now inside hero */}
        <div className="w-full flex gap-2 mb-2 overflow-x-auto pb-1">
          <a href="tel:+919949808628" className="min-w-[80px] bg-gradient-to-br from-green-200 via-green-100 to-green-300 rounded-lg shadow p-1 flex flex-col justify-between relative focus:outline-none focus:ring-2 focus:ring-primary-700 min-h-[40px]">
            <span className="text-primary-900 font-bold text-[11px] mb-0.5">Book Free Appointment</span>
            <span className="absolute bottom-0.5 right-0.5 bg-primary-700 text-white w-4 h-4 flex items-center justify-center rounded-full">
              <span className="text-xs">→</span>
            </span>
          </a>
          <a href="#details" className="min-w-[80px] bg-gradient-to-br from-yellow-200 via-yellow-100 to-yellow-300 rounded-lg shadow p-1 flex flex-col justify-between relative focus:outline-none focus:ring-2 focus:ring-primary-700 min-h-[40px]">
            <span className="text-primary-900 font-bold text-[11px] mb-0.5">Cost Estimation</span>
            <span className="absolute bottom-0.5 right-0.5 bg-primary-700 text-white w-4 h-4 flex items-center justify-center rounded-full">
              <span className="text-xs">→</span>
            </span>
          </a>
          <a href="#faq" className="min-w-[80px] bg-gradient-to-br from-pink-200 via-pink-100 to-pink-300 rounded-lg shadow p-1 flex flex-col justify-between relative focus:outline-none focus:ring-2 focus:ring-primary-700 min-h-[40px]">
            <span className="text-primary-900 font-bold text-[11px] mb-0.5">FAQs</span>
            <span className="absolute bottom-0.5 right-0.5 bg-primary-700 text-white w-4 h-4 flex items-center justify-center rounded-full">
              <span className="text-xs">→</span>
            </span>
          </a>
          <div className="min-w-[80px] bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300 rounded-lg shadow p-1 flex flex-col justify-between relative min-h-[40px]">
            <span className="text-primary-900 font-bold text-[11px] mb-0.5">Insurance Coverage</span>
            <span className="text-[8px] text-primary-800 mb-0.5">Covers select procedures.</span>
            <span className="absolute bottom-0.5 right-0.5 bg-primary-700 text-white w-4 h-4 flex items-center justify-center rounded-full">
              <span className="text-xs">→</span>
            </span>
          </div>
        </div>
        <p className="text-primary-100 text-xs mt-2 text-center">
          Book your free consultation today and restore your confidence with a safe, minimally invasive procedure.
        </p>
      </div>
    </section>

    {/* Video Section */}
    <section className="py-6 px-2 bg-white">
      <div className="max-w-lg mx-auto">
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/B1ynwibvObs?autoplay=1&mute=1&playsinline=1"
            title="Gynecomastia Surgery Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-48 md:h-64 rounded-lg border-0"
          ></iframe>
        </div>
      </div>
    </section>

    {/* Doctor Section */}
    <section className="py-10 px-4 bg-primary-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-primary-900 mb-4">Meet Your Surgeon</h2>
        <div className="bg-white rounded-lg shadow p-6 inline-block">
          <h3 className="text-xl font-bold text-primary-800 mb-2">Dr. M. Ram Prabhu</h3>
          <p className="text-gray-700 mb-2">MBBS (Dr. NTR University of Health Sciences, 2009), DNB Plastic Surgery (National Board of Examinations, 2019)</p>
          <p className="text-gray-700 mb-2">15+ years of excellence in Aesthetics & Plastic Surgery. Specialized in Gynecomastia, Aesthetics, and Liposuction. License No. 66931. Compassionate, holistic care for every patient.</p>
          <a 
            href="https://www.linkedin.com/in/ramprabhu-musham-78b2ba20/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors mt-2"
          >
            Read Full Biography
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    {/* Procedures Section */}
    <section className="py-10 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">Gynecomastia Procedures</h2>
        <ProceduresAccordion />
      </div>
    </section>

    {/* Before & After Section */}
    <section className="py-10 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-primary-800 text-center">Before & After</h2>
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <img 
              src="/images/breast/Gynecomastia-before-after.jpeg" 
              alt="Gynecomastia Before and After Results" 
              className="rounded-lg shadow-lg w-full max-w-lg" 
            />
            <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded">Before</div>
            <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded">After</div>
          </div>
          <button className="bg-primary-700 text-white px-6 py-2 rounded shadow hover:bg-primary-800 transition">View More Results</button>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-10 px-4 bg-primary-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-primary-900 mb-6 text-center">Frequently Asked Questions</h2>
        <FAQAccordion />
      </div>
    </section>

    {/* Booking Form Section */}
    <section className="py-10 px-4 bg-white">
      <div className="max-w-lg mx-auto bg-primary-50 rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-primary-900 mb-4 text-center">Book Your Consultation</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="px-4 py-2 rounded border border-gray-300 focus:outline-none" required />
          <input type="tel" placeholder="Phone Number" className="px-4 py-2 rounded border border-gray-300 focus:outline-none" required />
          <textarea placeholder="Message (optional)" className="px-4 py-2 rounded border border-gray-300 focus:outline-none" rows={3}></textarea>
          <button type="submit" className="bg-primary-700 text-white font-semibold px-6 py-3 rounded shadow hover:bg-primary-800 transition">Book Now</button>
        </form>
      </div>
    </section>

    {/* Location & Contact */}
    <section className="py-10 px-4 bg-primary-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-primary-900 mb-4">Our Hospital Location</h2>
        <p className="mb-2">Plot no: 116, Lumbini Enclave Hitech city main road, Landmark: near IKEA, Gachibowli, Hyderabad, Telangana 500081</p>
        <a href="https://maps.app.goo.gl/u5BUxZYY3yBXnwWh7" className="text-primary-700 underline">Get Directions</a>
        <div className="mt-4">
          <a href="tel:+919949808628" className="bg-primary-700 text-white px-6 py-2 rounded shadow hover:bg-primary-800 transition">Call Now</a>
        </div>
      </div>
    </section>
  </div>
);

export default GynecomastiaLanding; 