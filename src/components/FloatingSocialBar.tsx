import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

// Single canonical contact constants. Update here only.
export const PHONE = '9949808628';
export const PHONE_INTL = '+919949808628';
export const WHATSAPP_INTL = '919949808628';
export const MAPS_URL = 'https://maps.app.goo.gl/bSxwGm3f2zBu4fbi9';
export const WHATSAPP_DEFAULT_MSG =
  'Hello Dr. Ram Prabhu, I would like to book a consultation. Please share available slots.';

interface FloatingSocialBarProps {
  /** Optional WhatsApp prefilled message (page-specific) */
  whatsappMessage?: string;
}

const FloatingSocialBar: React.FC<FloatingSocialBarProps> = ({
  whatsappMessage = WHATSAPP_DEFAULT_MSG,
}) => {
  const waUrl = `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(whatsappMessage)}`;
  return (
    <>
      {/* Right-side floating buttons (mobile only) */}
      <div className="fixed right-4 bottom-20 z-50 flex flex-col gap-3 md:hidden">
        <a
          href={`tel:${PHONE_INTL}`}
          className="bg-primary-700 p-3 rounded-full shadow-lg text-white"
          aria-label="Call Dr. Ram Prabhu"
          data-conversion="call_floating"
        >
          <Phone size={20} />
        </a>
        <a
          href={waUrl}
          className="bg-green-500 p-3 rounded-full shadow-lg text-white"
          aria-label="WhatsApp Dr. Ram Prabhu"
          target="_blank"
          rel="noopener noreferrer"
          data-conversion="whatsapp_floating"
        >
          <MessageCircle size={20} />
        </a>
        <a
          href={MAPS_URL}
          className="bg-yellow-500 p-3 rounded-full shadow-lg text-white"
          aria-label="Directions to clinic"
          target="_blank"
          rel="noopener noreferrer"
          data-conversion="maps_floating"
        >
          <MapPin size={20} />
        </a>
      </div>

      {/* Bottom-anchored horizontal bar (mobile only) — primary conversion CTA */}
      <div
        className="fixed bottom-0 inset-x-0 z-50 grid grid-cols-3 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_8px_rgba(0,0,0,0.04)]"
        role="navigation"
        aria-label="Quick contact"
      >
        <a
          href={`tel:${PHONE_INTL}`}
          className="flex flex-col items-center justify-center py-2 text-primary-700 active:bg-primary-50"
          data-conversion="call_bottombar"
        >
          <Phone size={18} />
          <span className="text-[11px] font-semibold mt-0.5">Call Now</span>
        </a>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 text-green-700 border-l border-r border-gray-200 active:bg-green-50"
          data-conversion="whatsapp_bottombar"
        >
          <MessageCircle size={18} />
          <span className="text-[11px] font-semibold mt-0.5">WhatsApp</span>
        </a>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 text-yellow-700 active:bg-yellow-50"
          data-conversion="directions_bottombar"
        >
          <MapPin size={18} />
          <span className="text-[11px] font-semibold mt-0.5">Directions</span>
        </a>
      </div>
    </>
  );
};

export default FloatingSocialBar;
