import React from 'react';

const stats = [
  { label: 'Years of Experience', value: '15+' },
  { label: 'Procedures Performed', value: '5000+' },
  { label: 'Patient Satisfaction', value: '98%' },
  { label: 'Specialized Treatments', value: '10+' }
];

const StatisticsSection: React.FC = () => {
  return (
    <section className="py-12 bg-primary-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-primary-100">
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