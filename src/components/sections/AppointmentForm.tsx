import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, CheckCircle2, ChevronRight, Clock, MessageCircle, MessageSquare, Phone, ShieldCheck, User, X } from 'lucide-react';
import { AppointmentSlot, bookAppointmentSlot, fetchAvailableSlotsRange } from '../../lib/supabaseSlots';
import { triggerBookingWebhook } from '../../lib/bookingWebhook';

type BookingState = 'idle' | 'loading' | 'error';
type SubmitState = 'idle' | 'booking' | 'error';

const services = [
  'Gynecomastia',
  'Liposuction',
  'Rhinoplasty',
  'Breast Procedures',
  'Lipoma / Sebaceous Cyst',
  'Scar / Keloid',
  'Diabetic Foot / Wound Care',
  'General Plastic Surgery Consultation',
  'Other',
];

const callWindows = [
  'Call anytime today',
  'Morning call preferred',
  'Afternoon call preferred',
  'Evening call preferred',
  'WhatsApp message first',
];

const fallbackTimeSlots = [
  '10:00 AM - 10:30 AM',
  '10:30 AM - 11:00 AM',
  '11:00 AM - 11:30 AM',
  '11:30 AM - 12:00 PM',
  '7:00 PM - 7:30 PM',
  '7:30 PM - 8:00 PM',
];

const fieldClass =
  'w-full rounded-xl border border-gray-300 bg-white px-3 py-3 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 md:rounded-md md:py-2';

const toLocalDateInput = (date: Date) => {
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60 * 1000).toISOString().split('T')[0];
};

const appointmentDateFormatter = new Intl.DateTimeFormat('en-IN', {
  weekday: 'long',
  day: 'numeric',
  month: 'short',
  timeZone: 'Asia/Kolkata',
});

const appointmentLongDateFormatter = new Intl.DateTimeFormat('en-IN', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'Asia/Kolkata',
});

const shortWeekdayFormatter = new Intl.DateTimeFormat('en-IN', { weekday: 'short', timeZone: 'Asia/Kolkata' });
const dayFormatter = new Intl.DateTimeFormat('en-IN', { day: 'numeric', timeZone: 'Asia/Kolkata' });
const shortMonthFormatter = new Intl.DateTimeFormat('en-IN', { month: 'short', timeZone: 'Asia/Kolkata' });

const getDateWindow = () => {
  const todayDate = new Date();
  const nextWeekDate = new Date(todayDate);
  nextWeekDate.setDate(todayDate.getDate() + 7);

  return {
    today: toLocalDateInput(todayDate),
    nextWeek: toLocalDateInput(nextWeekDate),
  };
};

const formatDate = (date: string) =>
  appointmentDateFormatter.format(new Date(`${date}T12:00:00+05:30`));

const formatLongDate = (date: string) =>
  appointmentLongDateFormatter.format(new Date(`${date}T12:00:00+05:30`));

const formatSlotTime = (time: string) => {
  const [hour, minute] = time.split(':').map(Number);
  const date = new Date();
  date.setHours(hour, minute || 0, 0, 0);
  return date.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true });
};

interface AppointmentFormProps {
  compactHeader?: boolean;
  hideBadges?: boolean;
  mobileApp?: boolean;
  hideManualRequest?: boolean;
  enableStepNavigation?: boolean;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({
  compactHeader = false,
  hideBadges = false,
  mobileApp = false,
  hideManualRequest = false,
  enableStepNavigation = false,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dateWindow, setDateWindow] = useState<{ today: string; nextWeek: string } | null>(null);
  const today = dateWindow?.today ?? '';
  const nextWeek = dateWindow?.nextWeek ?? '';
  const selectedSlotId = enableStepNavigation ? searchParams.get('slot') : null;

  const [slots, setSlots] = useState<AppointmentSlot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<AppointmentSlot | null>(null);
  const [selectedCalendarDate, setSelectedCalendarDate] = useState('');
  const [bookingState, setBookingState] = useState<BookingState>('loading');
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const confirmationRef = useRef<HTMLElement | null>(null);

  const [manualForm, setManualForm] = useState({
    name: '',
    phone: '',
    service: '',
    mode: 'Clinic visit',
    preferredDate: '',
    preferredTime: '',
    callWindow: 'Call anytime today',
    reminderOptIn: true,
    message: '',
  });

  const [modalForm, setModalForm] = useState({
    name: '',
    phone: '',
    service: '',
    mode: 'Clinic visit',
    callWindow: 'Call anytime today',
    reminderOptIn: true,
    message: '',
  });

  const groupedSlots = useMemo(
    () =>
      slots.reduce<Record<string, AppointmentSlot[]>>((acc, slot) => {
        if (!acc[slot.slot_date]) acc[slot.slot_date] = [];
        acc[slot.slot_date].push(slot);
        return acc;
      }, {}),
    [slots]
  );
  const calendarDays = useMemo(
    () =>
      today
        ?
      Array.from({ length: 8 }).map((_, index) => {
        const date = new Date(`${today}T12:00:00+05:30`);
        date.setDate(date.getDate() + index);
        const value = toLocalDateInput(date);
        return {
          value,
          weekday: shortWeekdayFormatter.format(date),
          day: dayFormatter.format(date),
          month: shortMonthFormatter.format(date),
          count: groupedSlots[value]?.length ?? 0,
        };
      })
        : [],
    [groupedSlots, today]
  );
  const selectedDateSlots = groupedSlots[selectedCalendarDate] ?? [];

  const refreshAvailability = useCallback(() => {
    if (!today || !nextWeek) return;
    setBookingState('loading');
    fetchAvailableSlotsRange(today, nextWeek)
      .then((data) => {
        setSlots(data);
        setSelectedCalendarDate((current) =>
          data.some((slot) => slot.slot_date === current) ? current : data[0]?.slot_date ?? current
        );
        setBookingState('idle');
      })
      .catch(() => {
        setBookingState('error');
      });
  }, [nextWeek, today]);

  useEffect(() => {
    setDateWindow(getDateWindow());
  }, []);

  useEffect(() => {
    if (!today) return;
    setSelectedCalendarDate((current) => current || today);
    setManualForm((current) => ({
      ...current,
      preferredDate: current.preferredDate || today,
    }));
  }, [today]);

  useEffect(() => {
    refreshAvailability();
  }, [refreshAvailability]);

  useEffect(() => {
    if (!enableStepNavigation) return;
    if (!selectedSlotId) {
      setSelectedSlot(null);
      return;
    }

    const slot = slots.find((candidate) => candidate.id === selectedSlotId);
    if (!slot) return;

    setSelectedSlot((current) => (current?.id === slot.id ? current : slot));
    setSelectedCalendarDate(slot.slot_date);
  }, [enableStepNavigation, selectedSlotId, slots]);

  useEffect(() => {
    if (!selectedSlot || typeof window === 'undefined' || window.innerWidth >= 640) return;
    window.requestAnimationFrame(() => {
      const top = confirmationRef.current?.getBoundingClientRect().top ?? 0;
      window.scrollTo({
        top: window.scrollY + top - 88,
        behavior: 'smooth',
      });
    });
  }, [selectedSlot]);

  const clearSelectedSlot = useCallback(() => {
    setSelectedSlot(null);
    if (!enableStepNavigation) return;
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete('slot');
    setSearchParams(nextParams);
  }, [enableStepNavigation, searchParams, setSearchParams]);

  const openWhatsApp = (details: {
    name: string;
    phone: string;
    service: string;
    mode: string;
    date: string;
    time: string;
    callWindow: string;
    reminderOptIn: boolean;
    message: string;
    reserved: boolean;
  }) => {
    const whatsappMessage = [
      '*New Slot Booking Request - Dr Ramprabhu Clinic*',
      details.reserved ? '*Website slot reserved in Supabase*' : '*Manual slot request*',
      '',
      `*Name:* ${details.name}`,
      `*Phone:* ${details.phone}`,
      `*Procedure / Concern:* ${details.service}`,
      `*Consultation Type:* ${details.mode}`,
      `*Preferred Date:* ${details.date}`,
      `*Preferred Slot:* ${details.time}`,
      `*Confirmation Call:* ${details.callWindow}`,
      `*Reminder Opt-in:* ${details.reminderOptIn ? 'Yes - send WhatsApp reminders and location' : 'No reminder needed'}`,
      details.message ? `*Notes:* ${details.message}` : '',
      '',
      'Please confirm the available appointment slot. A clinic manager may call me to confirm details.',
    ]
      .filter(Boolean)
      .join('\n');

    window.open(`https://wa.me/917969084444?text=${encodeURIComponent(whatsappMessage)}`, '_blank', 'noopener,noreferrer');
  };

  const handleManualChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const nextValue = e.target instanceof HTMLInputElement && e.target.type === 'checkbox' ? e.target.checked : value;
    setManualForm((prev) => ({ ...prev, [name]: nextValue }));
  };

  const handleModalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const nextValue = e.target instanceof HTMLInputElement && e.target.type === 'checkbox' ? e.target.checked : value;
    setModalForm((prev) => ({ ...prev, [name]: nextValue }));
  };

  const selectSlot = (slot: AppointmentSlot) => {
    setStatusMessage('');
    setSelectedSlot(slot);
    setModalForm({
      name: manualForm.name,
      phone: manualForm.phone,
      service: manualForm.service,
      mode: manualForm.mode,
      callWindow: manualForm.callWindow,
      reminderOptIn: manualForm.reminderOptIn,
      message: manualForm.message,
    });
    if (enableStepNavigation) {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.set('slot', slot.id);
      setSearchParams(nextParams);
    }
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp({
      ...manualForm,
      date: formatLongDate(manualForm.preferredDate),
      time: manualForm.preferredTime,
      reserved: false,
    });
    setStatusMessage('WhatsApp has opened with your manual slot request.');
  };

  const handleBookSlot = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) return;

    setSubmitState('booking');
    setStatusMessage('');

    try {
      await bookAppointmentSlot({
        slotId: selectedSlot.id,
        name: modalForm.name,
        phone: modalForm.phone,
        procedureType: modalForm.service,
        consultationType: modalForm.mode,
        notes: modalForm.message,
        callPreference: modalForm.callWindow,
        reminderOptIn: modalForm.reminderOptIn,
      });

      await triggerBookingWebhook({
        name: modalForm.name,
        phone: modalForm.phone,
        procedure: modalForm.service,
        date: formatLongDate(selectedSlot.slot_date),
        time: formatSlotTime(selectedSlot.slot_time),
        consultationType: modalForm.mode,
        callPreference: modalForm.callWindow,
        reminderOptIn: modalForm.reminderOptIn,
        notes: modalForm.message,
        slotId: selectedSlot.id,
      });

      openWhatsApp({
        ...modalForm,
        date: formatLongDate(selectedSlot.slot_date),
        time: formatSlotTime(selectedSlot.slot_time),
        reserved: true,
      });

      clearSelectedSlot();
      setSubmitState('idle');
      setStatusMessage('Slot reserved. WhatsApp has opened with the confirmation details.');
      refreshAvailability();
    } catch (error) {
      setSubmitState('error');
      setStatusMessage(error instanceof Error ? error.message : 'This slot could not be booked. Please choose another slot.');
    }
  };

  return (
    <div
      id="appointment-form"
      className={`overflow-hidden bg-white ${
        mobileApp
          ? 'rounded-[1.75rem] border border-white shadow-[0_18px_45px_-24px_rgba(15,23,42,0.45)] md:rounded-2xl md:border-green-100 md:shadow-soft-lg'
          : 'rounded-2xl border border-green-100 shadow-soft-lg'
      }`}
    >
      {!compactHeader && (
        <div className="bg-gradient-to-br from-primary-900 to-primary-800 p-6 text-white md:p-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-green-300/40 bg-green-400/10 px-3 py-1 text-xs font-semibold text-green-100">
            <Calendar size={14} />
            Live slot booking
          </div>
          <h2 className="font-serif text-2xl font-bold md:text-3xl">Book Priority Consultation</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-primary-100">
            Pick an available clinic slot for the next 7 days. After booking, WhatsApp opens with confirmation details so
            the coordinator can call and share reminders.
          </p>
        </div>
      )}

      <div className={`${mobileApp ? 'space-y-5 p-4 md:space-y-6 md:p-8' : 'space-y-6 p-6 md:p-8'}`}>
        {!hideBadges && (
          <div className="grid gap-3 sm:grid-cols-3">
            {['Live availability', 'Coordinator call trigger', 'Reminder opt-in included'].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 text-xs font-medium text-green-800">
                <CheckCircle2 size={15} className="shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {bookingState === 'loading' && (
          <p className="rounded-lg bg-gray-50 p-4 text-center text-sm text-gray-600">Loading Dr. Ram Prabhu's schedule...</p>
        )}

        {bookingState === 'error' && (
          <p className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
            Live slots could not be loaded. Please WhatsApp or call the clinic directly.
          </p>
        )}

        {bookingState === 'idle' && Object.keys(groupedSlots).length > 0 && (
          <div className="space-y-5">
            <div className={`${selectedSlot ? 'hidden sm:block' : ''} ${mobileApp ? 'rounded-3xl border border-gray-100 bg-gray-50/80 p-3 md:rounded-none md:border-0 md:bg-transparent md:p-0' : ''}`}>
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="text-base font-bold text-gray-900">Choose Date</h3>
                <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-gray-500 md:bg-transparent md:px-0 md:py-0 md:text-xs">Next 7 days</span>
              </div>
              <div className="relative">
                <div className="-mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-2 pr-12 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-1 sm:pr-1">
                  {calendarDays.map((day) => {
                    const active = day.value === selectedCalendarDate;
                    return (
                      <button
                        key={day.value}
                        type="button"
                        onClick={() => setSelectedCalendarDate(day.value)}
                        className={`min-w-[68px] snap-start rounded-2xl border px-2 py-3 text-center transition active:scale-[0.98] md:min-w-[76px] md:rounded-xl md:px-3 ${
                          active
                            ? 'border-primary-700 bg-primary-700 text-white shadow-md shadow-primary-900/15'
                            : day.count
                              ? 'border-primary-100 bg-primary-50 text-primary-900 hover:border-primary-300'
                              : 'border-gray-200 bg-white text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        <span className="block text-[11px] font-semibold uppercase leading-none">{day.weekday}</span>
                        <span className="mt-1.5 block text-xl font-bold leading-none">{day.day}</span>
                        <span className="mt-1 block text-[10px] leading-none">{day.month}</span>
                        <span
                          className={`mt-2 inline-flex min-w-11 justify-center rounded-full px-1.5 py-0.5 text-[9px] font-semibold ${
                            active ? 'bg-white/20 text-white' : day.count ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'
                          }`}
                        >
                          {day.count ? `${day.count} slots` : 'Full'}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <div className="pointer-events-none absolute bottom-2 right-[-24px] top-0 flex w-20 items-center justify-end bg-gradient-to-l from-gray-50 via-gray-50/90 to-transparent pr-4 sm:hidden">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary-700 shadow-md ring-1 ring-primary-100">
                    <ChevronRight size={17} />
                  </span>
                </div>
                <p className="mt-1 flex items-center justify-center gap-1 text-[11px] font-medium text-gray-500 sm:hidden">
                  Swipe dates
                  <ChevronRight size={13} />
                </p>
              </div>
            </div>

            <section className={`${selectedSlot ? 'hidden sm:block' : ''} ${mobileApp ? 'rounded-3xl border border-gray-100 bg-white p-3 shadow-[0_14px_35px_-28px_rgba(15,23,42,0.55)] md:rounded-none md:border-0 md:p-0 md:shadow-none' : ''}`}>
              <p className="mb-2 font-semibold text-gray-800">{formatDate(selectedCalendarDate)}</p>
              {selectedDateSlots.length > 0 ? (
                <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                  {selectedDateSlots.map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => selectSlot(slot)}
                      className="inline-flex min-h-12 w-full items-center justify-center gap-1 rounded-2xl border border-primary-200 bg-primary-50 px-3 py-2 text-sm font-semibold text-primary-800 transition hover:border-primary-400 hover:bg-primary-100 sm:w-auto sm:min-w-[116px] md:min-h-0 md:rounded-lg"
                    >
                      <Clock size={14} />
                      {formatSlotTime(slot.slot_time)}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
                  No live slots on this date. Choose another date above.
                </p>
              )}
            </section>

            {selectedSlot && (
              <section ref={confirmationRef} className="animate-slideInRight rounded-3xl border border-green-100 bg-green-50/70 p-4 shadow-[0_14px_35px_-28px_rgba(15,23,42,0.55)] sm:animate-none md:p-5">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-green-700">Selected slot</p>
                    <h3 className="mt-1 text-lg font-bold text-gray-900">
                      {formatLongDate(selectedSlot.slot_date)}
                    </h3>
                    <p className="text-sm font-semibold text-primary-800">{formatSlotTime(selectedSlot.slot_time)}</p>
                  </div>
                  <button
                    type="button"
                    onClick={clearSelectedSlot}
                    className="rounded-full bg-white p-2 text-gray-500 shadow-sm"
                    aria-label="Clear selected slot"
                  >
                    <X size={18} />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={clearSelectedSlot}
                  className="mb-4 inline-flex items-center rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-primary-800 shadow-sm ring-1 ring-primary-100 sm:hidden"
                >
                  Change slot
                </button>

                <form onSubmit={handleBookSlot} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field icon={<User size={18} />} label="Full Name *">
                      <input name="name" value={modalForm.name} onChange={handleModalChange} required className={fieldClass} placeholder="Enter your full name" />
                    </Field>
                    <Field icon={<Phone size={18} />} label="WhatsApp Number *">
                      <input name="phone" value={modalForm.phone} onChange={handleModalChange} required type="tel" className={fieldClass} placeholder="Enter WhatsApp number" />
                    </Field>
                    <SelectField label="Procedure / Concern *" name="service" value={modalForm.service} onChange={handleModalChange} options={services} placeholder="Select procedure" required />
                    <SelectField label="Consultation Type *" name="mode" value={modalForm.mode} onChange={handleModalChange} options={['Clinic visit', 'Virtual assessment on WhatsApp']} required />
                  </div>
                  <ReminderCheckbox checked={modalForm.reminderOptIn} onChange={handleModalChange} />
                  <button type="submit" disabled={submitState === 'booking'} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-4 py-3 font-semibold text-white shadow-sm hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-70">
                    <MessageCircle size={19} />
                    {submitState === 'booking' ? 'Booking...' : 'Confirm'}
                  </button>
                </form>
              </section>
            )}
          </div>
        )}

        {bookingState === 'idle' && Object.keys(groupedSlots).length === 0 && (
          <p className="rounded-lg bg-amber-50 p-4 text-sm text-amber-800">
            No live slots are available this week. Please WhatsApp or call the clinic directly.
          </p>
        )}

        {!hideManualRequest && (
          <form
            onSubmit={handleManualSubmit}
            className={`space-y-5 ${
              mobileApp
                ? 'rounded-3xl border border-gray-100 bg-white p-4 shadow-[0_14px_35px_-28px_rgba(15,23,42,0.55)] md:rounded-xl md:border-gray-200 md:bg-gray-50 md:p-5 md:shadow-none'
                : 'rounded-xl border border-gray-200 bg-gray-50 p-5'
            }`}
          >
            <div>
              <h3 className="text-lg font-bold text-gray-900">Manual WhatsApp Slot Request</h3>
              <p className="mt-1 text-sm text-gray-600">Use this if you do not see a suitable live slot.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field icon={<User size={18} />} label="Full Name *">
                <input name="name" value={manualForm.name} onChange={handleManualChange} required className={fieldClass} placeholder="Enter your full name" />
              </Field>
              <Field icon={<Phone size={18} />} label="WhatsApp Number *">
                <input name="phone" value={manualForm.phone} onChange={handleManualChange} required type="tel" className={fieldClass} placeholder="Enter WhatsApp number" />
              </Field>
              <SelectField label="Procedure / Concern *" name="service" value={manualForm.service} onChange={handleManualChange} options={services} placeholder="Select procedure" required />
              <SelectField label="Consultation Type *" name="mode" value={manualForm.mode} onChange={handleManualChange} options={['Clinic visit', 'Virtual assessment on WhatsApp']} required />
              <Field icon={<Calendar size={18} />} label="Preferred Date *">
                <input name="preferredDate" value={manualForm.preferredDate} onChange={handleManualChange} required type="date" min={today} className={fieldClass} />
              </Field>
              <SelectField label="Preferred Slot *" name="preferredTime" value={manualForm.preferredTime} onChange={handleManualChange} options={fallbackTimeSlots} placeholder="Select slot" required />
              <SelectField label="Confirmation Call Preference *" name="callWindow" value={manualForm.callWindow} onChange={handleManualChange} options={callWindows} required className="md:col-span-2" />
            </div>

            <ReminderCheckbox checked={manualForm.reminderOptIn} onChange={handleManualChange} />

            <Field icon={<MessageSquare size={18} />} label="Additional Message">
              <textarea name="message" value={manualForm.message} onChange={handleManualChange} rows={3} className={`${fieldClass} min-h-24`} placeholder="Share symptoms, preferred language, or any questions" />
            </Field>

            <InfoNote />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <a href="tel:07969084439" className="text-sm font-semibold text-primary-700 hover:text-primary-900">
                Prefer calling? 9949808628
              </a>
              <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-green-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-green-600 md:rounded-md">
                <MessageCircle size={19} />
                Send Manual Request
              </button>
            </div>
          </form>
        )}

        {statusMessage && (
          <p className={`text-sm ${submitState === 'error' ? 'text-red-600' : 'text-green-700'}`}>{statusMessage}</p>
        )}
      </div>
    </div>
  );
};

const Field: React.FC<{ label: string; icon?: React.ReactNode; children: React.ReactNode }> = ({ label, icon, children }) => (
  <label className="block">
    <span className="mb-1 block text-sm font-medium text-gray-700">{label}</span>
    <span className="relative block">
      {icon ? <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-gray-400">{icon}</span> : null}
      {children}
    </span>
  </label>
);

const SelectField: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder?: string;
  required?: boolean;
  className?: string;
}> = ({ label, name, value, onChange, options, placeholder, required, className }) => (
  <label className={className}>
    <span className="mb-1 block text-sm font-medium text-gray-700">{label}</span>
    <select name={name} value={value} onChange={onChange} required={required} className={fieldClass}>
      {placeholder ? <option value="">{placeholder}</option> : null}
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
);

const ReminderCheckbox: React.FC<{
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ checked, onChange }) => (
  <label className="flex items-start gap-3 rounded-lg border border-green-100 bg-green-50 p-4 text-sm text-gray-700">
    <input
      type="checkbox"
      name="reminderOptIn"
      checked={checked}
      onChange={onChange}
      className="mt-1 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
    />
    <span>Send me WhatsApp reminders, clinic location, and pre-consultation instructions.</span>
  </label>
);

const InfoNote: React.FC = () => (
  <div className="rounded-lg border border-gray-200 bg-white p-4">
    <div className="flex items-start gap-3">
      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
      <p className="text-xs leading-5 text-gray-600">
        Appointment timing is confirmed by the clinic team based on doctor availability. For emergencies, please call or
        visit the nearest hospital.
      </p>
    </div>
  </div>
);

export default AppointmentForm;
