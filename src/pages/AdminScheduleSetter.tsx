import React, { useMemo, useState } from 'react';
import { Calendar, Clock, Lock, PlusCircle, ShieldCheck } from 'lucide-react';
import { publishAppointmentSlots } from '../lib/supabaseSlots';

const fieldClass =
  'w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500';

const toLocalDateInput = (date: Date) => {
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60 * 1000).toISOString().split('T')[0];
};

const adminCode = import.meta.env.VITE_ADMIN_SCHEDULE_CODE ?? 'clinic-slots';

const AdminScheduleSetter: React.FC = () => {
  const today = useMemo(() => toLocalDateInput(new Date()), []);
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState('');
  const [date, setDate] = useState(today);
  const [startTime, setStartTime] = useState('10:00');
  const [endTime, setEndTime] = useState('12:00');
  const [consultationType, setConsultationType] = useState('Clinic visit');
  const [status, setStatus] = useState<'idle' | 'publishing' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const previewSlots = useMemo(() => generateSlotTimes(startTime, endTime), [endTime, startTime]);

  const unlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === adminCode) {
      setUnlocked(true);
      setMessage('');
    } else {
      setMessage('Incorrect admin code.');
    }
  };

  const generateSlots = async () => {
    setStatus('publishing');
    setMessage('');

    if (!date || previewSlots.length === 0) {
      setStatus('error');
      setMessage('Choose a valid date and time range.');
      return;
    }

    try {
      await publishAppointmentSlots(
        previewSlots.map((time) => ({
          slot_date: date,
          slot_time: time,
          status: 'available',
          consultation_type: consultationType,
        }))
      );

      setStatus('success');
      setMessage(`${previewSlots.length} slot(s) published. Existing duplicate slots were left unchanged.`);
    } catch {
      setStatus('error');
      setMessage('Could not publish slots. Check Supabase RLS insert policy for appointment_slots.');
    }
  };

  if (!unlocked) {
    return (
      <main className="min-h-screen bg-gray-50 px-4 py-24">
        <form onSubmit={unlock} className="mx-auto max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-soft-lg">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-full bg-primary-50 p-3 text-primary-700">
              <Lock size={22} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Clinic Schedule Admin</h1>
              <p className="text-sm text-gray-500">Enter admin code to publish slots.</p>
            </div>
          </div>
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-gray-700">Admin Code</span>
            <input
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className={fieldClass}
              placeholder="Enter code"
            />
          </label>
          <button type="submit" className="mt-4 w-full rounded-md bg-primary-700 px-4 py-2 font-semibold text-white hover:bg-primary-800">
            Unlock
          </button>
          {message && <p className="mt-3 text-sm text-red-600">{message}</p>}
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-24">
      <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-soft-lg">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">
              <ShieldCheck size={14} />
              Supabase schedule publisher
            </p>
            <h1 className="text-2xl font-bold text-gray-900">Set Clinic Availability</h1>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Publish 30-minute available appointment slots. Duplicate slots are ignored, so booked slots are not
              overwritten.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <label className="block">
            <span className="mb-1 flex items-center gap-2 text-sm font-medium text-gray-700">
              <Calendar size={16} />
              Date
            </span>
            <input type="date" value={date} min={today} onChange={(e) => setDate(e.target.value)} className={fieldClass} />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 flex items-center gap-2 text-sm font-medium text-gray-700">
                <Clock size={16} />
                Start Time
              </span>
              <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className={fieldClass} />
            </label>
            <label className="block">
              <span className="mb-1 flex items-center gap-2 text-sm font-medium text-gray-700">
                <Clock size={16} />
                End Time
              </span>
              <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className={fieldClass} />
            </label>
          </div>

          <label className="block">
            <span className="mb-1 block text-sm font-medium text-gray-700">Consultation Type</span>
            <select value={consultationType} onChange={(e) => setConsultationType(e.target.value)} className={fieldClass}>
              <option value="Clinic visit">Clinic visit</option>
              <option value="Virtual assessment on WhatsApp">Virtual assessment on WhatsApp</option>
            </select>
          </label>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p className="mb-3 text-sm font-semibold text-gray-800">Preview: {previewSlots.length} slot(s)</p>
            <div className="flex flex-wrap gap-2">
              {previewSlots.length ? (
                previewSlots.map((slot) => (
                  <span key={slot} className="rounded-md border border-primary-100 bg-white px-3 py-1 text-sm text-primary-800">
                    {slot}
                  </span>
                ))
              ) : (
                <span className="text-sm text-red-600">End time must be after start time.</span>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={generateSlots}
            disabled={status === 'publishing'}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 font-bold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <PlusCircle size={19} />
            {status === 'publishing' ? 'Publishing...' : 'Generate & Publish Slots'}
          </button>

          {message && (
            <p className={`rounded-lg p-3 text-sm ${status === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-700'}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

function generateSlotTimes(startTime: string, endTime: string) {
  const slots: string[] = [];
  const currentTime = new Date(`1970-01-01T${startTime}:00`);
  const end = new Date(`1970-01-01T${endTime}:00`);

  if (Number.isNaN(currentTime.getTime()) || Number.isNaN(end.getTime()) || currentTime >= end) {
    return slots;
  }

  while (currentTime < end) {
    slots.push(currentTime.toTimeString().substring(0, 5));
    currentTime.setMinutes(currentTime.getMinutes() + 30);
  }

  return slots;
}

export default AdminScheduleSetter;
