import React, { useState, useEffect } from 'react';
import LinkedInFeed from '../components/LinkedInFeed';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Shield, Globe, CheckCircle, ArrowRight, Zap, Users, Lock, Database, Truck, Building2, Scale, FileCheck, ClipboardList, Award, Package, Play, Download, RefreshCw, Eye, Mail, Phone, ExternalLink } from 'lucide-react';
import fourCornerModel from '@/assets/four-corner-model.png';
import threeCornerModel from '@/assets/three-corner-model.png';
const TradeDocVisual = () => {
  const [currentStep, setCurrentStep] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 5);
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
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge> 
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Background */}
          <rect width="400" height="300" fill="#0A0E1A" rx="8" />
          
          {/* Document flow path */}
          <path d="M 50 150 Q 200 50 350 150" stroke="url(#docGrad)" strokeWidth="3" fill="none" filter="url(#docGlow)" strokeDasharray="10,5" />
          
          {/* Document stations */}
          {[{
          x: 50,
          y: 150,
          label: "Create",
          icon: "+"
        }, {
          x: 130,
          y: 100,
          label: "Verify",
          icon: "✓"
        }, {
          x: 200,
          y: 80,
          label: "Share",
          icon: "→"
        }, {
          x: 270,
          y: 100,
          label: "Endorse",
          icon: "✎"
        }, {
          x: 350,
          y: 150,
          label: "Transfer",
          icon: "⇄"
        }].map((station, index) => <g key={index}>
              <circle cx={station.x} cy={station.y} r="20" fill={currentStep === index ? "url(#docGrad)" : "#194388"} filter="url(#docGlow)" opacity={currentStep >= index ? "1" : "0.5"} />
              <text x={station.x} y={station.y + 5} textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">
                {station.icon}
              </text>
              <text x={station.x} y={station.y + 35} textAnchor="middle" fill="#fff" fontSize="10">
                {station.label}
              </text>
            </g>)}
          
          {/* Moving document */}
          <g transform={`translate(${50 + currentStep * 75}, ${150 - Math.abs(currentStep - 2) * 30})`}>
            <rect x="-8" y="-12" width="16" height="20" fill="#fff" rx="2" opacity="0.9" />
            <rect x="-6" y="-8" width="12" height="2" fill="#194388" />
            <rect x="-6" y="-4" width="8" height="1" fill="#723189" />
            <rect x="-6" y="-1" width="10" height="1" fill="#E3032C" />
          </g>
          
          {/* Blockchain anchors */}
          {Array.from({
          length: 8
        }).map((_, i) => <circle key={i} cx={50 + i * 40} cy={250} r="3" fill="#194388" opacity="0.6">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin={`${i * 0.25}s`} />
            </circle>)}
          
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
          {[0, 1, 2, 3, 4].map(step => <div key={step} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentStep === step ? 'bg-white' : 'bg-white/40'}`} />)}
        </div>
      </div>
    </div>
  );
};

const VDPTradeDocs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };
  const supportedDocs = [{
    name: "Bill of Exchange",
    icon: FileText,
    desc: "Digital bill of exchange with legal validity"
  }, {
    name: "Promissory Notes",
    icon: FileCheck,
    desc: "Electronic promissory notes with transfer capability"
  }, {
    name: "Bill of Lading",
    icon: ClipboardList,
    desc: "Digital B/L with transfer of control"
  }, {
    name: "Certificate of Origin",
    icon: Award,
    desc: "Origin verification documents"
  }, {
    name: "Any Trade Document",
    icon: Package,
    desc: "Support for all critical trade documentation"
  }];
  const features = [{
    title: "Universal Document Digitization",
    desc: "Enable creation of Digital Originals for any Trade or B2B Credit document — including both Transferable (title-based) and Verifiable formats.",
    icon: FileText,
    emoji: "📄"
  }, {
    title: "Custom Workflow Configuration",
    desc: "Design flexible document workflows with user-defined roles (e.g., Maker-Checker), multi-party collaboration, automated notifications, and lifecycle triggers.",
    icon: RefreshCw,
    emoji: "🧩"
  }, {
    title: "Cross-Platform Document Transfers",
    desc: "Seamlessly transfer documents to blockchain wallet addresses, even if recipients are not onboarded to the platform.",
    icon: ArrowRight,
    emoji: "🔄"
  }, {
    title: "Interoperability with External Ecosystems",
    desc: "Ingest and manage documents issued by other platforms, supporting end-to-end flow across digital ecosystems.",
    icon: Globe,
    emoji: "🤝"
  }, {
    title: "AI-Powered Paper Digitization",
    desc: "Leverage AI to extract data from scanned or paper documents and generate compliant Digital Originals within the platform. Custody solutions for original paper documents are under active evaluation.",
    icon: Zap,
    emoji: "🧠"
  }, {
    title: "Whitelabel and Enterprise Customization",
    desc: "Offer a fully brandable solution tailored to client-specific requirements, whether as a SaaS or enterprise deployment.",
    icon: Building2,
    emoji: "🏷️"
  }];
  const stakeholders = [{
    role: "Exporters",
    benefit: "Faster document processing and reduced costs",
    icon: Truck
  }, {
    role: "Freight Forwarders",
    benefit: "Streamlined logistics coordination",
    icon: Globe
  }, {
    role: "Trade Platforms",
    benefit: "Enhanced platform capabilities",
    icon: Building2
  }, {
    role: "Banks",
    benefit: "Simplified trade finance processes",
    icon: Shield
  }, {
    role: "Compliance Teams",
    benefit: "Automated verification and audit trails",
    icon: Scale
  }];
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section with Enhanced Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          {/* Floating Elements */}
          {[...Array(6)].map((_, i) => <div key={i} className="absolute w-32 h-32 bg-white/5 rounded-full blur-xl animate-float" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${4 + Math.random() * 2}s`
        }} />)}
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-sm font-medium">MLETR & TradeTrust Compliant</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">VDP Trade Docs</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed">
                  Transform your trade operations with legally-binding digital documents that revolutionize global commerce
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105">
                  Explore Platform
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 hover:bg-white backdrop-blur-sm transition-all duration-300 text-red-800">
                  Watch Demo
                  <Play className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-8">
                <div className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-green-400" />
                  <span className="text-lg font-semibold">Legal Validity</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-6 w-6 text-blue-400" />
                  <span className="text-lg font-semibold">Global Standards</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Enhanced Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-30 animate-pulse" />
                <TradeDocVisual />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section with Enhanced Design */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/50">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-medium mb-4">
                The Problem with Traditional Trade
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Global Trade Still Runs on
                <span className="block text-destructive">Paper & PDFs</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Billions of trade documents are still processed manually, creating massive inefficiencies and risks across the global supply chain.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Problems */}
              <div className="space-y-8">
                <div className="space-y-6">
                  {[{
                  title: "Document Fraud & Loss",
                  desc: "Paper documents worth $50B+ lost annually to fraud, forgery, and physical damage",
                  icon: "🚨"
                }, {
                  title: "Processing Delays",
                  desc: "Manual verification takes 7-14 days, delaying shipments and increasing costs",
                  icon: "⏰"
                }, {
                  title: "Supply Chain Opacity",
                  desc: "Zero visibility into document status across multi-tier supply chains",
                  icon: "👁️"
                }, {
                  title: "Compliance Gaps",
                  desc: "Inconsistent audit trails create regulatory and financial risks",
                  icon: "⚠️"
                }].map((problem, i) => <div key={i} className="group flex items-start gap-4 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-destructive/20 hover:border-destructive/40 transition-all duration-300 hover:-translate-y-1">
                      <div className="text-3xl">{problem.icon}</div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">{problem.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{problem.desc}</p>
                      </div>
                    </div>)}
                </div>
              </div>

              {/* Solution */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-20" />
                <div className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm rounded-3xl p-12 border border-primary/20">
                  <div className="text-center space-y-8">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-2xl">
                      ✓
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground">Digital Transformation</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        VDP Trade Docs eliminates these pain points with legally-binding digital documents, instant verification, and complete supply chain transparency.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center p-4 bg-white/30 rounded-xl">
                        <div className="text-2xl font-bold text-primary">99.9%</div>
                        <div className="text-muted-foreground">Fraud Reduction</div>
                      </div>
                      <div className="text-center p-4 bg-white/30 rounded-xl">
                        <div className="text-2xl font-bold text-primary">80%</div>
                        <div className="text-muted-foreground">Faster Processing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MLETR Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Global Standard
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                What is <span className="text-primary">MLETR</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The Model Law on Electronic Transferable Records (MLETR) is a groundbreaking legal framework that enables the creation and use of electronic transferable records with the same legal status as their paper equivalents.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-8">
                <div className="space-y-6">
                  {[
                    {
                      title: "Legal Framework",
                      desc: "UNCITRAL Model Law providing legal foundation for electronic transferable records",
                      icon: Scale
                    },
                    {
                      title: "Functional Equivalence",
                      desc: "Digital documents have the same legal effect as their paper counterparts",
                      icon: CheckCircle
                    },
                    {
                      title: "Control Standards",
                      desc: "Establishes criteria for possession and control of electronic records",
                      icon: Shield
                    },
                    {
                      title: "International Recognition",
                      desc: "Growing adoption by countries worldwide for cross-border trade",
                      icon: Globe
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
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-20" />
                <div className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm rounded-3xl p-12 border border-primary/20">
                  <div className="text-center space-y-8">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-2xl">
                      📜
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground">MLETR Adoption</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Countries worldwide are adopting MLETR to modernize their trade laws and enable digital transformation of trade finance.
                      </p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <Button 
                        size="lg" 
                        className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => window.open('https://www.digitalizetrade.org/mletr', '_blank')}
                      >
                        <Globe className="mr-2 h-5 w-5" />
                        View Live MLETR Adoption Map
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => window.open('https://www.perplexity.ai/search?q=Show+the+latest+news+on+MLETR+and+trade+digitisation+from+the+past+week', '_blank')}
                      >
                        Latest MLETR News
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                VDP Trade Docs is fully MLETR compliant
              </h3>
              <p className="text-muted-foreground">
                Our platform ensures that all digital documents created meet MLETR standards, providing legal certainty and global interoperability for your trade operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section with Modern Design */}
      <section className="relative py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 overflow-hidden">
        {/* Floating Elements */}
        {[...Array(4)].map((_, i) => <div key={i} className="absolute w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-float" style={{
        left: `${20 + i * 20}%`,
        top: `${10 + i * 15}%`,
        animationDelay: `${i * 1}s`,
        animationDuration: `${6 + i}s`
      }} />)}

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto text-center space-y-16">
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Legal Foundation
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Built on
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"> Global Standards</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Full legal validity and worldwide interoperability through MLETR compliance and TradeTrust verification
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[{
              icon: Scale,
              title: "MLETR Compliant",
              desc: "Electronic documents with the same legal validity as paper originals",
              color: "from-blue-500 to-cyan-500"
            }, {
              icon: Shield,
              title: "TradeTrust Verified",
              desc: "Third-party verification ensuring global interoperability",
              color: "from-green-500 to-emerald-500"
            }, {
              icon: Database,
              title: "Blockchain Anchored",
              desc: "Immutable audit trails with complete document integrity",
              color: "from-purple-500 to-indigo-500"
            }].map((item, i) => <div key={i} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 group-hover:-translate-y-2 h-full">
                    <div className="text-center space-y-6">
                      <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="h-8 w-8" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Supported Documents with Interactive Grid */}
      <section className="py-32 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Document Support
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Digitize Every Document
                <span className="block text-accent">That Moves Trade</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From Bills of Lading to Certificates of Origin - complete support for all critical trade documentation
              </p>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {supportedDocs.slice(0, 4).map((doc, index) => <div key={index} className="group relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border border-primary/20 hover:border-primary/40 overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className="relative z-10 space-y-6">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                        <doc.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-lg font-bold text-foreground leading-tight">{doc.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{doc.desc}</p>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>)}
              </div>

              {/* Plus Symbol */}
              <div className="text-center mt-12">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-muted/50 rounded-full">
                  <span className="text-2xl">+</span>
                  <span className="text-lg font-medium text-muted-foreground">Any other trade document</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Enhanced Design */}
      <section className="relative py-32 bg-gradient-to-br from-muted/30 via-background to-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                Platform Capabilities
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Enterprise-Ready
                <span className="block bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
                  Features
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive capabilities designed for modern trade operations and complex enterprise workflows
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {features.map((feature, index) => <div key={index} className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-primary/30 overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-3 flex-1">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar Animation */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl" />
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Section with Modern Cards */}
      <section className="py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Ecosystem Impact
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                One Platform,
                <span className="block text-primary">Every Stakeholder</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Empowering every participant in the global trade ecosystem with seamless digital document management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {stakeholders.map((stakeholder, index) => <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="relative h-full bg-white/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-3 overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl -translate-y-10 translate-x-10" />
                    <div className="relative text-center space-y-6">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <stakeholder.icon className="h-8 w-8" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-foreground leading-tight">{stakeholder.role}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{stakeholder.benefit}</p>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Institution Use Cases Section */}
      <section className="relative py-32 bg-gradient-to-br from-muted/20 via-background to-secondary/10 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-20">
              <div className="inline-flex items-center px-6 py-3 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                Financial Institution Solutions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Potential Use Cases for
                <span className="block text-secondary">Financial Institutions</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Streamline trade finance operations with digital document workflows that support both traditional and direct financing models.
              </p>
            </div>

            <div className="space-y-20">
              {/* Four Corner Model */}
              <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-secondary/20 shadow-xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-foreground">
                        <span className="text-secondary">Use Case 1:</span> Four Corner Model
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Traditional trade finance model involving both exporter and importer banks, enabling secure document exchange and payment facilitation across international borders.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-foreground">Key Benefits:</h4>
                      <div className="space-y-3">
                        {[
                          "Secure multi-party document verification",
                          "Automated bill of exchange processing",
                          "Real-time document status tracking",
                          "Reduced settlement risks between banks",
                          "Enhanced compliance and audit trails"
                        ].map((benefit, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-50" />
                    <div className="relative bg-white rounded-2xl p-6 shadow-2xl border border-secondary/20">
                      <img 
                        src={fourCornerModel} 
                        alt="Four Corner Model - Trade finance flow between exporter, importer, and their respective banks"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Three Corner Model */}
              <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-primary/20 shadow-xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1 relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-50" />
                    <div className="relative bg-white rounded-2xl p-6 shadow-2xl border border-primary/20">
                      <img 
                        src={threeCornerModel} 
                        alt="Three Corner Model - Direct trade finance between exporter, importer, and single bank"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="order-1 lg:order-2 space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-foreground">
                        <span className="text-primary">Use Case 2:</span> Three Corner Model
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Streamlined direct financing model where a single bank facilitates the transaction directly with the exporter and importer, reducing complexity and processing time.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-foreground">Key Benefits:</h4>
                      <div className="space-y-3">
                        {[
                          "Simplified single-bank workflow",
                          "Faster document processing and payment",
                          "Reduced operational complexity",
                          "Lower transaction costs",
                          "Direct relationship management"
                        ].map((benefit, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Implementation Benefits */}
              <div className="bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 rounded-3xl p-8 lg:p-12 border border-accent/20">
                <div className="text-center space-y-8">
                  <h3 className="text-3xl font-bold text-foreground">Why Choose VDP Trade Docs for Your Institution?</h3>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        icon: Shield,
                        title: "Legal Compliance",
                        desc: "MLETR and TradeTrust compliant digital documents with full legal validity"
                      },
                      {
                        icon: Zap,
                        title: "Instant Processing",
                        desc: "Real-time document verification and transfer capabilities"
                      },
                      {
                        icon: Globe,
                        title: "Global Interoperability",
                        desc: "Seamless integration with existing banking systems and international standards"
                      }
                    ].map((feature, i) => (
                      <div key={i} className="text-center space-y-4">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white shadow-xl">
                          <feature.icon className="h-8 w-8" />
                        </div>
                        <h4 className="text-xl font-semibold text-foreground">{feature.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section with Interactive Elements */}
      <section className="relative py-32 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => <div key={i} className="absolute w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl animate-float" style={{
          left: `${i * 30}%`,
          top: `${i * 20}%`,
          animationDelay: `${i * 2}s`,
          animationDuration: `${8 + i * 2}s`
        }} />)}
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-accent/10 text-accent rounded-full text-sm font-medium">
                See It In Action
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Transform Your Trade
                <span className="block text-accent">Document Flows</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Watch our platform revolutionize how trade documents are created, verified, and transferred across global supply chains
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 border border-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Button size="lg" className="relative z-10 bg-white/95 text-primary hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl text-lg px-8 py-4">
                  <Play className="mr-3 h-6 w-6" />
                  Watch Demo
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4">
                Schedule Consultation
              </Button>
              <Button size="lg" className="bg-gradient-to-r from-secondary to-accent text-white hover:opacity-90 px-8 py-4">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="relative py-32 bg-gradient-to-br from-background to-muted/30" id="contact-us">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Get Started
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Ready to Digitize
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Your Trade Documents?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join leading organizations already transforming their trade operations with VDP Trade Docs
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
                        <h3 className="text-3xl font-bold">Start Your Digital Transformation</h3>
                        <p className="text-lg text-white/90 leading-relaxed">
                          Transform your trade operations with our comprehensive digital documentation platform. Get started with VDP Trade Docs today.
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Mail className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">Email Us</h4>
                            <p className="text-white/80">contact@vayana.com</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Phone className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">Call Us</h4>
                            <p className="text-white/80">+1 (123) 456-7890</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Form Side */}
                  <div className="p-8 lg:p-12">
                    {formSubmitted ? <div className="text-center space-y-6 py-16">
                        <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-10 w-10 text-green-600" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
                          <p className="text-muted-foreground">
                            We've received your inquiry and will get back to you within 24 hours.
                          </p>
                        </div>
                      </div> : <>
                        <h3 className="text-2xl font-bold mb-8 text-foreground">Contact Us</h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                Full Name *
                              </label>
                              <input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
                            </div>
                            
                            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                Email Address *
                              </label>
                              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                                Organization
                              </label>
                              <input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Organization" className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
                            </div>

                            <div>
                              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                                Phone Number
                              </label>
                              <input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (123) 456-7890" className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                              Message *
                            </label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us about your trade documentation requirements..." className="w-full h-32 px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none" />
                          </div>
                          
                          <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-white hover:opacity-90 transition-opacity py-4 text-lg">
                            Send Inquiry
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </form>
                      </>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* LinkedIn Feed */}
      <LinkedInFeed />
    </div>
  );
};

export default VDPTradeDocs;
