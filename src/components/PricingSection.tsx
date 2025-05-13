
import React from 'react';
import { Check, X, Mail, Phone, Database, Shield, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Transparent Pricing Options</h2>
          <p className="section-subtitle">Choose the right plan for your business needs</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Seed Plan */}
          <Card className="border-vayana-gray/20 shadow-sm">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold">Seed</h3>
                <p className="text-gray-600 mt-1">Starter SaaS</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$1,000</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <div className="mt-1 text-sm text-gray-500">
                  $7,500 one-time setup
                </div>
              </div>
              <Button className="w-full mb-6">Get Started</Button>
              <div className="text-sm text-gray-600 mb-4 text-center">
                Best For: <span className="font-medium">Pilots, Trials</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-vayana-green mr-2 flex-shrink-0" />
                  <span className="text-sm">Up to 2 issuances</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-vayana-green mr-2 flex-shrink-0" />
                  <span className="text-sm">Logo only branding</span>
                </div>
                <div className="flex items-center">
                  <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-500">No customisation</span>
                </div>
                <div className="flex items-center">
                  <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-500">No integrations</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-vayana-green mr-2 flex-shrink-0" />
                  <span className="text-sm">EVM Chains supported</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-vayana-blue mr-2 flex-shrink-0" />
                  <span className="text-sm">Standard Email Support</span>
                </div>
                <div className="flex items-start">
                  <Server className="h-5 w-5 text-vayana-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">~1–2 Weeks deployment</span>
                </div>
                <div className="flex items-start pt-2 border-t border-gray-100">
                  <Database className="h-5 w-5 text-vayana-red mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">0.5% success fee of drawdown</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sprout Plan */}
          <Card className="border-vayana-gray/20 shadow-sm">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold">Sprout</h3>
                <p className="text-gray-600 mt-1">Mid-tier SaaS</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$2,000</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <div className="mt-1 text-sm text-gray-500">
                  $10,000 one-time setup
                </div>
              </div>
              <Button className="w-full mb-6">Get Started</Button>
              <div className="text-sm text-gray-600 mb-4 text-center">
                Best For: <span className="font-medium">Early Commercial Use</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-vayana-green mr-2 flex-shrink-0" />
                  <span className="text-sm">Up to 20 issuances</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-vayana-green mr-2 flex-shrink-0" />
                  <span className="text-sm">Logo + UI Color branding</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-vayana-green mr-2 flex-shrink-0" />
                  <span className="text-sm">Email Text customisation</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-vayana-green mr-2 flex-shrink-0" />
                  <span className="text-sm">Pre-approved integrations</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-vayana-green mr-2 flex-shrink-0" />
                  <span className="text-sm">EVM Chains supported</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-vayana-blue mr-2 flex-shrink-0" />
                  <span className="text-sm">Priority Email/Phone Support</span>
                </div>
                <div className="flex items-start">
                  <Server className="h-5 w-5 text-vayana-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">~1–2 Weeks deployment</span>
                </div>
                <div className="flex items-start pt-2 border-t border-gray-100">
                  <Database className="h-5 w-5 text-vayana-red mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">0.3% success fee of drawdown</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Forest Plan (Most Popular) */}
          <Card className="border-vayana-blue shadow-md relative">
            <div className="absolute -top-4 left-0 right-0 mx-auto w-max px-3 py-1 bg-vayana-blue text-white text-xs font-semibold rounded-full">
              Most Popular
            </div>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold">Forest</h3>
                <p className="text-gray-600 mt-1">Advanced SaaS</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$3,000</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <div className="mt-1 text-sm text-gray-500">
                  $15,000 one-time setup
                </div>
              </div>
              <Button className="w-full mb-6 bg-vayana-blue hover:bg-vayana-blue-darker">Get Started</Button>
              <div className="text-sm text-gray-600 mb-4 text-center">
                Best For: <span className="font-medium">Scale-ready Fintechs/Banks</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-vayana-green mr-2 flex-shrink-0" />
                  <span className="text-sm">Unlimited issuances</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-vayana-green mr-2 flex-shrink-0" />
                  <span className="text-sm">Full UI Branding</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-vayana-green mr-2 flex-shrink-0" />
                  <span className="text-sm">Workflow Changes customisation</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-vayana-green mr-2 flex-shrink-0" />
                  <span className="text-sm">Pre-approved + Optional Add-ons</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-vayana-green mr-2 flex-shrink-0" />
                  <span className="text-sm">EVM Chains supported</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-vayana-blue mr-2 flex-shrink-0" />
                  <span className="text-sm">Priority + Telegram Support</span>
                </div>
                <div className="flex items-start">
                  <Server className="h-5 w-5 text-vayana-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">~2–3 Weeks deployment</span>
                </div>
                <div className="flex items-start pt-2 border-t border-gray-100">
                  <Database className="h-5 w-5 text-vayana-red mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">0.25% or monthly fee (whichever is higher)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enterprise Plan (Special Format) */}
          <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-0 shadow-sm overflow-hidden relative">
            <div className="absolute opacity-10 -right-16 -bottom-16">
              <Shield className="w-64 h-64 text-vayana-blue"/>
            </div>
            <CardContent className="p-8 flex flex-col h-full justify-between relative z-10">
              <div>
                <h3 className="text-2xl font-bold mb-3">Custom Enterprise Plan</h3>
                <p className="text-gray-600 mb-6">
                  Custom self-hosted deployments for banks, regulated entities, and large institutions
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-vayana-blue mr-2 flex-shrink-0" />
                    <span>Dedicated infrastructure</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-vayana-blue mr-2 flex-shrink-0" />
                    <span>Private blockchain options</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-vayana-blue mr-2 flex-shrink-0" />
                    <span>Custom SLAs and support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-vayana-blue mr-2 flex-shrink-0" />
                    <span>Full white-labeling</span>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <Button 
                  className="w-full bg-vayana-blue hover:bg-vayana-blue-darker"
                  onClick={() => {
                    window.location.href = "mailto:sales@vayana.com";
                  }}
                >
                  Contact Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
