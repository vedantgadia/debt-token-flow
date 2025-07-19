import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle, XCircle, Users, TrendingUp, Shield, Globe, Zap, Network, Building, Banknote, FileText, BarChart3, Target, Layers, ArrowUpRight, Mail, Phone, ArrowDown, Sparkles, Clock, CreditCard, Repeat, Send } from "lucide-react";
const DeepTierSCF = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl animate-pulse-slow" style={{
        animationDelay: '1.5s'
      }}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse-slow" style={{
        animationDelay: '3s'
      }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/80 to-secondary py-32 lg:py-40 overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-bounce" style={{
          animationDelay: '0.5s'
        }}></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-white/15 rounded-full animate-bounce" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-white/25 rounded-full animate-bounce" style={{
          animationDelay: '1.5s'
        }}></div>
          <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-white/20 rounded-full animate-bounce" style={{
          animationDelay: '2s'
        }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300">
              <Sparkles className="mr-2 h-4 w-4" />
              Revolutionary Finance Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
              Unlock Capital.
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Deep into Your Supply Chain.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
              Enable liquidity for even your smallest suppliers with our Deep-Tier Supply Chain Finance platform—driving resilience, inclusivity, and transparency at every tier.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-14 px-8 text-lg font-semibold shadow-2xl hover:shadow-white/20 transition-all duration-300 group">
                Explore the Platform
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white hover:bg-white h-14 px-8 text-lg font-semibold backdrop-blur-sm transition-all duration-300 text-red-800">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <ArrowDown className="h-6 w-6" />
        </div>
      </section>

      {/* What is Deep-Tier Supply Chain Finance */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3">
              <Badge className="mb-6 bg-primary/10 text-primary">
                Revolutionary Approach
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                What is Deep-Tier Supply Chain Finance?
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Traditional supply chain finance often stops at the first-tier supplier—leaving thousands of smaller, deep-tier suppliers underserved.
              </p>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                DTSCF is a paradigm shift. It extends working capital solutions across all tiers of a supply chain, empowering MSMEs with timely access to finance using the anchor buyer's strength.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="group">
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Layers className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Multi-Tier Liquidity</h4>
                      <p className="text-gray-600">Finance reaches 2nd, 3rd, and nth-tier suppliers.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary/20 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <TrendingUp className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Anchor Credit Cascade</h4>
                      <p className="text-gray-600">Leverages the anchor's credit rating across the chain.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/20 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Globe className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Digital Traceability</h4>
                      <p className="text-gray-600">End-to-end visibility of supply chain transactions.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Financial Inclusion</h4>
                      <p className="text-gray-600">Brings underserved MSMEs into the formal financial ecosystem.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="relative">
                {/* Interactive supply chain visualization */}
                <div className="relative p-8">
                  <div className="space-y-12">
                    {/* Anchor Buyer */}
                    <div className="flex items-center space-x-6 group">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                          <Building className="h-10 w-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-xl text-gray-800">Anchor Buyer</h4>
                        <p className="text-gray-600">Large Corporation</p>
                        <div className="mt-2 h-1 bg-gradient-to-r from-primary to-transparent rounded"></div>
                      </div>
                    </div>
                    
                    {/* Connection line */}
                    <div className="flex justify-center">
                      <div className="w-px h-8 bg-gradient-to-b from-primary via-secondary to-accent animate-pulse"></div>
                    </div>
                    
                    {/* Tier 1 Suppliers */}
                    <div className="flex items-center space-x-6 ml-8 group">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300">
                          <Users className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border border-white animate-pulse" style={{
                        animationDelay: '0.5s'
                      }}></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-800">Tier 1 Suppliers</h4>
                        <p className="text-gray-600">Direct Partners</p>
                        <div className="mt-2 h-1 bg-gradient-to-r from-secondary to-transparent rounded"></div>
                      </div>
                    </div>
                    
                    {/* Connection line */}
                    <div className="flex justify-center ml-8">
                      <div className="w-px h-8 bg-gradient-to-b from-secondary via-accent to-accent animate-pulse" style={{
                      animationDelay: '0.5s'
                    }}></div>
                    </div>
                    
                    {/* Tier 2 & 3 Suppliers */}
                    <div className="flex items-center space-x-6 ml-16 group">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                          <Network className="h-6 w-6 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border border-white animate-pulse" style={{
                        animationDelay: '1s'
                      }}></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-800">Tier 2 & 3 Suppliers</h4>
                        <p className="text-gray-600">Deep-Tier MSMEs</p>
                        <div className="mt-2 h-1 bg-gradient-to-r from-accent to-transparent rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements around the visualization */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-primary/30 rounded-full animate-bounce" style={{
                  animationDelay: '0.2s'
                }}></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-secondary/30 rounded-full animate-bounce" style={{
                  animationDelay: '0.7s'
                }}></div>
                  <div className="absolute top-1/2 right-0 w-4 h-4 bg-accent/30 rounded-full animate-bounce" style={{
                  animationDelay: '1.2s'
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why DTSCF Matters Today */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-white/80 text-primary shadow-lg">
              Market Impact
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Why DTSCF Matters Today
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Global supply chains are more interdependent than ever, and disruptions at the lower tiers can paralyze the entire system.
            </p>
          </div>
          
          {/* Benefits Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[{
            icon: Shield,
            title: "Resilience",
            desc: "Against supplier default",
            color: "primary"
          }, {
            icon: Target,
            title: "Risk Reduction",
            desc: "Reduced risk concentration",
            color: "secondary"
          }, {
            icon: TrendingUp,
            title: "ESG Metrics",
            desc: "Stronger compliance",
            color: "accent"
          }, {
            icon: Users,
            title: "Loyalty",
            desc: "Improved supplier continuity",
            color: "primary"
          }].map((item, index) => <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/60 backdrop-blur-sm hover:bg-white hover:-translate-y-2">
                <CardContent className="pt-8 text-center">
                  <div className={`w-16 h-16 bg-${item.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 group-hover:rotate-6`}>
                    <item.icon className={`h-8 w-8 text-${item.color}`} />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>)}
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-8">
            {[{
            stat: "80%",
            desc: "of supply chain participants are MSMEs",
            color: "from-primary to-secondary"
          }, {
            stat: "15%",
            desc: "of MSMEs have access to formal financing",
            color: "from-secondary to-accent"
          }, {
            stat: "50%",
            desc: "reduction in SME financing costs",
            color: "from-accent to-primary"
          }].map((item, index) => <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:-translate-y-2">
                <CardContent className="pt-8 text-center">
                  <div className={`text-6xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform`}>
                    {item.stat}
                  </div>
                  <p className="text-gray-600 text-lg">{item.desc}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary">
              Process Flow
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              How It Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            num: 1,
            title: "Anchor Onboarding",
            desc: "Anchor buyer integrates supply chain data and agrees to support multi-tier suppliers.",
            icon: Building,
            color: "primary"
          }, {
            num: 2,
            title: "Supply Chain Mapping",
            desc: "All tiers of suppliers are digitally mapped using invoices, purchase orders, and delivery milestones.",
            icon: Network,
            color: "secondary"
          }, {
            num: 3,
            title: "Transaction Digitization",
            desc: "Real-time trade events are captured and authenticated through integrated systems.",
            icon: FileText,
            color: "accent"
          }, {
            num: 4,
            title: "Early Encashment",
            desc: "Suppliers can encash their receivables early at competitive rates based on the anchor's credit strength, improving cash flow.",
            icon: Clock,
            color: "primary"
          }, {
            num: 5,
            title: "Transfer to Next Tier",
            desc: "Credit availability cascades seamlessly to the next tier suppliers, extending liquidity throughout the supply chain.",
            icon: Repeat,
            color: "secondary"
          }, {
            num: 6,
            title: "Repayment",
            desc: "Based on cash flow events or maturity dates, repayments are managed seamlessly.",
            icon: CreditCard,
            color: "accent"
          }].map((step, index) => <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="relative">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${step.color} to-${step.color}/80 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                      {step.num}
                    </div>
                    <div className={`w-12 h-12 bg-${step.color}/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <step.icon className={`h-6 w-6 text-${step.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {step.desc}
                  </CardDescription>
                </CardHeader>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Benefits for All Stakeholders */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-accent/10 text-accent">
              Stakeholder Benefits
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Benefits for All Stakeholders
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[{
            icon: Building,
            title: "Anchor Buyers",
            benefits: ["Better control and transparency", "Resilient supply chains", "ESG & D&I reporting enhancements"],
            color: "primary"
          }, {
            icon: Users,
            title: "Suppliers (all tiers)",
            benefits: ["Fast access to affordable credit", "Improved working capital cycle", "Business continuity during shocks"],
            color: "secondary"
          }, {
            icon: Banknote,
            title: "Financiers",
            benefits: ["Low-risk, anchor-backed portfolios", "New MSME customer segments", "High-volume, short-tenure instruments"],
            color: "accent"
          }].map((stakeholder, index) => <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 hover:-translate-y-2 bg-white">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br from-${stakeholder.color} to-${stakeholder.color}/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <stakeholder.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{stakeholder.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {stakeholder.benefits.map((benefit, idx) => <li key={idx} className="flex items-start space-x-3 group/item">
                        <CheckCircle className={`h-5 w-5 text-${stakeholder.color} mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform`} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-white/80 text-primary shadow-lg">
              Competitive Edge
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Differentiators
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
              <div className="p-8 lg:p-12">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-6 font-bold text-xl text-gray-800">Feature</th>
                        <th className="text-center py-6 font-bold text-xl text-gray-800">Traditional SCF</th>
                        <th className="text-center py-6 font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Our DTSCF Platform</th>
                      </tr>
                    </thead>
                    <tbody>
                      {["Multi-tier access", "Anchor Credit Utilization", "MSME Onboarding at Scale", "Real-time Transaction Data", "Digital Document Exchange", "Tokenized Payments Option"].map((feature, index) => <tr key={index} className="border-b border-gray-100 hover:bg-white/50 transition-colors">
                          <td className="py-6 font-semibold text-gray-800">{feature}</td>
                          <td className="text-center py-6">
                            <div className="flex justify-center">
                              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                                <XCircle className="h-6 w-6 text-red-500" />
                              </div>
                            </div>
                          </td>
                          <td className="text-center py-6">
                            <div className="flex justify-center">
                              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                <CheckCircle className="h-6 w-6 text-green-500" />
                              </div>
                            </div>
                          </td>
                        </tr>)}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Real-World Use Cases */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-secondary/10 text-secondary">
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Real-World Use Cases
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[{
            icon: Globe,
            title: "Global Manufacturer",
            desc: "Anchors a multi-country chain with 4 supplier layers—financed directly from top to tier 3.",
            color: "primary"
          }, {
            icon: Building,
            title: "Automotive OEM",
            desc: "Helps second-tier parts manufacturers get faster access to capital via anchor's purchase orders.",
            color: "secondary"
          }, {
            icon: Users,
            title: "Consumer Goods Giant",
            desc: "Uses DTSCF to meet ESG goals by bringing women-owned and rural suppliers into the finance fold.",
            color: "accent"
          }].map((useCase, index) => <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br from-${useCase.color} to-${useCase.color}/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <useCase.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-lg">
                    {useCase.desc}
                  </CardDescription>
                </CardHeader>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Technology That Powers It */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-accent/10 text-accent">
              Technology Stack
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Technology That Powers It
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[{
            icon: Network,
            title: "Distributed Ledgers & Tokenization",
            desc: "Transparency and programmable finance options for enhanced trust and automation.",
            color: "primary"
          }, {
            icon: Layers,
            title: "Seamless Integration",
            desc: "Works with anchor ERP, logistics, and banking systems for unified operations.",
            color: "secondary"
          }, {
            icon: Zap,
            title: "Event-Based Smart Triggers",
            desc: "Automated financing based on real-time supply chain events and milestones.",
            color: "accent"
          }, {
            icon: FileText,
            title: "Comprehensive APIs",
            desc: "Document exchange, onboarding, and credit scoring through robust API infrastructure.",
            color: "primary"
          }].map((tech, index) => <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 hover:-translate-y-2 bg-white">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br from-${tech.color} to-${tech.color}/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <tech.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{tech.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-lg">
                    {tech.desc}
                  </CardDescription>
                </CardHeader>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-white/80 text-primary shadow-lg">
              Target Audience
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Who is it for?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[{
            icon: Building,
            title: "Large Corporates",
            desc: "Anchor Buyers",
            color: "primary"
          }, {
            icon: Banknote,
            title: "Banks & NBFCs",
            desc: "Financial Institutions",
            color: "secondary"
          }, {
            icon: Globe,
            title: "Development FIs",
            desc: "Development Financial Institutions",
            color: "accent"
          }].map((audience, index) => <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 hover:-translate-y-2 bg-white/60 backdrop-blur-sm text-center">
                <CardContent className="pt-8">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${audience.color} to-${audience.color}/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <audience.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3">{audience.title}</h3>
                  <p className="text-gray-600 text-lg">{audience.desc}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-gray-100 to-white" id="contact-form">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-2xl border-0 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gradient-to-br from-primary via-secondary to-accent text-white p-12 lg:p-16 relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full"></div>
                    <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/20 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <Badge className="mb-6 bg-white/10 text-white border-white/20">
                      Get Started
                    </Badge>
                    <h2 className="text-4xl font-bold mb-6 font-display">Transform Your Supply Chain Finance</h2>
                    <p className="text-xl text-white/90 mb-12 leading-relaxed">
                      Ready to unlock capital deep into your supply chain? Contact our team to learn more about Deep-Tier Supply Chain Finance.
                    </p>
                    
                    <div className="space-y-8">
                      <div className="flex items-center gap-6 group">
                        <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                          <Mail className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl mb-1">Email Us</h3>
                          <p className="text-white/80 text-lg">contact@vayana.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6 group">
                        <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                          <Phone className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl mb-1">Call Us</h3>
                          <p className="text-white/80 text-lg">+1 (123) 456-7890</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-12 lg:p-16 bg-gradient-to-br from-white to-gray-50">
                  <h3 className="text-3xl font-bold mb-8 text-gray-800">Contact Us</h3>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input id="name" name="name" required placeholder="John Doe" className="h-12 border-gray-200 focus:border-primary focus:ring-primary/20 rounded-xl" />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input id="email" name="email" type="email" required placeholder="john@example.com" className="h-12 border-gray-200 focus:border-primary focus:ring-primary/20 rounded-xl" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                        Organization
                      </label>
                      <Input id="organization" name="organization" placeholder="Your Organization" className="h-12 border-gray-200 focus:border-primary focus:ring-primary/20 rounded-xl" />
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
                        Role
                      </label>
                      <Input id="role" name="role" placeholder="Your Role" className="h-12 border-gray-200 focus:border-primary focus:ring-primary/20 rounded-xl" />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea id="message" name="message" required placeholder="Tell us about your specific requirements or questions" className="h-32 border-gray-200 focus:border-primary focus:ring-primary/20 rounded-xl resize-none" />
                    </div>
                    
                    <Button type="submit" className="w-full h-14 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                      Send Inquiry
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeepTierSCF;