import React from 'react';
import { Award, BookOpen, Stethoscope, Users } from 'lucide-react';
import Button from '../ui/Button';

const AboutDoctorSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg shadow-2xl overflow-hidden transform translate-y-4 translate-x-4 relative z-10">
              <img 
                src="https://ship-app-assets.fra1.digitaloceanspaces.com/stream/65c514ca046cbf0013ecd370/1715281173414-1602417785968.jpg" 
                alt="Dr. M. Ram Prabhu" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full border-2 border-accent-500 rounded-lg -z-0"></div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4 z-20 max-w-xs">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600">
                    <Award className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">
                    15 Years of Excellence
                  </h4>
                  <p className="text-xs text-gray-500">
                    DNB Plastic Surgery
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <div className="h-px bg-accent-500 flex-grow max-w-[80px]"></div>
              <h2 className="text-accent-600 font-semibold mx-3 text-sm uppercase tracking-wider">About the Doctor</h2>
              <div className="h-px bg-accent-500 flex-grow"></div>
            </div>
            
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Dr. M. Ram Prabhu, Your Expert Aesthetics & Plastic Surgeon
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Dr. M. Ram Prabhu is a highly skilled Aesthetics and Plastic Surgeon with 15 years of experience, specializing in Gynecomastia, Aesthetics, and Liposuction. He graduated with his MBBS from Dr. NTR University of Health Sciences, Andhra Pradesh in 2009, followed by DNB in Plastic Surgery from National Board of Examinations, New Delhi in 2019.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              Currently practicing at Pristyn Care Clinic in Hyderabad, Dr. Prabhu is known for his compassionate care and dedication to patient recovery. He is fluent in English and Hindi, and has been praised by patients for his caring nature and round-the-clock availability.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Stethoscope className="w-5 h-5 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-gray-900 font-medium">Specialized Procedures</h4>
                  <p className="text-sm text-gray-600">Expert in Gynecomastia & Liposuction</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <BookOpen className="w-5 h-5 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-gray-900 font-medium">Medical Registration</h4>
                  <p className="text-sm text-gray-600">License No. 66931</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Award className="w-5 h-5 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-gray-900 font-medium">Advanced Training</h4>
                  <p className="text-sm text-gray-600">DNB in Plastic Surgery</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Users className="w-5 h-5 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-gray-900 font-medium">Patient-Centered</h4>
                  <p className="text-sm text-gray-600">Compassionate, holistic care</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
              <Button
                href="/about"
                variant="primary"
              >
                Read Full Biography
              </Button>
              <Button
                href="/contact"
                variant="outline"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctorSection;