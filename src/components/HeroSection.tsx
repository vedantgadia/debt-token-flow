
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-hero-gradient text-white py-20 md:py-32">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
              Reimagining Debt Markets with Tokenisation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-xl">
              From Issuance to Digitization — A New Operating System for Real World Asset Issuers and Marketplace Operators
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="hero-button bg-accent hover:bg-accent/90 text-white flex items-center gap-2"
                onClick={() => {
                  const form = document.getElementById('contact-form');
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Calendar className="h-5 w-5" />
                Book a Demo
              </Button>
              <Button 
                variant="outline" 
                className="hero-button bg-transparent border-white hover:bg-white/10 text-white flex items-center gap-2"
              >
                Know More
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute top-0 left-0 w-full h-full bg-secondary/20 rounded-2xl blur-3xl transform -translate-x-4 translate-y-4 animate-pulse-slow"></div>
              <div className="relative bg-token-gradient rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
                <svg className="w-full h-auto" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7E69AB" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#1EAEDB" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  <rect width="600" height="400" fill="#1A1F2C" />
                  {/* Token abstract art */}
                  <circle cx="300" cy="200" r="80" fill="url(#grad1)" opacity="0.5" />
                  <circle cx="300" cy="200" r="40" fill="#fff" fillOpacity="0.3" />
                  <path d="M220,200 L380,200" stroke="#fff" strokeWidth="2" />
                  <path d="M300,120 L300,280" stroke="#fff" strokeWidth="2" />
                  <circle cx="300" cy="200" r="120" stroke="#fff" strokeWidth="2" fill="none" />
                  
                  {/* Token connections */}
                  <circle cx="180" cy="150" r="20" fill="#7E69AB" fillOpacity="0.7" />
                  <circle cx="420" cy="150" r="20" fill="#1EAEDB" fillOpacity="0.7" />
                  <circle cx="180" cy="250" r="20" fill="#1EAEDB" fillOpacity="0.7" />
                  <circle cx="420" cy="250" r="20" fill="#7E69AB" fillOpacity="0.7" />
                  
                  <path d="M180,150 L300,200 L420,150" stroke="#fff" strokeDasharray="5,5" strokeWidth="2" />
                  <path d="M180,250 L300,200 L420,250" stroke="#fff" strokeDasharray="5,5" strokeWidth="2" />
                  
                  {/* Scattered dots */}
                  {Array.from({ length: 50 }).map((_, i) => (
                    <circle 
                      key={i} 
                      cx={100 + Math.random() * 400} 
                      cy={100 + Math.random() * 200} 
                      r={1 + Math.random() * 3}
                      fill="#fff"
                      fillOpacity={0.3 + Math.random() * 0.7}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
