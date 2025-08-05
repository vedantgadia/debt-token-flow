
import React from 'react';
import ImmersiveHero from '../components/ImmersiveHero';
import ImmersiveScrollTrigger from '../components/ImmersiveScrollTrigger';
import ParallaxSection from '../components/ParallaxSection';
import ProductShowcase from '../components/ProductShowcase';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import LinkedInFeed from '../components/LinkedInFeed';
import InteractiveFloatingMenu from '../components/InteractiveFloatingMenu';

const Index = () => {
  return (
    <>
      <ImmersiveHero />
      <ImmersiveScrollTrigger />
      <ParallaxSection />
      <ProductShowcase />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <LinkedInFeed />
      <InteractiveFloatingMenu />
    </>
  );
};

export default Index;
