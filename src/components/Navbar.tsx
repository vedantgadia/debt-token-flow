import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
                  <a 
                    href="/innovations" 
                    className="font-medium hover:text-secondary transition-colors"
                  >
                    Innovations
                  </a>
                </li>
                <li>
                  <a 
                    href="/vdp-trade-docs" 
                    className="font-medium hover:text-secondary transition-colors"
                  >
                    VDP Trade Docs
                  </a>
                </li>
                <li>
                  <a 
                    href="/deep-tier-scf" 
                    className="font-medium hover:text-secondary transition-colors"
                  >
                    Deep-Tier SCF
                  </a>
                </li>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger className={`font-medium hover:text-secondary transition-colors inline-flex items-center gap-1`}>
                      Tokenization
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-background border-border/50 shadow-lg">
                      <DropdownMenuItem asChild>
                        <a href="/vdp-trade-docs" className="w-full">
                          Debt Capital Markets
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="/tokenization?category=real-estate" className="w-full">
                          Real Estate
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="/tokenization?category=equity-funds" className="w-full">
                          Equity & Funds
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="/tokenization?category=alternate-assets" className="w-full">
                          Alternate Assets
                        </a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
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
                <a 
                  href="/innovations" 
                  className="block font-medium text-gray-700 hover:text-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Innovations
                </a>
              </li>
              <li>
                <a 
                  href="/vdp-trade-docs" 
                  className="block font-medium text-gray-700 hover:text-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  VDP Trade Docs
                </a>
              </li>
              <li>
                <a 
                  href="/deep-tier-scf" 
                  className="block font-medium text-gray-700 hover:text-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Deep-Tier SCF
                </a>
              </li>
              <li>
                <div className="block font-medium text-gray-700 pb-2">Tokenization</div>
                <div className="pl-4 space-y-2">
                  <a 
                    href="/vdp-trade-docs" 
                    className="block text-sm text-gray-600 hover:text-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Debt Capital Markets
                  </a>
                  <a 
                    href="/tokenization?category=real-estate" 
                    className="block text-sm text-gray-600 hover:text-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Real Estate
                  </a>
                  <a 
                    href="/tokenization?category=equity-funds" 
                    className="block text-sm text-gray-600 hover:text-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Equity & Funds
                  </a>
                  <a 
                    href="/tokenization?category=alternate-assets" 
                    className="block text-sm text-gray-600 hover:text-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Alternate Assets
                  </a>
                </div>
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
