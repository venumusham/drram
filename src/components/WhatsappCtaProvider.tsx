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

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(window.clearTimeout);
    timersRef.current = [];
  }, []);

  const close = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    clearTimers();
    setState(CLOSED);
  }, [clearTimers]);

  useEffect(() => close, [close]);

  const trigger = useCallback(
    (context: WhatsappCtaContext = {}) => {
      abortRef.current?.abort();
      clearTimers();

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
          onClose={close}
        />
      )}
    </WhatsappCtaContextValue.Provider>
  );
};

export default WhatsappCtaProvider;
