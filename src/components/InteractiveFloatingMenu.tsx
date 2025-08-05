import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Wallet, 
  FileText, 
  TrendingUp, 
  Shield, 
  MessageCircle,
  Menu,
  X,
  Sparkles
} from 'lucide-react';

const InteractiveFloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const menuItems = [
    { icon: Wallet, label: "Tokenization", description: "Transform assets into digital tokens", color: "text-neural-purple" },
    { icon: FileText, label: "Trade Docs", description: "Streamline documentation", color: "text-cyber-cyan" },
    { icon: TrendingUp, label: "SCF Platform", description: "Supply chain finance", color: "text-plasma-orange" },
    { icon: Shield, label: "Securitization", description: "Asset securitization", color: "text-primary" },
    { icon: MessageCircle, label: "Contact", description: "Get in touch", color: "text-secondary" },
  ];

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setActiveItem((prev) => (prev + 1) % menuItems.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [isOpen, menuItems.length]);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Floating Menu Items */}
      <div className={`absolute bottom-16 right-0 transition-all duration-700 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {menuItems.map((item, index) => {
          const ItemIcon = item.icon;
          const angle = (index * 72) * (Math.PI / 180); // 360/5 = 72 degrees
          const radius = 120;
          const x = Math.cos(angle - Math.PI / 2) * radius;
          const y = Math.sin(angle - Math.PI / 2) * radius;

          return (
            <div
              key={index}
              className={`absolute transition-all duration-700 ${
                isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
              style={{
                right: `${-x}px`,
                bottom: `${-y}px`,
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div
                className={`neural-card w-16 h-16 rounded-2xl flex items-center justify-center cursor-pointer
                  transition-all duration-500 hover:scale-125 hover:rotate-12 group
                  ${activeItem === index ? 'animate-neural-pulse scale-110' : ''}
                `}
                onMouseEnter={() => setActiveItem(index)}
              >
                <ItemIcon className={`w-8 h-8 ${item.color} group-hover:scale-110 transition-transform`} />
                
                {/* Tooltip */}
                <div className={`absolute right-20 bottom-0 glassmorphism px-4 py-2 rounded-lg
                  transition-all duration-300 pointer-events-none whitespace-nowrap
                  ${activeItem === index ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-4'}
                `}>
                  <div className="text-sm font-semibold text-foreground">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.description}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Toggle Button */}
      <Button
        size="lg"
        className={`w-16 h-16 rounded-full shadow-[0_0_40px_hsl(var(--primary-glow))] 
          transition-all duration-500 hover:scale-110 hover:rotate-180 group
          ${isOpen ? 'bg-secondary hover:bg-secondary/90' : 'bg-primary hover:bg-primary/90'}
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`transition-all duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          {isOpen ? (
            <X className="w-8 h-8 text-white" />
          ) : (
            <div className="relative">
              <Menu className="w-8 h-8 text-white" />
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-white animate-pulse" />
            </div>
          )}
        </div>
      </Button>

      {/* Ripple Effect */}
      <div className={`absolute inset-0 rounded-full border-2 border-primary/30 
        ${isOpen ? 'animate-ping' : ''}`} />
    </div>
  );
};

export default InteractiveFloatingMenu;