import React from 'react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="bg-[#0d0d14] px-4 py-20 text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
        Start your journey
      </p>
      <h2 className="mb-4 font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-normal leading-tight text-[#f5f0e8]">
        Ready for Your Transformation?
      </h2>
      <p className="mx-auto mb-9 max-w-xl text-[15px] leading-7 text-[#f5f0e8]/55">
        Book a free consultation with Dr. Ram Prabhu - discuss your goals and get a personalised treatment plan.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          to="/book-appointment"
          className="rounded-lg bg-accent-500 px-8 py-4 text-sm font-semibold text-black transition hover:bg-accent-400"
        >
          Book Consultation
        </Link>
        <a
          href="tel:07969084439"
          className="rounded-lg border border-white/15 bg-white/10 px-8 py-4 text-sm text-[#f5f0e8] transition hover:bg-white/15"
        >
          Call 07969084439
        </a>
        <a
          href="https://wa.me/917969084444?text=Hello%20Dr.%20Ram%20Prabhu%2C%20I%20would%20like%20to%20book%20a%20consultation.%20Please%20share%20available%20slots."
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-[#25D366] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#20bd5a]"
        >
          WhatsApp Us
        </a>
      </div>
    </section>
  );
};

export default CTASection;
