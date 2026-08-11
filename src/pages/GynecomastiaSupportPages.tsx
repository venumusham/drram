import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

type Faq = { question: string; answer: string };

type SupportPageData = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: Array<{ heading: string; paragraphs: string[]; bullets?: string[] }>;
  faqs: Faq[];
};

const PHONE = '07969084439';

const pages: Record<string, SupportPageData> = {
  unilateral: {
    slug: 'one-sided-male-breast-enlargement-hyderabad',
    title: 'One-Sided Male Breast Enlargement | Gynecomastia Evaluation Hyderabad',
    description:
      'One-sided male breast enlargement may be caused by unilateral gynecomastia or other conditions. Learn when evaluation is important and what treatment may involve.',
    h1: 'One-Sided Male Breast Enlargement in Hyderabad',
    intro:
      'One side of the male chest can be larger, firmer, or have a more projecting nipple than the other. This may be unilateral or asymmetric gynecomastia, but a new one-sided change should be assessed rather than assumed to be cosmetic.',
    sections: [
      {
        heading: 'What can cause one-sided enlargement?',
        paragraphs: ['The two sides of the chest do not always contain the same amount of glandular tissue or fat. Natural chest-wall and muscle differences can also make asymmetry more noticeable.'],
        bullets: ['Unilateral or asymmetric gynecomastia', 'Unequal fat distribution', 'Natural chest or muscle asymmetry', 'Previous injury or surgery', 'Other breast or chest-wall conditions'],
      },
      {
        heading: 'When should it be evaluated?',
        paragraphs: ['Prompt medical evaluation is important if enlargement is new, rapidly changing, hard or irregular, very painful, associated with skin or nipple changes, or associated with discharge or bleeding. Imaging is not required for every patient, but may be advised based on examination findings.'],
      },
      {
        heading: 'How is asymmetric gynecomastia treated?',
        paragraphs: ['Treatment is planned for each side separately. One side may need more liposuction, more gland excision, or different contouring. The aim is improved chest balance, not an unrealistic promise of exact mathematical symmetry.'],
      },
    ],
    faqs: [
      { question: 'Can gynecomastia occur on only one side?', answer: 'Yes. It may be bilateral and unequal, predominantly one-sided, or appear unilateral.' },
      { question: 'Is every one-sided male breast lump gynecomastia?', answer: 'No. A new or unusual lump should be clinically evaluated to determine its cause.' },
      { question: 'Can only the larger side be operated on?', answer: 'The plan depends on both sides. One side may need more correction, while treating both sides can provide better balance.' },
    ],
  },
  asymmetry: {
    slug: 'asymmetric-gynecomastia-unequal-male-chest',
    title: 'Unequal Male Chest & Asymmetric Gynecomastia Treatment Hyderabad',
    description:
      'One side of the male chest may be larger because of differences in fat, gland, muscle, or chest anatomy. Learn how asymmetric gynecomastia is assessed and treated.',
    h1: 'Unequal Male Chest and Asymmetric Gynecomastia',
    intro:
      'Mild chest asymmetry is common. When one nipple projects more, one side carries more fullness, or the lower chest contour differs significantly, the cause may be unequal gland, fat, muscle, skin, or chest-wall anatomy.',
    sections: [
      {
        heading: 'Why does chest asymmetry occur?',
        paragraphs: ['Visible asymmetry can have more than one cause. A careful consultation identifies which differences can be improved surgically and which are part of the underlying chest structure.'],
        bullets: ['Different gland size or thickness', 'Unequal fat distribution', 'Muscle or rib-cage asymmetry', 'Nipple-position differences', 'Previous surgery, injury, or scar tissue'],
      },
      {
        heading: 'Why each side needs individual planning',
        paragraphs: ['Performing exactly the same procedure on both sides may not correct an unequal chest. The amount of liposuction, gland excision, and contour blending can differ between sides according to the anatomy.'],
      },
      {
        heading: 'What result can be expected?',
        paragraphs: ['The goal is better overall balance, nipple projection, and chest contour. Natural anatomical differences may remain, so treatment is planned around realistic improvement rather than guaranteed perfect symmetry.'],
      },
    ],
    faqs: [
      { question: 'Can gym training correct chest asymmetry?', answer: 'Training may improve muscle imbalance, but it does not remove glandular tissue or change chest-wall anatomy.' },
      { question: 'Does each side need a different operation?', answer: 'The same techniques may be used, but the amount of treatment can differ between the two sides.' },
      { question: 'Can previous gynecomastia surgery cause asymmetry?', answer: 'Residual gland, unequal fat removal, scar tissue, and differences in healing can contribute to postoperative asymmetry.' },
    ],
  },
  teenage: {
    slug: 'teenage-gynecomastia-treatment-hyderabad',
    title: 'Teenage Gynecomastia: Causes, Treatment & Surgery | Hyderabad',
    description:
      'Teenage boys may develop temporary or persistent breast enlargement. Learn when observation, medical evaluation, or gynecomastia surgery may be considered.',
    h1: 'Teenage Gynecomastia: When Is Surgery Needed?',
    intro:
      'Gynecomastia can develop during adolescence because of pubertal hormonal changes. A teenager may notice a lump beneath one or both nipples, puffy nipples, tenderness, or one side developing before the other.',
    sections: [
      {
        heading: 'Will teenage gynecomastia go away?',
        paragraphs: ['Many pubertal cases improve as hormones stabilise, so surgery is not automatically needed. The decision depends on age, duration, whether the enlargement is stable or changing, severity, symptoms, and examination findings.'],
      },
      {
        heading: 'When should a teenager be evaluated?',
        paragraphs: ['Assessment is appropriate when enlargement is significant, persistent, rapidly increasing, very painful, hard or unusual on examination, associated with other symptoms, or causing substantial ongoing distress.'],
      },
      {
        heading: 'When may surgery be considered?',
        paragraphs: ['Surgery may be discussed in selected patients when gynecomastia is persistent, stable, significant in size, unlikely to resolve, and causing ongoing concern. Treatment may include liposuction, gland excision, or both, depending on the chest anatomy.'],
      },
    ],
    faqs: [
      { question: 'At what age can gynecomastia surgery be done?', answer: 'There is no single age. Timing depends on puberty, duration, stability, severity, and individual clinical assessment.' },
      { question: 'Can exercise remove teenage gynecomastia?', answer: 'Exercise supports health and may reduce fat, but established glandular tissue may remain.' },
      { question: 'Should my son undergo hormone tests?', answer: 'Not every teenager needs testing. Investigations are based on the medical history and clinical findings.' },
    ],
  },
};

const GynecomastiaSupportPage: React.FC<{ page: SupportPageData }> = ({ page }) => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <SEO title={page.title} description={page.description} keywords={['gynecomastia hyderabad', page.h1, 'Dr. Ram Prabhu']} url={`https://drramprabhu.com/${page.slug}`} type="article" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className="bg-white pb-16 pt-10 text-gray-700">
        <div className="mx-auto max-w-4xl px-4">
          <nav className="mb-5 text-sm text-gray-500"><Link to="/">Home</Link><span className="mx-2">/</span><Link to="/gynecomastia">Gynecomastia Surgery</Link><span className="mx-2">/</span>{page.h1}</nav>
          <h1 className="font-serif text-4xl font-bold leading-tight text-primary-900">{page.h1}</h1>
          <p className="mt-5 text-lg leading-relaxed">{page.intro}</p>
          {page.sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="text-2xl font-bold text-primary-900">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 leading-relaxed">{paragraph}</p>)}
              {section.bullets && <ul className="mt-4 list-disc space-y-2 pl-6">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
            </section>
          ))}
          <section className="mt-10 rounded-xl bg-primary-50 p-6">
            <h2 className="text-2xl font-bold text-primary-900">Gynecomastia treatment in Kondapur, Hyderabad</h2>
            <p className="mt-3 leading-relaxed">Dr. M. Ram Prabhu, Plastic, Reconstructive, Microvascular and Aesthetic Surgeon, provides clinical evaluation and individual treatment planning. Read the complete <Link className="font-semibold text-primary-700 underline" to="/gynecomastia">gynecomastia surgery guide in Hyderabad</Link> before booking a consultation.</p>
            <a className="mt-5 inline-flex rounded-lg bg-primary-800 px-5 py-3 font-semibold text-white" href={`tel:${PHONE}`}>Call {PHONE} for an appointment</a>
          </section>
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-primary-900">Frequently asked questions</h2>
            {page.faqs.map((faq) => <div key={faq.question} className="mt-5"><h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3><p className="mt-2 leading-relaxed">{faq.answer}</p></div>)}
          </section>
          <p className="mt-10 text-sm text-gray-500">This page provides general education and does not replace an individual medical consultation.</p>
        </div>
      </article>
    </>
  );
};

export const OneSidedMaleBreastEnlargement: React.FC = () => <GynecomastiaSupportPage page={pages.unilateral} />;
export const AsymmetricGynecomastia: React.FC = () => <GynecomastiaSupportPage page={pages.asymmetry} />;
export const TeenageGynecomastia: React.FC = () => <GynecomastiaSupportPage page={pages.teenage} />;
