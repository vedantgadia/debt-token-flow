
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

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full">
      <div className="flex items-start gap-4 mb-6">
        <div className="bg-vayana-blue/10 p-3 rounded-lg">
          <Icon className="h-8 w-8 text-vayana-blue" />
        </div>
        <div className="flex-1">
          <Badge 
            variant={status === 'Live' ? 'default' : 'secondary'}
            className={`mb-3 ${status === 'Live' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}
          >
            {status}
          </Badge>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-4 font-display">
        {headline}
      </h3>
      
      <p className="text-gray-600 mb-6 flex-grow">
        {description}
      </p>
      
      <div className="mt-auto">
        <Button 
          onClick={handleClick}
          className="w-full bg-vayana-gradient hover:opacity-90 text-white"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
