
import React from 'react';
import ImmersiveHero from '../components/ImmersiveHero';
import InnovationPipeline from '../components/InnovationPipeline';
import PlatformVision from '../components/PlatformVision';
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
      <InnovationPipeline />
      <ProductShowcase />
      <PlatformVision />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <LinkedInFeed />
    </>
  );
};

export default Index;
