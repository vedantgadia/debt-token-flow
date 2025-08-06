import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Coins, CheckCircle, Users, Shield, Zap, Globe, TrendingUp, Building, DollarSign, BarChart3, Target } from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import FAQSection from '@/components/FAQSection';

const VDPDebtCapital = () => {
  const coreCapabilities = [
    'Tokenization of Debt Instruments',
    'Workflow Automation', 
    'Multi-Tenant SaaS',
    'Built-in Compliance',
    'API-First & Interoperable',
    'Rapid Go-Live'
  ];

  const features = [
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Built-in compliance with KYC, AML, and jurisdiction-specific regulations'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Go live in weeks, not months with our modular SaaS platform'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Multi-jurisdictional support with adaptable compliance frameworks'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Infrastructure',
      description: 'Handle billions in assets with our battle-tested platform'
    },
    {
      icon: Building,
      title: 'Institutional Grade',
      description: 'Built for banks, NBFIs, and institutional asset managers'
    },
    {
      icon: DollarSign,
      title: 'Cost Efficient',
      description: 'Reduce operational costs by up to 70% with automation'
    }
  ];

  const useCases = [
    {
      title: 'Private Credit Funds',
      description: 'Digitize loan origination, servicing, and investor management'
    },
    {
      title: 'Corporate Bonds',
      description: 'Issue tokenized corporate bonds with automated compliance'
    },
    {
      title: 'Structured Products',
      description: 'Create complex debt instruments with flexible terms'
    },
    {
      title: 'Trade Finance',
      description: 'Streamline trade finance operations and documentation'
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="container px-4 mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Coins className="w-4 h-4 mr-2" />
              Live Platform
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Vayana Debt Platform (VDP)
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Tokenize Private Credit. Simplify Issuance. Unlock Liquidity.
            </p>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              The Vayana Debt Platform (VDP) is a modular, SaaS-based platform that enables financial institutions to issue, manage, and service tokenized private credit instruments - including loans, debentures, and structured debt - with ease.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={scrollToContact} className="px-8 py-3">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Core Capabilities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built to power the next generation of private credit with automation, transparency, and digital-native workflows
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreCapabilities.map((capability, index) => (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="font-medium">{capability}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose VDP?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Purpose-built for financial institutions looking to digitize credit workflows and scale investor access
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-all group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Use Cases</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Versatile platform supporting diverse debt capital market needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                        <p className="text-muted-foreground">{useCase.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Platform Performance</h2>
              <p className="text-lg text-muted-foreground">
                Proven results from institutions already using VDP
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-border/50 text-center">
                <CardContent className="p-8">
                  <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">70%</div>
                  <p className="text-muted-foreground">Cost Reduction</p>
                </CardContent>
              </Card>
              
              <Card className="border-border/50 text-center">
                <CardContent className="p-8">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Active Institutions</p>
                </CardContent>
              </Card>
              
              <Card className="border-border/50 text-center">
                <CardContent className="p-8">
                  <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">$5B+</div>
                  <p className="text-muted-foreground">Assets Processed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Debt Capital Markets?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join leading financial institutions already using VDP to digitize their credit operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                onClick={scrollToContact}
                className="px-8 py-3 bg-white text-primary hover:bg-white/90"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-3 border-white text-white hover:bg-white/10"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
};

export default VDPDebtCapital;