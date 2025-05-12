
import React from 'react';
import { Check, ShieldCheck, ArrowRight, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    id: 'feature-1',
    badge: 'Asset Tokenisation',
    title: 'Launch Tokenised Debt Instruments',
    description: 'Configure asset details, compliance parameters, supply caps, and transfer rules — all in one place.',
    subtext: 'Issue tokenised debt instruments such as loans, debentures, or structured notes through intuitive workflows or developer-friendly APIs.',
    checks: [
      'Built-in compliance (e.g., KYC, investor eligibility)',
      'Customisable transfer logic (limits, conditions)',
      'Ready-to-use templates for faster go-live'
    ]
  },
  {
    id: 'feature-2',
    badge: 'Lifecycle Management',
    title: 'Manage Securities Across Their Lifecycle',
    description: 'Maintain complete control over tokenised credit instruments post-issuance.',
    subtext: 'Authorise actions, update records, and automate lifecycle events like interest payments, redemptions, and reporting.',
    checks: [
      'Role-based permissions',
      'Smart contract-driven actions (mint, burn, lock, transfer)',
      'Dashboard view for all positions and updates'
    ]
  },
  {
    id: 'feature-3',
    badge: 'Distribution',
    title: 'Enable Multi-Channel Distribution',
    description: 'List, sell, or transfer tokenised instruments across regulated networks, private marketplaces, or institutional investor portals.',
    subtext: 'Bridge to DeFi channels with built-in compliance controls — without losing oversight.',
    checks: [
      'Compatible with exchanges and broker-dealers',
      'Supports programmable compliance on every transaction',
      'Plug-and-play integrations for wider distribution reach'
    ]
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Enterprise-Grade Tokenisation with VDP</h2>
          <p className="section-subtitle">Powering Modern Private Credit Markets — Seamlessly and Securely</p>
          
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
        
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <div className="feature-badge mb-4">
                  {feature.badge}
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {feature.description}
                </p>
                <p className="text-gray-600 mb-6">
                  {feature.subtext}
                </p>
                
                <div className="space-y-3">
                  {feature.checks.map((item, i) => (
                    <div key={i} className="check-item">
                      <Check className="check-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={`bg-gray-100 rounded-2xl p-8 lg:p-10 ${
                index % 2 !== 0 ? 'lg:col-start-1' : ''
              }`}>
                <div className="aspect-square rounded-xl bg-white shadow-lg p-6 flex items-center justify-center">
                  {index === 0 ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <svg className="w-full h-auto" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                        <rect x="100" y="100" width="200" height="200" rx="10" fill="#F4F4F8" stroke="#7E69AB" strokeWidth="2" />
                        <text x="200" y="180" textAnchor="middle" fill="#1A1F2C" fontSize="20" fontWeight="bold">VDP TOKEN</text>
                        <text x="200" y="210" textAnchor="middle" fill="#7E69AB" fontSize="14">DEBT INSTRUMENT</text>
                        <circle cx="200" cy="250" r="25" fill="#1EAEDB" fillOpacity="0.2" stroke="#1EAEDB" strokeWidth="2" />
                        <text x="200" y="255" textAnchor="middle" fill="#1A1F2C" fontSize="14">$</text>
                        <path d="M150,140 L250,140" stroke="#1EAEDB" strokeWidth="2" />
                        <circle cx="150" cy="140" r="5" fill="#1EAEDB" />
                        <circle cx="250" cy="140" r="5" fill="#1EAEDB" />
                      </svg>
                    </div>
                  ) : index === 1 ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <BarChart className="w-48 h-48 text-secondary" />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-full h-auto" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="200" cy="200" r="80" fill="#F4F4F8" stroke="#7E69AB" strokeWidth="2" />
                        <circle cx="120" cy="200" r="30" fill="#1EAEDB" fillOpacity="0.2" stroke="#1EAEDB" strokeWidth="2" />
                        <circle cx="280" cy="200" r="30" fill="#1EAEDB" fillOpacity="0.2" stroke="#1EAEDB" strokeWidth="2" />
                        <circle cx="200" cy="120" r="30" fill="#1EAEDB" fillOpacity="0.2" stroke="#1EAEDB" strokeWidth="2" />
                        <circle cx="200" cy="280" r="30" fill="#1EAEDB" fillOpacity="0.2" stroke="#1EAEDB" strokeWidth="2" />
                        <path d="M200,150 L200,250" stroke="#7E69AB" strokeWidth="2" />
                        <path d="M150,200 L250,200" stroke="#7E69AB" strokeWidth="2" />
                        <text x="200" y="205" textAnchor="middle" fill="#1A1F2C" fontSize="14" fontWeight="bold">VDP</text>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2 mx-auto"
            onClick={() => {
              const form = document.getElementById('contact-form');
              if (form) {
                form.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Start Tokenising Your Assets
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
