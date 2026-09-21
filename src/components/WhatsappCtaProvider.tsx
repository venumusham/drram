import React, { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import LoaderModal from './ui/LoaderModal';
import {
  buildFallbackLink,
  conditionFromUrl,
  requestWhatsappLink,
  type WhatsappCtaContext,
} from '../lib/careConsole';

// How long the user waits on the spinner before we also offer a manual link.
const FALLBACK_AFTER_MS = 4000;
// Small delay before navigating, so the in-flight fetch is not cancelled by the unload.
const REDIRECT_DELAY_MS = 200;

export interface WhatsappCtaValue {
  /** Opens the loader, requests the tracked link, then redirects to WhatsApp. */
  trigger: (context?: WhatsappCtaContext) => void;
  isLoading: boolean;
}

export const WhatsappCtaContextValue = createContext<WhatsappCtaValue | null>(null);

interface ModalState {
  open: boolean;
  showFallback: boolean;
  link: string;
  condition: string;
}

const CLOSED: ModalState = { open: false, showFallback: false, link: '', condition: '' };

/**
 * Owns the single Care Console loader modal for the whole app. Mounted once in
 * App.tsx; CTAs reach it through the useWhatsappCta hook.
 */
const WhatsappCtaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<ModalState>(CLOSED);
  const abortRef = useRef<AbortController | null>(null);
  const timersRef = useRef<number[]>([]);
  // Set once we have actually sent the user to WhatsApp. Until then the page may
  // be hidden for unrelated reasons (alt-tab), and closing would abort the
  // in-flight lead request.
  const handedOffRef = useRef(false);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(window.clearTimeout);
    timersRef.current = [];
  }, []);

  const close = useCallback(() => {
    handedOffRef.current = false;
    abortRef.current?.abort();
    abortRef.current = null;
    clearTimers();
    setState(CLOSED);
  }, [clearTimers]);

  useEffect(() => close, [close]);

  /**
   * WhatsApp takes over the screen as the native app (mobile) or opens in another
   * tab (desktop) — either way this page stays mounted underneath, so the loader
   * would still be spinning when the user comes back. Once we have handed off,
   * close on the next visibility change. The handler deliberately ignores the
   * direction: if the "hidden" event is missed, the one fired on return still
   * clears the modal.
   */
  useEffect(() => {
    if (!state.open) return undefined;

    const closeIfHandedOff = () => {
      if (handedOffRef.current) close();
    };

    document.addEventListener('visibilitychange', closeIfHandedOff);
    window.addEventListener('pagehide', closeIfHandedOff);
    window.addEventListener('blur', closeIfHandedOff);

    return () => {
      document.removeEventListener('visibilitychange', closeIfHandedOff);
      window.removeEventListener('pagehide', closeIfHandedOff);
      window.removeEventListener('blur', closeIfHandedOff);
    };
  }, [state.open, close]);

  // The fallback card is a plain target="_blank" link, so the click is the only
  // signal that the user left for WhatsApp.
  const handleFallbackClick = useCallback(() => {
    handedOffRef.current = true;
  }, []);

  const trigger = useCallback(
    (context: WhatsappCtaContext = {}) => {
      abortRef.current?.abort();
      clearTimers();
      handedOffRef.current = false;

      const condition = context.condition ?? conditionFromUrl();
      const controller = new AbortController();
      abortRef.current = controller;

      setState({
        open: true,
        showFallback: false,
        link: context.fallbackLink || buildFallbackLink(condition),
        condition,
      });

      // The CRM round trip takes a few seconds; if it drags, offer a manual link
      // rather than leaving the user watching a spinner.
      timersRef.current.push(
        window.setTimeout(() => {
          setState((prev) => (prev.open ? { ...prev, showFallback: true } : prev));
        }, FALLBACK_AFTER_MS),
      );

      void requestWhatsappLink({ ...context, condition }, controller.signal).then((link) => {
        if (controller.signal.aborted) return;

        if (!link) {
          setState((prev) => (prev.open ? { ...prev, showFallback: true } : prev));
          return;
        }

        setState((prev) => (prev.open ? { ...prev, link } : prev));
        timersRef.current.push(
          window.setTimeout(() => {
            handedOffRef.current = true;
            window.location.href = link;
          }, REDIRECT_DELAY_MS),
        );
      });
    },
    [clearTimers],
  );

  const value = useMemo<WhatsappCtaValue>(
    () => ({ trigger, isLoading: state.open }),
    [trigger, state.open],
  );

  return (
    <WhatsappCtaContextValue.Provider value={value}>
      {children}
      {state.open && (
        <LoaderModal
          serviceTitle={state.condition}
          showFallback={state.showFallback}
          fallbackLink={state.link}
          onFallbackClick={handleFallbackClick}
          onClose={close}
        />
      )}
    </WhatsappCtaContextValue.Provider>
  );
};

export default WhatsappCtaProvider;
