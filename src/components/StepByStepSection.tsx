
import React from 'react';
import { FileText, Settings, Users, CreditCard, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Select Type of Asset",
    description: "Loan, Bond, Commercial Paper or other Real World Asset",
    icon: FileText
  },
  {
    id: 2,
    title: "Configure Asset Terms",
    description: "Compliance, Repayments and other Trading Restrictions",
    icon: Settings
  },
  {
    id: 3,
    title: "Investor Subscription",
    description: "Mint Tokens, Document Signatures and more",
    icon: Users
  },
  {
    id: 4,
    title: "Post Issuance Management",
    description: "Interest Payments, Trading, Default Tracking, etc.",
    icon: CreditCard
  }
];

const StepByStepSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="section-title text-center">How It Works</h2>
        <p className="section-subtitle text-center">A streamlined process to digitize your assets on the Vayana Debt Platform</p>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line between steps */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-vayana-red to-vayana-blue hidden md:block" style={{ transform: 'translateY(-50%)', zIndex: 0 }}></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;
              
              return (
                <div 
                  key={step.id} 
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 relative z-10"
                >
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-white text-gray-700 flex items-center justify-center font-bold border border-gray-200">
                    {step.id}
                  </div>
                  
                  <div className="mb-4 mt-6 flex justify-center">
                    <div className="inline-flex items-center justify-center">
                      <Icon 
                        className="h-16 w-16" 
                        style={{ stroke: 'url(#iconGradient)' }}
                        strokeWidth={2.5} 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                  
                  {!isLast && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 transform translate-x-0 -translate-y-1/2 z-20">
                      <ArrowRight className="h-8 w-8" style={{ stroke: 'url(#iconGradient)' }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
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
