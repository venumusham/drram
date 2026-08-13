// Netlify twin of api/careconsole.js — see that file for the full rationale.
// Reached via the /api/* redirect in netlify.toml.
const REQUEST_TIMEOUT_MS = 12000;

const json = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  body: JSON.stringify(body),
});

const pickWhatsappLink = (payload) => {
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

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { Allow: 'POST', 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: false, error: 'Method not allowed' }),
    };
  }

  const careApiUrl = process.env.NEXT_PUBLIC_CARE_API_URL || process.env.CARE_API_URL;

  if (!careApiUrl) {
    return json(200, { ok: true, configured: false, link: null });
  }

  try {
    const payload = JSON.parse(event.body || '{}');

    const upstream = await fetch(careApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });

    const raw = await upstream.text();

    if (!upstream.ok) {
      return json(502, { ok: false, error: `Care Console responded ${upstream.status}` });
    }

    let parsed = raw;
    try {
      parsed = JSON.parse(raw);
    } catch {
      // Upstream returned a bare string; pickWhatsappLink handles that.
    }

    return json(200, { ok: true, configured: true, link: pickWhatsappLink(parsed) });
  } catch {
    return json(502, { ok: false, error: 'Care Console request failed' });
  }
};
