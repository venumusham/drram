import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle } from 'lucide-react';

const ClinicLocation: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
      <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
        Our Location
      </h2>

      <div className="mb-6 aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3027470973837!2d78.37559661478558!3d17.458099988030647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc9f80d613%3A0x1ea4d62c7e8b5a2d!2sIdea%20Clinics!5e0!3m2!1sen!2sin!4v1645510415774!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Clinic Location"
          className="w-full h-full"
        ></iframe>
      </div>

      <div className="space-y-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <MapPin className="h-6 w-6 text-primary-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Address</h3>
            <p className="text-gray-700">
              Idea Clinic, 1st Floor
              <br />
              61B, 3rd Street
              <br />
              Near Burfighar Sweetshop
              <br />
              Sri Ram Nagar, Kondapur
              <br />
              Hyderabad
            </p>
            <a 
              href="https://maps.app.goo.gl/u5BUxZYY3yBXnwWh7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center mt-2 text-primary-600 hover:text-primary-700 transition-colors"
            >
              <Navigation className="w-4 h-4 mr-1" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        <div className="flex">
          <div className="flex-shrink-0">
            <Phone className="h-6 w-6 text-primary-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Phone</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 text-primary-600 mr-2" />
                <a 
                  href="https://wa.me/9949808628" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary-600 transition-colors"
                >
                  WhatsApp: +91 99498 08628
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-primary-600 mr-2" />
                <a 
                  href="tel:+919949808628" 
                  className="text-gray-700 hover:text-primary-600 transition-colors"
                >
                  Clinic: +91 99498 08628
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex-shrink-0">
            <Mail className="h-6 w-6 text-primary-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Email</h3>
            <p className="text-gray-700">ram.musham@gmail.com</p>
          </div>
        </div>

        <div className="flex">
          <div className="flex-shrink-0">
            <Clock className="h-6 w-6 text-primary-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Office Hours</h3>
            <div className="text-gray-700">
              <div className="grid grid-cols-2 gap-1">
                <div>Everyday:</div>
                <div>8am - 5pm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicLocation;
