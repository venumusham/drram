import React from 'react';
import { Stethoscope } from 'lucide-react';

interface LogoProps {
  inverted?: boolean;
}

const Logo: React.FC<LogoProps> = ({ inverted = false }) => {
  const textColor = inverted ? 'text-white' : 'text-white';
  const accentColor = inverted ? 'text-accent-400' : 'text-accent-400';
  
  return (
    <div className="flex items-center">
      <div className={`flex items-center justify-center w-10 h-10 rounded-full ${accentColor} bg-accent-100`}>
        <Stethoscope className={accentColor} size={20} />
      </div>
      <div className="ml-2">
        <div className={`font-serif font-bold text-xl leading-none ${textColor}`}>
          Dr Ramprabhu Clinic
        </div>
      </div>
    </div>
  );
};

export default Logo;