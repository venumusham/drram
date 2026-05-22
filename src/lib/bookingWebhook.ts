export interface BookingWebhookPayload {
  name: string;
  phone: string;
  procedure: string;
  date: string;
  time: string;
  consultationType: string;
  callPreference: string;
  reminderOptIn: boolean;
  notes: string;
  slotId?: string;
}

export async function triggerBookingWebhook(payload: BookingWebhookPayload): Promise<void> {
  try {
    await fetch('/api/booking-webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    // The WhatsApp deep link still opens even if the optional automation endpoint
    // is not available in local/static deployments.
  }
}
