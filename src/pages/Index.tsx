
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StepByStepSection from '../components/StepByStepSection';
import FeaturesSection from '../components/FeaturesSection';
import CalloutSection from '../components/CalloutSection';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import PricingSection from '../components/PricingSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StepByStepSection />
      <FeaturesSection />
      <PricingSection />
      <CalloutSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
