import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, 
  Building2, 
  Users, 
  TrendingUp,
  MapPin,
  Award,
  Star,
  CheckCircle
} from 'lucide-react';

const GlobalPresence = () => {
  const focusAreas = [
    {
      name: "Digital Assets Innovation",
      icon: "🔗",
      description: "Building blockchain-based solutions for asset tokenization and digital transformation",
      status: "Active Development"
    },
    {
      name: "Supply Chain Finance",
      icon: "🏭",
      description: "Revolutionizing trade finance with digital documentation and automated workflows",
      status: "MVP Ready"
    },
    {
      name: "Regulatory Compliance",
      icon: "⚖️",
      description: "Ensuring adherence to global financial regulations and security standards",
      status: "Research Phase"
    },
    {
      name: "Platform Integration",
      icon: "🔄",
      description: "Creating seamless APIs and interfaces for enterprise adoption",
      status: "In Progress"
    }
  ];

  const industries = [
    { name: "Banking & Financial Services", percentage: 35, icon: Building2 },
    { name: "Supply Chain & Manufacturing", percentage: 25, icon: TrendingUp },
    { name: "Real Estate & Infrastructure", percentage: 20, icon: MapPin },
    { name: "Commodities & Trading", percentage: 20, icon: Globe }
  ];

  const certifications = [
    "ISO 27001", "SOC 2 Type II", "PCI DSS", "GDPR Compliant",
    "Basel III Ready", "MiFID II", "FATCA", "AML/KYC"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Globe className="w-4 h-4 mr-2" />
            Global Reach
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Innovation{' '}
            <span className="gradient-text">Focus Areas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building the future of digital assets with focused development in key areas 
            that will transform how businesses handle digital transactions and asset management.
          </p>
        </div>

        {/* Focus Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {focusAreas.map((area, index) => (
            <Card key={index} className="p-6 border-2 hover:border-primary/50 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{area.icon}</div>
                <h3 className="font-bold text-lg mb-2">{area.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{area.description}</p>
                <Badge variant="secondary" className="text-xs">
                  {area.status}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Industry Coverage */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              Industry Coverage
            </h3>
            <div className="space-y-6">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-5 h-5 text-primary" />
                        <span className="font-medium">{industry.name}</span>
                      </div>
                      <span className="text-sm font-bold">{industry.percentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${industry.percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Compliance & Certifications
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">Recognition</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Recognized by leading industry bodies for innovation in digital assets 
                  and supply chain finance technology.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Development Milestones */}
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Development Journey</h3>
            <p className="text-muted-foreground">Building tomorrow's digital assets infrastructure</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Core Products MVP</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2</div>
              <div className="text-sm text-muted-foreground">Pilot Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Security Focus</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Innovation Mode</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default GlobalPresence;