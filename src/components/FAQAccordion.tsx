import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is gynecomastia?',
    answer: 'Gynecomastia is the enlargement of male breast tissue, often caused by hormonal imbalance. Surgery is a safe and effective solution.'
  },
  {
    question: 'How experienced are the surgeons?',
    answer: 'Dr. Ram Prabhu has 18 years of experience and has treated 6,000+ patients with a 99% success rate.'
  },
  {
    question: 'What techniques are used?',
    answer: 'We use laser-assisted liposuction, gland excision, and skin tightening procedures tailored to your needs.'
  },
  {
    question: 'What can I expect during recovery?',
    answer: 'Most men return to routine work in 2–3 days. Full results are seen in 4–6 weeks.'
  },
  {
    question: 'How much does gynecomastia surgery cost?',
    answer: 'Surgery starts from ₹50,000. The final cost depends on the grade and procedure needed. We offer transparent, fixed packages with no hidden fees, and 0% interest EMI options.'
  },
  {
    question: 'How do I book a consultation?',
    answer: 'Call +91 99498 08628 or WhatsApp us to schedule a free consultation and get a personalized treatment plan.'
  }
];

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {faqs.map((faq, idx) => (
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