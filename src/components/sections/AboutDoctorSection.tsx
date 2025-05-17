import React from 'react';
import { Award, BookOpen, Stethoscope, Users } from 'lucide-react';
import Button from '../ui/Button';
import RamPrabhuImg from './ram.png'; // Import the image
const AboutDoctorSection: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center">
            <div className="h-px bg-accent-500 flex-grow max-w-[80px]"></div>
            <h2 className="text-accent-600 font-semibold mx-3 text-sm uppercase tracking-wider">About the Doctor</h2>
            <div className="h-px bg-accent-500 flex-grow max-w-[80px]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16 items-start">
          {/* First Column: Image */}
          <div className="lg:col-span-4 lg:-ml-8">
            <div className="relative lg:pr-8">
              <div className="rounded-lg shadow-2xl overflow-hidden transform translate-y-0 translate-x-4 relative z-10">
                <img 
                  src={RamPrabhuImg} 
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
                      15+ Years of Excellence
                    </h4>
                    <p className="text-xs text-gray-500">
                      DNB Plastic Surgery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Second Column: Introduction */}
          <div className="lg:col-span-5">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-8 lg:mt-0">
              Meet Dr. M. Ram Prabhu, Your Expert Aesthetics & Plastic Surgeon
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Dr. M. Ram Prabhu is a highly skilled Aesthetics and Plastic Surgeon with 15+ years of experience, specializing in Gynecomastia, Aesthetics, and Liposuction. He graduated with his MBBS from Dr. NTR University of Health Sciences, Andhra Pradesh in 2009, followed by DNB in Plastic Surgery from National Board of Examinations, New Delhi in 2019.
            </p>

            <a 
              href="https://www.linkedin.com/in/ramprabhu-musham-78b2ba20/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              Read Full Biography
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Third Column: Specializations and Buttons */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-6">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctorSection;