import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle, XCircle, Users, TrendingUp, Shield, Globe, Zap, Network, Building, Banknote, FileText, BarChart3, Target, Layers, ArrowUpRight, Mail, Phone, ArrowDown, Sparkles, Clock, CreditCard, Repeat, Send, Play, Pause, ExternalLink, IndianRupee, Smartphone, Wifi } from "lucide-react";

import indiaDigitalPayments from '../assets/india-digital-payments.jpg';
import indiaTextilePayments from '../assets/india-textile-payments.jpg';
import indiaAgriculturePayments from '../assets/india-agriculture-payments.jpg';
import indiaBlockchainPayments from '../assets/india-blockchain-payments.jpg';

const DeepTierSCPayments = () => {
  return <div className="min-h-screen bg-background relative overflow-hidden">
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
      <section className="relative bg-gradient-to-br from-primary via-primary/80 to-secondary py-20 lg:py-28 overflow-hidden">
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
              <IndianRupee className="mr-2 h-4 w-4" />
              Digital India Payments Revolution
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
              Instant Payments.
              <span className="block bg-gradient-to-r from-yellow-300 to-secondary bg-clip-text text-transparent">
                Deep into Your Supply Chain.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
              Revolutionize payments across your entire supply chain ecosystem in India with our Deep-Tier Supply Chain Payments platform—enabling instant, secure, and transparent transactions for every supplier.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-14 px-8 text-lg font-semibold shadow-2xl hover:shadow-white/20 transition-all duration-300 group">
                Explore the Platform
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white hover:bg-white h-14 px-8 text-lg font-semibold backdrop-blur-sm transition-all duration-300 text-white hover:text-primary">
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

      {/* What is Deep-Tier Supply Chain Payments */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3">
              <Badge className="mb-6 bg-primary/10 text-primary">
                Revolutionary Payment System
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                What is Deep-Tier Supply Chain Payments?
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Traditional payment systems in India often exclude smaller suppliers from instant payment benefits, creating cash flow challenges across the supply chain.
              </p>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Our Deep-Tier Supply Chain Payments platform extends instant, digital payments to every tier of your supply chain, leveraging India's robust digital infrastructure and advanced payment technology.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="group">
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Digital Integration</h4>
                      <p className="text-gray-600">Seamless integration with existing payment systems.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary/20 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Zap className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Instant Settlement</h4>
                      <p className="text-gray-600">Real-time payments across all supplier tiers.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/20 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Shield className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Advanced Security</h4>
                      <p className="text-gray-600">Secure transaction records and automated payment processing.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">MSME Inclusion</h4>
                      <p className="text-gray-600">Bringing India's small businesses into the digital economy.</p>
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
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full border-2 border-white animate-pulse"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-xl text-gray-800">Large Corporation</h4>
                        <p className="text-gray-600">Anchor Buyer</p>
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
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border border-white animate-pulse" style={{
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
                      <div className="w-px h-8 bg-gradient-to-b from-primary via-secondary to-accent animate-pulse" style={{
                      animationDelay: '0.5s'
                    }}></div>
                    </div>
                    
                    {/* Tier 2 & 3 Suppliers */}
                    <div className="flex items-center space-x-6 ml-16 group">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                          <Network className="h-6 w-6 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border border-white animate-pulse" style={{
                        animationDelay: '1s'
                      }}></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-800">Tier 2 & 3 Suppliers</h4>
                        <p className="text-gray-600">MSMEs & Small Vendors</p>
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

      {/* Why Deep-Tier Payments Matter in India */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white shadow-lg px-4 py-2">
              Digital India Impact
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Why Deep-Tier Payments Matter in India
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              India's MSME sector contributes 30% to GDP but faces significant payment delays, impacting cash flow and growth potential.
            </p>
          </div>
          
          {/* Benefits Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[{
            icon: Zap,
            title: "Instant Payments",
            desc: "Real-time settlements for all tiers",
            color: "primary"
          }, {
            icon: IndianRupee,
            title: "Cost Reduction",
            desc: "Lower transaction costs via digital payments",
            color: "secondary"
          }, {
            icon: Smartphone,
            title: "Digital Inclusion",
            desc: "Mobile-first approach for MSMEs",
            color: "accent"
          }, {
            icon: Shield,
            title: "Transparency",
            desc: "Complete audit trails and reporting",
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
            stat: "6.3 Crore",
            desc: "MSMEs in India need better payment solutions",
            color: "from-primary to-secondary"
          }, {
            stat: "45 Days",
            desc: "Average payment cycle for small suppliers",
            color: "from-secondary to-accent"
          }, {
            stat: "₹500Cr+",
            desc: "Daily digital transaction volume potential",
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

      {/* How It Works - India-focused Flow */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Payment Flow
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              How Deep-Tier Payments Work in India
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leveraging advanced digital technology and payment infrastructure for seamless multi-tier payments
            </p>
          </div>
          
          {/* Flow Diagram */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 md:p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Deep-Tier Supply Chain Payments Flow</h3>
                <p className="text-gray-600">Powered by Advanced Digital Payment Technology</p>
              </div>
              
              {/* Diagram Container */}
              <div className="bg-gray-50 rounded-xl p-4">
                <img src="/lovable-uploads/b4d908ab-34da-4fbc-9d1a-2a39b8403b72.png" alt="Deep-Tier Supply Chain Payments Flow Diagram" className="w-full h-auto max-w-full mx-auto rounded-lg" />
              </div>
            </div>
          </div>

          {/* Process Steps Removed */}
        </div>
      </section>

      {/* Benefits for Indian Stakeholders */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white shadow-lg px-4 py-2">
              Stakeholder Benefits
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Benefits for Indian Supply Chain Ecosystem
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[{
            icon: Building,
            title: "Large Corporations",
            benefits: ["Improved supplier relationships", "Better working capital management", "Enhanced supply chain visibility", "ESG compliance tracking"],
            color: "primary"
          }, {
            icon: Users,
            title: "MSMEs & Suppliers",
            benefits: ["Instant payment settlements", "Reduced transaction costs", "Digital payment history", "Access to credit scoring"],
            color: "secondary"
          }, {
            icon: Banknote,
            title: "Financial Institutions",
            benefits: ["Real-time transaction monitoring", "Complete audit trails", "Integration with existing systems", "Regulatory compliance support"],
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
      <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white shadow-lg px-4 py-2">
              Competitive Edge
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Differentiators in Indian Market
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
                        <th className="text-center py-6 font-bold text-xl text-gray-800">Traditional Payments</th>
                        <th className="text-center py-6 font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Our Deep-Tier Payments</th>
                      </tr>
                    </thead>
                    <tbody>
                      {["Multi-tier Digital Integration", "Instant Settlement", "Advanced Transparency", "MSME Digital Onboarding", "Real-time Compliance", "Regional Language Support"].map((feature, index) => <tr key={index} className="border-b border-gray-100 hover:bg-white/50 transition-colors">
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

      {/* Real-World Use Cases - Interactive Story Layout */}
      <section className="py-24 bg-gradient-to-br from-white via-primary/2 to-secondary/5 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white shadow-lg px-6 py-2">
              <Play className="mr-2 h-4 w-4" />
              Indian Success Stories
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              See Payments in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore real transformations across Indian industries through instant payment solutions
            </p>
          </div>
          
          {/* Interactive Case Studies */}
          <div className="space-y-16">
            {[{
              title: "Digital India Manufacturing",
              subtitle: "Instant payments across automotive supply chain",
              image: indiaDigitalPayments,
              stats: ["Digital Integration", "MSME Empowerment", "Real-time Settlement"],
              highlight: "Digital India initiative",
              color: "from-primary to-secondary"
            }, {
              title: "Textile Industry Revolution",
              subtitle: "Transforming traditional textile payments",
              image: indiaTextilePayments,
              stats: ["Traditional to Digital", "Instant Processing", "Cost Reduction"],
              highlight: "Made in India support",
              color: "from-secondary to-accent"
            }, {
              title: "Agriculture Payment Innovation",
              subtitle: "Bringing farmers into digital payment ecosystem",
              image: indiaAgriculturePayments,
              stats: ["Rural Inclusion", "Mobile-first", "Government Alignment"],
              highlight: "Farmer welfare program",
              color: "from-accent to-primary"
            }].map((story, index) => (
              <div key={index} className={`group relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex gap-12 items-center`}>
                {/* Image Container */}
                <div className="lg:w-1/2 relative">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-700">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Floating Action Button */}
                    <div className="absolute top-6 right-6">
                      <Button size="icon" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-0 rounded-full">
                        <ExternalLink className="h-5 w-5 text-white" />
                      </Button>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="absolute bottom-6 left-6 flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-800">Ready to Deploy</span>
                    </div>
                  </div>
                </div>
                
                {/* Content Container */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="space-y-4">
                    <Badge className={`bg-gradient-to-r ${story.color} text-white border-0 px-4 py-1`}>
                      {story.highlight}
                    </Badge>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {story.subtitle}
                    </p>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {story.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                        <div className={`text-sm font-bold bg-gradient-to-r ${story.color} bg-clip-text text-transparent mb-1`}>
                          {stat}
                        </div>
                        <div className="text-xs text-gray-500">Capability</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Button */}
                  <Button className={`bg-gradient-to-r ${story.color} hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group/btn px-6 py-3`}>
                    Explore Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology That Powers It - Interactive Tech Hub */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary/5 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-secondary rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-accent rounded-full animate-pulse delay-700"></div>
        </div>
        
        {/* Floating Tech Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-secondary rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-20 right-20 w-4 h-4 bg-primary rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white border-0 px-6 py-2">
              <Wifi className="mr-2 h-4 w-4" />
              India-First Technology
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Powered by Indian Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging India's digital infrastructure for next-generation supply chain payments
            </p>
          </div>
          
          {/* Hero Tech Visual */}
          <div className="relative mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src={indiaBlockchainPayments}
                  alt="India Blockchain Payments Technology"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
                
                {/* Floating Tech Badges */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
                    {['Digital Payments', 'Cloud Infrastructure', 'API Integration'].map((tech, index) => (
                      <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 text-center border border-white/20 hover:bg-white transition-all duration-300 cursor-pointer group shadow-lg">
                        <div className="text-sm font-medium text-gray-800 group-hover:scale-105 transition-transform">
                          {tech}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Status Indicator */}
                <div className="absolute top-6 right-6 flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20 shadow-lg">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-800">Production Ready</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Interactive Tech Stack */}
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {[{
                icon: Smartphone,
                title: "Advanced Digital Payment Integration",
                desc: "Seamless integration with India's digital payment infrastructure enhanced with advanced security and transparency features.",
                features: ["Digital Compatible", "Automated Processing", "Instant Settlement"],
                color: "from-primary to-secondary"
              }, {
                icon: Network,
                title: "Real-time Payment Processing",
                desc: "Event-driven architecture designed for India's high-volume payment ecosystem with instant transaction processing.",
                features: ["High Volume Support", "Multi-language UI", "Regional Compliance"],
                color: "from-secondary to-accent"
              }].map((tech, index) => (
                <div key={index} className="group">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-primary/30 transition-all duration-500 hover:shadow-xl shadow-lg">
                    <div className="flex items-start space-x-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <tech.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                          {tech.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {tech.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {tech.features.map((feature, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 border border-gray-200 hover:bg-primary/10 hover:border-primary/30 transition-colors">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-secondary rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-accent rounded-full animate-pulse delay-700"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-8 bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-shadow duration-300 px-6 py-2 text-lg">
              Target Audience
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Who is it for?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering India's digital payment ecosystem from large corporations to rural MSMEs
            </p>
          </div>
          
          {/* Connection Diagram */}
          <div className="relative max-w-6xl mx-auto mb-16">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2"></div>
            <div className="hidden md:block absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="hidden md:block absolute top-1/2 right-1/4 w-2 h-2 bg-accent rounded-full transform translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
            <div className="hidden md:block absolute top-1/2 left-1/2 w-3 h-3 bg-secondary rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-300"></div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[{
              icon: Building,
              title: "Large Indian Corporations",
              desc: "Multinational companies and large enterprises looking to digitize their supply chain payments across India",
              features: ["Supply Chain Digitization", "MSME Payment Management", "Compliance Automation"],
              color: "from-primary to-secondary"
            }, {
              icon: Users,
              title: "MSMEs & Small Businesses",
              desc: "India's 6.3 crore MSMEs seeking instant payment solutions and digital financial inclusion",
              features: ["Digital payment receipt", "Digital payment history", "Easy integration"],
              color: "from-secondary to-accent"
            }, {
              icon: Banknote,
              title: "Financial Institutions",
              desc: "Banks, NBFCs, and payment service providers wanting to serve the supply chain payment ecosystem",
              features: ["Payment Infrastructure", "Regulatory Compliance", "Transaction Monitoring"],
              color: "from-accent to-primary"
            }].map((audience, index) => <Card key={index} className="group bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${audience.color} rounded-full transform translate-x-8 -translate-y-8`}></div>
                  </div>
                  
                  <CardHeader className="relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${audience.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl`}>
                      <audience.icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold mb-4">{audience.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed text-lg">
                      {audience.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-3">
                      {audience.features.map((feature, idx) => <div key={idx} className="flex items-center space-x-3 group/feature">
                          <div className={`w-2 h-2 bg-gradient-to-r ${audience.color} rounded-full group-hover/feature:scale-125 transition-transform`}></div>
                          <span className="text-gray-700 group-hover/feature:text-gray-900 transition-colors">{feature}</span>
                        </div>)}
                    </div>
                  </CardContent>
                </Card>)}
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
                Ready to Transform
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Your Supply Chain Payments?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join leading organizations already transforming their payment operations with Deep-Tier Supply Chain Payments
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
                          Transform your supply chain payments with instant, secure, and transparent solutions powered by advanced digital technology.
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
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Phone Number
                          </label>
                          <input id="phone" name="phone" placeholder="+91 (123) 456-7890" className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <textarea id="message" name="message" required placeholder="Tell us about your supply chain payment requirements..." className="w-full h-32 px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none" />
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
    </div>;
};

export default DeepTierSCPayments;