
import React from 'react';
import Navbar from '../components/Navbar';
import ImmersiveHero from '../components/ImmersiveHero';
import ImmersiveScrollTrigger from '../components/ImmersiveScrollTrigger';
import ParallaxSection from '../components/ParallaxSection';
import ProductShowcase from '../components/ProductShowcase';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import InteractiveFloatingMenu from '../components/InteractiveFloatingMenu';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ImmersiveHero />
        <div id="ecosystem">
          <ImmersiveScrollTrigger />
        </div>
        <ParallaxSection />
        <ProductShowcase />
        <AboutSection />
        <FAQSection />
        <div id="contact-form">
          <ContactSection />
        </div>
      </main>
      <Footer />
      <InteractiveFloatingMenu />
    </div>
  );
};

export default Index;
