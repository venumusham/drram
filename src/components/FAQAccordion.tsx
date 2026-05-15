import React, { useState } from 'react';

// Default FAQ list — gynecomastia-specific (page can override via `items` prop).
// These mirror the JSON-LD FAQPage schema in GynecomastiaLanding for rich snippets.
const faqs = [
  {
    question: 'What is gynecomastia and what causes it?',
    answer:
      'Gynecomastia is the abnormal enlargement of male breast tissue, caused by an imbalance between oestrogen and testosterone. Common triggers include puberty hormonal changes, ageing, certain medications (steroids, anti-androgens, antidepressants), liver or kidney disease, marijuana or alcohol use, and obesity. In about 25% of adult men, no specific cause is found — it is simply a glandular enlargement that does not resolve on its own.',
  },
  {
    question: 'How do I know if I have gynecomastia or just chest fat (pseudogynecomastia)?',
    answer:
      'True gynecomastia involves firm glandular tissue under the nipple — you can usually feel a rubbery disc on examination. Pseudogynecomastia is purely fat with no gland enlargement, common in overweight men and often improves with weight loss. A clinical examination by Dr. Ram Prabhu (and occasionally an ultrasound) confirms the diagnosis. Treatment differs: pseudogynecomastia may respond to liposuction alone, while true gynecomastia almost always needs gland excision.',
  },
  {
    question: 'How experienced is Dr. Ram Prabhu in gynecomastia surgery?',
    answer:
      'Dr. M. Ram Prabhu has 16+ years of experience and has performed 1,000+ gynecomastia procedures across all four grades, including bodybuilder and steroid-induced cases. He holds DNB (Super Speciality) Plastic Surgery from the National Board of Examinations, and is a member of IAAPS and APSI.',
  },
  {
    question: 'What surgical techniques are used?',
    answer:
      'Treatment is tailored to your grade. Grade 1 is usually managed with VASER or laser-assisted liposuction alone (small incisions, no visible scar). Grades 2–3 need liposuction PLUS gland excision through a hidden peri-areolar (around the nipple) incision. Grade 4 with significant skin excess may need additional skin tightening. Dr. Ram Prabhu also uses the endoscopic scarless technique where indicated.',
  },
  {
    question: 'How much does gynecomastia surgery cost in Hyderabad?',
    answer:
      'Cost ranges from ₹50,000 to ₹1,50,000 depending on the grade, technique, anaesthesia type, and hospital stay. Grade 1 (liposuction only) starts at ₹50,000. Grade 2–3 (combined approach) typically ₹70,000–₹1,00,000. Grade 4 or revision cases ₹1,00,000–₹1,50,000. Packages are transparent and fixed — no hidden charges. 0% interest EMI is available.',
  },
  {
    question: 'How long is the recovery and when can I return to work?',
    answer:
      'Most patients walk out the same day or after one night of observation. Light desk work resumes in 2–4 days. Driving in 5–7 days. Gym (cardio) in 3 weeks; chest workouts in 6 weeks. Final aesthetic results are visible by 8–12 weeks once the swelling fully settles. Compression garments are worn for 4–6 weeks.',
  },
  {
    question: 'Will there be visible scars after gynecomastia surgery?',
    answer:
      'No — modern gynecomastia surgery is essentially scarless. Liposuction is done through 2-3 mm incisions in inconspicuous areas (armpit fold, nipple edge). Gland excision uses a hidden incision along the lower border of the areola, where the skin colour change camouflages it. By 3-6 months, scars are usually invisible. Aggressive scar-prone skin types may benefit from silicone gel.',
  },
  {
    question: 'Is gynecomastia surgery painful?',
    answer:
      'Discomfort is mild to moderate, similar to an intense chest workout. The procedure itself is done under general anaesthesia (Grade 2+) or local with sedation (Grade 1). Post-op pain is typically managed with oral medication for 3-5 days. Most patients describe a feeling of tightness or soreness rather than sharp pain.',
  },
  {
    question: 'Can gynecomastia come back after surgery?',
    answer:
      'Recurrence is rare (under 5%) when the gland is properly removed. However, if you take anabolic steroids, certain medications, or gain significant weight, fatty enlargement (pseudogynecomastia) can occur. Avoiding triggers and maintaining a stable weight gives lasting results.',
  },
  {
    question: 'Is gynecomastia surgery covered by insurance in India?',
    answer:
      'Most cosmetic gynecomastia surgery is not covered by insurance. However, if there is significant pain, asymmetry, or psychological distress documented by a physician, partial coverage may be available. We provide invoice and documentation support if you wish to file a claim. EMI options are available regardless.',
  },
  {
    question: 'Can I have gynecomastia surgery if I am a bodybuilder or take steroids?',
    answer:
      'Yes — Dr. Ram Prabhu has performed many bodybuilder gynecomastia corrections. We require steroids to be discontinued at least 4-6 weeks before surgery for safe healing. The technique focuses on removing the gland fully (steroid-induced gland is denser and fibrous), preserving chest muscle definition. Realistic expectations are discussed during consultation.',
  },
  {
    question: 'How do I book a consultation?',
    answer:
      'Call or WhatsApp 9949808628 to schedule a consultation. The clinic is at 1st Floor, Idea Clinic, 61B, 3rd Street, Sri Ram Nagar, Kondapur, Hyderabad (PIN: 500084) — Mon-Sat, 10AM-12PM and 7PM-8PM. Online consultations are available for patients outside Hyderabad.',
  },
];

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items?: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const displayFaqs = items || faqs;

  return (
    <div>
      {displayFaqs.map((faq, idx) => (
        <div key={idx} className="mb-4 border rounded">
          <button
            className="w-full text-left px-4 py-3 font-semibold text-primary-800 focus:outline-none focus:bg-primary-50 bg-primary-50 hover:bg-primary-100 rounded"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            {faq.question}
          </button>
          {openIndex === idx && (
            <div className="px-4 py-3 text-gray-700 bg-white border-t">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion; 