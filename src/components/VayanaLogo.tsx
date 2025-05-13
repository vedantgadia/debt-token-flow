
import React from 'react';

interface VayanaLogoProps {
  className?: string;
}

const VayanaLogo: React.FC<VayanaLogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="text-vayana-blue font-bold text-2xl font-display tracking-wide">
        VAYANA<sup className="text-xs font-normal">TM</sup>
      </div>
    </div>
  );
};

export default VayanaLogo;
