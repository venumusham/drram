import React, { useState } from 'react';
import { beforeAfterGallery } from '../../data/gallery';

const BeforeAfterGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  const filteredGallery = selectedCategory === 'all' 
    ? beforeAfterGallery 
    : beforeAfterGallery.filter(item => item.category === selectedCategory);
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              selectedCategory === 'all'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setSelectedCategory('all')}
          >
            All Procedures
          </button>
          
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              selectedCategory === 'face'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setSelectedCategory('face')}
          >
            Facial
          </button>
          
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              selectedCategory === 'body'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setSelectedCategory('body')}
          >
            Body
          </button>
          
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              selectedCategory === 'breast'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setSelectedCategory('breast')}
          >
            Breast
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGallery.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={hoveredItem === index ? item.after : item.before} 
                  alt={hoveredItem === index ? "After procedure" : "Before procedure"} 
                  className="w-full h-full object-cover transition-all duration-500"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent py-2 px-4">
                  <span className="text-white text-sm font-medium">
                    {hoveredItem === index ? "After" : "Before"}
                  </span>
                </div>
                
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-xs font-medium text-gray-800">
                  Hover to {hoveredItem === index ? "see before" : "see after"}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">
                  {item.procedure}
                </h3>
                <p className="text-gray-500 text-sm mb-2">
                  {item.patientDetails}
                </p>
                <p className="text-gray-700 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;