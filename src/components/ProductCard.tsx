
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
    <div className={`group relative mb-32 ${isEven ? 'lg:ml-16' : 'lg:mr-16'}`}>
      {/* Floating geometric background */}
      <div className="absolute -inset-6 bg-gradient-to-br from-vayana-blue/20 via-transparent to-vayana-red/20 rounded-[3rem] transform -rotate-2 group-hover:rotate-1 transition-transform duration-700 opacity-60" />
      <div className="absolute -inset-4 bg-gradient-to-tl from-vayana-red/10 via-transparent to-vayana-purple/10 rounded-[2.5rem] transform rotate-1 group-hover:-rotate-1 transition-transform duration-500 opacity-40" />
      <div className="absolute -inset-2 bg-gradient-to-br from-vayana-purple/5 via-transparent to-vayana-blue/5 rounded-[2rem] transform -rotate-1 group-hover:rotate-0.5 transition-transform duration-300 opacity-30" />
      
      {/* Main card container */}
      <div className="relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden border border-gray-200/50 group-hover:border-vayana-blue/40 transform group-hover:-translate-y-4">
        {/* Dynamic header section with flowing gradient */}
        <div className="relative p-10 pb-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-conic from-vayana-blue/20 via-vayana-purple/15 to-vayana-red/20 rounded-full transform translate-x-24 -translate-y-24 group-hover:scale-125 group-hover:rotate-45 transition-all duration-1000" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-vayana-red/15 to-transparent rounded-full transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700" />
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-vayana-purple/10 to-vayana-blue/10 rounded-full transform -translate-x-12 -translate-y-12 group-hover:scale-110 group-hover:rotate-90 transition-all duration-500" />
          
          <div className="relative flex items-start justify-between">
            {/* Enhanced icon with multi-layer effects */}
            <div className={`relative p-8 rounded-3xl transition-all duration-700 transform group-hover:scale-110 group-hover:-translate-y-3 group-hover:rotate-3 ${
              isLive 
                ? 'bg-gradient-to-br from-emerald-100 via-green-100 to-teal-100 text-emerald-700 shadow-emerald-300/60' 
                : 'bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 text-blue-700 shadow-blue-300/60'
            } shadow-2xl backdrop-blur-sm`}>
              <Icon className="h-12 w-12 relative z-10" />
              
              {/* Pulsing indicator with glow */}
              <div className={`absolute -top-3 -right-3 w-6 h-6 rounded-full ${
                isLive ? 'bg-emerald-500' : 'bg-blue-500'
              } shadow-2xl`}>
                <div className={`absolute inset-0 rounded-full ${
                  isLive ? 'bg-emerald-400' : 'bg-blue-400'
                } animate-ping opacity-75`} />
                <div className={`absolute inset-1 rounded-full ${
                  isLive ? 'bg-emerald-300' : 'bg-blue-300'
                } animate-pulse`} />
              </div>
              
              {/* Icon background glow */}
              <div className={`absolute inset-0 rounded-3xl ${
                isLive ? 'bg-emerald-400/20' : 'bg-blue-400/20'
              } blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </div>
            
            {/* Enhanced status badge with premium styling */}
            <Badge 
              variant="secondary"
              className={`px-8 py-4 text-base font-bold border-0 backdrop-blur-md relative overflow-hidden ${
                isLive 
                  ? 'bg-emerald-500/95 text-white shadow-emerald-500/40' 
                  : 'bg-blue-500/95 text-white shadow-blue-500/40'
              } shadow-2xl transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300 rounded-2xl`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">{status}</span>
            </Badge>
          </div>
        </div>
        
        {/* Enhanced content section */}
        <div className="relative p-10 pt-8 bg-gradient-to-b from-white to-gray-50/50">
          {/* Gradient title with enhanced typography */}
          <h3 className="text-4xl font-bold mb-6 font-display bg-gradient-to-r from-gray-900 via-vayana-blue to-vayana-purple bg-clip-text text-transparent leading-tight group-hover:from-vayana-blue group-hover:via-vayana-purple group-hover:to-vayana-red transition-all duration-700">
            {headline}
          </h3>
          
          {/* Enhanced subheadline with decorative elements */}
          <div className="relative mb-8">
            <h4 className="text-2xl font-semibold text-vayana-blue mb-4 leading-relaxed">
              {subheadline}
            </h4>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-24 h-1.5 bg-gradient-to-r from-vayana-blue to-vayana-red rounded-full transform group-hover:w-40 transition-all duration-700" />
              <div className="w-3 h-3 rounded-full bg-vayana-blue group-hover:bg-vayana-red transition-colors duration-700" />
              <div className="w-6 h-1 bg-vayana-purple rounded-full opacity-60" />
            </div>
          </div>
          
          {/* Enhanced description with better spacing */}
          <div className="text-gray-700 text-xl leading-relaxed mb-10 space-y-6">
            {description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="transform group-hover:translate-x-2 transition-transform duration-500 relative" style={{ transitionDelay: `${index * 150}ms` }}>
                <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-vayana-blue to-vayana-red opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-full" />
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Enhanced Core Capabilities section */}
          <div className="mb-12">
            <div className="flex items-center mb-8">
              <div className="w-3 h-8 bg-gradient-to-b from-vayana-blue via-vayana-purple to-vayana-red rounded-full mr-4" />
              <h5 className="text-2xl font-bold text-gray-900">Core Capabilities</h5>
              <div className="flex-1 ml-4 h-px bg-gradient-to-r from-vayana-blue/30 to-transparent" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreCapabilities.map((capability, index) => (
                <div 
                  key={index} 
                  className="group/item relative p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-vayana-blue/10 hover:to-vayana-red/10 transition-all duration-500 transform hover:translate-x-3 hover:-translate-y-1 border border-gray-100 hover:border-vayana-blue/30 shadow-sm hover:shadow-lg"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-vayana-blue to-vayana-red group-hover/item:scale-125 transition-transform duration-300" />
                      <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r from-vayana-blue to-vayana-red opacity-40 group-hover/item:animate-ping" />
                      <div className="absolute -inset-1 w-6 h-6 rounded-full bg-gradient-to-r from-vayana-blue/20 to-vayana-red/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                    </div>
                    <span className="text-gray-800 font-semibold text-lg group-hover/item:text-vayana-blue transition-colors duration-300">
                      {capability}
                    </span>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced action section */}
          <div className="relative">
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200/50 group-hover:border-vayana-blue/30 transition-all duration-500">
              <Button 
                onClick={handleClick}
                variant="outline"
                className="flex-1 mr-6 border-2 border-vayana-blue/40 text-vayana-blue hover:bg-vayana-blue hover:text-white transition-all duration-500 font-bold py-6 text-xl rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              >
                <span className="relative z-10">{buttonText}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-vayana-blue to-vayana-red opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
              </Button>
              
              {/* Enhanced animated arrow */}
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-vayana-blue via-vayana-purple to-vayana-red flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-6 group-hover:translate-x-0 shadow-2xl hover:shadow-vayana-blue/25 hover:scale-110">
                  <svg className="w-8 h-8 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                {/* Enhanced trail effect */}
                <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-vayana-blue/40 to-vayana-red/40 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500" />
                <div className="absolute inset-2 w-12 h-12 rounded-xl bg-gradient-to-br from-vayana-purple/30 to-vayana-blue/30 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced bottom accent with flowing animation */}
        <div className="relative h-3 overflow-hidden">
          <div className={`absolute inset-0 ${
            isLive 
              ? 'bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600' 
              : 'bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600'
          } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`} />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
          <div className={`absolute inset-0 ${
            isLive ? 'bg-emerald-300/50' : 'bg-blue-300/50'
          } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right`} style={{ transitionDelay: '200ms' }} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
