# drram

## Booking Webhook

The patient slot flow calls `/api/booking-webhook` after a Supabase slot is reserved.

### Netlify

The Netlify function lives at:

```txt
netlify/functions/booking-webhook.js
```

`public/_redirects` maps:

```txt
/api/booking-webhook -> /.netlify/functions/booking-webhook
```

Set these environment variables in Netlify:

```txt
BOOKING_WEBHOOK_URL=https://hook.make.com/your-booking-scenario
BOOKING_WEBHOOK_SECRET=optional-shared-secret
```

### Vercel

There is also a Vercel-compatible function at `api/booking-webhook.js`. Set these environment variables in Vercel if using Vercel for the hook:

```txt
BOOKING_WEBHOOK_URL=https://hook.make.com/your-booking-scenario
BOOKING_WEBHOOK_SECRET=optional-shared-secret
```

The webhook receives:

```json
{
  "event": "appointment.booked",
  "booking": {
    "name": "Patient Name",
    "phone": "9999999999",
    "procedure": "Gynecomastia",
    "date": "25 May 2026",
    "time": "10:00 am"
  },
  "messages": {
    "patient": "Hi Patient Name, your consultation...",
    "clinic": "New Booking - CALL NOW..."
  }
}
```

Connect this to Make/Zapier, then send WhatsApp templates through Wati, Interakt, Twilio, or another WhatsApp Business provider.
