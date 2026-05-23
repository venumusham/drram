import React from 'react';
import { Link } from 'react-router-dom';
import RamPrabhuImg from './ram.png';
import OptimizedImage from '../ui/OptimizedImage';

const tags = [
  'Gynecomastia Specialist',
  'VASER Liposuction',
  'Rhinoplasty',
  'Breast Surgery',
  'Reconstructive',
  'Diabetic Foot',
];

const affiliations = [
  { n: 'NMC', l: 'Compliant', logo: '/images/affiliations/nmc.webp' },
  { n: 'TSMC', l: 'Registered', logo: '/images/affiliations/tsmc.webp' },
  { n: 'IAAPS', l: 'Member', logo: '/images/affiliations/iaaps.png' },
  { n: 'APSI', l: 'Member', logo: '/images/affiliations/apsi.webp' },
];

const AboutDoctorSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
              About the Doctor
            </p>
            <h2 className="mb-5 font-serif text-[clamp(1.8rem,4vw,2.65rem)] font-normal leading-tight text-neutral-950">
              Meet Dr. M. Ram Prabhu
            </h2>
            <p className="mb-4 text-[15px] leading-8 text-neutral-600">
              Dr. M. Ram Prabhu is a board-certified Plastic &amp; Cosmetic Surgeon with 16+ years of experience, specialising in Gynecomastia, Liposuction, Rhinoplasty, and Aesthetic Surgery.
            </p>
            <p className="mb-7 text-[15px] leading-8 text-neutral-600">
              He earned his MBBS from Dr. NTR University of Health Sciences (2009), followed by DNB (Super Speciality) in Plastic Surgery from the National Board of Examinations, New Delhi (2019). He is registered with the Telangana State Medical Council (Licence No. 66931) and is a member of IAAPS and APSI.
            </p>
            <div className="mb-7 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#e8ddc8] bg-[#f5f0e8] px-3 py-1 text-xs text-[#8a6a2a]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-950 px-6 py-3 text-sm text-[#f5f0e8] transition hover:bg-neutral-800"
            >
              View Full Profile &amp; Credentials
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-[#ede8de] bg-white shadow-soft">
              <OptimizedImage
                src={RamPrabhuImg}
                alt="Dr. M. Ram Prabhu - Plastic & Cosmetic Surgeon, Kondapur Hyderabad"
                className="block aspect-[4/5] w-full object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="border-t border-[#ede8de] bg-[#fbf8f1] px-4 py-5">
                <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-700">
                  Professional affiliations
                </p>
                <div className="grid grid-cols-4 gap-3">
                {affiliations.map((item) => (
                  <div key={item.n} className="text-center">
                    <div className="mb-2 flex h-14 items-center justify-center rounded-lg border border-[#eadfce] bg-white px-2">
                      <OptimizedImage src={item.logo} alt={`${item.n} medical affiliation logo for Dr. M. Ram Prabhu`} className="max-h-9 max-w-full object-contain" sizes="80px" />
                    </div>
                    <div className="text-xs font-semibold text-neutral-900">{item.n}</div>
                    <div className="text-[10px] text-neutral-500">{item.l}</div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctorSection;
