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
  Globe
} from "lucide-react";
import { useSearchParams } from "react-router-dom";

const Tokenization = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || 'real-estate';
  
  const categoryContent = {
    'real-estate': {
      title: 'Real Estate',
      hero: 'Tokenizing Real Estate for Global Market Access',
      section2Title: 'Bringing Real Estate On-Chain',
      section2Body: 'High-value assets like real estate have historically been limited to a few due to high capital thresholds, limited liquidity, and complex operational processes. Tokenization is changing that by digitizing ownership, streamlining issuance, and enabling fractional investments in a fully compliant and programmable manner.',
      useCases: 'REITs, property-backed lending, rental tokenization',
      finalCTA: 'Digitize and distribute real estate with confidence. Let\'s bring your assets on-chain.'
    },
    'equity-funds': {
      title: 'Equity & Funds',
      hero: 'Tokenizing Equity & Funds for Global Market Access',
      section2Title: 'Bringing Private Equity On-Chain',
      section2Body: 'High-value assets like private equity have historically been limited to a few due to high capital thresholds, limited liquidity, and complex operational processes. Tokenization is changing that by digitizing ownership, streamlining issuance, and enabling fractional investments in a fully compliant and programmable manner.',
      useCases: 'Private equity offerings, VC syndicates, fund unit digitization',
      finalCTA: 'Digitize and distribute equity with confidence. Let\'s bring your assets on-chain.'
    },
    'alternate-assets': {
      title: 'Alternate Assets',
      hero: 'Tokenizing Alternate Assets for Global Market Access',
      section2Title: 'Bringing Alternative Investments On-Chain',
      section2Body: 'High-value assets like art, collectibles, and other alternatives have historically been limited to a few due to high capital thresholds, limited liquidity, and complex operational processes. Tokenization is changing that by digitizing ownership, streamlining issuance, and enabling fractional investments in a fully compliant and programmable manner.',
      useCases: 'Art, collectibles, IP rights, carbon credits, whiskey',
      finalCTA: 'Digitize and distribute alt-assets with confidence. Let\'s bring your assets on-chain.'
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
    { icon: FileText, title: "Smart Contract Templates" },
    { icon: Users, title: "Investor Registry & Wallets" },
    { icon: Network, title: "Subscription & Distribution Engine" },
    { icon: Shield, title: "Regulatory Controls" },
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
      description: "Modular deployments with on-cloud or hybrid support"
    },
    {
      icon: Shield,
      title: "Regulatory Alignment",
      description: "Supports MLETR, MiCA, IFSCA, and sandbox regulations"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary))_0%,transparent_50%)] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              {content.title} Tokenization
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {content.hero.split(' ').slice(0, -4).join(' ')}
              <span className="block bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
                {content.hero.split(' ').slice(-4).join(' ')}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlock liquidity, enable fractional ownership, and simplify distribution with compliant tokenization infrastructure built for institutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Explore the Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Future of Asset Ownership */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              {content.section2Title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {content.section2Body}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Vayana, we bring the power of blockchain to {content.title.toLowerCase()}, enabling trusted institutions, asset managers, and platforms to unlock efficiency and scalability through tokenization.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Tokenize {content.title}?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
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
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Institutional-Grade Tokenization Infrastructure
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Built for security, compliance, and scale, the Vayana Tokenization Platform offers everything you need to tokenize and manage {content.title.toLowerCase()} across their lifecycle.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                      <capability.icon className="h-6 w-6 text-primary" />
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

      {/* Section 5: Who We Work With */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Trusted by Ecosystems Across Asset Classes
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you're an asset manager, tokenization platform, REIT, private fund, or fractional investment platform — our infrastructure supports diverse use cases with modularity and control.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-full font-medium">
              Use Cases: {content.useCases}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Why Vayana */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Built by a Trusted Infrastructure Partner
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto">
                      <pillar.icon className="h-8 w-8 text-primary" />
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

      {/* Section 7: Quick Deployment */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Launch a Tokenized Offering in Weeks
            </h2>
            <p className="text-lg text-muted-foreground">
              Start small with a compliant, branded tokenization flow using our plug-and-play infrastructure. Whether it's a tokenized {content.title.toLowerCase()} project, fund unit, or alt-asset drop — go live in weeks, not months.
            </p>
            <div className="flex items-center justify-center space-x-4 text-primary">
              <Clock className="h-8 w-8" />
              <span className="text-2xl font-bold">Weeks, not Months</span>
            </div>
            <Button size="lg" className="text-lg px-8">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section 8: How It Works */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                From Asset to Token in a Few Steps
              </h2>
            </div>
            
            <div className="grid md:grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">
                    {step.title}
                  </h3>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full">
                      <ArrowRight className="h-4 w-4 text-muted-foreground mx-auto" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: White-Labeled */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Your Brand. Our Engine.
            </h2>
            <p className="text-lg text-muted-foreground">
              Offer a fully customized front-end for your investors while we manage the backend, smart contracts, and compliance. Focus on growth, while we handle the technology.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Your UI</h3>
                <div className="h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-12 w-12 text-primary" />
                </div>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Vayana Engine</h3>
                <div className="h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg flex items-center justify-center">
                  <Cog className="h-12 w-12 text-primary" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Explore Tokenization?
            </h2>
            <p className="text-lg text-muted-foreground">
              {content.finalCTA}
            </p>
            <Button size="lg" className="text-lg px-8">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tokenization;