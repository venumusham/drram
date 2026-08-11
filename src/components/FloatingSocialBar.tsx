import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

// Single canonical contact constants. Update here only.
export const PHONE = '9949808628';
export const PHONE_INTL = '07969084439';
export const WHATSAPP_INTL = '917969084444';
export const MAPS_URL = 'https://maps.app.goo.gl/fFqyMjiR1pgoWnpV9';
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
      {/* Right-side floating buttons */}
      <div className="fixed bottom-20 right-4 z-50 flex flex-col gap-3 md:bottom-auto md:top-1/2 md:-translate-y-1/2">
        <a
          href={`tel:${PHONE_INTL}`}
          className="group flex h-12 w-12 items-center justify-end overflow-hidden rounded-full bg-[#111118]/90 text-white shadow-xl shadow-black/20 ring-1 ring-white/10 backdrop-blur transition-all hover:bg-accent-500 hover:text-black md:hover:w-36"
          aria-label="Call Dr. Ram Prabhu"
          data-conversion="call_floating"
        >
          <span className="w-0 whitespace-nowrap text-sm font-semibold opacity-0 transition-all md:group-hover:w-20 md:group-hover:opacity-100">
            Call
          </span>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center">
            <Phone size={20} />
          </span>
        </a>
        <a
          href={waUrl}
          className="group flex h-12 w-12 items-center justify-end overflow-hidden rounded-full bg-green-500 text-white shadow-xl shadow-black/20 transition-all hover:bg-green-400 hover:text-black md:hover:w-40"
          aria-label="WhatsApp Dr. Ram Prabhu"
          target="_blank"
          rel="noopener noreferrer"
          data-conversion="whatsapp_floating"
        >
          <span className="w-0 whitespace-nowrap text-sm font-semibold opacity-0 transition-all md:group-hover:w-24 md:group-hover:opacity-100">
            WhatsApp
          </span>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center">
            <MessageCircle size={20} />
          </span>
        </a>
        <a
          href={MAPS_URL}
          className="group flex h-12 w-12 items-center justify-end overflow-hidden rounded-full bg-[#c9a96e] text-black shadow-xl shadow-black/20 transition-all hover:bg-accent-400 md:hover:w-40"
          aria-label="Directions to clinic"
          target="_blank"
          rel="noopener noreferrer"
          data-conversion="maps_floating"
        >
          <span className="w-0 whitespace-nowrap text-sm font-semibold opacity-0 transition-all md:group-hover:w-24 md:group-hover:opacity-100">
            Directions
          </span>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center">
            <MapPin size={20} />
          </span>
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
