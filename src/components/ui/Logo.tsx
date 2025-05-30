import React from 'react';
import { Stethoscope } from 'lucide-react';

interface LogoProps {
  inverted?: boolean;
}

const Logo: React.FC<LogoProps> = ({ inverted = false }) => {
  const textColor = inverted ? 'text-accent-500' : 'text-accent-400';
  const accentColor = inverted ? 'text-accent-500' : 'text-accent-400';

  return (
    <div className="flex items-center">
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-full ${accentColor} bg-accent-100`}
      >
        <Stethoscope className={accentColor} size={20} />
      </div>
      <div className="ml-2">
        <div
          className={`font-serif font-bold text-xl leading-none text-accent-400`}
        >
          Dr Ramprabhu
        </div>
      </div>
    </div>
  );
};

export default Logo;
