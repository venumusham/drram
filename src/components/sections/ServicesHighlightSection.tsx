import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import OptimizedImage from '../ui/OptimizedImage';

const services = [
  {
    tab: 'Face',
    img: '/images/services/service-face-plastic.webp',
    title: 'Facial Aesthetics',
    desc: 'Refined facial procedures planned around proportion, natural expression, and long-term harmony.',
    procedures: ['Facelift Surgery', 'Rhinoplasty', 'Blepharoplasty', 'Otoplasty', 'Chin Surgery', 'Facial Fat Grafting'],
    link: '/services/facelift',
    accent: '#1a3a5c',
    imageAlt: 'Facial aesthetics plastic surgery services including facelift rhinoplasty blepharoplasty and otoplasty',
  },
  {
    tab: 'Body',
    img: '/images/services/service-body-plastic.webp',
    title: 'Body Contouring',
    desc: 'Advanced contouring for chest, abdomen, arms, and body shape with a focus on definition and recovery.',
    procedures: ['Liposuction (VASER)', 'Tummy Tuck', 'Body Contouring', 'Gynecomastia', 'Lipoma Removal', 'Arm Lift'],
    link: '/services/body-contouring',
    accent: '#1a5c3a',
    imageAlt: 'Body contouring plastic surgery services including VASER liposuction tummy tuck gynecomastia and arm lift',
  },
  {
    tab: 'Breast',
    img: '/images/services/service-breast-plastic.webp',
    title: 'Breast Procedures',
    desc: 'Personalised breast surgery with balanced proportions, careful planning, and natural-looking outcomes.',
    procedures: ['Breast Augmentation', 'Breast Reduction', 'Breast Lift', 'Implant Revision', 'Gynecomastia', 'Fat Grafting'],
    link: '/services/breast-procedures',
    accent: '#5c1a3a',
    imageAlt: 'Breast plastic surgery services including augmentation reduction lift gynecomastia and fat grafting',
  },
  {
    tab: 'Reconstructive',
    img: '/images/services/service-reconstructive-plastic.webp',
    title: 'Reconstructive Care',
    desc: 'Restoring form and function after injury, illness, scars, wounds, and congenital conditions.',
    procedures: ['Scar Revision', 'Diabetic Foot Care', 'Skin Grafting', 'Earlobe Repair', 'Wound Management', 'Circumcision'],
    link: '/services/reconstructive',
    accent: '#5c3a1a',
    imageAlt: 'Reconstructive plastic surgery services including scar revision diabetic foot care skin grafting earlobe repair and circumcision',
  },
];

const ServicesHighlightSection: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const selected = services[activeService];

  return (
    <section className="bg-[#f8f6f1] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
              Our Services
            </p>
            <h2 className="font-serif text-[clamp(1.9rem,4vw,2.8rem)] font-normal leading-tight text-neutral-950">
              Comprehensive Plastic Surgery Solutions
            </h2>
          </div>
          <p className="max-w-2xl text-[15px] leading-7 text-neutral-600 lg:justify-self-end">
            Explore common aesthetic and reconstructive procedures by treatment area. Each plan begins with an examination, discussion of realistic outcomes, and a recovery pathway tailored to your goals.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
            {services.map((service, index) => (
              <button
                key={service.tab}
                onClick={() => setActiveService(index)}
                className={`group overflow-hidden rounded-xl border bg-white text-left transition ${
                  activeService === index
                    ? 'border-accent-500 shadow-soft'
                    : 'border-[#eadfce] hover:border-accent-300'
                }`}
              >
                <div className="flex items-center gap-3 p-3">
                  <OptimizedImage
                    src={service.img}
                    alt={service.imageAlt}
                    className="h-14 w-16 flex-shrink-0 rounded-lg object-cover"
                    sizes="64px"
                  />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-neutral-950">{service.tab}</div>
                    <div className="truncate text-xs text-neutral-500">{service.title}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#eadfce] bg-white shadow-soft">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[260px] overflow-hidden lg:min-h-[520px]">
                <OptimizedImage
                  src={selected.img}
                  alt={selected.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                  sizes="(min-width: 1024px) 520px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white"
                    style={{ background: selected.accent }}
                  >
                    {selected.tab}
                  </span>
                  <h3 className="mt-3 font-serif text-3xl font-normal leading-tight text-white md:text-4xl">
                    {selected.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-10">
                <p className="mb-7 text-[15px] leading-8 text-neutral-600">{selected.desc}</p>
                <div className="mb-8 grid gap-3 sm:grid-cols-2">
                  {selected.procedures.map((procedure) => (
                    <div key={procedure} className="flex items-start gap-3 rounded-lg bg-[#fbf8f1] p-3 text-sm text-neutral-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-600" />
                      <span>{procedure}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to={selected.link}
                    className="inline-flex items-center gap-2 rounded-lg bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/book-appointment"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#d9c9ad] bg-white px-6 py-3 text-sm font-medium text-neutral-800 transition hover:border-accent-400"
                  >
                    Ask About This
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlightSection;
