
import React from 'react';
import Navbar from '@/components/Navbar';
import InnovationsHero from '@/components/InnovationsHero';
import ProductCard from '@/components/ProductCard';
import InnovationsContact from '@/components/InnovationsContact';
import Footer from '@/components/Footer';
import { Coins, FileText, Truck, Gem } from 'lucide-react';

const products = [
  {
    id: 'vdp',
    icon: Coins,
    headline: 'Vayana Debt Platform: Tokenizing Capital Market Instruments',
    description: 'Revolutionizing capital markets, our Vayana Debt Platform enables the secure and efficient tokenization of debt instruments. Experience enhanced liquidity, transparency, and accessibility in the digital age.',
    status: 'Live' as const,
    buttonText: 'Learn More',
    buttonLink: '/'
  },
  {
    id: 'trade-docs',
    icon: FileText,
    headline: 'VDP Trade Docs: Digitizing Cross-Border Trade',
    description: 'Streamline your global trade operations with VDP Trade Docs. Leveraging MLETR and TradeTrust, we digitize cross-border trade documents, reducing friction and accelerating transactions.',
    status: 'Live' as const,
    buttonText: 'Contact Us',
    buttonLink: '#contact-us'
  },
  {
    id: 'supply-chain',
    icon: Truck,
    headline: 'Deep-tier Supply Chain Payments & Finance',
    description: 'Taking supply chain financing to the next level. Our solution extends financial access deep into your supply chain, optimizing working capital and fostering resilience across your ecosystem.',
    status: 'Coming Soon' as const,
    buttonText: 'Enquire Now',
    buttonLink: '#contact-us'
  },
  {
    id: 'alternate-assets',
    icon: Gem,
    headline: 'Tokenization of Alternate Assets',
    description: 'Unlock new possibilities with the tokenization of alternate assets. From commodities to real estate, we\'re building the infrastructure to bring illiquid assets onto the blockchain, enhancing discoverability and liquidity.',
    status: 'Coming Soon' as const,
    buttonText: 'Get Updates',
    buttonLink: '#contact-us'
  }
];

const Innovations = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <InnovationsHero />
      
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
      
      <InnovationsContact />
      <Footer />
    </div>
  );
};

export default Innovations;
