import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import Button from '../ui/Button';
import RamPrabhuImage from './ram.png'; // Import the image
import pryImage from './p.webp'; // Import the image
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const scrollToAppointment = () => {
    // First navigate to the contact page
    navigate('/contact');
    
    // Then scroll to the form after a short delay to ensure the page has loaded
    setTimeout(() => {
      const appointmentForm = document.getElementById('appointment-form');
      if (appointmentForm) {
        appointmentForm.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-primary-950 via-primary-900 to-accent-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/80 to-transparent"></div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Right: Banner Image */}
          <div className="hidden lg:block w-full lg:w-1/2 relative lg:order-2">
            <div className="relative w-full h-full flex items-center justify-center mt-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-400 to-primary-400 rounded-lg blur opacity-30"></div>
              <img 
                src="/banner-desktop.png" 
                alt="Banner" 
                className="relative w-full h-full max-h-[800px] object-contain rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left pl-0 lg:pl-8 lg:order-1">
            <div className="mb-1 text-accent-400 font-semibold uppercase tracking-widest text-sm animate-fadeIn">
              Hyderabad's Trusted Plastic Surgeon
            </div>
            <h1 className="text-white font-serif text-3xl md:text-4xl font-bold leading-tight mb-4 animate-fadeIn">
              Expertise in <span className="text-accent-400">Aesthetic</span> & <span className="text-accent-400">Reconstructive</span> Surgery
            </h1>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mb-6 animate-fadeIn animation-delay-600">
              <Button
                onClick={scrollToAppointment}
                variant="outline"
                size="md"
                className="text-white border-white hover:bg-white/10"
                icon={<Calendar size={18} />}
              >
                Book a Consultation
              </Button>
              <Button
                href="https://wa.me/9949808628"
                variant="outline"
                size="md"
                className="text-white border-green-500 hover:bg-green-50/10"
                icon={<img src="/images/whatsapp.svg" alt="WhatsApp" className="w-4 h-4" />}
              >
                WhatsApp
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="md"
                className="text-white border-white hover:bg-white/10"
                icon={<ArrowRight size={18} />}
              >
                Explore Our Services
              </Button>
            </div>
            <p className="text-gray-200 text-base md:text-lg mb-6 animate-fadeIn animation-delay-300">
              Dr. M. Ram Prabhu and his team provide world-class plastic surgery procedures with a focus on natural results and patient satisfaction.
            </p>

            {/* Combined Sections Container */}
            <div className="flex flex-col lg:flex-row gap-4 animate-fadeIn animation-delay-600">
              {/* Associations Section */}
              <div className="w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                  {/* Left: Hospitals */}
                  <div className="flex flex-col items-center space-y-3">
                    <h3 className="text-base text-accent-400 font-semibold uppercase tracking-wider">Associated with:</h3>
                    <div className="flex justify-center items-center gap-4 flex-wrap">
                      <a href="https://www.pristyncare.com/specialist/dr-m-ram-prabhu-bnonbbggix/" target="_blank" className="hover:opacity-80 transition-opacity bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                        <img src={pryImage} alt="Pristyn Care" className="h-7 w-auto object-contain" />
                      </a>
                      <a href="https://www.ideaclinics.com/" target="_blank" className="hover:opacity-80 transition-opacity bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                        <img src="https://www.ideaclinics.com/wp-content/uploads/2021/03/IDEA-logo-1.png" alt="Idea Clinic" className="h-7 w-auto object-contain" />
                      </a>
                      <a href="https://luxhospitals.com/top-hospital-for-liposuction-surgery/#doctors" target="_blank" className="hover:opacity-80 transition-opacity bg-white p-2 rounded-lg">
                        <img src="https://luxhospitals.com/wp-content/uploads/2025/04/converted-14.avif" alt="Lux Hospitals" className="h-7 w-auto object-contain" />
                      </a>
                    </div>
                  </div>

                  {/* Right: Social Media */}
                  <div className="flex flex-col items-center space-y-3">
                    <h3 className="text-base text-accent-400 font-semibold uppercase tracking-wider">Connect with us:</h3>
                    <div className="flex justify-center gap-4">
                      <a href="https://linkedin.com/in/ramprabhu-musham-78b2ba20" target="_blank" className="hover:opacity-80 transition-opacity bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={{width: '20px'}} />
                      </a>
                      <a href="https://facebook.com/ramprabhu.musham" target="_blank" className="hover:opacity-80 transition-opacity bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" style={{width: '20px'}} />
                      </a>
                      <a href="https://instagram.com/dr.ramprabhu_plasticsurgeon" target="_blank" className="hover:opacity-80 transition-opacity bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" style={{width: '20px'}} />
                      </a>
                      <a href="https://youtube.com/@drramprabhumusham" target="_blank" className="hover:opacity-80 transition-opacity bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" style={{width: '20px'}} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
