import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  FileText, 
  Shield, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Users, 
  Lock, 
  Database,
  Truck,
  Building2,
  Scale,
  FileCheck,
  ClipboardList,
  Award,
  Package,
  Play,
  Download,
  RefreshCw,
  Eye,
  Mail,
  Phone
} from 'lucide-react';

const TradeDocVisual = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md">
      <div className="absolute top-0 left-0 w-full h-full bg-vayana-red/20 rounded-2xl blur-3xl transform -translate-x-4 translate-y-4 animate-pulse-slow"></div>
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl animate-fade-in border border-vayana-blue/30 p-8">
        {/* Digital Supply Chain Flow */}
        <svg className="w-full h-auto" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="docGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E3032C" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#723189" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#194388" stopOpacity="0.8" />
            </linearGradient>
            <filter id="docGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Background */}
          <rect width="400" height="300" fill="#0A0E1A" rx="8" />
          
          {/* Document flow path */}
          <path 
            d="M 50 150 Q 200 50 350 150" 
            stroke="url(#docGrad)" 
            strokeWidth="3" 
            fill="none" 
            filter="url(#docGlow)"
            strokeDasharray="10,5"
          />
          
          {/* Document stations */}
          {[
            { x: 50, y: 150, label: "Create", icon: "+" },
            { x: 130, y: 100, label: "Verify", icon: "✓" },
            { x: 200, y: 80, label: "Share", icon: "→" },
            { x: 270, y: 100, label: "Endorse", icon: "✎" },
            { x: 350, y: 150, label: "Transfer", icon: "⇄" }
          ].map((station, index) => (
            <g key={index}>
              <circle 
                cx={station.x} 
                cy={station.y} 
                r="20" 
                fill={currentStep === index ? "url(#docGrad)" : "#194388"} 
                filter="url(#docGlow)"
                opacity={currentStep >= index ? "1" : "0.5"}
              />
              <text 
                x={station.x} 
                y={station.y + 5} 
                textAnchor="middle" 
                fill="#fff" 
                fontSize="14" 
                fontWeight="bold"
              >
                {station.icon}
              </text>
              <text 
                x={station.x} 
                y={station.y + 35} 
                textAnchor="middle" 
                fill="#fff" 
                fontSize="10"
              >
                {station.label}
              </text>
            </g>
          ))}
          
          {/* Moving document */}
          <g transform={`translate(${50 + currentStep * 75}, ${150 - Math.abs(currentStep - 2) * 30})`}>
            <rect 
              x="-8" 
              y="-12" 
              width="16" 
              height="20" 
              fill="#fff" 
              rx="2" 
              opacity="0.9"
            />
            <rect 
              x="-6" 
              y="-8" 
              width="12" 
              height="2" 
              fill="#194388" 
            />
            <rect 
              x="-6" 
              y="-4" 
              width="8" 
              height="1" 
              fill="#723189" 
            />
            <rect 
              x="-6" 
              y="-1" 
              width="10" 
              height="1" 
              fill="#E3032C" 
            />
          </g>
          
          {/* Blockchain anchors */}
          {Array.from({ length: 8 }).map((_, i) => (
            <circle 
              key={i} 
              cx={50 + i * 40} 
              cy={250} 
              r="3" 
              fill="#194388" 
              opacity="0.6"
            >
              <animate
                attributeName="opacity"
                values="0.3;1;0.3"
                dur="2s"
                repeatCount="indefinite"
                begin={`${i * 0.25}s`}
              />
            </circle>
          ))}
          
          {/* Trust indicators */}
          <g transform="translate(20, 20)">
            <rect width="80" height="30" fill="#194388" opacity="0.8" rx="4" />
            <text x="40" y="15" textAnchor="middle" fill="#fff" fontSize="10">MLETR</text>
            <text x="40" y="25" textAnchor="middle" fill="#fff" fontSize="8">Compliant</text>
          </g>
          
          <g transform="translate(300, 20)">
            <rect width="80" height="30" fill="#E3032C" opacity="0.8" rx="4" />
            <text x="40" y="15" textAnchor="middle" fill="#fff" fontSize="10">TradeTrust</text>
            <text x="40" y="25" textAnchor="middle" fill="#fff" fontSize="8">Verified</text>
          </g>
        </svg>
        
        {/* Step indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {[0, 1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentStep === step ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const VDPTradeDocs = () => {
  const supportedDocs = [
    { name: "Bill of Exchange", icon: FileText, desc: "Digital bill of exchange with legal validity" },
    { name: "Promissory Notes", icon: FileCheck, desc: "Electronic promissory notes with transfer capability" },
    { name: "Bill of Lading", icon: ClipboardList, desc: "Digital B/L with transfer of control" },
    { name: "Certificate of Origin", icon: Award, desc: "Origin verification documents" },
    { name: "Any Trade Document", icon: Package, desc: "Support for all critical trade documentation" }
  ];

  const features = [
    { 
      title: "Universal Document Digitization", 
      desc: "Enable creation of Digital Originals for any Trade or B2B Credit document — including both Transferable (title-based) and Verifiable formats.", 
      icon: FileText,
      emoji: "📄"
    },
    { 
      title: "Custom Workflow Configuration", 
      desc: "Design flexible document workflows with user-defined roles (e.g., Maker-Checker), multi-party collaboration, automated notifications, and lifecycle triggers.", 
      icon: RefreshCw,
      emoji: "🧩"
    },
    { 
      title: "Cross-Platform Document Transfers", 
      desc: "Seamlessly transfer documents to blockchain wallet addresses, even if recipients are not onboarded to the platform.", 
      icon: ArrowRight,
      emoji: "🔄"
    },
    { 
      title: "Interoperability with External Ecosystems", 
      desc: "Ingest and manage documents issued by other platforms, supporting end-to-end flow across digital ecosystems.", 
      icon: Globe,
      emoji: "🤝"
    },
    { 
      title: "AI-Powered Paper Digitization", 
      desc: "Leverage AI to extract data from scanned or paper documents and generate compliant Digital Originals within the platform. Custody solutions for original paper documents are under active evaluation.", 
      icon: Zap,
      emoji: "🧠"
    },
    { 
      title: "Whitelabel and Enterprise Customization", 
      desc: "Offer a fully brandable solution tailored to client-specific requirements, whether as a SaaS or enterprise deployment.", 
      icon: Building2,
      emoji: "🏷️"
    }
  ];

  const stakeholders = [
    { role: "Exporters", benefit: "Faster document processing and reduced costs", icon: Truck },
    { role: "Freight Forwarders", benefit: "Streamlined logistics coordination", icon: Globe },
    { role: "Trade Platforms", benefit: "Enhanced platform capabilities", icon: Building2 },
    { role: "Banks", benefit: "Simplified trade finance processes", icon: Shield },
    { role: "Compliance Teams", benefit: "Automated verification and audit trails", icon: Scale }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-vayana-gradient text-white py-20 md:py-32">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
                VDP Trade Docs
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-xl">
                Revolutionizing Trade Document Digitization with MLETR & TradeTrust
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="hero-button bg-vayana-blue hover:bg-vayana-blue/90 text-white flex items-center gap-2"
                >
                  Explore the Platform
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="hero-button bg-transparent border-white hover:bg-white/10 text-white flex items-center gap-2"
                >
                  Book a Walkthrough
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <TradeDocVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="section-title">Global Trade Still Runs on Paper. We're Changing That.</h2>
              <p className="section-subtitle">
                Current pain points of paper and PDF-based document exchange create significant risks and inefficiencies in global trade operations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-l-4 border-l-destructive">
                <CardHeader>
                  <CardTitle className="text-destructive flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Current Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-muted-foreground text-left">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      Paper documents prone to loss, damage, and fraud
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      Slow manual processing delays critical shipments
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      Limited visibility across complex supply chains
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      High operational costs and human errors
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      Compliance risks and audit trail gaps
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="p-8 border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-green-600 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Digital Transformation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-muted-foreground text-left">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      Digital documents with full legal validity
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      Instant verification and real-time processing
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      Complete supply chain transparency and trust
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      Dramatically reduced costs and enhanced security
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      Automated compliance and immutable audit trails
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="section-title">MLETR-Compliant. TradeTrust-Verified. Future-Proof.</h2>
              <p className="section-subtitle">
                Our platform ensures full legal validity and global interoperability for all digital trade documents
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Scale className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Legal Validity</h3>
                <p className="text-muted-foreground">MLETR-compliant digital documents with full legal recognition</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">TradeTrust Integration</h3>
                <p className="text-muted-foreground">Third-party verification and global interoperability standards</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Blockchain Anchoring</h3>
                <p className="text-muted-foreground">Immutable audit trails with complete document integrity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Documents Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="section-title">Digitize and Control the Documents That Move Trade</h2>
              <p className="section-subtitle">
                Support for all critical trade documents with full digital transfer capabilities
              </p>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {supportedDocs.slice(0, 4).map((doc, index) => (
                  <div 
                    key={index} 
                    className="group relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-primary/20 hover:border-primary/40 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="w-14 h-14 mx-auto bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                        <doc.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-sm font-bold mb-2 text-foreground leading-tight">{doc.name}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{doc.desc}</p>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end mt-8 pr-8">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-primary/20">
                  <p className="text-sm font-medium text-muted-foreground">
                    + any other trade document
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="section-title">Feature-Rich, Ready for Enterprise Workflows</h2>
              <p className="section-subtitle">
                Comprehensive capabilities designed for modern trade operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 hover:border-primary/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="text-4xl mb-2">{feature.emoji}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-3xl"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/40">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="section-title">One Platform, Many Roles</h2>
              <p className="section-subtitle">
                Tailored benefits for every stakeholder in the trade ecosystem
              </p>
            </div>
            
            <div className="relative max-w-6xl mx-auto">
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
                <div className="w-40 h-40 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                  <div className="text-center">
                    <span className="text-white font-bold text-lg block">VDP</span>
                    <span className="text-white/90 font-medium text-sm">Trade Docs</span>
                  </div>
                </div>
              </div>
              
              {/* Stakeholder Cards in Organized Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 pt-8 lg:pt-16">
                {stakeholders.map((stakeholder, index) => {
                  // Position classes for circular arrangement around center on large screens
                  const positions = [
                    'lg:col-span-1 lg:row-start-1', // Top-left
                    'lg:col-span-1 lg:row-start-1', // Top-right  
                    'lg:col-span-1 lg:col-start-1 lg:row-start-2 lg:mt-8', // Left
                    'lg:col-span-1 lg:col-start-5 lg:row-start-2 lg:mt-8', // Right
                    'lg:col-span-1 lg:col-start-3 lg:row-start-3 lg:mt-16' // Bottom
                  ];
                  
                  return (
                    <div 
                      key={index} 
                      className={`group relative bg-gradient-to-br from-white to-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-primary/20 hover:border-primary/40 overflow-hidden ${positions[index] || ''}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
                          <stakeholder.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                          {stakeholder.role}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {stakeholder.benefit}
                        </p>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="section-title">See How VDP Trade Docs Transforms Your Document Flows</h2>
              <p className="section-subtitle">
                Watch our platform in action and discover how it can revolutionize your trade operations
              </p>
            </div>
            
            <div className="relative group">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 border border-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Button size="lg" className="relative z-10 bg-white/90 text-primary hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                  <Play className="mr-2 h-6 w-6" />
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Talk to Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact-us">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-vayana-gradient text-white p-8 lg:p-12">
                <h2 className="text-3xl font-bold mb-6 font-display">Start Your Trade Document Digitization Journey</h2>
                <p className="text-lg text-gray-100 mb-8">
                  Transform your trade operations with our comprehensive digital documentation platform. Contact our team to learn more about VDP Trade Docs.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <p className="text-gray-200">contact@vayana.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <p className="text-gray-200">+1 (123) 456-7890</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                      Organization
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      placeholder="Your Organization"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                      Role
                    </label>
                    <input
                      id="role"
                      name="role"
                      placeholder="Your Role"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us about your specific requirements or questions"
                      className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-vayana-gradient hover:opacity-90 text-white py-6">
                    Send Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VDPTradeDocs;