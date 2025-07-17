import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, XCircle, Users, TrendingUp, Shield, Globe, Zap, Network, Building, Banknote, FileText, BarChart3, Target, Layers, ArrowUpRight, Mail, Phone } from "lucide-react";

const DeepTierSCF = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Unlock Capital. Deep into Your Supply Chain.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Enable liquidity for even your smallest suppliers with our Deep-Tier Supply Chain Finance platform—driving resilience, inclusivity, and transparency at every tier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore the Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Deep-Tier Supply Chain Finance */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What is Deep-Tier Supply Chain Finance?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Traditional supply chain finance often stops at the first-tier supplier—leaving thousands of smaller, deep-tier suppliers underserved.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                DTSCF is a paradigm shift. It extends working capital solutions across all tiers of a supply chain, empowering MSMEs with timely access to finance using the anchor buyer's strength.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Multi-Tier Liquidity</h4>
                    <p className="text-muted-foreground">Finance reaches 2nd, 3rd, and nth-tier suppliers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Anchor Credit Cascade</h4>
                    <p className="text-muted-foreground">Leverages the anchor's credit rating across the chain.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Digital Traceability</h4>
                    <p className="text-muted-foreground">End-to-end visibility of supply chain transactions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Financial Inclusion</h4>
                    <p className="text-muted-foreground">Brings underserved MSMEs into the formal financial ecosystem.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative scale-125">
                <div className="flex flex-col space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Building className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Anchor Buyer</h4>
                      <p className="text-sm text-muted-foreground">Large Corporation</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 ml-8">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Tier 1 Suppliers</h4>
                      <p className="text-sm text-muted-foreground">Direct Partners</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 ml-16">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <Network className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Tier 2 & 3 Suppliers</h4>
                      <p className="text-sm text-muted-foreground">Deep-Tier MSMEs</p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-8 top-20 w-px h-32 bg-gradient-to-b from-primary to-accent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why DTSCF Matters Today */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why DTSCF Matters Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Global supply chains are more interdependent than ever, and disruptions at the lower tiers can paralyze the entire system. DTSCF provides:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Resilience</h3>
                <p className="text-sm text-muted-foreground">Against supplier default</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Risk Reduction</h3>
                <p className="text-sm text-muted-foreground">Reduced risk concentration</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">ESG Metrics</h3>
                <p className="text-sm text-muted-foreground">Stronger compliance</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Loyalty</h3>
                <p className="text-sm text-muted-foreground">Improved supplier continuity</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">80%</div>
                <p className="text-sm text-muted-foreground">of supply chain participants are MSMEs</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">15%</div>
                <p className="text-sm text-muted-foreground">of MSMEs have access to formal financing</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">50%</div>
                <p className="text-sm text-muted-foreground">reduction in SME financing costs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How It Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">1</span>
                </div>
                <CardTitle>Anchor Onboarding</CardTitle>
                <CardDescription>
                  Anchor buyer integrates supply chain data and agrees to support multi-tier suppliers.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">2</span>
                </div>
                <CardTitle>Supply Chain Mapping</CardTitle>
                <CardDescription>
                  All tiers of suppliers are digitally mapped using invoices, purchase orders, and delivery milestones.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">3</span>
                </div>
                <CardTitle>Transaction Digitization</CardTitle>
                <CardDescription>
                  Real-time trade events are captured and authenticated through integrated systems.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">4</span>
                </div>
                <CardTitle>Early Encashment</CardTitle>
                <CardDescription>
                  Suppliers can encash their receivables early at competitive rates based on the anchor's credit strength, improving cash flow.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">5</span>
                </div>
                <CardTitle>Transfer to Next Tier</CardTitle>
                <CardDescription>
                  Credit availability cascades seamlessly to the next tier suppliers, extending liquidity throughout the supply chain.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">6</span>
                </div>
                <CardTitle>Repayment</CardTitle>
                <CardDescription>
                  Based on cash flow events or maturity dates, repayments are managed seamlessly.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>


      {/* Benefits for All Stakeholders */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Benefits for All Stakeholders
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Building className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Anchor Buyers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Better control and transparency</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Resilient supply chains</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">ESG & D&I reporting enhancements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Suppliers (all tiers)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Fast access to affordable credit</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Improved working capital cycle</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Business continuity during shocks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Banknote className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Financiers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Low-risk, anchor-backed portfolios</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">New MSME customer segments</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">High-volume, short-tenure instruments</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Differentiators
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 font-semibold">Feature</th>
                      <th className="text-center py-4 font-semibold">Traditional SCF</th>
                      <th className="text-center py-4 font-semibold">Our DTSCF Platform</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4">Multi-tier access</td>
                      <td className="text-center py-4">
                        <XCircle className="h-5 w-5 text-destructive mx-auto" />
                      </td>
                      <td className="text-center py-4">
                        <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4">Anchor Credit Utilization</td>
                      <td className="text-center py-4">
                        <XCircle className="h-5 w-5 text-destructive mx-auto" />
                      </td>
                      <td className="text-center py-4">
                        <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4">MSME Onboarding at Scale</td>
                      <td className="text-center py-4">
                        <XCircle className="h-5 w-5 text-destructive mx-auto" />
                      </td>
                      <td className="text-center py-4">
                        <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4">Real-time Transaction Data</td>
                      <td className="text-center py-4">
                        <XCircle className="h-5 w-5 text-destructive mx-auto" />
                      </td>
                      <td className="text-center py-4">
                        <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4">Digital Document Exchange</td>
                      <td className="text-center py-4">
                        <XCircle className="h-5 w-5 text-destructive mx-auto" />
                      </td>
                      <td className="text-center py-4">
                        <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4">Tokenized Payments Option</td>
                      <td className="text-center py-4">
                        <XCircle className="h-5 w-5 text-destructive mx-auto" />
                      </td>
                      <td className="text-center py-4">
                        <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Use Cases */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Real-World Use Cases
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Global Manufacturer</CardTitle>
                <CardDescription>
                  Anchors a multi-country chain with 4 supplier layers—financed directly from top to tier 3.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Automotive OEM</CardTitle>
                <CardDescription>
                  Helps second-tier parts manufacturers get faster access to capital via anchor's purchase orders.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Consumer Goods Giant</CardTitle>
                <CardDescription>
                  Uses DTSCF to meet ESG goals by bringing women-owned and rural suppliers into the finance fold.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology That Powers It */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technology That Powers It
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Network className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Distributed Ledgers & Tokenization</CardTitle>
                <CardDescription>
                  Transparency and programmable finance options for enhanced trust and automation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Layers className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Seamless Integration</CardTitle>
                <CardDescription>
                  Works with anchor ERP, logistics, and banking systems for unified operations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Event-Based Smart Triggers</CardTitle>
                <CardDescription>
                  Automated financing based on real-time supply chain events and milestones.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Comprehensive APIs</CardTitle>
                <CardDescription>
                  Document exchange, onboarding, and credit scoring through robust API infrastructure.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Who is it for?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Large Corporates</h3>
                <p className="text-sm text-muted-foreground">Anchor Buyers</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Banknote className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Banks & NBFCs</h3>
                <p className="text-sm text-muted-foreground">Financial Institutions</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Development FIs</h3>
                <p className="text-sm text-muted-foreground">Development Financial Institutions</p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50" id="contact-form">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-vayana-gradient text-white p-8 lg:p-12">
                <h2 className="text-3xl font-bold mb-6 font-display">Transform Your Supply Chain Finance</h2>
                <p className="text-lg text-gray-100 mb-8">
                  Ready to unlock capital deep into your supply chain? Contact our team to learn more about Deep-Tier Supply Chain Finance.
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
                      <input id="name" name="name" required placeholder="John Doe" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input id="email" name="email" type="email" required placeholder="john@example.com" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                      Organization
                    </label>
                    <input id="organization" name="organization" placeholder="Your Organization" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                      Role
                    </label>
                    <input id="role" name="role" placeholder="Your Role" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea id="message" name="message" required placeholder="Tell us about your specific requirements or questions" className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
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
    </div>
  );
};

export default DeepTierSCF;