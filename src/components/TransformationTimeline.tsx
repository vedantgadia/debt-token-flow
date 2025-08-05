import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  TrendingUp, 
  Zap, 
  Sparkles, 
  ArrowRight,
  Building,
  Computer,
  Smartphone,
  Cpu,
  Brain
} from 'lucide-react';

const TransformationTimeline = () => {
  const [activeEra, setActiveEra] = useState(4); // Start at "Today"
  const [isAnimating, setIsAnimating] = useState(false);

  const eras = [
    {
      id: 0,
      year: '1980s',
      title: 'Traditional Banking',
      description: 'Paper-based processes, manual verification, weeks for settlements',
      icon: Building,
      color: 'text-gray-500',
      bgColor: 'bg-gray-100',
      challenges: ['Manual Processes', 'Slow Settlements', 'High Costs', 'Limited Access'],
      status: 'legacy'
    },
    {
      id: 1,
      year: '1990s',
      title: 'Digital Banking',
      description: 'Online banking emerges, electronic transfers, faster processing',
      icon: Computer,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      challenges: ['System Integration', 'Security Concerns', 'Digital Divide', 'Fragmented Systems'],
      status: 'evolution'
    },
    {
      id: 2,
      year: '2000s',
      title: 'Mobile Revolution',
      description: 'Mobile banking, real-time payments, digital wallets',
      icon: Smartphone,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      challenges: ['Mobile Security', 'User Adoption', 'Cross-platform Issues', 'Regulatory Gaps'],
      status: 'evolution'
    },
    {
      id: 3,
      year: '2010s',
      title: 'Blockchain Era',
      description: 'Distributed ledgers, smart contracts, cryptocurrency adoption',
      icon: Cpu,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      challenges: ['Scalability', 'Energy Consumption', 'Regulatory Uncertainty', 'Technical Complexity'],
      status: 'revolution'
    },
    {
      id: 4,
      year: 'Today',
      title: 'Digital Assets Platform',
      description: 'Unified ecosystem for tokenization, trade finance, and asset management',
      icon: Brain,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      challenges: ['Solved by Vayana'],
      status: 'current'
    }
  ];

  const vayanaAdvantages = [
    {
      title: 'Instant Settlement',
      description: 'From weeks to seconds with blockchain infrastructure',
      metric: '99.9% faster'
    },
    {
      title: 'Global Accessibility',
      description: 'Access from anywhere, anytime, any device',
      metric: '24/7 availability'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Built-in compliance across all jurisdictions',
      metric: '100% compliant'
    },
    {
      title: 'Cost Efficiency',
      description: 'Eliminate intermediaries and reduce operational costs',
      metric: '70% cost reduction'
    }
  ];

  const navigateToEra = (eraId: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveEra(eraId);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEra((prev) => (prev + 1) % eras.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Clock className="w-4 h-4 mr-2" />
            Digital Transformation Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            The Evolution of{' '}
            <span className="gradient-text">Financial Infrastructure</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how financial technology has evolved and where Vayana fits in the future of digital assets.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="max-w-6xl mx-auto mb-16">
          {/* Timeline Navigation */}
          <div className="relative mb-12">
            <div className="timeline-line h-1 bg-gradient-to-r from-gray-300 via-primary/50 to-primary" />
            
            <div className="flex justify-between items-center relative">
              {eras.map((era, index) => {
                const EraIcon = era.icon;
                const isActive = activeEra === era.id;
                const isPast = era.id < activeEra;
                const isFuture = era.id > activeEra;
                
                return (
                  <div
                    key={era.id}
                    className="flex flex-col items-center cursor-pointer group"
                    onClick={() => navigateToEra(era.id)}
                  >
                    <div
                      className={`timeline-dot w-8 h-8 rounded-full border-4 border-background shadow-lg transition-all duration-500 ${
                        isActive
                          ? 'bg-primary scale-125 animate-glow'
                          : isPast
                          ? 'bg-primary/70'
                          : 'bg-muted'
                      }`}
                    >
                      <EraIcon
                        className={`w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                          isActive || isPast ? 'text-white' : 'text-muted-foreground'
                        }`}
                      />
                    </div>
                    
                    <div className="mt-4 text-center">
                      <div className={`font-medium text-sm ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                        {era.year}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Era Details */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            {eras.map((era) => {
              if (era.id !== activeEra) return null;
              const EraIcon = era.icon;
              
              return (
                <Card key={era.id} className="p-8 text-center animate-fade-in">
                  <div className={`w-20 h-20 rounded-full ${era.bgColor} flex items-center justify-center mx-auto mb-6`}>
                    <EraIcon className={`w-10 h-10 ${era.color}`} />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4">{era.title}</h3>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    {era.description}
                  </p>
                  
                  {era.status === 'current' ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {vayanaAdvantages.map((advantage, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-primary mb-2">{advantage.metric}</div>
                          <div className="font-medium mb-2">{advantage.title}</div>
                          <div className="text-sm text-muted-foreground">{advantage.description}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap justify-center gap-3">
                      {era.challenges.map((challenge, index) => (
                        <Badge key={index} variant="outline" className="text-sm">
                          {challenge}
                        </Badge>
                      ))}
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>

        {/* Future Vision */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              <h3 className="text-2xl font-bold">The Future is Here</h3>
              <Sparkles className="w-8 h-8 text-secondary animate-pulse" />
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              While others are still catching up to the blockchain revolution, Vayana has already built 
              the complete digital assets infrastructure for the next decade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => {
                  const contact = document.getElementById('contact-form');
                  if (contact) {
                    contact.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => {
                  const ecosystem = document.getElementById('ecosystem');
                  if (ecosystem) {
                    ecosystem.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Platform
                <TrendingUp className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TransformationTimeline;