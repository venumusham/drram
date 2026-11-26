import React, { useState } from 'react';

const procedures = [
  {
    title: 'VASER / Laser-Assisted Liposuction (Grade 1)',
    description:
      'Suitable for predominantly fatty enlargement with minimal gland tissue. VASER ultrasonic energy emulsifies fat for precise sculpting through 2-3 mm incisions placed in the armpit fold. Same-day discharge. Recovery in 3-5 days. Cost discussed after assessment.',
  },
  {
    title: 'Gland Excision via Peri-Areolar Incision (Grade 2)',
    description:
      'Most common technique for true gynecomastia. A small incision along the lower border of the areola removes the firm glandular disc. Combined with liposuction for surrounding fat. Scar matures over several months. Cost discussed after assessment.',
  },
  {
    title: 'Combined Liposuction + Gland Excision (Grade 3)',
    description:
      'Considered for moderate-to-severe gynecomastia with both fatty and glandular components. Comprehensive 360-degree contouring of the chest, axillary tail, and lower chest. Drain may be placed for 24-48 hours. Cost discussed after assessment.',
  },
  {
    title: 'Excision with Skin Tightening (Grade 4)',
    description:
      'For severe cases with significant skin excess (often after major weight loss or long-standing gynecomastia). Includes gland removal, liposuction, and free nipple grafting if needed. May require staged procedures. Cost discussed after assessment.',
  },
  {
    title: 'Endoscopic Gynecomastia Surgery',
    description:
      'Advanced technique using a small endoscope through the armpit, avoiding an incision on the chest in selected cases. Suited for select Grade 1-2 cases. Suitability confirmed at consultation.',
  },
  {
    title: 'Bodybuilder & Steroid-Induced Gynecomastia',
    description:
      'Specialised approach for athletic men. Preserves pectoralis muscle definition while removing dense steroid-induced gland. Requires steroid discontinuation 4-6 weeks pre-op. Tailored consultation.',
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