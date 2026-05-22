import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/ui/PageHeader';
import AppointmentForm from '../components/sections/AppointmentForm';
import ClinicLocation from '../components/sections/ClinicLocation';
import { CheckCircle2 } from 'lucide-react';

const BookAppointment: React.FC = () => {
  return (
    <>
      <SEO
        title="Live Slot Booking | Dr Ramprabhu Clinic Kondapur"
        description="Book a live consultation slot with Dr. Ram Prabhu, Plastic Surgeon in Kondapur Hyderabad. Choose available clinic slots and confirm via WhatsApp."
        keywords={['book plastic surgeon hyderabad', 'dr ramprabhu appointment', 'plastic surgery consultation slot']}
        image="/images/banner.png"
        url="https://drramprabhu.com/book-appointment"
      />
      <div className="BookAppointmentPage bg-[#f6f8fb] md:bg-white">
        <div className="hidden md:block">
          <PageHeader
            title="Book a Consultation Slot"
            description="Choose a live appointment slot and confirm details through WhatsApp."
          />
        </div>

        <section className="md:hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 px-4 pb-12 pt-24 text-white">
          <div className="mx-auto max-w-md">
            <h1 className="font-serif text-2xl font-bold leading-tight">Book Consultation</h1>
            <p className="mt-2 max-w-sm text-sm leading-6 text-primary-100">
              Choose an available clinic slot. WhatsApp opens with your booking details for quick confirmation.
            </p>
            <div className="mt-4 flex justify-center">
              <div className="inline-flex items-center justify-center gap-2 rounded-full border border-green-300/30 bg-white/10 px-4 py-2 text-xs font-semibold text-green-100 backdrop-blur">
                <CheckCircle2 size={15} className="shrink-0" />
                <span>Live availability</span>
              </div>
            </div>
          </div>
        </section>

        <section className="-mt-8 hidden px-4 relative z-10 md:block">
          <div className="mx-auto flex max-w-4xl flex-nowrap items-center justify-center gap-2 overflow-x-auto rounded-2xl border border-green-100 bg-white p-3 shadow-soft-lg">
            {['Live availability', 'Coordinator call trigger', 'Reminder opt-in included'].map((item, index) => (
              <div key={item} className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-green-50 px-3 py-2 text-xs font-semibold text-green-800 ${index > 0 ? 'hidden sm:inline-flex' : ''}`}>
                <CheckCircle2 size={15} className="shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
        <div className="container relative z-10 mx-auto -mt-8 px-0 pb-10 md:mt-0 md:px-4 md:py-12">
          <div className="mx-auto max-w-4xl px-3 md:px-0">
            <AppointmentForm compactHeader hideBadges mobileApp hideManualRequest enableStepNavigation />
          </div>
          <div className="mx-auto mt-6 max-w-4xl px-3 md:mt-10 md:px-0">
            <ClinicLocation />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
