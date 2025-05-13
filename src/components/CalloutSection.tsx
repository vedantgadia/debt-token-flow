
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CalloutSection = () => {
  return (
    <section className="bg-vayana-gradient text-white py-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Go from Term Sheet to Tokenized Debt in Days, Not Months
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our platform dramatically accelerates your time-to-market with pre-built templates, smart contract libraries, and compliance frameworks designed for private credit.
          </p>
          <Button 
            className="bg-secondary text-white hover:bg-secondary/90 px-8 py-3 text-lg font-medium rounded-lg inline-flex items-center gap-2"
            onClick={() => {
              const form = document.getElementById('contact-form');
              if (form) {
                form.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Book a Consultation
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CalloutSection;
