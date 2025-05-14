
import React from 'react';
import { Check, Layers, Database, FileText, Users, Settings, Link, CreditCard } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Select type of asset",
    description: "Equity, debt, fund, real estate, art, or other real-world assets",
    icon: FileText
  },
  {
    id: 2,
    title: "Choose a blockchain/token standard",
    description: "Ethereum, Polygon, Hedera, Ripple, and more",
    icon: Database
  },
  {
    id: 3,
    title: "Create and distribute assets",
    description: "Mint tokens, determine supply, and transfer to investors",
    icon: Layers
  },
  {
    id: 4,
    title: "Determine investor jurisdiction",
    description: "U.S., EMEA, MENA, APAC with compliance support",
    icon: Users
  },
  {
    id: 5,
    title: "Enable smart contract features",
    description: "Compliance, voting, and other programmable features",
    icon: Settings
  },
  {
    id: 6,
    title: "Establish post-issuance management",
    description: "Dividends, coupons, and trading restrictions",
    icon: CreditCard
  },
  {
    id: 7,
    title: "Determine necessary integrations",
    description: "KYC/AML, e-sign, payment options",
    icon: Link
  },
  {
    id: 8,
    title: "Set up marketplace",
    description: "Enable primary raises and/or secondary transfers",
    icon: Users
  }
];

const StepByStepSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="section-title text-center">How It Works</h2>
        <p className="section-subtitle text-center">A step-by-step guide to tokenizing assets on the Vayana Debt Platform</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.id} 
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 relative text-center"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-700 flex items-center justify-center font-bold">
                  {step.id}
                </div>
                <div className="mb-4 mt-6 flex justify-center">
                  <div className="inline-flex items-center justify-center">
                    <Icon 
                      className="h-10 w-10" 
                      style={{ stroke: 'url(#iconGradient)' }}
                      strokeWidth={1.5} 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* SVG gradient definitions for the icons */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E3032C" />
            <stop offset="100%" stopColor="#194388" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default StepByStepSection;
