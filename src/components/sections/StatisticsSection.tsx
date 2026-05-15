import React from 'react';

const stats = [
  { label: 'Years of Experience', value: '15+ years' },
  { label: 'Procedures Performed', value: '5000+' },
  { label: 'Patient Satisfaction', value: '98%' },
  { label: 'Specialized Treatments', value: '10+' }
];

const StatisticsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-950 to-primary-900 text-white relative overflow-hidden shadow-inner">
      <div className="absolute inset-0 bg-white opacity-5 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center transform transition-transform duration-300 hover:scale-105">
              <div className="text-4xl md:text-5xl font-serif font-bold mb-3 text-accent-400 drop-shadow-md">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-primary-100 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;