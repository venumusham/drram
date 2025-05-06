import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const ClinicInformation: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Clinic</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Location</h3>
            </div>
            <p className="text-gray-600">
              Idea Clinic, 1st Floor<br />
              61B, 3rd Street<br />
              Near Burfighar Sweetshop<br />
              Sri Ram Nagar, Kondapur<br />
              Hyderabad
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Hours</h3>
            </div>
            <ul className="text-gray-600">
              <li>Everyday: 8:00 AM - 5:00 PM</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Phone className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Contact</h3>
            </div>
            <p className="text-gray-600">
              Phone: +91 93910 38023<br />
              Clinic: +91 99498 08628<br />
              Email: ram.musham@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicInformation;