import React from 'react';
import { Check, ShieldCheck, Users, Wallet, LayoutDashboard, BarChart, Database } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="section-title gradient-text">About Vayana Digital Assets</h2>
          <p className="section-subtitle">
            We're building the future of digital finance through innovative MVP solutions that transform how businesses interact with digital assets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;