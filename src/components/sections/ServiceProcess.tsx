import React from 'react';
import { CalendarCheck, UserCheck, Stethoscope, Clock } from 'lucide-react';

const steps = [
  {
    icon: CalendarCheck,
    title: "Initial Consultation",
    description: "Schedule a consultation to discuss your goals and expectations with our expert surgeons."
  },
  {
    icon: UserCheck,
    title: "Personalized Plan",
    description: "Receive a customized treatment plan tailored to your specific needs and desired outcomes."
  },
  {
    icon: Stethoscope,
    title: "Pre-Surgery Preparation",
    description: "Get comprehensive guidance on preparing for your procedure, including medical evaluations."
  },
  {
    icon: Clock,
    title: "Recovery & Follow-up",
    description: "Benefit from our dedicated post-operative care and regular follow-up appointments."
  }
];

const ServiceProcess: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We ensure a smooth and comfortable experience throughout your transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative flex flex-col items-center p-6"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <step.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-center text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-blue-200 transform translate-x-1/2">
                  <div className="absolute right-0 w-3 h-3 bg-blue-200 transform rotate-45 -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;