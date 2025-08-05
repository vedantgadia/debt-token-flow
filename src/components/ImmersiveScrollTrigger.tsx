import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Sparkles, Zap, Globe } from 'lucide-react';

interface ScrollSection {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<any>;
  color: string;
  bgGradient: string;
}

const ImmersiveScrollTrigger = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const sections: ScrollSection[] = [
    {
      id: 'innovation',
      title: 'Innovation Pipeline',
      subtitle: 'Building the future of digital finance',
      icon: Sparkles,
      color: 'text-neural-purple',
      bgGradient: 'from-neural-purple/20 to-transparent'
    },
    {
      id: 'technology',
      title: 'Advanced Technology',
      subtitle: 'Cutting-edge blockchain solutions',
      icon: Zap,
      color: 'text-cyber-cyan',
      bgGradient: 'from-cyber-cyan/20 to-transparent'
    },
    {
      id: 'global',
      title: 'Global Vision',
      subtitle: 'Transforming worldwide finance',
      icon: Globe,
      color: 'text-plasma-orange',
      bgGradient: 'from-plasma-orange/20 to-transparent'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      
      setScrollProgress(progress);
      
      // Determine active section based on scroll progress
      const sectionIndex = Math.floor(progress * sections.length);
      setActiveSection(Math.min(sectionIndex, sections.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

  return (
    <div ref={containerRef} className="relative min-h-screen py-32 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`absolute inset-0 bg-gradient-to-br ${section.bgGradient} transition-opacity duration-1000 ${
              activeSection === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 bg-cyber-grid opacity-30"
          style={{
            transform: `translateY(${scrollProgress * 100}px) scale(${1 + scrollProgress * 0.2})`,
            backgroundSize: `${40 + scrollProgress * 20}px ${40 + scrollProgress * 20}px`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="w-full h-1 bg-border/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
          </div>

          {/* Active Section Content */}
          {sections.map((section, index) => {
            const SectionIcon = section.icon;
            return (
              <div
                key={section.id}
                className={`transition-all duration-700 ${
                  activeSection === index 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 translate-y-8'
                }`}
              >
                {activeSection === index && (
                  <>
                    <div className="mb-8">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full neural-card mb-6">
                        <SectionIcon className={`w-12 h-12 ${section.color} animate-neural-pulse`} />
                      </div>
                    </div>
                    
                    <h2 className="text-6xl md:text-8xl font-bold font-futuristic holographic-text mb-6">
                      {section.title}
                    </h2>
                    
                    <p className="text-2xl md:text-3xl text-muted-foreground mb-12 animate-fade-in">
                      {section.subtitle}
                    </p>
                  </>
                )}
              </div>
            );
          })}

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full
                  animate-float opacity-60`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${4 + Math.random() * 4}s`,
                  transform: `translateY(${scrollProgress * -200}px)`
                }}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-4 animate-bounce">
            <div className="text-sm text-muted-foreground font-medium">Scroll to explore</div>
            <ChevronDown className="w-6 h-6 text-primary animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmersiveScrollTrigger;