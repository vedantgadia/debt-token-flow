import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

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
          <Link to="/" className="flex items-center">
            <VayanaLogo />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              <ul className="flex space-x-8">
                <li>
                  <Link 
                    to="/" 
                    className="font-medium hover:text-secondary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/innovations" 
                    className="font-medium hover:text-secondary transition-colors"
                  >
                    Innovations
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/vdp-trade-docs" 
                    className="font-medium hover:text-secondary transition-colors"
                  >
                    VDP Trade Docs
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/deep-tier-scf" 
                    className="font-medium hover:text-secondary transition-colors"
                  >
                    Deep-Tier SCF
                  </Link>
                </li>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger className={`font-medium hover:text-secondary transition-colors inline-flex items-center gap-1`}>
                      Tokenization
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-background border-border/50 shadow-lg">
                      <DropdownMenuItem asChild>
                        <Link to="/vdp-trade-docs" className="w-full">
                          Debt Capital Markets
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/tokenization?category=real-estate" className="w-full">
                          Real Estate
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/tokenization?category=equity-funds" className="w-full">
                          Equity & Funds
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/tokenization?category=alternate-assets" className="w-full">
                          Alternate Assets
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li>
                  <button 
                    className="font-medium hover:text-secondary transition-colors"
                    onClick={() => {
                      if (location.pathname === '/') {
                        scrollToSection('faq');
                      } else {
                        window.location.href = '/#faq';
                      }
                    }}
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
              onClick={() => {
                if (location.pathname === '/') {
                  scrollToSection('contact-form');
                } else {
                  window.location.href = '/#contact-form';
                }
              }}
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
                <Link 
                  to="/" 
                  className="block font-medium text-gray-700 hover:text-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/innovations" 
                  className="block font-medium text-gray-700 hover:text-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Innovations
                </Link>
              </li>
              <li>
                <Link 
                  to="/vdp-trade-docs" 
                  className="block font-medium text-gray-700 hover:text-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  VDP Trade Docs
                </Link>
              </li>
              <li>
                <Link 
                  to="/deep-tier-scf" 
                  className="block font-medium text-gray-700 hover:text-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Deep-Tier SCF
                </Link>
              </li>
              <li>
                <div className="block font-medium text-gray-700 pb-2">Tokenization</div>
                <div className="pl-4 space-y-2">
                  <Link 
                    to="/vdp-trade-docs" 
                    className="block text-sm text-gray-600 hover:text-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Debt Capital Markets
                  </Link>
                  <Link 
                    to="/tokenization?category=real-estate" 
                    className="block text-sm text-gray-600 hover:text-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Real Estate
                  </Link>
                  <Link 
                    to="/tokenization?category=equity-funds" 
                    className="block text-sm text-gray-600 hover:text-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Equity & Funds
                  </Link>
                  <Link 
                    to="/tokenization?category=alternate-assets" 
                    className="block text-sm text-gray-600 hover:text-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Alternate Assets
                  </Link>
                </div>
              </li>
              <li>
                <button 
                  className="block font-medium text-gray-700 hover:text-secondary transition-colors"
                  onClick={() => {
                    if (location.pathname === '/') {
                      scrollToSection('faq');
                    } else {
                      window.location.href = '/#faq';
                    }
                    setIsMobileMenuOpen(false);
                  }}
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
                  onClick={() => {
                    if (location.pathname === '/') {
                      scrollToSection('contact-form');
                    } else {
                      window.location.href = '/#contact-form';
                    }
                    setIsMobileMenuOpen(false);
                  }}
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
