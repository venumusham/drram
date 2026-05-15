import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle } from 'lucide-react';
import { MAPS_URL } from '../FloatingSocialBar';

const ClinicLocation: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
      <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
        Our Location
      </h2>

      <div className="mb-6 rounded-lg overflow-hidden h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.985621181176!2d78.3517147!3d17.460402299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91038ef40aef%3A0x4255a5cd5b7f505b!2sDr.%20Ramprabhu%20Plastic%20Surgery%20Clinic!5e0!3m2!1sen!2sin!4v1778855170129!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Clinic Location"
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
              1st Floor, Idea Clinic, 61B
              <br />
              3rd Street, Near Burfighar Sweetshop
              <br />
              Sri Ram Nagar, Kondapur
              <br />
              Hyderabad, Telangana 500084
            </p>
            <a
              href={MAPS_URL}
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
                  WhatsApp: 9949808628
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-primary-600 mr-2" />
                <a
                  href="tel:9949808628"
                  className="text-gray-700 hover:text-primary-600 transition-colors"
                >
                  Clinic: 9949808628
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
