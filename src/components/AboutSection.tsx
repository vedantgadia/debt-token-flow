import React from 'react';
import { Check, ShieldCheck, Users, Wallet, LayoutDashboard, BarChart, Database } from 'lucide-react';
const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">About Vayana</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the transformation of global trade and supply chain finance through innovative blockchain solutions and digital platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Secure & Compliant</h3>
            <p className="text-muted-foreground">
              Built with enterprise-grade security and regulatory compliance at its core.
            </p>
          </div>
          
          <div className="text-center p-6">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Global Network</h3>
            <p className="text-muted-foreground">
              Connecting businesses across multiple countries and industries worldwide.
            </p>
          </div>
          
          <div className="text-center p-6">
            <Wallet className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Digital Finance</h3>
            <p className="text-muted-foreground">
              Revolutionizing trade finance through digital payments and tokenization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;