import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Users, 
  Cog, 
  FileText,
  Network,
  Activity,
  Building,
  TrendingUp,
  Coins,
  Clock,
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
  Globe,
  Lock,
  Award,
  Layers
} from "lucide-react";
import { useSearchParams } from "react-router-dom";
import ContactSection from '../components/ContactSection';
import TokenizationFlow from '../components/TokenizationFlow';
import PlatformShowcase from '../components/PlatformShowcase';
import LinkedInFeed from '../components/LinkedInFeed';
import realEstateImage from '../assets/real-estate-building.jpg';
import financeImage from '../assets/finance-code.jpg';
import alternateAssetsImage from '../assets/alternate-assets.jpg';
import debtCapitalImage from '../assets/debt-capital.jpg';
import collectiblesImage from '../assets/collectibles-art.jpg';
import techCircuitImage from '../assets/tech-circuit.jpg';
import tokenNetworkImage from '../assets/token-network-flow.jpg';
import modernBuildingImage from '../assets/modern-building.jpg';
import warehouseImage from '../assets/warehouse-property.jpg';
import goldBarsImage from '../assets/gold-bars.jpg';
import fineArtImage from '../assets/fine-art.jpg';
import equityDashboardImage from '../assets/equity-funds-dashboard.jpg';
import debtSecuritiesImage from '../assets/debt-securities.jpg';

const Tokenization = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || 'real-estate';
  
  const categoryContent = {
    'debt-capital': {
      title: 'Debt Capital Markets',
      hero: 'Tokenizing Debt for Global Capital Access',
      section2Title: 'Bringing Debt Capital Markets On-Chain',
      section2Body: 'Debt instruments have historically been limited to institutional investors due to high capital thresholds, limited liquidity, and complex operational processes. Tokenization is changing that by digitizing debt securities, streamlining issuance, and enabling fractional investments in a fully compliant and programmable manner.',
      useCases: 'Corporate bonds, government securities, asset-backed securities',
      finalCTA: 'Digitize and distribute debt securities with confidence. Let\'s bring your bonds on-chain.',
      partnershipText: 'Built in partnership with leading regulatory technology providers to ensure full compliance with debt securities regulations.'
    },
    'real-estate': {
      title: 'Real Estate',
      hero: 'Tokenizing Real Estate for Global Market Access',
      section2Title: 'Bringing Real Estate On-Chain',
      section2Body: 'High-value assets like real estate have historically been limited to a few due to high capital thresholds, limited liquidity, and complex operational processes. Tokenization is changing that by digitizing ownership, streamlining issuance, and enabling fractional investments in a fully compliant and programmable manner.',
      useCases: 'REITs, property-backed lending, rental tokenization',
      finalCTA: 'Digitize and distribute real estate with confidence. Let\'s bring your assets on-chain.',
      partnershipText: 'Built in partnership with leading compliance technology providers to ensure regulatory adherence across jurisdictions.'
    },
    'equity-funds': {
      title: 'Equity & Funds',
      hero: 'Tokenizing Equity & Funds for Global Market Access',
      section2Title: 'Bringing Private Equity On-Chain',
      section2Body: 'High-value assets like private equity have historically been limited to a few due to high capital thresholds, limited liquidity, and complex operational processes. Tokenization is changing that by digitizing ownership, streamlining issuance, and enabling fractional investments in a fully compliant and programmable manner.',
      useCases: 'Private equity offerings, VC syndicates, fund unit digitization',
      finalCTA: 'Digitize and distribute equity with confidence. Let\'s bring your assets on-chain.',
      partnershipText: 'Leveraging proven tokenization frameworks developed in partnership with leading compliance infrastructure providers.'
    },
    'alternate-assets': {
      title: 'Alternate Assets',
      hero: 'Tokenizing Alternate Assets for Global Market Access',
      section2Title: 'Bringing Alternative Investments On-Chain',
      section2Body: 'High-value assets like art, collectibles, and other alternatives have historically been limited to a few due to high capital thresholds, limited liquidity, and complex operational processes. Tokenization is changing that by digitizing ownership, streamlining issuance, and enabling fractional investments in a fully compliant and programmable manner.',
      useCases: 'Art, collectibles, IP rights, carbon credits, whiskey',
      finalCTA: 'Digitize and distribute alt-assets with confidence. Let\'s bring your assets on-chain.',
      partnershipText: 'Enhanced by strategic partnerships with regulatory technology leaders to ensure institutional-grade compliance and standards.'
    }
  };

  const content = categoryContent[category as keyof typeof categoryContent] || categoryContent['real-estate'];
  
  // Get appropriate images based on category and context
  const getCategoryImages = () => {
    switch (category) {
      case 'debt-capital':
        return {
          hero: debtSecuritiesImage,
          section2: debtSecuritiesImage,
          alternate: tokenNetworkImage
        };
      case 'real-estate':
        return {
          hero: modernBuildingImage,
          section2: warehouseImage,
          alternate: realEstateImage
        };
      case 'equity-funds':
        return {
          hero: equityDashboardImage,
          section2: financeImage,
          alternate: equityDashboardImage
        };
      case 'alternate-assets':
        return {
          hero: goldBarsImage,
          section2: fineArtImage,
          alternate: collectiblesImage
        };
      default:
        return {
          hero: modernBuildingImage,
          section2: warehouseImage,
          alternate: realEstateImage
        };
    }
  };

  const categoryImages = getCategoryImages();

  const benefits = [
    {
      icon: Users,
      title: "Fractional Ownership",
      description: "Make high-value assets accessible to a broader investor base by dividing them into smaller digital units."
    },
    {
      icon: TrendingUp,
      title: "Liquidity Enablement",
      description: "Facilitate secondary trading of tokenized assets via regulated exchanges or OTC platforms."
    },
    {
      icon: Cog,
      title: "Operational Efficiency",
      description: "Reduce reliance on intermediaries and manual processes with smart contracts and digitized workflows."
    }
  ];

  const capabilities = [
    { icon: FileText, title: "ERC3643 Smart Contracts" },
    { icon: Users, title: "Investor Registry & Wallets" },
    { icon: Network, title: "Subscription & Distribution Engine" },
    { icon: Shield, title: "Regulatory Controls & Compliance" },
    { icon: Globe, title: "Interoperable Architecture" },
    { icon: Activity, title: "Real-Time Audit Trail" }
  ];

  const steps = [
    { title: "Asset Digitization", icon: Building },
    { title: "Smart Contract Creation", icon: FileText },
    { title: "Investor Onboarding", icon: Users },
    { title: "Primary Distribution", icon: Network },
    { title: "Post-Issuance Management", icon: Cog }
  ];

  const pillars = [
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Powering $1.5B+ monthly finance across regulated partners"
    },
    {
      icon: Zap,
      title: "Enterprise-Grade Tech",
      description: "ERC3643 compliant infrastructure with on-cloud or hybrid support"
    },
    {
      icon: Shield,
      title: "Regulatory Alignment",
      description: "Supports MLETR, MiCA, IFSCA, and sandbox regulations with strategic partners"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-vayana-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm border border-white/30">
                {content.title} Tokenization
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-display text-white">
                {content.hero.split(' ').slice(0, -4).join(' ')}
                <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  {content.hero.split(' ').slice(-4).join(' ')}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-xl">
                Unlock liquidity, enable fractional ownership, and simplify distribution with compliant tokenization infrastructure built for institutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 font-semibold">
                  Explore the Platform
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Simplified Visual Elements */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Floating Token Icons */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-32 h-32 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <Coins className="h-16 w-16 text-white" />
                  </div>
                  <div className="w-32 h-32 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <Network className="h-16 w-16 text-white" />
                  </div>
                  <div className="w-32 h-32 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <Building className="h-16 w-16 text-white" />
                  </div>
                  <div className="w-32 h-32 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <Shield className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Future of Asset Ownership */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="section-title text-gray-900">
                {content.section2Title}
              </h2>
              <p className="section-subtitle text-gray-600">
                {content.section2Body}
              </p>
              <p className="section-subtitle text-gray-600">
                At Vayana, we bring the power of blockchain to {content.title.toLowerCase()}, enabling trusted institutions, asset managers, and platforms to unlock efficiency and scalability through tokenization.
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-blue-50 text-blue-700 rounded-xl text-sm font-medium border border-blue-200">
                <Award className="mr-2 h-4 w-4" />
                {content.partnershipText}
              </div>
            </div>
            
            {/* Category-specific visual */}
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                <img 
                  src={categoryImages.section2} 
                  alt={content.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vayana-blue/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                    {category === 'real-estate' ? 'Property Innovation' : 
                     category === 'alternate-assets' ? 'Alternative Assets' :
                     category === 'equity-funds' ? 'Fund Management' :
                     'Debt Securities'}
                  </h3>
                  <p className="text-sm text-white/90 transform transition-transform duration-300 group-hover:translate-y-[-2px]">
                    Transforming traditional assets into programmable digital securities
                  </p>
                </div>
              </div>
              
              {/* Floating animation elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-vayana-red/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-vayana-blue/30 rounded-full animate-pulse delay-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="section-title text-gray-900">
                Why Tokenize {content.title}?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                 <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white hover:bg-vayana-blue/5 overflow-hidden">
                   {/* Visual Header */}
                   <div className="h-32 bg-gradient-to-br from-vayana-blue/10 via-vayana-purple/10 to-vayana-red/10 relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent" />
                     <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                       <benefit.icon className="h-8 w-8 text-vayana-blue" />
                     </div>
                     <div className="absolute bottom-4 left-4">
                       <div className="w-8 h-8 bg-vayana-blue/20 rounded-full" />
                       <div className="w-4 h-4 bg-vayana-red/30 rounded-full -mt-2 ml-6" />
                     </div>
                   </div>
                   
                   <CardContent className="p-8 text-center space-y-4">
                     <h3 className="text-xl font-semibold">
                       {benefit.title}
                     </h3>
                     <p className="text-muted-foreground">
                       {benefit.description}
                     </p>
                   </CardContent>
                 </Card>
               ))}
             </div>
           </div>
         </div>
       </section>

      {/* Section 4: Capabilities */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h2 className="section-title text-gray-900">
                  Institutional-Grade Tokenization Infrastructure
                </h2>
                <p className="section-subtitle text-gray-600">
                  Built for security, compliance, and scale, the Vayana Tokenization Platform offers everything you need to tokenize and manage {content.title.toLowerCase()} across their lifecycle.
                </p>
              </div>
              
              {/* Tech Infrastructure Visual */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={techCircuitImage} 
                    alt="Technology Infrastructure"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vayana-purple/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Enterprise Infrastructure</h3>
                    <p className="text-sm text-white/90">Scalable, secure, and regulatory-compliant technology stack</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                 <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white hover:bg-vayana-blue/5">
                   <CardContent className="p-6 flex items-center space-x-4">
                     <div className="w-12 h-12 bg-vayana-blue/10 rounded-lg flex items-center justify-center group-hover:bg-vayana-blue/20 transition-all duration-300">
                       <capability.icon className="h-6 w-6 text-vayana-blue" />
                     </div>
                    <h3 className="font-semibold">
                      {capability.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Category Showcase with Interactive Elements */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="section-title text-gray-900">
                Trusted by Ecosystems Across Asset Classes
              </h2>
              <p className="section-subtitle text-gray-600">
                Whether you're an asset manager, tokenization platform, REIT, private fund, or fractional investment platform — our infrastructure supports diverse use cases with modularity and control.
              </p>
            </div>
            
            {/* Interactive Asset Category Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {Object.entries(categoryContent).map(([key, categoryData]) => (
                <Card key={key} className={`group cursor-pointer transition-all duration-300 border-2 overflow-hidden ${
                  category === key ? 'border-vayana-blue shadow-lg scale-105' : 'border-gray-200 hover:border-vayana-blue/50 hover:shadow-xl'
                }`}>
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={
                        key === 'real-estate' ? modernBuildingImage :
                        key === 'alternate-assets' ? goldBarsImage :
                        key === 'equity-funds' ? equityDashboardImage :
                        debtSecuritiesImage
                      }
                      alt={categoryData.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg mb-1">{categoryData.title}</h3>
                      <p className="text-xs text-white/80">{categoryData.useCases}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">Explore Category</span>
                      <ArrowRight className="h-4 w-4 text-vayana-blue transform transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-green-50 text-green-700 rounded-xl font-medium border border-green-200">
                <Target className="mr-2 h-5 w-5" />
                Current Focus: {content.useCases}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Platform Screenshots Showcase */}
      <PlatformShowcase />

      {/* New Section: ERC3643 Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="section-title text-gray-900">
                Powered by ERC3643 Standard
              </h2>
              <p className="section-subtitle text-gray-600">
                Leverage the most advanced compliant tokenization standard for secure, regulatory-aligned digital assets
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                 <div className="flex items-start space-x-4">
                   <div className="w-12 h-12 bg-vayana-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                     <Lock className="h-6 w-6 text-vayana-blue" />
                   </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Identity & Compliance</h3>
                    <p className="text-gray-600">Built-in KYC/AML verification with on-chain identity registry ensuring only verified investors can participate</p>
                  </div>
                </div>
                
                 <div className="flex items-start space-x-4">
                   <div className="w-12 h-12 bg-vayana-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                     <Shield className="h-6 w-6 text-vayana-red" />
                   </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Transfer Restrictions</h3>
                    <p className="text-gray-600">Programmable transfer rules that automatically enforce regulatory requirements and investment restrictions</p>
                  </div>
                </div>
                
                 <div className="flex items-start space-x-4">
                   <div className="w-12 h-12 bg-vayana-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                     <Layers className="h-6 w-6 text-vayana-purple" />
                   </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Modular Architecture</h3>
                    <p className="text-gray-600">Flexible smart contract framework that adapts to different asset classes and regulatory environments</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                 <div className="text-center space-y-4">
                   <div className="w-20 h-20 bg-vayana-blue/10 rounded-2xl flex items-center justify-center mx-auto">
                     <Award className="h-10 w-10 text-vayana-blue" />
                   </div>
                  <h3 className="text-xl font-bold text-gray-900">ERC3643 Compliance</h3>
                  <p className="text-gray-600">
                    Industry-standard protocol ensuring your tokenized assets meet global regulatory requirements while maintaining operational efficiency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Quick Deployment */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="section-title text-gray-900">
              Launch a Tokenized Offering in Weeks
            </h2>
            <p className="section-subtitle text-gray-600">
              Start small with a compliant, branded tokenization flow using our plug-and-play infrastructure. Whether it's a tokenized {content.title.toLowerCase()} project, fund unit, or alt-asset drop — go live in weeks, not months.
            </p>
            <div className="flex items-center justify-center space-x-4 text-vayana-blue mb-8">
              <Clock className="h-8 w-8" />
              <span className="text-2xl font-bold">Weeks, not Months</span>
            </div>
            <Button size="lg" className="bg-vayana-blue text-white hover:bg-vayana-blue/90 text-lg px-8 font-semibold">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section 8: How It Works - Interactive Flow */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="section-title text-gray-900">
                From Asset to Token in a Few Steps
              </h2>
              <p className="section-subtitle text-gray-600">
                Our streamlined tokenization process transforms traditional assets into compliant digital tokens through an integrated workflow designed for institutional efficiency.
              </p>
            </div>
            
            {/* Interactive Flow Diagram */}
            <div className="mb-12">
              <TokenizationFlow />
            </div>
            
            {/* Process Details */}
            <div className="grid md:grid-cols-5 gap-6 mt-12">
              {steps.map((step, index) => (
                 <Card key={index} className="text-center space-y-4 p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                   <div className="w-16 h-16 bg-vayana-blue/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-vayana-blue/20 transition-all duration-300">
                     <step.icon className="h-8 w-8 text-vayana-blue" />
                   </div>
                  <h3 className="font-semibold text-sm">
                    {step.title}
                  </h3>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: White-Labeled */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="section-title text-gray-900">
              Your Brand. Our Engine.
            </h2>
            <p className="section-subtitle text-gray-600">
              Offer a fully customized front-end for your investors while we manage the backend, smart contracts, and compliance. Focus on growth, while we handle the technology.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="p-8 text-center border-0 shadow-lg bg-white">
                <h3 className="text-xl font-semibold mb-2">Your UI</h3>
                 <div className="h-32 bg-vayana-blue/10 rounded-lg flex items-center justify-center">
                   <Target className="h-12 w-12 text-vayana-blue" />
                 </div>
              </Card>
              <Card className="p-8 text-center border-0 shadow-lg bg-white">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Vayana Engine</h3>
                 <div className="h-32 bg-vayana-blue/10 rounded-lg flex items-center justify-center">
                   <Cog className="h-12 w-12 text-vayana-blue" />
                 </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
      
      {/* LinkedIn Feed */}
      <LinkedInFeed />
    </div>
  );
};

export default Tokenization;