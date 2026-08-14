import React, { useEffect } from 'react';
import Spinner from './Spinner';

interface LoaderModalProps {
  /** Prefilled into the fallback WhatsApp message, e.g. 'Liposuction'. */
  serviceTitle?: string;
  /** Shows the manual "Open in WhatsApp" card once the wait gets long or the CRM fails. */
  showFallback?: boolean;
  /** Link used by the fallback card — the CRM link when we have one, wa.me otherwise. */
  fallbackLink: string;
  onClose?: () => void;
}

const LoaderModal: React.FC<LoaderModalProps> = ({
  serviceTitle,
  showFallback = false,
  fallbackLink,
  onClose,
}) => {
  // Escape closes, and the page behind must not scroll while the modal is up.
  useEffect(() => {
    if (!onClose) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Connecting to WhatsApp"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-md flex-col items-center justify-center rounded-lg bg-white p-6 text-center shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        {onClose && (
          <button
            type="button"
            className="absolute right-3 top-3 text-gray-900 transition hover:text-gray-600"
            onClick={onClose}
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        <Spinner />
        <p className="mt-4 text-gray-700">Chat on WhatsApp...</p>

        {showFallback && (
          <a
            href={fallbackLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-between gap-3 rounded-xl border border-gray-200 p-4"
            data-conversion="whatsapp_manual_fallback"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-100 p-2">
                <svg viewBox="0 0 40 40" height="24" width="24" fill="none" aria-hidden="true">
                  <rect width="40" height="40" rx="2" fill="#25D366" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.16 19.89C7.16 12.81 12.95 7.06 20.05 7.06C23.5 7.06 26.74 8.4 29.17 10.82C31.6 13.24 32.94 16.47 32.94 19.9C32.94 26.97 27.16 32.73 20.05 32.73C17.95 32.72 15.88 32.21 14.04 31.24L7.58 32.93C7.27 33.01 6.99 32.72 7.07 32.41L8.8 26.15C7.73 24.24 7.16 22.09 7.16 19.89ZM20.05 30.44C18.16 30.44 16.32 29.93 14.71 28.98L14.32 28.76L10.36 29.79L11.42 25.94L11.17 25.55C10.12 23.89 9.56 21.97 9.56 20C9.57 14.24 14.27 9.56 20.05 9.56C22.85 9.56 25.48 10.65 27.46 12.62C29.44 14.59 30.53 17.22 30.53 20C30.53 25.76 25.82 30.44 20.05 30.44Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">Open in WhatsApp</p>
                <p className="text-xs text-gray-600">
                  {serviceTitle
                    ? `Continue your ${serviceTitle} enquiry here.`
                    : "If it doesn't open automatically, click here."}
                </p>
              </div>
            </div>
            <span className="shrink-0 rounded-full bg-green-500 px-4 py-2 text-sm text-white transition hover:bg-green-600">
              Chat ↗
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default LoaderModal;
