// On desktop, Call buttons open WhatsApp instead of a tel: link (most PCs
// cannot dial). Phones and tablets keep dialing.
//
// Uses the pattern the DecentCare tracker supports: each call link keeps both
// destinations in data-tel / data-wa and we copy the right one onto href. The
// tracker rewrites those data-* values in place (tracking number into data-tel,
// Ref into data-wa), so whichever we copy is already tracked, and the click is
// reported as a call or a WhatsApp click to match where it actually goes.
import { WHATSAPP_INTL, WHATSAPP_DEFAULT_MSG } from '../components/FloatingSocialBar';

const DESKTOP_QUERY = '(hover: hover) and (pointer: fine)';
const DEFAULT_WA = `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`;
// Marks target/rel we added, so switching back to tel: only removes our own.
const ADDED_TARGET = 'data-call-wa-target';

let desktop = false;

/** Takes over a plain tel: link the first time we see it. */
function adopt(link: HTMLAnchorElement): void {
  if (link.hasAttribute('data-tel')) return;
  link.setAttribute('data-tel', link.getAttribute('href') || '');
  if (!link.hasAttribute('data-wa')) link.setAttribute('data-wa', DEFAULT_WA);
}

function apply(link: HTMLAnchorElement): void {
  const tel = link.getAttribute('data-tel') || '';
  const wa = link.getAttribute('data-wa') || '';
  const next = desktop && wa ? wa : tel;
  if (!next) return;

  // Only write on a real change; the observer below watches href.
  if (link.getAttribute('href') !== next) link.setAttribute('href', next);

  if (desktop && wa) {
    if (!link.hasAttribute('target')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      link.setAttribute(ADDED_TARGET, '');
    }
  } else if (link.hasAttribute(ADDED_TARGET)) {
    link.removeAttribute('target');
    link.removeAttribute('rel');
    link.removeAttribute(ADDED_TARGET);
  }
}

function sync(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="tel:"]').forEach(adopt);
  document.querySelectorAll<HTMLAnchorElement>('a[data-tel]').forEach(apply);
}

export function installDesktopCallLinks(): void {
  if (typeof window === 'undefined' || !window.matchMedia) return;
  // Prerender runs in headless Chrome; keep tel: links in the static HTML.
  if (navigator.webdriver) return;

  const media = window.matchMedia(DESKTOP_QUERY);
  desktop = media.matches;
  media.addEventListener('change', (event) => {
    desktop = event.matches;
    sync();
  });

  // React renders call links on every route; React re-rendering a changed
  // phone number resets href, which this also catches.
  let scheduled = false;
  new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      sync();
    });
  }).observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ['href', 'data-tel', 'data-wa'],
  });

  sync();
}
