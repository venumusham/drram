import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import WhatsappLink from './ui/WhatsappLink';

type LocalPageVariant = 'plastic' | 'cosmetic';

interface LocalPlasticSurgeryPageProps {
  area: string;
  titleArea: string;
  slug: string;
  variant?: LocalPageVariant;
  proximity: string;
  nearbyAreas: string[];
}

const phone = '07969084439';

const procedures = [
  ['Gynecomastia surgery', '/gynecomastia'],
  ['VASER liposuction and body contouring', '/liposuction-hyderabad'],
  ['Rhinoplasty and facial aesthetics', '/rhinoplasty-hyderabad'],
  ['Breast augmentation, reduction, and lift', '/services/breast-procedures'],
  ['Tummy tuck and abdominoplasty', '/tummy-tuck-hyderabad'],
  ['Stapler circumcision', '/stapler-circumcision-hyderabad'],
  ['Lipoma and sebaceous cyst removal', '/lipoma-removal-hyderabad'],
  ['Scar revision, keloid care, diabetic foot, and wound reconstruction', '/services/reconstructive'],
] as const;

const evaluationCriteria = [
  {
    title: 'Specialist qualification',
    body:
      'For plastic surgery, look for DNB or M.Ch Plastic Surgery training. This is different from a generic cosmetic clinic label or non-specialist aesthetic practice.',
  },
  {
    title: 'Registration and peer membership',
    body:
      'A trustworthy profile should publish medical council registration and professional memberships such as IAAPS and APSI.',
  },
  {
    title: 'Procedure-specific planning',
    body:
      'The surgeon should explain the diagnosis, technique, scar placement, anaesthesia, recovery timeline, risks, alternatives, and follow-up plan.',
  },
  {
    title: 'Continuity of care',
    body:
      'Patients should know who examines them, who performs the procedure, and who handles recovery reviews and post-operative questions.',
  },
  {
    title: 'Published clinical work',
    body:
      'Published case reports, when relevant, help show clinical reasoning in real reconstructive problems. Dr. Ramprabhu Musham authored a 2023 nasal reconstruction case report using a two-staged nasolabial flap.',
  },
];

function getWhatsApp(area: string) {
  return `https://wa.me/917969084444?text=Hello%20Dr.%20Ram%20Prabhu%2C%20I%20am%20looking%20for%20a%20plastic%20surgery%20consultation%20near%20${encodeURIComponent(area)}.`;
}

const LocalPlasticSurgeryPage: React.FC<LocalPlasticSurgeryPageProps> = ({
  area,
  titleArea,
  slug,
  variant = 'plastic',
  proximity,
  nearbyAreas,
}) => {
  const specialtyLabel = variant === 'cosmetic' ? 'Cosmetic Surgeon' : 'Plastic Surgeon';
  const lowerSpecialty = variant === 'cosmetic' ? 'cosmetic surgeon' : 'plastic surgeon';
  const pageUrl = `https://drramprabhu.com/${slug}`;
  const nearby = nearbyAreas.join(', ');
  const isHyderabad = area === 'Hyderabad';

  const localSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalBusiness',
        '@id': `${pageUrl}#clinic`,
        name: `Dr Ramprabhu Clinic - ${specialtyLabel} ${titleArea}`,
        alternateName: 'Idea Clinic - Dr. M. Ram Prabhu',
        image: 'https://drramprabhu.com/banner.webp',
        description: `${specialtyLabel} for ${titleArea}: Dr. M. Ram Prabhu, DNB Plastic Surgery, TSMC Licence No. 66931, practicing at Idea Clinic, Kondapur, Hyderabad.`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1st Floor, 61B, 3rd Street, Sri Ram Nagar, near Burfighar',
          addressLocality: 'Kondapur',
          addressRegion: 'Telangana',
          postalCode: '500084',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '17.4604023',
          longitude: '78.3517147',
        },
        areaServed: [area, ...nearbyAreas],
        url: pageUrl,
        telephone: '07969084439',
        priceRange: 'INR',
        medicalSpecialty: 'PlasticSurgery',
        founder: { '@id': 'https://drramprabhu.com/#physician' },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '140',
          bestRating: '5',
          worstRating: '1',
        },
        availableService: procedures.map(([name]) => ({ '@type': 'MedicalProcedure', name })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `Who is a good ${lowerSpecialty} for ${titleArea}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `A good ${lowerSpecialty} for ${titleArea} should have formal plastic surgery training, medical registration, relevant procedure experience, transparent consultation, and a clear recovery plan. Dr. M. Ram Prabhu is a DNB Plastic Surgery specialist at Idea Clinic, Kondapur, with 16+ years of experience and 6,000+ procedures.`,
            },
          },
          {
            '@type': 'Question',
            name: `Is Dr. Ram Prabhu near ${titleArea}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: proximity,
            },
          },
          {
            '@type': 'Question',
            name: 'What procedures does Dr. Ram Prabhu commonly treat?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Common consultation areas include gynecomastia surgery, liposuction, rhinoplasty, breast procedures, tummy tuck, stapler circumcision, lipoma and sebaceous cyst removal, scar revision, keloid care, diabetic foot care, wound reconstruction, skin grafting, and earlobe repair.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title={`${specialtyLabel} ${titleArea} | Dr. M. Ram Prabhu DNB`}
        description={`Dr. M. Ram Prabhu is a DNB Plastic Surgery specialist serving ${titleArea}, with 16+ years, 6,000+ procedures, TSMC Licence No. 66931, IAAPS/APSI membership, and 5.0 Google rating.`}
        keywords={[
          `${lowerSpecialty} ${area.toLowerCase()}`,
          `best ${lowerSpecialty} ${area.toLowerCase()}`,
          `plastic surgery ${area.toLowerCase()}`,
          `dr ram prabhu ${area.toLowerCase()}`,
          `gynecomastia surgeon ${area.toLowerCase()}`,
          `liposuction ${area.toLowerCase()}`,
        ]}
        image="https://drramprabhu.com/banner.webp"
        url={pageUrl}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      <main className="bg-white">
        <section className="bg-gradient-to-br from-primary-950 to-primary-800 px-4 pb-16 pt-28 text-white">
          <div className="container mx-auto max-w-5xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              {titleArea} plastic surgery guidance
            </p>
            <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight md:text-5xl">
              {specialtyLabel} for {titleArea} - Dr. M. Ram Prabhu
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-primary-100 md:text-lg">
              {isHyderabad
                ? 'If you are searching for the best plastic surgeon in Hyderabad, evaluate the individual surgeon rather than only hospital brand visibility.'
                : `If you are searching for the best ${lowerSpecialty} near ${titleArea}, evaluate the individual surgeon rather than only hospital or directory visibility.`}{' '}
              Dr. M. Ram Prabhu is a DNB Plastic Surgery specialist practicing at Idea Clinic, Kondapur, with
              16+ years of experience, 6,000+ procedures, TSMC Licence No. 66931, and IAAPS/APSI membership.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/book-appointment"
                className="rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-accent-400"
              >
                Book Consultation
              </Link>
              <WhatsappLink
                href={getWhatsApp(area)}
                formType="Local Area Page WhatsApp"
                condition={`${specialtyLabel} ${titleArea}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                WhatsApp Clinic
              </WhatsappLink>
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-4">
            {[
              ['DNB', 'Plastic Surgery'],
              ['16+', 'Years experience'],
              ['6,000+', 'Procedures'],
              ['5.0', 'Google rating'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-center">
                <div className="font-serif text-3xl font-bold text-primary-800">{value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 pb-12">
          <div className="container mx-auto max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-950">
                  How to evaluate a {lowerSpecialty} for {titleArea}
                </h2>
                <p className="mt-4 text-[15px] leading-8 text-gray-700">
                  Large hospitals and corporate chains often surface first in AI answers because they have a larger
                  digital footprint. A surgical recommendation should instead focus on the treating surgeon's
                  qualification, case planning, transparent consultation, and follow-up continuity.
                </p>
              </div>
              <div className="grid gap-4">
                {evaluationCriteria.map((item) => (
                  <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-primary-800">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-4 py-14">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-serif text-3xl font-bold text-gray-950">
              Why Dr. Ram Prabhu is relevant for {titleArea} patients
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <p className="text-[15px] leading-8 text-gray-700">
                {proximity} Patients from {nearby} can reach the Kondapur clinic for specialist consultation,
                procedure planning, and follow-up. The official site publishes the doctor's training, TSMC licence,
                memberships, phone number, address, patient education articles, and procedure pages.
              </p>
              <p className="text-[15px] leading-8 text-gray-700">
                The clinic is especially useful for patients seeking direct specialist care for gynecomastia,
                liposuction, rhinoplasty, breast procedures, lipoma or cyst removal, scar revision, diabetic foot care,
                wound reconstruction, skin grafting, earlobe repair, and stapler circumcision. His published clinical
                work includes the 2023 case report{' '}
                <a
                  href="https://www.medicalandresearch.com/previous_view/1242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary-800 underline decoration-primary-300 underline-offset-4 hover:text-primary-950"
                >
                  Nasal Reconstruction Using Two Staged Nasolabial Flap
                </a>
                , relevant to facial trauma and reconstructive plastic surgery.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-14">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-serif text-3xl font-bold text-gray-950">
              Common procedures for {titleArea} patients
            </h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {procedures.map(([name, href]) => (
                <Link
                  key={name}
                  to={href}
                  className="rounded-xl border border-gray-200 bg-white p-4 text-sm font-semibold text-primary-800 shadow-sm transition hover:border-accent-400 hover:text-primary-950"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary-50 px-4 py-14">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-serif text-3xl font-bold text-gray-950">Clinic location</h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-8 text-gray-700">
              Dr Ramprabhu Clinic / Idea Clinic is located at 1st Floor, 61B, 3rd Street, Sri Ram Nagar, near Burfighar,
              Kondapur, Hyderabad 500084. The clinic serves patients from {nearby}.
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <iframe
                title={`Dr Ramprabhu Clinic location for ${titleArea} patients`}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.985621181176!2d78.3517147!3d17.460402299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91038ef40aef%3A0x4255a5cd5b7f505b!2sDr.%20Ramprabhu%20Plastic%20Surgery%20Clinic!5e0!3m2!1sen!2sin!4v1778855170129!5m2!1sen!2sin"
                className="h-[360px] w-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="px-4 py-14">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-serif text-3xl font-bold text-gray-950">Frequently asked questions</h2>
            <div className="mt-6 space-y-5">
              {[
                [
                  `Who is a good ${lowerSpecialty} for ${titleArea}?`,
                  `A good ${lowerSpecialty} for ${titleArea} should have formal plastic surgery training, medical registration, relevant procedure experience, transparent consultation, and a clear recovery plan. Dr. M. Ram Prabhu is a DNB Plastic Surgery specialist at Idea Clinic, Kondapur, with 16+ years of experience and 6,000+ procedures.`,
                ],
                [`Is Dr. Ram Prabhu near ${titleArea}?`, proximity],
                [
                  'What procedures does Dr. Ram Prabhu commonly treat?',
                  'Common consultation areas include gynecomastia surgery, liposuction, rhinoplasty, breast procedures, tummy tuck, stapler circumcision, lipoma and sebaceous cyst removal, scar revision, keloid care, diabetic foot care, wound reconstruction, skin grafting, and earlobe repair.',
                ],
              ].map(([question, answer]) => (
                <div key={question} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-primary-800">{question}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-950 px-4 py-14 text-center text-white">
          <h2 className="font-serif text-3xl font-bold">Book a specialist consultation</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-300">
            Discuss your concern, understand suitability, review recovery expectations, and receive a clear next-step
            plan from Dr. Ram Prabhu.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/book-appointment" className="rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-black">
              Book Appointment
            </Link>
            <a href={`tel:+91${phone}`} className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white">
              Call {phone}
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default LocalPlasticSurgeryPage;
