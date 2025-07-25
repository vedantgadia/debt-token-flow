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
import CalloutSection from '../components/CalloutSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';

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
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm border border-white/30">
              {content.title} Tokenization
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-display text-white">
              {content.hero.split(' ').slice(0, -4).join(' ')}
              <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                {content.hero.split(' ').slice(-4).join(' ')}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Unlock liquidity, enable fractional ownership, and simplify distribution with compliant tokenization infrastructure built for institutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 font-semibold">
                Explore the Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Powering Modern Private Credit Markets Seamlessly and Securely */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
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
        </div>
      </section>

      {/* 3. Go from Term Sheet to Tokenized Debt in Days, Not Months */}
      <CalloutSection />

      {/* 4. Pricing */}
      <PricingSection />

      {/* 5. Vayana Debt Platform (VDP) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="section-title text-gray-900">
                Vayana Debt Platform (VDP)
              </h2>
              <p className="section-subtitle text-gray-600">
                Built by a trusted infrastructure partner powering the future of digital finance
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                 <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white hover:bg-vayana-blue/5">
                   <CardContent className="p-8 space-y-4">
                     <div className="w-16 h-16 bg-vayana-blue/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-vayana-blue/20 transition-all duration-300">
                       <pillar.icon className="h-8 w-8 text-vayana-blue" />
                     </div>
                    <h3 className="text-xl font-semibold">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. How it works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="section-title text-gray-900">
                How It Works
              </h2>
              <p className="section-subtitle text-gray-600">
                From asset to token in a few simple steps
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-6">
              {steps.map((step, index) => (
                 <div key={index} className="text-center space-y-4 relative">
                   <div className="w-16 h-16 bg-vayana-blue/10 rounded-xl flex items-center justify-center mx-auto relative">
                     <step.icon className="h-8 w-8 text-vayana-blue" />
                     <div className="absolute -top-2 -right-2 w-6 h-6 bg-vayana-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                       {index + 1}
                     </div>
                   </div>
                  <h3 className="font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-6 h-0.5 bg-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <FAQSection />

      {/* 8. Contact us */}
      <ContactSection />
    </div>
  );
};

export default Tokenization;