import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Shield, Globe, CheckCircle, Zap, Users, Lock, Database, TrendingUp, PieChart, BarChart3, DollarSign } from 'lucide-react';

const VDPDebtCapital = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-medium">Vayana Debt Platform</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">VDP</span>
                <br />
                <span className="text-white">Debt Capital Markets</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Transform private credit markets with blockchain-enabled debt tokenization, automated lifecycle management, and institutional-grade infrastructure
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105">
                Explore Platform
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 backdrop-blur-sm text-white">
                Book Demo
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold">$2B+</div>
                <div className="text-white/80">Assets Tokenized</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-white/80">Financial Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-white/80">Platform Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Complete Debt Capital Markets Infrastructure
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From origination to settlement, VDP provides end-to-end infrastructure for private credit markets
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Debt Tokenization",
                  description: "Convert traditional debt instruments into blockchain-native tokens with full regulatory compliance",
                  icon: PieChart,
                  features: ["ERC-20/ERC-1400 Standards", "Automated Compliance", "Fractional Ownership"]
                },
                {
                  title: "Lifecycle Management",
                  description: "Automated payment processing, interest calculations, and covenant monitoring",
                  icon: BarChart3,
                  features: ["Smart Contract Automation", "Payment Waterfalls", "Default Management"]
                },
                {
                  title: "Investor Portal",
                  description: "Institutional-grade dashboard for portfolio management and reporting",
                  icon: TrendingUp,
                  features: ["Real-time Analytics", "Risk Monitoring", "Compliance Reporting"]
                },
                {
                  title: "Primary Issuance",
                  description: "End-to-end issuance workflow from term sheet to token distribution",
                  icon: DollarSign,
                  features: ["KYC/AML Integration", "Subscription Management", "Settlement Automation"]
                },
                {
                  title: "Secondary Markets",
                  description: "Liquidity solutions for tokenized debt with transfer restrictions",
                  icon: ArrowRight,
                  features: ["Order Matching", "Transfer Agents", "Market Making"]
                },
                {
                  title: "Regulatory Framework",
                  description: "Built-in compliance for global regulatory requirements",
                  icon: Shield,
                  features: ["Multi-Jurisdiction Support", "Audit Trails", "Regulatory Reporting"]
                }
              ].map((feature, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Debt Capital Markets Use Cases
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                VDP supports diverse debt instruments across multiple asset classes and structures
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Corporate Bonds",
                  description: "Tokenize corporate debt with automated coupon payments and covenant monitoring",
                  benefits: ["Lower issuance costs", "Broader investor access", "Real-time compliance"]
                },
                {
                  title: "Private Credit",
                  description: "Direct lending and private debt funds with fractional participation",
                  benefits: ["Enhanced liquidity", "Automated distribution", "Transparent reporting"]
                },
                {
                  title: "Structured Products",
                  description: "Complex debt structures with multiple tranches and payment waterfalls",
                  benefits: ["Automated subordination", "Real-time pricing", "Risk transparency"]
                },
                {
                  title: "Supply Chain Finance",
                  description: "Trade receivables and supply chain financing instruments",
                  benefits: ["Faster settlements", "Reduced counterparty risk", "Working capital optimization"]
                }
              ].map((useCase, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{useCase.description}</p>
                  <div className="space-y-3">
                    {useCase.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Enterprise-Grade Technology
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Built on proven blockchain infrastructure with institutional security and scalability
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Blockchain Infrastructure",
                  items: ["Ethereum & Polygon", "Private Blockchain Options", "Cross-chain Compatibility"],
                  icon: Lock
                },
                {
                  title: "Security & Compliance",
                  items: ["SOC 2 Type II", "GDPR Compliant", "Multi-sig Wallets"],
                  icon: Shield
                },
                {
                  title: "Integration & APIs",
                  items: ["RESTful APIs", "Webhook Support", "Core Banking Integration"],
                  icon: Database
                }
              ].map((tech, index) => (
                <Card key={index} className="text-center p-8">
                  <tech.icon className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4 text-foreground">{tech.title}</h3>
                  <ul className="space-y-2">
                    {tech.items.map((item, i) => (
                      <li key={i} className="text-muted-foreground">{item}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Transform Your Debt Capital Markets?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join leading financial institutions already leveraging VDP for next-generation debt origination and management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VDPDebtCapital;