import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What should I expect during the initial consultation?",
    answer: "During your initial consultation, you'll meet with our surgeon to discuss your goals, medical history, and desired outcomes. We'll evaluate your needs and develop a personalized treatment plan."
  },
  {
    question: "How long is the typical recovery period?",
    answer: "Recovery periods vary depending on the procedure. We'll provide detailed recovery guidelines and timeline expectations during your consultation."
  },
  {
    question: "What financing options are available?",
    answer: "We offer various financing options and payment plans to help make your procedure more affordable. Our staff can discuss these options during your consultation."
  }
];

const FAQShort: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Questions</h2>
          <p className="text-lg text-gray-600">
            Find quick answers to frequently asked questions about our services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQShort;