
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

interface ProductCardProps {
  icon: LucideIcon;
  headline: string;
  description: string;
  status: 'Live' | 'Coming Soon';
  buttonText: string;
  buttonLink: string;
}

const ProductCard = ({ icon: Icon, headline, description, status, buttonText, buttonLink }: ProductCardProps) => {
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
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-vayana-blue/20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-vayana-blue/5 via-transparent to-vayana-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative p-6">
        {/* Header with icon and status */}
        <div className="flex items-start justify-between mb-4">
          <div className={`relative p-3 rounded-xl transition-all duration-300 ${
            isLive 
              ? 'bg-green-100 text-green-700 group-hover:bg-green-200' 
              : 'bg-blue-100 text-blue-700 group-hover:bg-blue-200'
          }`}>
            <Icon className="h-6 w-6" />
            {/* Decorative dot */}
            <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
              isLive ? 'bg-green-500' : 'bg-blue-500'
            } animate-pulse`} />
          </div>
          
          <Badge 
            variant="secondary"
            className={`px-3 py-1 text-xs font-semibold border-0 ${
              isLive 
                ? 'bg-green-100 text-green-800 shadow-green-100/50' 
                : 'bg-blue-100 text-blue-800 shadow-blue-100/50'
            } shadow-lg`}
          >
            {status}
          </Badge>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold mb-3 font-display text-gray-900 group-hover:text-vayana-blue transition-colors duration-300 leading-tight">
          {headline}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {description}
        </p>
        
        {/* Action button */}
        <div className="flex items-center justify-between">
          <Button 
            onClick={handleClick}
            variant="outline"
            className="flex-1 border-vayana-blue/20 text-vayana-blue hover:bg-vayana-blue hover:text-white transition-all duration-300 font-medium"
          >
            {buttonText}
          </Button>
          
          {/* Decorative arrow */}
          <div className="ml-3 w-8 h-8 rounded-full bg-vayana-gradient flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className={`h-1 w-full ${
        isLive ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-blue-400 to-blue-600'
      } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
    </div>
  );
};

export default ProductCard;
