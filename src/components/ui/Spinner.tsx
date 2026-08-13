import React from 'react';

interface SpinnerProps {
  /** Diameter in pixels. */
  size?: number;
  className?: string;
}

/** Circular indeterminate spinner used while a CTA waits on the network. */
const Spinner: React.FC<SpinnerProps> = ({ size = 40, className = '' }) => (
  <span
    role="status"
    aria-label="Loading"
    className={`inline-block animate-spin rounded-full border-[3px] border-gray-200 border-t-primary-600 ${className}`}
    style={{ width: size, height: size }}
  />
);

export default Spinner;
