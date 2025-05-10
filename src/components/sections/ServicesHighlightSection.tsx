import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import { serviceHighlights } from '../../data/services';

const ServicesHighlightSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('face');

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-accent-500 flex-grow max-w-[80px]"></div>
            <h2 className="text-accent-600 font-semibold mx-3 text-sm uppercase tracking-wider">Our Services</h2>
            <div className="h-px bg-accent-500 flex-grow max-w-[80px]"></div>
          </div>
          
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Plastic Surgery Solutions
          </h3>
          
          <p className="text-gray-700 leading-relaxed">
            Dr. M. Ram Prabhu offers a wide range of plastic surgery procedures with a focus on achieving natural-looking results while ensuring patient safety and satisfaction.
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {Object.keys(serviceHighlights).map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {serviceHighlights[category].label}
            </button>
          ))}
        </div>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-8">
          {serviceHighlights[activeCategory].services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="h-full">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {service.description}
                  </p>
                  
                  {service.procedures && (
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Procedures Include:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.procedures.map((procedure, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <ChevronRight className="w-4 h-4 text-primary-600 mr-2" />
                            {procedure}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <Button 
                    href={`/services#${service.id}`}
                    variant="primary"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlightSection;