// Care Console WhatsApp CTA integration.
//
// A CTA click posts the page context to /api/careconsole, which forwards it to
// the Care Console CRM and returns a tracked WhatsApp deep link. That round trip
// takes a few seconds, so callers show a loader (see useWhatsappCta) and always
// have a plain wa.me link to fall back on if the CRM is slow or unreachable.
import { WHATSAPP_INTL, WHATSAPP_DEFAULT_MSG } from '../components/FloatingSocialBar';

// Single-department site: Plastic and Cosmetic — Dr. Ram Prabhu.
export const DEPARTMENT = 'Plastic and Cosmetic';
export const DEFAULT_DOCTOR = 'Dr. Ram Prabhu';

const RETRIES = 2;

export interface CareConsoleLead {
  Form_Type: string;
  Website: string;
  Department: string;
  Condition: string;
  Doctor_Name: string;
}

export interface WhatsappCtaContext {
  /** Where the click came from, e.g. 'Hero WhatsApp' or 'Floating Bar'. */
  formType?: string;
  /** Overrides the condition derived from the URL, e.g. 'Liposuction'. */
  condition?: string;
  doctorName?: string;
  /**
   * The wa.me link to fall back on if the CRM is slow or unreachable. Defaults
   * to a generic one; pass the CTA's own link to keep its prefilled message.
   */
  fallbackLink?: string;
}

/**
 * Derives the condition from the first path segment, e.g.
 * `/liposuction-hyderabad` -> `Liposuction Hyderabad`. Nested service routes
 * (`/services/facelift`) use the last segment, which is the procedure.
 */
export const conditionFromUrl = (): string => {
  if (typeof window === 'undefined') return '';

  const segments = window.location.pathname.split('/').filter(Boolean);
  const slug = segments.length > 1 ? segments[segments.length - 1] : segments[0];
  if (!slug) return '';

  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const buildLead = ({
  formType = 'WhatsApp',
  condition,
  doctorName,
}: Omit<WhatsappCtaContext, 'fallbackLink'> = {}): CareConsoleLead => ({
  Form_Type: formType,
  Website: typeof window === 'undefined' ? '' : window.location.href,
  Department: DEPARTMENT,
  Condition: condition ?? conditionFromUrl(),
  Doctor_Name: doctorName || DEFAULT_DOCTOR,
});

/** The wa.me link used whenever the CRM does not return one of its own. */
export const buildFallbackLink = (condition?: string): string => {
  const topic = condition ?? conditionFromUrl();
  const message = topic
    ? `Hi! I'm interested in ${topic}. Please share the details.`
    : WHATSAPP_DEFAULT_MSG;

  return `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(message)}`;
};

/**
 * Records the lead in Care Console without waiting for or using the link it
 * returns. For CTAs that must keep their own prefilled WhatsApp message — the
 * booking form, whose message carries the patient's name, slot and procedure.
 */
export function logLead(context: WhatsappCtaContext = {}): void {
  void requestWhatsappLink(context);
}

/**
 * Posts the lead and resolves with the CRM's WhatsApp link, or `null` if the
 * request failed or the CRM returned no link. Never throws — a broken CTA is
 * worse than an untracked one, so the caller just uses the fallback link.
 */
export async function requestWhatsappLink(
  context: WhatsappCtaContext = {},
  signal?: AbortSignal,
): Promise<string | null> {
  const lead = buildLead(context);

  for (let attempt = 0; attempt <= RETRIES; attempt += 1) {
    if (signal?.aborted) return null;

    try {
      const response = await fetch('/api/careconsole', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
        signal,
      });

      if (!response.ok) {
        // 4xx/5xx are terminal — retrying will not change the outcome.
        return null;
      }

      const data = (await response.json()) as { link?: string | null };
      return data?.link ?? null;
    } catch (error) {
      // The user navigated away or closed the loader; not a failure.
      if (signal?.aborted || (error as Error)?.name === 'AbortError') return null;
      if (attempt === RETRIES) return null;
    }
  }

  return null;
}
