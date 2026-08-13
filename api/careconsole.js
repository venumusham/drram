// Vercel serverless proxy for the Care Console lead API.
//
// The browser posts the CTA context here; this function forwards it to
// NEXT_PUBLIC_CARE_API_URL and hands back the WhatsApp deep link the CRM
// generates. Keeping it server-side means the endpoint never ships in the
// client bundle. The Netlify twin lives in netlify/functions/careconsole.js.
const REQUEST_TIMEOUT_MS = 12000;

const json = (res, status, body) => {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
};

// The CRM has returned the link under a few different keys over time, so accept
// any of the known shapes rather than failing the CTA on a rename.
export const pickWhatsappLink = (payload) => {
  if (!payload) return null;
  if (typeof payload === 'string') {
    const trimmed = payload.trim();
    return trimmed.startsWith('http') ? trimmed : null;
  }

  const candidate =
    payload.link ||
    payload.url ||
    payload.whatsappLink ||
    payload.whatsapp_link ||
    payload.whatsappUrl ||
    pickWhatsappLink(payload.data) ||
    pickWhatsappLink(payload.body) ||
    pickWhatsappLink(payload.result);

  return typeof candidate === 'string' && candidate.startsWith('http') ? candidate : null;
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return json(res, 405, { ok: false, error: 'Method not allowed' });
  }

  const careApiUrl = process.env.NEXT_PUBLIC_CARE_API_URL || process.env.CARE_API_URL;

  if (!careApiUrl) {
    // Not configured (local static preview, forked deploy) — the client falls
    // back to a plain wa.me link, so this is not an error the user should see.
    return json(res, 200, { ok: true, configured: false, link: null });
  }

  try {
    const payload = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};

    const upstream = await fetch(careApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });

    const raw = await upstream.text();

    if (!upstream.ok) {
      return json(res, 502, { ok: false, error: `Care Console responded ${upstream.status}` });
    }

    let parsed = raw;
    try {
      parsed = JSON.parse(raw);
    } catch {
      // Upstream returned a bare string; pickWhatsappLink handles that.
    }

    return json(res, 200, { ok: true, configured: true, link: pickWhatsappLink(parsed) });
  } catch {
    return json(res, 502, { ok: false, error: 'Care Console request failed' });
  }
}
