import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

const phone = '+919949808628';
const whatsapp = '919949808628';
const maps = 'https://maps.app.goo.gl/u5BUxZYY3yBXnwWh7';

const FloatingSocialBar: React.FC = () => (
  <div className="fixed right-4 bottom-16 z-50 flex flex-col gap-3 md:hidden">
    <a href={`tel:${phone}`} className="bg-primary-700 p-3 rounded-full shadow-lg text-white" aria-label="Call">
      <Phone size={20} />
    </a>
    <a href={`https://wa.me/${whatsapp}`} className="bg-green-500 p-3 rounded-full shadow-lg text-white" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
      <MessageCircle size={20} />
    </a>
    <a href={maps} className="bg-yellow-500 p-3 rounded-full shadow-lg text-white" aria-label="Directions" target="_blank" rel="noopener noreferrer">
      <MapPin size={20} />
    </a>
  </div>
);

export default FloatingSocialBar; 