import React, { useEffect, useState, useRef } from 'react';
import { Layers, Database, Shield, Zap } from 'lucide-react';

const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxItems = [
    { 
      icon: Layers, 
      title: "Multi-Layer Architecture", 
      description: "Advanced security protocols",
      delay: 0,
      speed: 0.5,
      color: "text-neural-purple"
    },
    { 
      icon: Database, 
      title: "Distributed Ledger", 
      description: "Immutable data storage",
      delay: 200,
      speed: 0.3,
      color: "text-cyber-cyan"
    },
    { 
      icon: Shield, 
      title: "Enterprise Security", 
      description: "Bank-grade protection",
      delay: 400,
      speed: 0.7,
      color: "text-plasma-orange"
    },
    { 
      icon: Zap, 
      title: "Lightning Fast", 
      description: "Sub-second transactions",
      delay: 600,
      speed: 0.4,
      color: "text-primary"
    }
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-background overflow-hidden py-32">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0">
        {/* Layer 1 - Slowest */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            transform: `translateY(${scrollY * 0.1}px) scale(${1 + scrollY * 0.0001})`
          }}
        />
        
        {/* Layer 2 - Medium */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
          style={{ transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.01}deg)` }}
        />
        
        {/* Layer 3 - Fastest */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-20 bg-gradient-to-b from-primary/30 to-transparent"
              style={{
                left: `${(i * 12.5)}%`,
                transform: `translateY(${scrollY * (0.3 + i * 0.1)}px) rotateZ(${i * 45}deg)`,
                opacity: Math.abs(Math.sin(scrollY * 0.01 + i)) * 0.5 + 0.2
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="section-title gradient-text">Platform Architecture</h2>
          <p className="section-subtitle">
            Experience our next-generation technology stack built for the future of digital assets
          </p>
        </div>

        {/* Parallax Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {parallaxItems.map((item, index) => {
            const ItemIcon = item.icon;
            
            return (
              <div
                key={index}
                className="relative group"
                style={{
                  transform: `translateY(${scrollY * item.speed}px)`,
                  animationDelay: `${item.delay}ms`
                }}
              >
                <div className="neural-card h-80 flex flex-col items-center justify-center text-center p-8 group-hover:scale-105">
                  {/* Floating Icon */}
                  <div 
                    className="relative mb-6"
                    style={{
                      transform: `translateY(${Math.sin(scrollY * 0.01 + index) * 10}px) rotateY(${scrollY * 0.1}deg)`
                    }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <ItemIcon className={`w-8 h-8 ${item.color} group-hover:scale-125 transition-transform duration-500`} />
                    </div>
                    
                    {/* Orbital Rings */}
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                      <div className="w-20 h-20 border border-primary/20 rounded-full absolute -inset-2" />
                    </div>
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
                      <div className="w-24 h-24 border border-secondary/20 rounded-full absolute -inset-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold font-display mb-3 group-hover:holographic-text transition-all duration-500">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </div>

                {/* Connection Lines */}
                {index < parallaxItems.length - 1 && (
                  <div 
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50"
                    style={{
                      transform: `translateY(${Math.sin(scrollY * 0.005 + index) * 5}px)`,
                      opacity: 0.6 + Math.sin(scrollY * 0.01 + index) * 0.4
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Floating Data Streams */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-px h-32 bg-gradient-to-b from-transparent via-primary/40 to-transparent data-stream`}
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + i * 10}%`,
                transform: `translateY(${scrollY * (0.2 + i * 0.1)}px)`,
                animationDelay: `${i * 500}ms`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;