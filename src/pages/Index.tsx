
import React from 'react';
import ImmersiveHero from '../components/ImmersiveHero';
import DigitalEcosystem from '../components/DigitalEcosystem';
import DigitalAssetsEcosystem from '../components/DigitalAssetsEcosystem';
import ProductShowcase from '../components/ProductShowcase';
import TransformationTimeline from '../components/TransformationTimeline';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import LinkedInFeed from '../components/LinkedInFeed';

const Index = () => {
  return (
    <>
      <ImmersiveHero />
      <DigitalEcosystem />
      <DigitalAssetsEcosystem />
      <ProductShowcase />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <LinkedInFeed />
    </>
  );
};

export default Index;
