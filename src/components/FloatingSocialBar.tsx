import React from 'react';
import { Phone, MessageCircle, Facebook, Linkedin, Instagram, MapPin, Youtube } from 'lucide-react';

const phone = '+919949808628';
const whatsapp = '919949808628';
const facebook = 'https://facebook.com/ramprabhu.musham';
const linkedin = 'https://linkedin.com/in/ramprabhu-musham-78b2ba20';
const instagram = 'https://instagram.com/dr.ramprabhu_plasticsurgeon';
const maps = 'https://maps.app.goo.gl/u5BUxZYY3yBXnwWh7';
const youtube = 'https://youtube.com/@drramprabhumusham';

const FloatingSocialBar: React.FC = () => (
  <div className="fixed right-4 bottom-16 z-50 flex flex-col gap-3 md:hidden">
    <a href={`tel:${phone}`} className="bg-primary-700 p-3 rounded-full shadow-lg text-white" aria-label="Call">
      <Phone size={20} />
    </a>
    <a href={`https://wa.me/${whatsapp}`} className="bg-green-500 p-3 rounded-full shadow-lg text-white" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
      <MessageCircle size={20} />
    </a>
    <a href={facebook} className="bg-blue-600 p-3 rounded-full shadow-lg text-white" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
      <Facebook size={20} />
    </a>
    <a href={linkedin} className="bg-blue-800 p-3 rounded-full shadow-lg text-white" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
      <Linkedin size={20} />
    </a>
    <a href={instagram} className="bg-pink-500 p-3 rounded-full shadow-lg text-white" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
      <Instagram size={20} />
    </a>
    <a href={youtube} className="bg-red-600 p-3 rounded-full shadow-lg text-white" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
      <Youtube size={20} />
    </a>
    <a href={maps} className="bg-yellow-500 p-3 rounded-full shadow-lg text-white" aria-label="Directions" target="_blank" rel="noopener noreferrer">
      <MapPin size={20} />
    </a>
  </div>
);

export default FloatingSocialBar; 