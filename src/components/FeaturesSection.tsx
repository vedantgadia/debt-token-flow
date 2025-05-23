import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [{
  id: 'feature-1',
  badge: 'Asset Tokenization',
  title: 'Launch Tokenized Debt Instruments',
  description: 'Configure asset details, compliance parameters, supply caps, and transfer rules all in one place.',
  subtext: 'Issue tokenized debt instruments such as loans, debentures, or structured notes through intuitive workflows or developer-friendly APIs.',
  checks: ['Built-in compliance (e.g., KYC, investor eligibility)', 'Customizable transfer logic (limits, conditions)', 'Ready-to-use templates for faster go-live']
}, {
  id: 'feature-2',
  badge: 'Lifecycle Management',
  title: 'Manage Securities Across Lifecycle',
  description: 'Maintain complete control over tokenized credit instruments post-issuance.',
  subtext: 'Authorize actions, update records, and automate lifecycle events like interest payments, redemptions, and reporting.',
  checks: ['Role-based permissions', 'Smart contract-driven actions (mint, burn, lock, transfer)', 'Dashboard view for all positions and updates']
}, {
  id: 'feature-3',
  badge: 'Distribution',
  title: 'Enable Multi-Channel Distribution',
  description: 'List, sell, or transfer tokenized instruments across regulated networks, private marketplaces, or institutional investor portals.',
  subtext: 'Bridge to DeFi channels with built-in compliance controls without losing oversight.',
  checks: ['Compatible with exchanges and broker-dealers', 'Supports programmable compliance on every transaction', 'Plug-and-play integrations for wider distribution reach']
}];

const FeaturesSection = () => {
  return <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Powering Modern Private Credit Markets Seamlessly and Securely</h2>
          <p className="section-subtitle">Enterprise-Grade Tokenization with VDP</p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="check-item">
              <Check className="check-icon" />
              <span>Attract diverse investor classes</span>
            </div>
            <div className="check-item">
              <Check className="check-icon" />
              <span>Automate issuance and compliance</span>
            </div>
            <div className="check-item">
              <Check className="check-icon" />
              <span>White-label friendly</span>
            </div>
          </div>
        </div>
        
        {/* 3-column feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(feature => <div key={feature.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full">
              <div className="feature-badge mb-4">
                {feature.badge}
              </div>
              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 mb-3">
                {feature.description}
              </p>
              <p className="text-gray-600 mb-5 flex-grow">
                {feature.subtext}
              </p>
              
              <div className="space-y-3 mt-auto">
                {feature.checks.map((item, i) => <div key={i} className="check-item">
                    <Check className="check-icon" />
                    <span className="text-sm">{item}</span>
                  </div>)}
              </div>
            </div>)}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-vayana-gradient hover:opacity-90 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2 mx-auto" onClick={() => {
          const form = document.getElementById('contact-form');
          if (form) {
            form.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }}>
            Start Tokenizing Your Assets
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>;
};
export default FeaturesSection;
