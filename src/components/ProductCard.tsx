
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

interface ProductCardProps {
  icon: LucideIcon;
  headline: string;
  subheadline: string;
  description: string;
  coreCapabilities: string[];
  status: 'Live' | 'Coming Soon';
  buttonText: string;
  buttonLink: string;
  index: number;
}

const ProductCard = ({ 
  icon: Icon, 
  headline, 
  subheadline,
  description, 
  coreCapabilities,
  status, 
  buttonText, 
  buttonLink,
  index
}: ProductCardProps) => {
  const handleClick = () => {
    if (buttonLink.startsWith('#')) {
      const element = document.getElementById(buttonLink.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = buttonLink;
    }
  };

  const isLive = status === 'Live';

  return (
    <div className="group relative mb-16">
      {/* Main card container */}
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group-hover:border-vayana-blue/30">
        {/* Header section */}
        <div className="relative p-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="flex items-start justify-between mb-6">
            {/* Icon */}
            <div className={`p-4 rounded-xl transition-all duration-300 ${
              isLive 
                ? 'bg-emerald-100 text-emerald-700' 
                : 'bg-blue-100 text-blue-700'
            }`}>
              <Icon className="h-8 w-8" />
            </div>
            
            {/* Status badge */}
            <Badge 
              variant="secondary"
              className={`px-4 py-2 text-sm font-semibold ${
                isLive 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-blue-500 text-white'
              } rounded-lg`}
            >
              {status}
            </Badge>
          </div>
          
          {/* Title and subtitle */}
          <h3 className="text-2xl font-bold mb-3 text-gray-900">
            {headline}
          </h3>
          <h4 className="text-lg font-semibold text-vayana-blue mb-4">
            {subheadline}
          </h4>
        </div>
        
        {/* Content section */}
        <div className="p-8 pt-0">
          {/* Description */}
          <div className="text-gray-700 text-base leading-relaxed mb-6 space-y-4">
            {description.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          {/* Core Capabilities */}
          <div className="mb-8">
            <h5 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-vayana-blue to-vayana-red rounded-full mr-3" />
              Core Capabilities
            </h5>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {coreCapabilities.map((capability, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-vayana-blue/5 transition-colors duration-200"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-vayana-blue to-vayana-red flex-shrink-0" />
                  <span className="text-gray-800 font-medium">
                    {capability}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Action button */}
          <Button 
            onClick={handleClick}
            variant="outline"
            className="w-full border-2 border-vayana-blue text-vayana-blue hover:bg-vayana-blue hover:text-white transition-all duration-300 font-semibold py-3 text-lg rounded-xl"
          >
            {buttonText}
          </Button>
        </div>
        
        {/* Bottom accent */}
        <div className="h-1 bg-gradient-to-r from-vayana-blue via-vayana-purple to-vayana-red" />
      </div>
    </div>
  );
};

export default ProductCard;
