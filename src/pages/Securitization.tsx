import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Layers, 
  PieChart, 
  DollarSign, 
  FileText, 
  Users, 
  Target, 
  Zap,
  CheckCircle,
  Building,
  BarChart3,
  ArrowUpRight,
  Play,
  Mail,
  Phone
} from 'lucide-react';

const Securitization = () => {
  const [activeTab, setActiveTab] = useState('trs');

  const securitizationTypes = [
    {
      id: 'trs',
      title: 'Trade Receivables Securitization',
      description: 'Convert trade receivables into marketable securities',
      benefits: ['Improved Liquidity', 'Risk Distribution', 'Capital Efficiency', 'Working Capital Optimization'],
      icon: TrendingUp,
      color: 'from-accent to-primary',
      shortName: 'TRS'
    },
    {
      id: 'ptc',
      title: 'Pass Through Certificates (PTCs)',
      description: 'Direct ownership in underlying assets with transparent cash flows',
      benefits: ['Direct Asset Exposure', 'Transparent Structure', 'Regular Income', 'Asset-Backed Security'],
      icon: FileText,
      color: 'from-primary to-secondary',
      shortName: 'PTC'
    },
    {
      id: 'sdi',
      title: 'Security Development Infrastructure (SDIs)',
      description: 'Structured investment vehicles for infrastructure financing',
      benefits: ['Infrastructure Focus', 'Long-term Returns', 'Diversified Portfolio', 'ESG Compliance'],
      icon: Building,
      color: 'from-secondary to-accent',
      shortName: 'SDI'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Asset Origination',
      description: 'Identify and pool qualifying assets for securitization',
      icon: Target
    },
    {
      step: 2,
      title: 'Structure Design',
      description: 'Create optimal security structure and tranching',
      icon: Layers
    },
    {
      step: 3,
      title: 'Rating & Validation',
      description: 'Obtain credit ratings and regulatory approvals',
      icon: Shield
    },
    {
      step: 4,
      title: 'Market Launch',
      description: 'Issue securities to institutional and retail investors',
      icon: ArrowUpRight
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          {/* Floating Elements */}
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-32 h-32 bg-white/5 rounded-full blur-xl animate-float" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }} 
            />
          ))}
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <PieChart className="mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">Advanced Financial Instruments</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
                    Securitization
                  </span>
                  <span className="block text-white">Solutions</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed">
                  Transform assets into tradeable securities with our comprehensive securitization platform supporting PTCs, SDIs, and trade receivables
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white bg-white/20 backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-300">
                  Contact Us
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </div>

            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Enhanced Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-30 animate-pulse" />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                    alt="Securitization Technology"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Securitization */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-primary/10 text-primary">
                Financial Innovation
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                What is Securitization?
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Securitization is the process of pooling various types of debt and selling them as consolidated securities to investors, 
                providing liquidity to originators and investment opportunities to capital markets.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  {
                    title: "Asset Pooling",
                    desc: "Aggregate similar financial assets into diversified pools",
                    icon: Layers
                  },
                  {
                    title: "Risk Distribution",
                    desc: "Spread risk across multiple investors and tranches",
                    icon: PieChart
                  },
                  {
                    title: "Liquidity Creation",
                    desc: "Convert illiquid assets into tradeable securities",
                    icon: DollarSign
                  },
                  {
                    title: "Market Access",
                    desc: "Enable broader investor participation in asset classes",
                    icon: Users
                  }
                ].map((item, i) => (
                  <div key={i} className="group flex items-start gap-4 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
                    <div className="text-primary bg-primary/10 rounded-xl p-3">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Financial Technology"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent rounded-3xl"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Digital First Approach</h3>
                  <p className="text-white/90">Leveraging technology for efficient securitization processes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Securitization Types */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white">
                Our Solutions
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Securitization Products
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive range of securitization instruments tailored to different asset classes and investor needs
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center mb-12 gap-4">
              {securitizationTypes.map((type) => (
                <Button
                  key={type.id}
                  variant={activeTab === type.id ? "default" : "outline"}
                  className={`px-6 py-3 ${activeTab === type.id ? 'bg-primary text-white' : 'border-primary text-primary hover:bg-primary hover:text-white'} transition-all duration-300`}
                  onClick={() => setActiveTab(type.id)}
                >
                  <type.icon className="mr-2 h-4 w-4" />
                  {type.shortName}
                </Button>
              ))}
            </div>

            {/* Active Tab Content */}
            <div className="relative">
              {securitizationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`transition-all duration-500 ${
                    activeTab === type.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
                    <CardContent className="p-12">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                          <div className="space-y-4">
                            <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                              <type.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-foreground">{type.title}</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              {type.description}
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            {type.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-primary" />
                                <span className="text-sm font-medium text-foreground">{benefit}</span>
                              </div>
                            ))}
                          </div>

                          <Button size="lg" className={`bg-gradient-to-r ${type.color} text-white hover:opacity-90 transition-opacity`}>
                            Learn More
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </div>

                        <div className="relative">
                          <img 
                            src="https://images.unsplash.com/photo-1527576539890-dfa815648363" 
                            alt={type.title}
                            className="w-full h-80 object-cover rounded-2xl shadow-xl"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${type.color} opacity-20 rounded-2xl`}></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-secondary/10 text-secondary">
                Our Process
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Securitization Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Streamlined, technology-driven process from asset origination to market launch
              </p>
            </div>

            <div className="relative">
              {/* Process Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2"></div>
              
              <div className="grid lg:grid-cols-4 gap-8">
                {processSteps.map((step, i) => (
                  <div key={i} className="relative">
                    {/* Step Number */}
                    <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 mx-auto lg:mx-0">
                      {step.step}
                    </div>
                    
                    {/* Content */}
                    <div className="mt-8 lg:mt-24 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="relative py-32 bg-gradient-to-br from-background to-muted/30" id="contact-us">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Get Started
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Ready to Launch
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Your Securitization?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Connect with our experts to explore how securitization can unlock value from your assets
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-border/50">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Info Side */}
                  <div className="bg-gradient-to-br from-primary via-secondary to-accent text-white p-8 lg:p-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 space-y-8">
                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold">Start Your Journey</h3>
                        <p className="text-lg text-white/90 leading-relaxed">
                          Transform your assets into investment opportunities with our comprehensive securitization platform.
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Mail className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">Email Us</h4>
                            <p className="text-white/80">securitization@vayana.com</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Phone className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">Call Us</h4>
                            <p className="text-white/80">+91-80-4906-8800</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Form Side */}
                  <div className="p-8 lg:p-12">
                    <h3 className="text-2xl font-bold mb-8 text-foreground">Contact Us</h3>
                    
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <input id="name" name="name" required placeholder="John Doe" className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <input id="email" name="email" type="email" required placeholder="john@company.com" className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                            Organization
                          </label>
                          <input id="company" name="company" placeholder="Your Organization" className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
                        </div>

                        <div>
                          <label htmlFor="asset-type" className="block text-sm font-medium text-foreground mb-2">
                            Asset Type
                          </label>
                          <select id="asset-type" name="asset-type" className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors">
                            <option value="">Select Asset Type</option>
                            <option value="trade-receivables">Trade Receivables</option>
                            <option value="infrastructure">Infrastructure</option>
                            <option value="real-estate">Real Estate</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <textarea id="message" name="message" required placeholder="Tell us about your securitization requirements..." className="w-full h-32 px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none" />
                      </div>
                      
                      <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-white hover:opacity-90 transition-opacity py-4 text-lg">
                        Send Inquiry
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Securitization;