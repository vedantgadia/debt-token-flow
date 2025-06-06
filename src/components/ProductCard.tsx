
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
  const isEven = index % 2 === 0;

  return (
    <div className={`group relative mb-20 ${isEven ? 'lg:ml-16' : 'lg:mr-16'}`}>
      {/* Floating geometric background */}
      <div className="absolute -inset-4 bg-gradient-to-br from-vayana-blue/10 via-transparent to-vayana-red/10 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500 opacity-50" />
      <div className="absolute -inset-2 bg-gradient-to-tl from-vayana-red/5 via-transparent to-vayana-purple/5 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-700 opacity-30" />
      
      {/* Main card */}
      <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-vayana-blue/30">
        {/* Animated header section */}
        <div className="relative p-8 pb-6 bg-gradient-to-br from-gray-50 to-white">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-vayana-blue/10 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-125 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-vayana-red/10 to-transparent rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-110 transition-transform duration-500" />
          
          <div className="relative flex items-start justify-between">
            {/* Icon with floating animation */}
            <div className={`relative p-6 rounded-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 ${
              isLive 
                ? 'bg-gradient-to-br from-green-100 to-green-200 text-green-700 shadow-green-200/50' 
                : 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 shadow-blue-200/50'
            } shadow-lg`}>
              <Icon className="h-10 w-10" />
              {/* Pulsing dot */}
              <div className={`absolute -top-2 -right-2 w-5 h-5 rounded-full ${
                isLive ? 'bg-green-500' : 'bg-blue-500'
              } animate-pulse shadow-lg`}>
                <div className={`absolute inset-0 rounded-full ${
                  isLive ? 'bg-green-400' : 'bg-blue-400'
                } animate-ping opacity-75`} />
              </div>
            </div>
            
            {/* Status badge with glow effect */}
            <Badge 
              variant="secondary"
              className={`px-6 py-3 text-sm font-bold border-0 backdrop-blur-sm ${
                isLive 
                  ? 'bg-green-500/90 text-white shadow-green-500/30' 
                  : 'bg-blue-500/90 text-white shadow-blue-500/30'
              } shadow-2xl transform group-hover:scale-105 transition-all duration-300`}
            >
              {status}
            </Badge>
          </div>
        </div>
        
        {/* Content section with dynamic layout */}
        <div className="relative p-8 pt-6">
          {/* Title with gradient text */}
          <h3 className="text-3xl font-bold mb-4 font-display bg-gradient-to-r from-gray-900 via-vayana-blue to-vayana-purple bg-clip-text text-transparent leading-tight group-hover:from-vayana-blue group-hover:to-vayana-red transition-all duration-500">
            {headline}
          </h3>
          
          {/* Subheadline with decorative line */}
          <div className="relative mb-6">
            <h4 className="text-xl font-semibold text-vayana-blue mb-3">
              {subheadline}
            </h4>
            <div className="w-20 h-1 bg-gradient-to-r from-vayana-blue to-vayana-red rounded-full transform group-hover:w-32 transition-all duration-500" />
          </div>
          
          {/* Description with enhanced typography */}
          <div className="text-gray-700 text-lg leading-relaxed mb-8 space-y-4">
            {description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="transform group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 100}ms` }}>
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Core Capabilities with creative grid */}
          <div className="mb-10">
            <h5 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-2 h-6 bg-gradient-to-b from-vayana-blue to-vayana-red rounded-full mr-3" />
              Core Capabilities
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coreCapabilities.map((capability, index) => (
                <div 
                  key={index} 
                  className="group/item flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-transparent hover:from-vayana-blue/5 hover:to-vayana-red/5 transition-all duration-300 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-vayana-blue to-vayana-red group-hover/item:scale-125 transition-transform duration-300" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-gradient-to-r from-vayana-blue to-vayana-red opacity-30 group-hover/item:animate-ping" />
                  </div>
                  <span className="text-gray-800 font-medium group-hover/item:text-vayana-blue transition-colors duration-300">
                    {capability}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Action section with floating elements */}
          <div className="relative">
            <div className="flex items-center justify-between">
              <Button 
                onClick={handleClick}
                variant="outline"
                className="flex-1 border-2 border-vayana-blue/30 text-vayana-blue hover:bg-vayana-blue hover:text-white transition-all duration-500 font-semibold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
              >
                {buttonText}
              </Button>
              
              {/* Animated arrow with trail effect */}
              <div className="ml-6 relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-vayana-blue to-vayana-red flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 shadow-lg">
                  <svg className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                {/* Trail effect */}
                <div className="absolute inset-0 w-12 h-12 rounded-full bg-gradient-to-r from-vayana-blue/30 to-vayana-red/30 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom accent with animated pattern */}
        <div className="relative h-2 overflow-hidden">
          <div className={`absolute inset-0 ${
            isLive 
              ? 'bg-gradient-to-r from-green-400 via-green-500 to-green-600' 
              : 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
          } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </div>
      
      {/* Floating number indicator */}
      <div className="absolute -left-4 top-8 w-12 h-12 rounded-full bg-gradient-to-br from-vayana-purple to-vayana-blue text-white font-bold text-xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 z-10">
        {index + 1}
      </div>
    </div>
  );
};

export default ProductCard;
