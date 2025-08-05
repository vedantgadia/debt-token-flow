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
  const regions = [
    {
      name: "Asia Pacific",
      countries: ["India", "Singapore", "Hong Kong", "Japan"],
      clients: "150+",
      volume: "$25B+",
      compliance: ["RBI", "MAS", "HKMA", "JFSA"]
    },
    {
      name: "Europe",
      countries: ["UK", "Germany", "France", "Netherlands"],
      clients: "80+",
      volume: "$15B+",
      compliance: ["FCA", "BaFin", "AMF", "DNB"]
    },
    {
      name: "North America",
      countries: ["USA", "Canada"],
      clients: "60+",
      volume: "$20B+",
      compliance: ["SEC", "CFTC", "OSC", "FINTRAC"]
    },
    {
      name: "Middle East",
      countries: ["UAE", "Saudi Arabia", "Qatar"],
      clients: "40+",
      volume: "$8B+",
      compliance: ["ADGM", "SAMA", "QFC"]
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
            Trusted Worldwide by{' '}
            <span className="gradient-text">Leading Institutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Operating across 15+ countries with regulatory compliance and institutional-grade 
            security, serving Fortune 500 companies and financial institutions globally.
          </p>
        </div>

        {/* Regional Presence */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {regions.map((region, index) => (
            <Card key={index} className="p-6 border-2 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">{region.name}</h3>
                  <div className="space-y-1">
                    {region.countries.map((country, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">{country}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Globe className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
              </div>
              
              <div className="space-y-3 border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Clients</span>
                  <Badge variant="secondary">{region.clients}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Volume</span>
                  <Badge variant="outline">{region.volume}</Badge>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-muted-foreground">Regulatory</span>
                  <div className="flex flex-wrap gap-1">
                    {region.compliance.slice(0, 2).map((comp, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {comp}
                      </Badge>
                    ))}
                  </div>
                </div>
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

        {/* Global Stats */}
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Global Impact</h3>
            <p className="text-muted-foreground">Making digital assets accessible worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">330+</div>
              <div className="text-sm text-muted-foreground">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$68B+</div>
              <div className="text-sm text-muted-foreground">Total Volume Processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Regulatory Approvals</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default GlobalPresence;