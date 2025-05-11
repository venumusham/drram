import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import Button from '../ui/Button';
import RamPrabhuImage from './ram.png'; // Import the image
import pryImage from './p.webp'; // Import the image

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left pl-0 lg:pl-12">
            <div className="mb-2 text-accent-400 font-semibold uppercase tracking-widest text-sm animate-fadeIn">
              Hyderabad's Trusted Plastic Surgeon
            </div>
            <h1 className="text-white font-serif text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
              Expertise in <span className="text-accent-400">Aesthetic</span> & <span className="text-accent-400">Reconstructive</span> Surgery
            </h1>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8 animate-fadeIn animation-delay-600">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar size={20} />}
              >
                Book a Consultation
              </Button>
              <Button
                href="https://wa.me/9949808628"
                variant="outline"
                size="lg"
                className="text-white border-green-500 hover:bg-green-50/10"
                icon={<img src="/images/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />}
              >
                WhatsApp
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
            <p className="text-gray-200 text-lg md:text-xl mb-8 animate-fadeIn animation-delay-300">
              Dr. M. Ram Prabhu and his team provide world-class plastic surgery procedures with a focus on natural results and patient satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="hidden lg:block absolute bottom-12 right-12 max-w-sm xl:max-w-md z-10 animate-fadeIn animation-delay-900">
        <div className="bg-white rounded-lg shadow-xl p-6 bg-opacity-95 mx-auto">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="text-xs text-primary-600 font-medium uppercase tracking-wider mb-1">
              Board Certified
            </div>
            <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
              Dr. M. Ram Prabhu
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              "My philosophy is to enhance your natural beauty while ensuring
              safe procedures and exceptional care at every step of your
              journey."
            </p>
            <h3 className="text-xs text-primary-600 font-medium uppercase tracking-wider mb-1 mt-2">Associated with:</h3>
            <div className="flex justify-center items-center gap-4 flex-wrap mb-2">
              <a href="https://www.pristyncare.com/specialist/dr-m-ram-prabhu-bnonbbggix/" target="_blank">
                <img src={pryImage} alt="Pristyn Care" style={{height: '30px'}} />
              </a>
              <a href="https://www.ideaclinics.com/" target="_blankk">
                <img src="https://www.ideaclinics.com/wp-content/uploads/2021/03/IDEA-logo-1.png" alt="Idea Clinic" style={{height: '30px'}} />
              </a>
              <a href="https://luxhospitals.com/top-hospital-for-liposuction-surgery/#doctors" target="_blank">
                <img src="https://luxhospitals.com/wp-content/uploads/2025/04/converted-14.avif" alt="Lux Hospitals" style={{height: '30px'}} />
              </a>
            </div>
            <div className="flex justify-center gap-4 mt-2">
              <a href="https://linkedin.com/in/ramprabhu-musham-78b2ba20" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={{width: '24px'}} />
              </a>
              <a href="https://facebook.com/ramprabhu.musham" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" style={{width: '24px'}} />
              </a>
              <a href="https://instagram.com/dr.ramprabhu_plasticsurgeon" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" style={{width: '24px'}} />
              </a>
              <a href="https://youtube.com/@drramprabhumusham" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" style={{width: '24px'}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
