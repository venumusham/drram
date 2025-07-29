import React, { useState } from 'react';

const procedures = [
  {
    title: 'Liposuction',
    description: 'Removes excess fat through tiny incisions, leaving no visible scars.'
  },
  {
    title: 'Gland Excision (Mastectomy)',
    description: 'Removes gland tissue for a flat, contoured chest.'
  },
  {
    title: 'Excision with Skin Tightening',
    description: 'Removes gland and excess skin for severe cases.'
  },
  {
    title: 'Combination Surgery',
    description: 'Best for both fat and gland enlargement.'
  }
];

const ProceduresAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div>
      {procedures.map((proc, idx) => (
        <div key={idx} className="mb-4 border rounded">
          <button
            className="w-full text-left px-4 py-3 font-semibold text-primary-800 focus:outline-none focus:bg-primary-50 bg-primary-50 hover:bg-primary-100 rounded"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            {proc.title}
          </button>
          {openIndex === idx && (
            <div className="px-4 py-3 text-gray-700 bg-white border-t">
              {proc.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProceduresAccordion; 