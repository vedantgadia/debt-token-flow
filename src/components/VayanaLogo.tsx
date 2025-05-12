
import React from 'react';

interface VayanaLogoProps {
  className?: string;
}

const VayanaLogo: React.FC<VayanaLogoProps> = ({ className = '' }) => {
  return (
    <div className={`vayana-logo ${className}`}>
      <div className="vayana-logo-v">
        <div className="vayana-logo-red-bars"></div>
        <div className="vayana-logo-blue-bars"></div>
      </div>
      <div className="vayana-logo-text">VAYANA<sup className="text-[10px] font-normal">TM</sup></div>
    </div>
  );
};

export default VayanaLogo;
