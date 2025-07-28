
import React from 'react';
import HeroSection from '../components/HeroSection';
import StepByStepSection from '../components/StepByStepSection';
import FeaturesSection from '../components/FeaturesSection';
import CalloutSection from '../components/CalloutSection';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import LinkedInFeed from '../components/LinkedInFeed';
import PricingSection from '../components/PricingSection';
import PlatformShowcase from '../components/PlatformShowcase';

const Index = () => {
  return (
    <>
      <HeroSection />
      <PricingSection />
      <AboutSection />
      <PlatformShowcase />
      <CalloutSection />
      <StepByStepSection />
      <FeaturesSection />
      <FAQSection />
      <ContactSection />
      <LinkedInFeed />
    </>
  );
};

export default Index;
