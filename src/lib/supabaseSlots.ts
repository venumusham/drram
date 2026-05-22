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
  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/book_appointment_slot`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      p_slot_id: payload.slotId,
      p_patient_name: payload.name,
      p_patient_phone: payload.phone,
      p_procedure_type: payload.procedureType,
      p_consultation_type: payload.consultationType,
      p_patient_notes: payload.notes || null,
      p_call_preference: payload.callPreference,
      p_reminder_opt_in: payload.reminderOptIn,
    }),
  });

  if (!response.ok) {
    let detail = '';
    try {
      detail = await response.text();
    } catch {
      detail = '';
    }

    if (response.status === 401 || response.status === 403) {
      throw new Error('Booking is blocked by Supabase permissions. Please check the appointment_slots RLS update policy.');
    }

    throw new Error(detail || 'Unable to book this slot');
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
