import React from 'react';
import { Award, ClipboardCheck, ShieldCheck, Star } from 'lucide-react';

const credentialCards = [
  {
    icon: ShieldCheck,
    title: 'Board-certified specialist',
    text: 'DNB (Super Speciality) Plastic Surgery with Telangana State Medical Council registration.',
  },
  {
    icon: ClipboardCheck,
    title: 'Clear treatment pathway',
    text: 'Consultation, procedure planning, recovery guidance, and post-operative follow-up in one care flow.',
  },
  {
    icon: Star,
    title: 'Trusted patient proof',
    text: '5.0 Google rating with 140+ reviews across aesthetic and reconstructive procedures.',
  },
];

const TrustCredentialsSection: React.FC = () => {
  return (
    <section className="border-y border-[#eee7da] bg-[#fffaf1] py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent-700">
              <Award size={14} />
              Credentials first
            </div>
            <h2 className="font-serif text-[clamp(1.65rem,3vw,2.35rem)] font-normal leading-tight text-neutral-950">
              Qualified care, clear guidance, and trusted patient outcomes.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-600">
              From your first consultation to recovery, every treatment plan is explained with realistic expectations, safety-first planning, and attentive follow-up.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {credentialCards.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl border border-[#eadfce] bg-white p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                  <Icon size={20} />
                </div>
                <h3 className="mb-2 text-base font-semibold text-neutral-950">{title}</h3>
                <p className="m-0 text-sm leading-6 text-neutral-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustCredentialsSection;
