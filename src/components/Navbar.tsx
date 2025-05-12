
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import VayanaLogo from './VayanaLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <VayanaLogo />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              <ul className="flex space-x-8">
                <li>
                  <a 
                    href="#" 
                    className="font-medium hover:text-secondary transition-colors"
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <button 
                    className="font-medium hover:text-secondary transition-colors"
                    onClick={() => scrollToSection('faq')}
                  >
                    FAQs
                  </button>
                </li>
                <li>
                  <a href="#" className="font-medium hover:text-secondary transition-colors">Pricing</a>
                </li>
                <li>
                  <a href="#" className="font-medium hover:text-secondary transition-colors">About</a>
                </li>
              </ul>
            </nav>
            
            <Button 
              className={`${
                isScrolled 
                  ? 'bg-primary hover:bg-primary/90 text-white' 
                  : 'bg-white hover:bg-white/90 text-primary'
              }`}
              onClick={() => scrollToSection('contact-form')}
            >
              Book a Demo
            </Button>
          </div>
          
          <button 
            className={`md:hidden ${isScrolled ? 'text-primary' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container px-4 py-4">
            <ul className="space-y-4">
              <li>
                <a 
                  href="#" 
                  className="block font-medium text-gray-700 hover:text-secondary transition-colors"
                  onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMobileMenuOpen(false); }}
                >
                  Home
                </a>
              </li>
              <li>
                <button 
                  className="block font-medium text-gray-700 hover:text-secondary transition-colors"
                  onClick={() => scrollToSection('faq')}
                >
                  FAQs
                </button>
              </li>
              <li>
                <a href="#" className="block font-medium text-gray-700 hover:text-secondary transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="block font-medium text-gray-700 hover:text-secondary transition-colors">About</a>
              </li>
              <li className="pt-2">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  onClick={() => scrollToSection('contact-form')}
                >
                  Book a Demo
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
