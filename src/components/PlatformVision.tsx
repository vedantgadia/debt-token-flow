import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Eye, 
  ArrowRight, 
  Layers, 
  Puzzle,
  Building,
  Users,
  Globe,
  Sparkles
} from 'lucide-react';

const PlatformVision = () => {
  const visionPillars = [
    {
      icon: Puzzle,
      title: "Unified Ecosystem",
      description: "All digital asset services in one interconnected platform - from tokenization to trade finance",
      impact: "Eliminates fragmentation"
    },
    {
      icon: Layers,
      title: "Modular Architecture",
      description: "Pick and choose the components you need, scale as you grow",
      impact: "Maximum flexibility"
    },
    {
      icon: Building,
      title: "Enterprise Ready",
      description: "Built for institutional requirements with security and compliance at the core",
      impact: "Production confidence"
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Making digital assets accessible to businesses worldwide, regardless of size",
      impact: "Democratic finance"
    }
  ];

  const roadmapPhases = [
    {
      phase: "Foundation",
      timeline: "Current",
      status: "Active",
      focus: "Core MVP platforms and pilot partnerships",
      achievements: ["Platform MVP", "Tokenization Engine", "Pilot Partners", "Security Framework"]
    },
    {
      phase: "Expansion",
      timeline: "6-12 months",
      status: "Planned",
      focus: "Enhanced features and broader market reach",
      achievements: ["Advanced Analytics", "Mobile SDK", "10+ Partners", "Regulatory Compliance"]
    },
    {
      phase: "Scale",
      timeline: "12-24 months",
      status: "Vision",
      focus: "Global platform with full ecosystem integration",
      achievements: ["AI Integration", "Global Deployment", "100+ Partners", "Industry Leadership"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Eye className="w-4 h-4 mr-2" />
            Platform Vision
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            The Future of{' '}
            <span className="gradient-text">Digital Assets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building more than just tools - we're creating the complete infrastructure 
            that will power the next generation of digital financial services.
          </p>
        </div>

        {/* Vision Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {visionPillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <Card key={index} className="p-6 text-center group hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{pillar.description}</p>
                <Badge variant="outline" className="text-xs">
                  {pillar.impact}
                </Badge>
              </Card>
            );
          })}
        </div>

        {/* Development Roadmap */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4">Development Roadmap</h3>
            <p className="text-muted-foreground">Our journey from MVP to industry-leading platform</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-muted-foreground/30 hidden lg:block" />
            
            <div className="space-y-12">
              {roadmapPhases.map((phase, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1">
                    <Card className={`p-6 ${phase.status === 'Active' ? 'border-primary bg-primary/5' : ''}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant={phase.status === 'Active' ? 'default' : 'outline'}>
                          {phase.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{phase.timeline}</span>
                      </div>
                      <h4 className="text-xl font-bold mb-2">{phase.phase}</h4>
                      <p className="text-muted-foreground mb-4">{phase.focus}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {phase.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-8 h-8 rounded-full bg-primary border-4 border-background shadow-lg items-center justify-center relative z-10">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  
                  <div className="flex-1 lg:block hidden" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 text-center">
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Join the Digital Assets Revolution</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Be part of the future we're building. Whether you're looking to tokenize assets, 
            streamline trade finance, or explore new digital opportunities, we're here to innovate together.
          </p>
          <div className="flex items-center justify-center gap-2 text-primary font-medium">
            <span>Explore Our Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PlatformVision;