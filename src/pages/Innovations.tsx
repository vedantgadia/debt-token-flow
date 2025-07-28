import React from 'react';
import LinkedInFeed from '../components/LinkedInFeed';
import InnovationsHero from '@/components/InnovationsHero';
import ProductCard from '@/components/ProductCard';
import InnovationsContact from '@/components/InnovationsContact';
import { Coins, FileText, Truck, Gem } from 'lucide-react';

const products = [
  {
    id: 'vdp',
    icon: Coins,
    headline: 'Vayana Debt Platform (VDP)',
    subheadline: 'Tokenize Private Credit. Simplify Issuance. Unlock Liquidity.',
    description: `The Vayana Debt Platform (VDP) is a modular, SaaS-based platform that enables financial institutions to issue, manage, and service tokenized private credit instruments - including loans, debentures, and structured debt - with ease.

Built to power the next generation of private credit, VDP brings automation, transparency, and digital-native workflows to a market still constrained by manual processes and fragmented infrastructure.`,
    coreCapabilities: [
      'Tokenization of Debt Instruments',
      'Workflow Automation',
      'Multi-Tenant SaaS',
      'Built-in Compliance',
      'API-First & Interoperable',
      'Rapid Go-Live'
    ],
    status: 'Live' as const,
    buttonText: 'Learn More',
    buttonLink: '/'
  },
  {
    id: 'trade-docs',
    icon: FileText,
    headline: 'VDP Trade Docs',
    subheadline: 'Digitize. Authenticate. Accelerate Trade.',
    description: `VDP Trade Docs revolutionizes cross-border trade by digitizing and securing trade documents through MLETR and TradeTrust standards. Our platform eliminates paper-based processes, reduces fraud risks, and accelerates international trade settlements.

Transform your trade operations with blockchain-verified documents, real-time tracking, and seamless integration with existing trade finance systems.`,
    coreCapabilities: [
      'MLETR Compliance',
      'TradeTrust Integration',
      'Document Authentication',
      'Real-time Tracking',
      'Fraud Prevention',
      'Cross-border Efficiency'
    ],
    status: 'Live' as const,
    buttonText: 'Contact Us',
    buttonLink: '#contact-us'
  },
  {
    id: 'supply-chain',
    icon: Truck,
    headline: 'Deep-tier Supply Chain Platform',
    subheadline: 'Extend Finance. Strengthen Partnerships. Build Resilience.',
    description: `Our Deep-tier Supply Chain Finance platform extends working capital solutions beyond traditional first-tier suppliers, reaching deep into your supply ecosystem. Enable MSMEs at every tier to access financing based on their relationships with anchor buyers.

Create a resilient supply network where financial inclusion drives operational excellence and sustainable growth across your entire value chain.`,
    coreCapabilities: [
      'Multi-tier Financing',
      'MSME Inclusion',
      'Risk Assessment',
      'Automated Underwriting',
      'Supply Chain Visibility',
      'Working Capital Optimization'
    ],
    status: 'Coming Soon' as const,
    buttonText: 'Enquire Now',
    buttonLink: '#contact-us'
  },
  {
    id: 'alternate-assets',
    icon: Gem,
    headline: 'Alternate Asset Tokenization',
    subheadline: 'Tokenize. Trade. Transform Asset Markets.',
    description: `Unlock the potential of illiquid assets through our comprehensive tokenization platform. From real estate and commodities to art and intellectual property, we provide the infrastructure to fractionally own, trade, and manage alternate assets on-chain.

Democratize access to premium asset classes while providing institutional-grade compliance, custody, and settlement capabilities.`,
    coreCapabilities: [
      'Asset Fractionalization',
      'Regulatory Compliance',
      'Custody Solutions',
      'Secondary Markets',
      'Price Discovery',
      'Institutional Infrastructure'
    ],
    status: 'Coming Soon' as const,
    buttonText: 'Get Updates',
    buttonLink: '#contact-us'
  }
];

const Innovations = () => {
  return (
    <>
      <InnovationsHero />
      
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <InnovationsContact />
      
      {/* LinkedIn Feed */}
      <LinkedInFeed />
    </>
  );
};

export default Innovations;
