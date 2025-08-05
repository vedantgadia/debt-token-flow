
import React from 'react';

interface VayanaLogoProps {
  className?: string;
}

const VayanaLogo: React.FC<VayanaLogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/b47b3f90-ef22-4a3e-be9b-c1c945af9b79.png" 
        alt="Vayana Logo" 
        className="h-12 w-auto"
      />
    </div>
  );
};

export default VayanaLogo;
