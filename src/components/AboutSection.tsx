import React from 'react';
import { Check, ShieldCheck, Users, Wallet, LayoutDashboard, BarChart, Database } from 'lucide-react';
const AboutSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Vayana</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Leading the transformation of traditional finance through blockchain technology and innovative solutions.
        </p>
      </div>
    </section>
  );
};
export default AboutSection;