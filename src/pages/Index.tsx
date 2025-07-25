
import React from 'react';
import HeroSection from '../components/HeroSection';
import StepByStepSection from '../components/StepByStepSection';
import FeaturesSection from '../components/FeaturesSection';
import CalloutSection from '../components/CalloutSection';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import PricingSection from '../components/PricingSection';

const Index = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CalloutSection />
      <PricingSection />
      <AboutSection />
      <StepByStepSection />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default Index;
