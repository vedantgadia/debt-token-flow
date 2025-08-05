import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Network } from 'lucide-react';

const ImmersiveHero = () => {
  const [activeParticle, setActiveParticle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveParticle((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const particles = [
    { icon: Network, label: "Ecosystem", color: "text-primary" },
    { icon: Zap, label: "Innovation", color: "text-secondary" },
    { icon: Sparkles, label: "Future", color: "text-accent-foreground" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary/20 rounded-full animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Unified Digital Assets Platform</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight">
                Vayana{' '}
                <span className="gradient-text font-futuristic">
                  Digital Assets
                </span>{' '}
                Platform
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Where tokenization, supply chain finance, trade documentation, and securitization 
              converge into one powerful, integrated ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="hero-button bg-primary hover:bg-primary/90 text-primary-foreground group"
                onClick={() => {
                  const ecosystem = document.getElementById('ecosystem');
                  if (ecosystem) {
                    ecosystem.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Platform Modules
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="hero-button border-primary/30 hover:bg-primary/5"
                onClick={() => {
                  const contact = document.getElementById('contact-form');
                  if (contact) {
                    contact.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Book Demo
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-96 h-96 mx-auto">
              {/* Central hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary animate-glow flex items-center justify-center">
                  <span className="text-white font-futuristic font-bold text-lg">VAYANA</span>
                </div>
              </div>

              {/* Orbiting elements */}
              {particles.map((particle, index) => {
                const ParticleIcon = particle.icon;
                const angle = (index * 120) * (Math.PI / 180);
                const radius = 120;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div
                    key={index}
                    className={`absolute w-20 h-20 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center transition-all duration-500 animate-float ${
                      activeParticle === index ? 'scale-110 border-primary animate-glow' : ''
                    }`}
                    style={{
                      left: `calc(50% + ${x}px - 40px)`,
                      top: `calc(50% + ${y}px - 40px)`,
                      animationDelay: `${index * 2}s`
                    }}
                  >
                    <ParticleIcon className={`w-8 h-8 ${particle.color}`} />
                  </div>
                );
              })}

              {/* Connection lines */}
              {particles.map((_, index) => {
                const angle = (index * 120) * (Math.PI / 180);
                const nextAngle = ((index + 1) * 120) * (Math.PI / 180);
                
                return (
                  <svg
                    key={`line-${index}`}
                    className="absolute inset-0 w-full h-full"
                    style={{ pointerEvents: 'none' }}
                  >
                    <path
                      d={`M ${192 + Math.cos(angle) * 120} ${192 + Math.sin(angle) * 120} Q 192 192 ${192 + Math.cos(nextAngle) * 120} ${192 + Math.sin(nextAngle) * 120}`}
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      fill="none"
                      className="opacity-30"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--secondary))" />
                      </linearGradient>
                    </defs>
                  </svg>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmersiveHero;