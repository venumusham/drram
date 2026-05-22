const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ?? 'https://hqsnidbymtncfeoylsup.supabase.co';

const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ?? 'sb_publishable_jJLwOW0X-k-HG_wlGX6ZHw_FHd-uroc';

const REST_URL = `${SUPABASE_URL}/rest/v1/appointment_slots`;

export interface AppointmentSlot {
  id: string;
  slot_date: string;
  slot_time: string;
  consultation_type: string | null;
}

export interface SlotBookingPayload {
  slotId: string;
  name: string;
  phone: string;
  procedureType: string;
  consultationType: string;
  notes: string;
  callPreference: string;
  reminderOptIn: boolean;
}

export interface PublishSlotPayload {
  slot_date: string;
  slot_time: string;
  status: 'available';
  consultation_type?: string;
}

const headers = {
  apikey: SUPABASE_ANON_KEY,
  Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
};

export async function fetchAvailableSlots(slotDate: string): Promise<AppointmentSlot[]> {
  if (!slotDate) return [];

  const params = new URLSearchParams({
    select: 'id,slot_date,slot_time,consultation_type',
    status: 'eq.available',
    slot_date: `eq.${slotDate}`,
    order: 'slot_time.asc',
  });

  const response = await fetch(`${REST_URL}?${params.toString()}`, {
    headers,
  });

  if (!response.ok) {
    throw new Error('Unable to load available slots');
  }

  return response.json();
}

export async function fetchAvailableSlotsRange(fromDate: string, toDate: string): Promise<AppointmentSlot[]> {
  const params = new URLSearchParams({
    select: 'id,slot_date,slot_time,consultation_type',
    status: 'eq.available',
    slot_date: `gte.${fromDate}`,
    order: 'slot_date.asc,slot_time.asc',
  });

  params.append('slot_date', `lte.${toDate}`);

  const response = await fetch(`${REST_URL}?${params.toString()}`, {
    headers,
  });

  if (!response.ok) {
    throw new Error('Unable to load available slots');
  }

  return response.json();
}

export async function bookAppointmentSlot(payload: SlotBookingPayload): Promise<void> {
  const params = new URLSearchParams({
    id: `eq.${payload.slotId}`,
    status: 'eq.available',
  });

  const response = await fetch(`${REST_URL}?${params.toString()}`, {
    method: 'PATCH',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      status: 'booked',
      patient_name: payload.name,
      patient_phone: payload.phone,
      procedure_type: payload.procedureType,
      consultation_type: payload.consultationType,
      patient_notes: payload.notes || null,
      call_preference: payload.callPreference,
      reminder_opt_in: payload.reminderOptIn,
      booked_at: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error('Unable to book this slot');
  }
}

export async function publishAppointmentSlots(slots: PublishSlotPayload[]): Promise<void> {
  if (!slots.length) return;

  const response = await fetch(`${REST_URL}?on_conflict=slot_date,slot_time`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      Prefer: 'resolution=ignore-duplicates,return=minimal',
    },
    body: JSON.stringify(slots),
  });

  if (!response.ok) {
    throw new Error('Unable to publish slots');
  }
}
