import React from 'react';
import { ArrowRight, Scale as Scalpel, Heart, Activity, Brain, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Scalpel,
    title: "Facial Procedures",
    description: "Transform your appearance with our advanced facial surgical procedures, including facelifts, rhinoplasty, and facial contouring.",
    route: "/services/facelift"
  },
  {
    icon: Heart,
    title: "Body Contouring",
    description: "Achieve your desired body shape through procedures like liposuction, tummy tucks, and body lifts.",
    route: "/services/body-contouring"
  },
  {
    icon: Activity,
    title: "Breast Surgery",
    description: "Enhance or reduce breast size with our comprehensive range of breast surgical procedures.",
    route: "/services/breast-procedures"
  },
  {
    icon: Brain,
    title: "Reconstructive Surgery",
    description: "Restore form and function with our expert reconstructive surgical procedures.",
    route: "/services/reconstructive"
  },
  {
    icon: Sparkles,
    title: "Non-Surgical Treatments",
    description: "Experience remarkable results with our non-invasive cosmetic treatments and procedures.",
    route: "/services"
  }
];

const ServicesList: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of plastic surgery procedures, each tailored to help you achieve your aesthetic goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to={service.route} 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;