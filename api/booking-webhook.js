const json = (res, status, body) => {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
};

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

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return json(res, 405, { ok: false, error: 'Method not allowed' });
  }

  try {
    const payload = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
    const required = ['name', 'phone', 'procedure', 'date', 'time'];
    const missing = required.filter((field) => !payload[field]);

    if (missing.length) {
      return json(res, 400, { ok: false, error: `Missing fields: ${missing.join(', ')}` });
    }

    const patientMessage = formatPatientMessage(payload);
    const clinicMessage = formatClinicMessage(payload);
    const webhookUrl = process.env.BOOKING_WEBHOOK_URL;

    if (!webhookUrl) {
      return json(res, 200, {
        ok: true,
        configured: false,
        message: 'Booking received. Set BOOKING_WEBHOOK_URL to forward WhatsApp automation payloads.',
        patientMessage,
        clinicMessage,
      });
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
      return json(res, 502, { ok: false, error: 'Booking webhook provider failed' });
    }

    return json(res, 200, { ok: true, configured: true });
  } catch {
    return json(res, 500, { ok: false, error: 'Booking webhook failed' });
  }
}
