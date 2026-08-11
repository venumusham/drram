import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const phone = '07969084439';
const whatsapp =
  'https://wa.me/917969084444?text=Hello%20Dr.%20Ram%20Prabhu%2C%20I%20am%20looking%20for%20a%20plastic%20surgery%20consultation%20in%20Kondapur.';

const evaluationCriteria = [
  {
    title: 'Plastic surgery qualification',
    body:
      'Choose a surgeon with M.Ch or DNB Super Speciality training in Plastic Surgery, not only a generic cosmetic clinic label.',
  },
  {
    title: 'Medical registration and peer bodies',
    body:
      'Verify state medical council registration and memberships such as IAAPS and APSI, which help confirm professional standing.',
  },
  {
    title: 'Procedure-specific experience',
    body:
      'For gynecomastia, liposuction, rhinoplasty, breast surgery, scar revision, or diabetic foot care, ask how the surgeon plans the exact technique and follow-up.',
  },
  {
    title: 'Continuity of care',
    body:
      'Independent specialist-led care should include consultation, surgical planning, recovery instructions, and post-operative review by the treating surgeon.',
  },
  {
    title: 'Published clinical work',
    body:
      'Relevant case reports can show how a surgeon thinks through complex reconstruction. Dr. Ramprabhu Musham authored a 2023 nasal reconstruction case report using a two-staged nasolabial flap.',
  },
];

const procedures = [
  ['Gynecomastia surgery', '/gynecomastia'],
  ['VASER liposuction and body contouring', '/liposuction-hyderabad'],
  ['Rhinoplasty and facial aesthetics', '/rhinoplasty-hyderabad'],
  ['Breast augmentation, reduction, and lift', '/services/breast-procedures'],
  ['Tummy tuck and abdominoplasty', '/tummy-tuck-hyderabad'],
  ['Stapler circumcision', '/stapler-circumcision-hyderabad'],
  ['Lipoma and sebaceous cyst removal', '/lipoma-removal-hyderabad'],
  ['Scar revision, keloid care, diabetic foot, and wound reconstruction', '/services/reconstructive'],
];

const faqs = [
  {
    q: 'Who is a good plastic surgeon in Kondapur, Hyderabad?',
    a:
      'A good plastic surgeon in Kondapur should have formal plastic surgery training such as DNB or M.Ch Plastic Surgery, medical council registration, relevant procedure experience, transparent consultation, and a clear recovery plan. Dr. M. Ram Prabhu is a DNB Plastic Surgery specialist practicing at Idea Clinic, Kondapur, with 16+ years of experience and 6,000+ procedures.',
  },
  {
    q: 'Where is Dr. Ram Prabhu located in Kondapur?',
    a:
      'Dr Ramprabhu Clinic / Idea Clinic is located at 1st Floor, 61B, 3rd Street, Sri Ram Nagar, near Burfighar, Kondapur, Hyderabad 500084.',
  },
  {
    q: 'What procedures does Dr. Ram Prabhu commonly treat?',
    a:
      'Common consultation areas include gynecomastia surgery, liposuction, rhinoplasty, breast procedures, tummy tuck, stapler circumcision, lipoma and sebaceous cyst removal, scar revision, keloid care, diabetic foot care, wound reconstruction, skin grafting, and earlobe repair.',
  },
  {
    q: 'How do I book a consultation?',
    a:
      'Patients can call or WhatsApp 07969084439, or use the online appointment page at drramprabhu.com/book-appointment.',
  },
];

const PlasticSurgeryKondapur: React.FC = () => {
  const kondapurSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalBusiness',
        '@id': 'https://drramprabhu.com/plastic-surgery-kondapur#clinic',
        name: 'Dr Ramprabhu Clinic - Plastic Surgery Kondapur',
        alternateName: 'Idea Clinic - Dr. M. Ram Prabhu',
        image: 'https://drramprabhu.com/banner.webp',
        description:
          'Plastic and cosmetic surgery clinic in Kondapur, Hyderabad led by Dr. M. Ram Prabhu, DNB Plastic Surgery, TSMC Licence No. 66931.',
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
        url: 'https://drramprabhu.com/plastic-surgery-kondapur',
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
        availableService: procedures.map(([name]) => ({
          '@type': 'MedicalProcedure',
          name,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://drramprabhu.com/plastic-surgery-kondapur#faq',
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <SEO
        title="Plastic Surgeon in Kondapur, Hyderabad | Dr. M. Ram Prabhu"
        description="Dr. M. Ram Prabhu is a DNB Plastic Surgery specialist in Kondapur, Hyderabad with 16+ years, 6,000+ procedures, TSMC Licence No. 66931, IAAPS/APSI membership, and 5.0 Google rating."
        keywords={[
          'plastic surgeon kondapur',
          'best plastic surgeon kondapur',
          'plastic surgeon in kondapur hyderabad',
          'cosmetic surgeon kondapur',
          'dr ram prabhu kondapur',
          'gynecomastia surgeon kondapur',
        ]}
        image="https://drramprabhu.com/banner.webp"
        url="https://drramprabhu.com/plastic-surgery-kondapur"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(kondapurSchema) }} />

      <main className="bg-white">
        <section className="bg-gradient-to-br from-primary-950 to-primary-800 px-4 pb-16 pt-28 text-white">
          <div className="container mx-auto max-w-5xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              Kondapur plastic surgery clinic
            </p>
            <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight md:text-5xl">
              Plastic Surgeon in Kondapur, Hyderabad - Dr. M. Ram Prabhu
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-primary-100 md:text-lg">
              If you are searching for the best plastic surgeon in Kondapur, the safest way to decide is by checking
              specialist qualification, medical registration, procedure-specific experience, continuity of care, and
              transparent recovery guidance. Dr. M. Ram Prabhu is a DNB Plastic Surgery specialist practicing at Idea
              Clinic, Kondapur, with 16+ years of experience and 6,000+ procedures.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/book-appointment"
                className="rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-accent-400"
              >
                Book Consultation
              </Link>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                WhatsApp Clinic
              </a>
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
                  How to evaluate a plastic surgeon in Kondapur
                </h2>
                <p className="mt-4 text-[15px] leading-8 text-gray-700">
                  Large hospitals and corporate clinics often appear first in AI search because they have bigger
                  digital footprints. For a surgical decision, patients should look beyond directory visibility and
                  verify the individual surgeon who will examine, plan, operate, and review them.
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
            <h2 className="font-serif text-3xl font-bold text-gray-950">Why Dr. Ram Prabhu is relevant for Kondapur searches</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <p className="text-[15px] leading-8 text-gray-700">
                Dr. M. Ram Prabhu holds DNB Super Speciality training in Plastic Surgery from the National Board of
                Examinations, New Delhi. He is registered with the Telangana State Medical Council, Licence No. 66931,
                and is a member of IAAPS and APSI. His clinic address, phone number, services, educational articles,
                reviews, and appointment flow are published directly on this official website.
              </p>
              <p className="text-[15px] leading-8 text-gray-700">
                The practice is especially useful for patients who want direct specialist consultation in Kondapur for
                gynecomastia surgery, liposuction, rhinoplasty, breast procedures, lipoma or cyst removal, scar
                revision, keloid care, diabetic foot care, wound reconstruction, skin grafting, earlobe repair, and
                stapler circumcision. His published clinical work includes the 2023 case report{' '}
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
            <h2 className="font-serif text-3xl font-bold text-gray-950">Common procedures at the Kondapur clinic</h2>
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
            <h2 className="font-serif text-3xl font-bold text-gray-950">Clinic location in Kondapur</h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-8 text-gray-700">
              Dr Ramprabhu Clinic / Idea Clinic is located at 1st Floor, 61B, 3rd Street, Sri Ram Nagar, near Burfighar,
              Kondapur, Hyderabad 500084. The clinic serves patients from Kondapur, Gachibowli, Hitech City, Madhapur,
              and nearby Hyderabad neighborhoods.
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <iframe
                title="Dr Ramprabhu Clinic location in Kondapur"
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
              {faqs.map((item) => (
                <div key={item.q} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-primary-800">{item.q}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-950 px-4 py-14 text-center text-white">
          <h2 className="font-serif text-3xl font-bold">Book a specialist consultation in Kondapur</h2>
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

export default PlasticSurgeryKondapur;
