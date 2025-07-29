import React, { useState } from 'react';

const tableData = [
  { feature: 'Procedure Type', other: 'Traditional Surgery', clinic: 'Laser + Liposuction' },
  { feature: 'Scarring', other: 'Visible Scars', clinic: 'Scarless Finish' },
  { feature: 'Anesthesia', other: 'General', clinic: 'Local' },
  { feature: 'Recovery Time', other: '1–2 Weeks', clinic: '1–2 Days' },
  { feature: 'Pricing', other: 'Starts ₹1L+', clinic: 'Starts ₹50,000' },
  { feature: 'Financing', other: 'Rarely Available', clinic: '0% EMI | Assured Pricing' },
];

const CollapsibleComparisonTable: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="mb-4 px-4 py-2 bg-primary-700 text-white rounded shadow hover:bg-primary-800 transition"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? 'Show Less' : 'Show More'}
      </button>
      {open && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border">
            <thead>
              <tr>
                <th className="p-2 border">Features</th>
                <th className="p-2 border">Other Hospitals</th>
                <th className="p-2 border">Our Clinic</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx}>
                  <td className="p-2 border">{row.feature}</td>
                  <td className="p-2 border">{row.other}</td>
                  <td className="p-2 border">{row.clinic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CollapsibleComparisonTable; 