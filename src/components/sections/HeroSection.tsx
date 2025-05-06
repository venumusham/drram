import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-28 pb-16 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
            Expertise in 
            <span className="text-accent-400"> Aesthetic</span> &amp; 
            <span className="text-accent-400"> Reconstructive</span> Surgery
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 animate-fadeIn animation-delay-300">
            Dr. M. Ram Prabhu and his team provide world-class plastic surgery procedures with a focus on natural results and patient satisfaction.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeIn animation-delay-600">
            <Button 
              href="/contact" 
              variant="primary"
              size="lg"
              icon={<Calendar size={20} />}
            >
              Book a Consultation
            </Button>
            <Button 
              href="/services" 
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white/10"
              icon={<ArrowRight size={20} />}
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="hidden lg:block absolute bottom-12 right-12 md:max-w-sm xl:max-w-md z-10 animate-fadeIn animation-delay-900">
        <div className="bg-white rounded-lg shadow-xl p-6 bg-opacity-95">
          <div className="flex items-start space-x-4">
            <div className="min-w-0 flex-1">
              <div className="text-xs text-primary-600 font-medium uppercase tracking-wider mb-1">
                Board Certified
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
                Dr. M. Ram Prabhu
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                "My philosophy is to enhance your natural beauty while ensuring safe procedures and exceptional care at every step of your journey."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;