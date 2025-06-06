
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
      {/* Main card container with enhanced hover effects */}
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 group-hover:border-vayana-blue/30 transform group-hover:-translate-y-2 group-hover:scale-[1.02]">
        {/* Animated background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-vayana-blue/5 via-transparent to-vayana-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Header section */}
        <div className="relative p-8 bg-gradient-to-br from-gray-50 to-white group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-500">
          <div className="flex items-start justify-between mb-6">
            {/* Icon with enhanced animation */}
            <div className={`p-4 rounded-xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 ${
              isLive 
                ? 'bg-emerald-100 text-emerald-700 group-hover:bg-emerald-200' 
                : 'bg-blue-100 text-blue-700 group-hover:bg-blue-200'
            }`}>
              <Icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
            </div>
            
            {/* Status badge with pulse animation */}
            <Badge 
              variant="secondary"
              className={`px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                isLive 
                  ? 'bg-emerald-500 text-white group-hover:bg-emerald-600 group-hover:animate-pulse' 
                  : 'bg-blue-500 text-white group-hover:bg-blue-600 group-hover:animate-pulse'
              } rounded-lg transform group-hover:scale-105`}
            >
              {status}
            </Badge>
          </div>
          
          {/* Title and subtitle with staggered animation */}
          <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-vayana-blue transition-colors duration-300">
            {headline}
          </h3>
          <h4 className="text-lg font-semibold text-vayana-blue mb-4 group-hover:text-vayana-purple transition-colors duration-300">
            {subheadline}
          </h4>
        </div>
        
        {/* Content section */}
        <div className="p-8 pt-0 relative z-10">
          {/* Description */}
          <div className="text-gray-700 text-base leading-relaxed mb-6 space-y-4 group-hover:text-gray-800 transition-colors duration-300">
            {description.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          {/* Core Capabilities with enhanced animations */}
          <div className="mb-8">
            <h5 className="text-lg font-bold text-gray-900 mb-4 flex items-center group-hover:text-vayana-blue transition-colors duration-300">
              <div className="w-1 h-6 bg-gradient-to-b from-vayana-blue to-vayana-red rounded-full mr-3 group-hover:h-8 transition-all duration-300" />
              Core Capabilities
            </h5>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {coreCapabilities.map((capability, capIndex) => (
                <div 
                  key={capIndex} 
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-vayana-blue/10 transition-all duration-300 transform hover:translate-x-2 hover:shadow-md"
                  style={{
                    animationDelay: `${capIndex * 100}ms`
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-vayana-blue to-vayana-red flex-shrink-0 group-hover:animate-pulse" />
                  <span className="text-gray-800 font-medium group-hover:text-vayana-blue transition-colors duration-300">
                    {capability}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Action button with enhanced hover effects */}
          <Button 
            onClick={handleClick}
            variant="outline"
            className="w-full border-2 border-vayana-blue text-vayana-blue hover:bg-vayana-blue hover:text-white transition-all duration-300 font-semibold py-3 text-lg rounded-xl transform hover:scale-105 hover:shadow-lg group-hover:border-vayana-purple group-hover:text-vayana-purple hover:bg-gradient-to-r hover:from-vayana-blue hover:to-vayana-purple"
          >
            {buttonText}
          </Button>
        </div>
        
        {/* Bottom accent with animation */}
        <div className="h-1 bg-gradient-to-r from-vayana-blue via-vayana-purple to-vayana-red group-hover:h-2 transition-all duration-300" />
        
        {/* Floating elements for extra engagement */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-vayana-blue/10 to-vayana-purple/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-150 group-hover:rotate-180" />
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tl from-vayana-red/10 to-vayana-orange/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-125 group-hover:-rotate-90" />
      </div>
    </div>
  );
};

export default ProductCard;
