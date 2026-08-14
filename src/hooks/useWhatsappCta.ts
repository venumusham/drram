import { useContext } from 'react';
import {
  WhatsappCtaContextValue,
  type WhatsappCtaValue,
} from '../components/WhatsappCtaProvider';

/**
 * Wires a WhatsApp CTA to the Care Console API. Clicking shows a loader, fetches
 * the tracked deep link, and redirects; if the API is slow or down the loader
 * offers a plain wa.me link instead, so the CTA always converts.
 *
 *   const { trigger } = useWhatsappCta();
 *   <button onClick={() => trigger({ formType: 'Hero WhatsApp' })}>WhatsApp</button>
 *
 * Requires <WhatsappCtaProvider> above it in the tree (mounted in App.tsx).
 */
export function useWhatsappCta(): WhatsappCtaValue {
  const value = useContext(WhatsappCtaContextValue);

  if (!value) {
    throw new Error('useWhatsappCta must be used within <WhatsappCtaProvider>');
  }

  return value;
}
