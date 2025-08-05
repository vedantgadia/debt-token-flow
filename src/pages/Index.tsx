
import React from 'react';
import ImmersiveHero from '../components/ImmersiveHero';
import DigitalEcosystem from '../components/DigitalEcosystem';
import ModularPlatformBuilder from '../components/ModularPlatformBuilder';
import TransformationTimeline from '../components/TransformationTimeline';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import LinkedInFeed from '../components/LinkedInFeed';
import PlatformShowcase from '../components/PlatformShowcase';

const Index = () => {
  return (
    <>
      <ImmersiveHero />
      <DigitalEcosystem />
      <ModularPlatformBuilder />
      <TransformationTimeline />
      <AboutSection />
      <PlatformShowcase />
      <FAQSection />
      <ContactSection />
      <LinkedInFeed />
    </>
  );
};

export default Index;
