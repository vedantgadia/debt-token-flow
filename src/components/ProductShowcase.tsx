import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Coins, 
  Network, 
  FileText, 
  Shield, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  Building,
  Globe2,
  Layers
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductShowcase = () => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const navigate = useNavigate();

  const products = [
    {
      id: 'tokenization',
      title: 'Asset Tokenization',
      description: 'Transform any asset into secure, compliant digital tokens on blockchain',
      icon: Coins,
      gradient: 'from-blue-500 to-purple-600',
      bgPattern: 'bg-blue-50 dark:bg-blue-950/20',
      route: '/tokenization',
      highlights: ['Real Estate', 'Private Credit', 'Commodities', 'Art & Collectibles'],
      stats: { value: '500M+', label: 'Assets Tokenized' },
      visual: {
        primary: 'Secure Digital Tokens',
        secondary: 'Regulatory Compliant'
      }
    },
    {
      id: 'scf',
      title: 'Deep Tier Supply Chain Finance',
      description: 'Multi-level supplier financing with blockchain transparency and instant settlements',
      icon: Network,
      gradient: 'from-green-500 to-emerald-600',
      bgPattern: 'bg-green-50 dark:bg-green-950/20',
      route: '/deep-tier-scf',
      highlights: ['Multi-tier Financing', 'Real-time Analytics', 'Risk Assessment', 'Instant Settlements'],
      stats: { value: '50B+', label: 'Transaction Volume' },
      visual: {
        primary: 'Connected Supply Networks',
        secondary: 'Deep Tier Financing'
      }
    },
    {
      id: 'trade-docs',
      title: 'VDP Trade Documentation',
      description: 'Digitized trade finance workflows with smart automation and multi-bank integration',
      icon: FileText,
      gradient: 'from-orange-500 to-red-500',
      bgPattern: 'bg-orange-50 dark:bg-orange-950/20',
      route: '/vdp-trade-docs',
      highlights: ['Document Digitization', 'Smart Workflows', 'Multi-bank Support', 'Compliance Automation'],
      stats: { value: '1M+', label: 'Documents Processed' },
      visual: {
        primary: 'Smart Trade Documents',
        secondary: 'Automated Workflows'
      }
    },
    {
      id: 'securitization',
      title: 'Asset Securitization',
      description: 'Structure and distribute asset-backed securities with transparent pool management',
      icon: Shield,
      gradient: 'from-purple-500 to-pink-600',
      bgPattern: 'bg-purple-50 dark:bg-purple-950/20',
      route: '/securitization',
      highlights: ['TRS Structures', 'PTC Management', 'SDI Processing', 'Investor Portals'],
      stats: { value: '10B+', label: 'Securities Issued' },
      visual: {
        primary: 'Asset-Backed Securities',
        secondary: 'Transparent Structures'
      }
    },
    {
      id: 'sc-payments',
      title: 'Supply Chain Payments',
      description: 'Streamlined payment solutions for complex supply chain ecosystems',
      icon: TrendingUp,
      gradient: 'from-indigo-500 to-blue-600',
      bgPattern: 'bg-indigo-50 dark:bg-indigo-950/20',
      route: '/deep-tier-sc-payments',
      highlights: ['Instant Payments', 'Multi-currency Support', 'Smart Contracts', 'Payment Analytics'],
      stats: { value: '25B+', label: 'Payment Volume' },
      visual: {
        primary: 'Instant Settlements',
        secondary: 'Global Payments'
      }
    }
  ];

  const handleProductClick = (route: string) => {
    navigate(route);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Layers className="w-4 h-4 mr-2" />
            Product Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Browse Our{' '}
            <span className="gradient-text">Digital Assets Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive suite of digital assets solutions. Each product is designed to integrate 
            seamlessly within the Vayana Digital Assets Platform ecosystem.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {products.map((product, index) => {
            const ProductIcon = product.icon;
            const isHovered = hoveredProduct === product.id;
            
            return (
              <Card
                key={product.id}
                className={`group relative overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border-2 ${
                  isHovered ? 'border-primary/50' : 'border-border/50'
                } ${product.bgPattern}`}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => handleProductClick(product.route)}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Floating Visual Elements */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="relative">
                    <Globe2 className="w-8 h-8 text-primary animate-spin" style={{ animationDuration: '10s' }} />
                    <Sparkles className="w-4 h-4 text-secondary absolute -top-2 -right-2 animate-pulse" />
                  </div>
                </div>

                <div className="relative p-6">
                  {/* Product Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <ProductIcon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Module
                    </Badge>
                  </div>

                  {/* Product Title & Description */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Visual Elements */}
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-sm font-medium">{product.visual.primary}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <span className="text-sm text-muted-foreground">{product.visual.secondary}</span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.highlights.slice(0, 3).map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">{product.stats.value}</div>
                      <div className="text-xs text-muted-foreground">{product.stats.label}</div>
                    </div>
                    <Building className="w-6 h-6 text-muted-foreground/50" />
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    variant={isHovered ? "default" : "outline"}
                  >
                    Explore Product
                    <ArrowRight className={`ml-2 w-4 h-4 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
                  </Button>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 border-2 border-transparent bg-gradient-to-br ${product.gradient} rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />
              </Card>
            );
          })}
        </div>

        {/* Platform Integration CTA */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Layers className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Need Multiple Products?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              All products integrate seamlessly within the Vayana Digital Assets Platform. 
              Mix and match modules to create your perfect solution.
            </p>
            <Button 
              size="lg"
              onClick={() => {
                const contact = document.getElementById('contact-form');
                if (contact) {
                  contact.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Discuss Integration
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;