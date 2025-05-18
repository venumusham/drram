import React from 'react';
import { ArrowRight, Scale as Scalpel, Heart, Activity, Brain } from 'lucide-react';
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
  }
];

const ServicesList: React.FC = () => {
  const handleServiceClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Featured Services */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-3">Reconstructive Excellence</h3>
                <p className="text-primary-50 text-sm leading-relaxed">
                  Our commitment to excellence in reconstructive surgery ensures personalized care and optimal results for every patient. Dr. Ram Prabhu's expertise and attention to detail guarantee the highest standards of surgical outcomes.
                </p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-3">Advanced Rhinoplasty Solutions</h3>
                <p className="text-primary-50 text-sm leading-relaxed">
                  Enhance your facial symmetry with tailored nose reshaping procedures by Dr. Ramprabhu M. Our advanced techniques ensure natural-looking results that complement your unique facial features.
                </p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-3">Laser Liposuction</h3>
                <p className="text-primary-50 text-sm leading-relaxed">
                  Modern technique for reducing unwanted fat deposits with minimal invasion. Unlike traditional liposuction, this procedure uses laser energy to liquefy fat cells, making them easier to remove.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-lg mb-4">
                <service.icon className="w-5 h-5 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{service.description}</p>
              <Link 
                to={service.route} 
                onClick={handleServiceClick}
                className="inline-flex items-center text-sm text-primary-600 hover:text-primary-800 transition-colors duration-200"
              >
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;