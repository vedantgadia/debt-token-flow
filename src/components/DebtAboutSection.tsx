
import React from 'react';
import { Check, ShieldCheck, Users, Wallet, LayoutDashboard, BarChart, Database } from 'lucide-react';

const DebtAboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Vayana Debt Platform (VDP)
            </h2>
            <h3 className="text-xl md:text-2xl text-secondary font-semibold mb-6">
              Tokenize Private Credit. Simplify Issuance. Unlock Liquidity.
            </h3>
            <p className="text-gray-700 mb-6">
              The Vayana Debt Platform (VDP) is a modular, SaaS-based platform that enables financial institutions to issue, manage, and service tokenized private credit instruments - including loans, debentures, and structured debt - with ease.
            </p>
            <p className="text-gray-700 mb-8">
              Built to power the next generation of private credit, VDP brings automation, transparency, and digital-native workflows to a market still constrained by manual processes and fragmented infrastructure.
            </p>
            
            <h4 className="text-xl font-bold mb-4">Core Capabilities:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="check-item">
                <Database className="check-icon" />
                <span>Tokenization of Debt Instruments</span>
              </div>
              <div className="check-item">
                <LayoutDashboard className="check-icon" />
                <span>Workflow Automation</span>
              </div>
              <div className="check-item">
                <Users className="check-icon" />
                <span>Multi-Tenant SaaS</span>
              </div>
              <div className="check-item">
                <ShieldCheck className="check-icon" />
                <span>Built-in Compliance</span>
              </div>
              <div className="check-item">
                <Wallet className="check-icon" />
                <span>API-First & Interoperable</span>
              </div>
              <div className="check-item">
                <BarChart className="check-icon" />
                <span>Rapid Go-Live</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-center">
              What You Can Do With VDP
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <h4 className="font-semibold">Public Access & Onboarding</h4>
                </div>
                <ul className="space-y-2 pl-10">
                  <li className="list-disc text-gray-700">Explore Investment Opportunities: Preview deals and performance metrics.</li>
                  <li className="list-disc text-gray-700">Easy Onboarding: Borrowers and investors can apply through simple forms.</li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <Wallet className="h-5 w-5 text-secondary" />
                  </div>
                  <h4 className="font-semibold">For Borrowers</h4>
                </div>
                <ul className="space-y-2 pl-10">
                  <li className="list-disc text-gray-700">Raise Capital: Create loan or bond requests with full documentation.</li>
                  <li className="list-disc text-gray-700">Manage Your Profile: Update details, whitelist wallets, and monitor activities.</li>
                  <li className="list-disc text-gray-700">Track Everything: Get real-time views, download statements, and receive alerts.</li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <BarChart className="h-5 w-5 text-secondary" />
                  </div>
                  <h4 className="font-semibold">For Investors</h4>
                </div>
                <ul className="space-y-2 pl-10">
                  <li className="list-disc text-gray-700">Discover & Invest: Browse active deals and invest via multiple payment methods.</li>
                  <li className="list-disc text-gray-700">Stay Informed: Access reports, track investments, and get periodic statements.</li>
                  <li className="list-disc text-gray-700">Participate in Governance: Vote on key decisions and receive important updates.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DebtAboutSection;
