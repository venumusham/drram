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
            Specialized Aesthetic & Reconstructive Solutions
          </h3>
          
          <p className="text-gray-700 leading-relaxed">
            We offer expert treatments in Gynecomastia, Aesthetics, and Liposuction, along with comprehensive plastic surgery procedures. Our focus is on delivering natural results while ensuring patient safety and satisfaction.
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {Object.keys(serviceHighlights).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceHighlights[activeCategory].services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {service.description}
                </p>
                <a 
                  href={`/services#${service.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  Learn more
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            href="/services"
            variant="primary"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlightSection;