const formatPatientMessage = ({ name, date, time }) =>
  `Hi ${name}, your consultation with Dr. Ram Prabhu is confirmed for ${date} at ${time} at Idea Clinic, Kondapur. Please reply YES to receive our pre-consultation guidelines.`;

const formatClinicMessage = ({ name, phone, procedure, date, time, consultationType, callPreference }) =>
  [
    'New Booking - CALL NOW',
    `Patient: ${name}`,
    `Phone: ${phone}`,
    `Procedure: ${procedure}`,
    `Slot: ${date} ${time}`,
    `Type: ${consultationType}`,
    `Call preference: ${callPreference}`,
  ].join('\n');

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { Allow: 'POST', 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: false, error: 'Method not allowed' }),
    };
  }

  try {
    const payload = JSON.parse(event.body || '{}');
    const required = ['name', 'phone', 'procedure', 'date', 'time'];
    const missing = required.filter((field) => !payload[field]);

    if (missing.length) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ok: false, error: `Missing fields: ${missing.join(', ')}` }),
      };
    }

    const patientMessage = formatPatientMessage(payload);
    const clinicMessage = formatClinicMessage(payload);
    const webhookUrl = process.env.BOOKING_WEBHOOK_URL;

    if (!webhookUrl) {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ok: true,
          configured: false,
          message: 'Booking received. Set BOOKING_WEBHOOK_URL to forward WhatsApp automation payloads.',
          patientMessage,
          clinicMessage,
        }),
      };
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(process.env.BOOKING_WEBHOOK_SECRET
          ? { 'x-booking-webhook-secret': process.env.BOOKING_WEBHOOK_SECRET }
          : {}),
      },
      body: JSON.stringify({
        event: 'appointment.booked',
        booking: payload,
        messages: {
          patient: patientMessage,
          clinic: clinicMessage,
        },
      }),
    });

    if (!response.ok) {
      return {
        statusCode: 502,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ok: false, error: 'Booking webhook provider failed' }),
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true, configured: true }),
    };
  } catch {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: false, error: 'Booking webhook failed' }),
    };
  }
};
