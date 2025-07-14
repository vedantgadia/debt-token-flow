import React from 'react';
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
  Download
} from 'lucide-react';

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
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  VDP Trade Docs – Your Gateway to 
                  <span className="text-gradient bg-vayana-gradient bg-clip-text text-transparent"> Seamless, Secure</span> Cross-Border Trade Documentation
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Digitize, verify, and transfer trade documents with legal validity and global interoperability — powered by MLETR and TradeTrust.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-vayana-gradient text-white hover:opacity-90">
                  Explore the Platform
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Book a Walkthrough
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 flex items-center justify-center">
                  <div className="space-y-6 w-full">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-6 w-6 text-primary" />
                        <span className="font-medium">Bill of Lading</span>
                      </div>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-vayana-gradient rounded-full animate-pulse"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-white/50 rounded-lg">
                        <Globe className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <span className="text-sm">Verified</span>
                      </div>
                      <div className="text-center p-3 bg-white/50 rounded-lg">
                        <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <span className="text-sm">Secured</span>
                      </div>
                      <div className="text-center p-3 bg-white/50 rounded-lg">
                        <Zap className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <span className="text-sm">Fast</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="section-title">Global Trade Still Runs on Paper. We're Changing That.</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-destructive">The Problem</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Paper documents prone to loss and fraud</li>
                    <li>• Slow manual processing delays shipments</li>
                    <li>• Limited visibility across supply chains</li>
                    <li>• High operational costs and errors</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-green-600">Our Solution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Digital documents with legal validity</li>
                    <li>• Instant verification and processing</li>
                    <li>• Complete supply chain transparency</li>
                    <li>• Reduced costs and enhanced security</li>
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