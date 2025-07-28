import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
const TokenizationImages = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
  // Digital Token Network
  <svg className="w-full h-auto" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" key="network">
      <defs>
        <linearGradient id="tokenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E3032C" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#723189" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#194388" stopOpacity="0.8" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge> 
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="600" height="400" fill="#0A0E1A" />
      
      {/* Central token */}
      <circle cx="300" cy="200" r="40" fill="url(#tokenGrad)" filter="url(#glow)" />
      <circle cx="300" cy="200" r="25" fill="none" stroke="#fff" strokeWidth="2" opacity="0.7" />
      <text x="300" y="210" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">T</text>
      
      {/* Surrounding tokens */}
      <g>
        <circle cx="200" cy="120" r="20" fill="#E3032C" opacity="0.8" />
        <circle cx="400" cy="120" r="20" fill="#194388" opacity="0.8" />
        <circle cx="150" cy="200" r="20" fill="#723189" opacity="0.8" />
        <circle cx="450" cy="200" r="20" fill="#E3032C" opacity="0.8" />
        <circle cx="200" cy="280" r="20" fill="#194388" opacity="0.8" />
        <circle cx="400" cy="280" r="20" fill="#723189" opacity="0.8" />
      </g>
      
      {/* Connecting lines */}
      <g stroke="#fff" strokeWidth="2" opacity="0.4" strokeDasharray="5,5">
        <line x1="300" y1="200" x2="200" y2="120" />
        <line x1="300" y1="200" x2="400" y2="120" />
        <line x1="300" y1="200" x2="150" y2="200" />
        <line x1="300" y1="200" x2="450" y2="200" />
        <line x1="300" y1="200" x2="200" y2="280" />
        <line x1="300" y1="200" x2="400" y2="280" />
      </g>
      
      {/* Floating particles */}
      {Array.from({
      length: 30
    }).map((_, i) => <circle key={i} cx={50 + Math.random() * 500} cy={50 + Math.random() * 300} r={1 + Math.random() * 2} fill="#fff" opacity={0.3 + Math.random() * 0.7} />)}
    </svg>,
  // Blockchain Cubes
  <svg className="w-full h-auto" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" key="blockchain">
      <defs>
        <linearGradient id="cubeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#194388" />
          <stop offset="50%" stopColor="#723189" />
          <stop offset="100%" stopColor="#E3032C" />
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="#0F1419" />
      
      {/* Blockchain cubes */}
      <g transform="translate(100,150)">
        {[0, 1, 2, 3, 4].map(i => <g key={i} transform={`translate(${i * 80}, 0)`}>
            {/* Cube faces */}
            <polygon points="0,0 40,0 60,20 20,20" fill="url(#cubeGrad)" opacity="0.9" />
            <polygon points="40,0 40,40 60,60 60,20" fill="url(#cubeGrad)" opacity="0.7" />
            <polygon points="0,0 0,40 20,60 20,20" fill="url(#cubeGrad)" opacity="0.5" />
            
            {/* Token symbol */}
            <circle cx="20" cy="20" r="8" fill="#fff" opacity="0.8" />
            <text x="20" y="25" textAnchor="middle" fill="#194388" fontSize="10" fontWeight="bold">$</text>
            
            {/* Connection lines */}
            {i < 4 && <line x1="60" y1="40" x2="80" y2="40" stroke="#fff" strokeWidth="2" opacity="0.6" />}
          </g>)}
      </g>
      
      {/* Digital rain effect */}
      {Array.from({
      length: 20
    }).map((_, i) => <line key={i} x1={50 + i * 25} y1="0" x2={50 + i * 25} y2="400" stroke="url(#cubeGrad)" strokeWidth="1" opacity="0.2" strokeDasharray="10,20" />)}
    </svg>,
  // Digital Asset Flow
  <svg className="w-full h-auto" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" key="flow">
      <defs>
        <radialGradient id="flowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E3032C" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#194388" stopOpacity="0.3" />
        </radialGradient>
      </defs>
      <rect width="600" height="400" fill="#1A1F2C" />
      
      {/* Central hub */}
      <circle cx="300" cy="200" r="60" fill="url(#flowGrad)" />
      <circle cx="300" cy="200" r="30" fill="none" stroke="#fff" strokeWidth="3" />
      
      {/* Asset nodes */}
      {[0, 1, 2, 3, 4, 5].map(i => {
      const angle = i * 60 * Math.PI / 180;
      const x = 300 + Math.cos(angle) * 120;
      const y = 200 + Math.sin(angle) * 120;
      return <g key={i}>
            <circle cx={x} cy={y} r="25" fill="#723189" opacity="0.8" />
            <circle cx={x} cy={y} r="15" fill="#fff" opacity="0.9" />
            
            {/* Flow lines */}
            <path d={`M 300 200 Q ${(300 + x) / 2} ${(200 + y) / 2 - 30} ${x} ${y}`} stroke="#fff" strokeWidth="2" fill="none" opacity="0.6" strokeDasharray="5,10" />
            
            {/* Flow particles */}
            <circle cx={(300 + x) / 2} cy={(200 + y) / 2} r="3" fill="#E3032C" opacity="0.8">
              <animateTransform attributeName="transform" type="translate" values={`0,0; ${x - 300},${y - 200}`} dur="3s" repeatCount="indefinite" />
            </circle>
          </g>;
    })}
      
      {/* Background grid */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.1" />
        </pattern>
      </defs>
      <rect width="600" height="400" fill="url(#grid)" />
    </svg>];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);
  return <div className="relative w-full max-w-md">
      <div className="absolute top-0 left-0 w-full h-full bg-vayana-red/20 rounded-2xl blur-3xl transform -translate-x-4 translate-y-4 animate-pulse-slow"></div>
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl animate-fade-in border border-vayana-blue/30">
        <div className="transition-all duration-1000 ease-in-out">
          {images[currentImage]}
        </div>
        
        {/* Image indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => <button key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImage === index ? 'bg-white' : 'bg-white/40'}`} onClick={() => setCurrentImage(index)} />)}
        </div>
      </div>
    </div>;
};
const HeroSection = () => {
  return <section className="bg-vayana-gradient text-white min-h-screen flex flex-col justify-center relative">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">Vayana Debt Platform</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-xl">Reimagining Private Credit Market with Tokenization</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="hero-button bg-vayana-blue hover:bg-vayana-blue/90 text-white flex items-center gap-2" onClick={() => {
              const form = document.getElementById('contact-form');
              if (form) {
                form.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            }}>
                <Calendar className="h-5 w-5" />
                Book a Demo
              </Button>
              <Button variant="outline" className="hero-button bg-transparent border-white hover:bg-white/10 text-white flex items-center gap-2" onClick={() => {
                const vdpSection = document.getElementById('about');
                if (vdpSection) {
                  vdpSection.scrollIntoView({
                    behavior: 'smooth'
                  });
                }
              }}>
                Know More
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <TokenizationImages />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white/80">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowRight className="h-5 w-5 transform rotate-90" />
        </div>
      </div>
    </section>;
};
export default HeroSection;