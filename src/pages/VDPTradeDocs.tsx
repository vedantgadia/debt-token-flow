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
  Eye
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
    { name: "Electronic Bill of Lading", icon: FileText, desc: "Digital B/L with transfer of control" },
    { name: "Commercial Invoice", icon: FileCheck, desc: "Verified invoicing documentation" },
    { name: "Packing Lists", icon: ClipboardList, desc: "Detailed cargo specifications" },
    { name: "Certificate of Origin", icon: Award, desc: "Origin verification documents" },
    { name: "Warehouse Receipts", icon: Package, desc: "Storage and custody records" },
    { name: "CMR/AWB", icon: Truck, desc: "Road and air waybills" }
  ];

  const features = [
    { title: "Digital Issuance", desc: "Create legally valid digital documents", icon: FileText },
    { title: "Endorsement & Transfer", desc: "Secure document ownership transfer", icon: ArrowRight },
    { title: "Document Viewer", desc: "Intuitive viewing and verification", icon: Globe },
    { title: "Blockchain Anchoring", desc: "Immutable document integrity", icon: Database },
    { title: "Role-Based Access", desc: "Granular permission controls", icon: Lock },
    { title: "Enterprise Integration", desc: "ERP and system connectivity", icon: Building2 }
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
                VDP Trade Docs – Your Gateway to 
                <span className="text-gray-200"> Seamless, Secure</span> Cross-Border Trade Documentation
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-xl">
                Digitize, verify, and transfer trade documents with legal validity and global interoperability — powered by MLETR and TradeTrust.
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="section-title">Digitize and Control the Documents That Move Trade</h2>
              <p className="section-subtitle">
                Support for all critical trade documents with full digital transfer capabilities
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportedDocs.map((doc, index) => (
                <Card key={index} className="hover-scale transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <doc.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{doc.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{doc.desc}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Document Lifecycle Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="section-title">One Document. Many Possibilities.</h2>
              <p className="section-subtitle">
                Complete document lifecycle management from creation to final settlement
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
              {['Creation', 'Verification', 'Sharing', 'Endorsement', 'Settlement'].map((step, index) => (
                <React.Fragment key={step}>
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-vayana-gradient rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold">{step}</h3>
                  </div>
                  {index < 4 && (
                    <ArrowRight className="hidden md:block h-6 w-6 text-muted-foreground" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="section-title">Feature-Rich, Ready for Enterprise Workflows</h2>
              <p className="section-subtitle">
                Comprehensive capabilities designed for modern trade operations
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center p-6 hover-scale transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.desc}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="section-title">One Platform, Many Roles</h2>
              <p className="section-subtitle">
                Tailored benefits for every stakeholder in the trade ecosystem
              </p>
            </div>
            
            <div className="space-y-8">
              {stakeholders.map((stakeholder, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <stakeholder.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{stakeholder.role}</h3>
                      <p className="text-muted-foreground">{stakeholder.benefit}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="section-title">See How VDP Trade Docs Transforms Your Document Flows</h2>
              <p className="section-subtitle">
                Watch our platform in action and discover how it can revolutionize your trade operations
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                <Button size="lg" className="bg-white/90 text-primary hover:bg-white">
                  <Play className="mr-2 h-6 w-6" />
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline">
                Talk to Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="section-title">Start Your Trade Document Digitization Journey</h2>
              <p className="section-subtitle">
                Ready to transform your trade operations? Get started with VDP Trade Docs today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-vayana-gradient text-white hover:opacity-90">
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-5 w-5" />
                Download Overview PDF
              </Button>
            </div>
            
            <Card className="max-w-md mx-auto p-6 bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Organization" 
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                />
                <input 
                  type="text" 
                  placeholder="Role" 
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                />
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Submit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VDPTradeDocs;