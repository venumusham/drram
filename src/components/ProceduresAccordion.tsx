import React, { useState } from 'react';

const procedures = [
  {
    title: 'VASER / Laser-Assisted Liposuction (Grade 1)',
    description:
      'Best for predominantly fatty enlargement with minimal gland tissue. VASER ultrasonic energy emulsifies fat for precise sculpting through 2-3 mm incisions hidden in the armpit fold. No visible scars. Same-day discharge. Recovery in 3-5 days. Cost from ₹50,000.',
  },
  {
    title: 'Gland Excision via Peri-Areolar Incision (Grade 2)',
    description:
      'Most common technique for true gynecomastia. A small hidden incision along the lower border of the areola removes the firm glandular disc completely. Combined with liposuction for surrounding fat. Heals to an invisible scar within 6 months. Cost ₹70,000–₹85,000.',
  },
  {
    title: 'Combined Liposuction + Gland Excision (Grade 3)',
    description:
      'Recommended for moderate-to-severe gynecomastia with both fatty and glandular components. Comprehensive 360-degree contouring of the chest, axillary tail, and lower chest. Drain may be placed for 24-48 hours. Cost ₹85,000–₹1,10,000.',
  },
  {
    title: 'Excision with Skin Tightening (Grade 4)',
    description:
      'For severe cases with significant skin excess (often after major weight loss or long-standing gynecomastia). Includes gland removal, liposuction, and free nipple grafting if needed. May require staged procedures. Cost ₹1,10,000–₹1,50,000.',
  },
  {
    title: 'Endoscopic Scarless Gynecomastia Surgery',
    description:
      'Advanced technique using a small endoscope through the armpit — completely avoiding any incision on the chest. Suited for select Grade 1-2 cases. Demand-based pricing; consultation required.',
  },
  {
    title: 'Bodybuilder & Steroid-Induced Gynecomastia',
    description:
      'Specialised technique for athletic men. Preserves pectoralis muscle definition while removing dense steroid-induced gland. Requires steroid discontinuation 4-6 weeks pre-op. Tailored consultation.',
  },
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