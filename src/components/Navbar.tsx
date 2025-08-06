
// Updated navbar - only shows Blockchain dropdown - v2
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Youtube, Linkedin, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import VayanaLogo from './VayanaLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Force component refresh - updated navbar structure

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
            <nav className={`${isScrolled ? 'text-foreground' : 'text-black'}`}>
              <ul className="flex space-x-8">
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger className={`font-medium hover:text-secondary transition-colors inline-flex items-center gap-1`}>
                      Blockchain
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-background border-border/50 shadow-lg z-50">
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          Tokenization
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent className="bg-background border-border/50 shadow-lg z-50">
                          <DropdownMenuItem asChild>
                            <Link to="/vdp-debt-capital" className="w-full">
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
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                      <DropdownMenuItem asChild>
                        <Link to="/vdp-trade-docs" className="w-full">
                          VDP Trade Docs
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/securitization" className="w-full">
                          Securitization
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          Supply Chain Finance
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent className="bg-background border-border/50 shadow-lg z-50">
                          <DropdownMenuItem asChild>
                            <Link to="/deep-tier-scf" className="w-full">
                              Multi-Tier Financing
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link to="/deep-tier-sc-payments" className="w-full">
                              Deep-Tier Supply Chain Payments
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                      <DropdownMenuItem asChild>
                        <a 
                          href="https://vayanadebtplatform.medium.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          Articles & Insights
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a 
                          href="https://www.linkedin.com/company/vayana-debt-platform/events/?viewAsMember=true" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          Events & Webinars
                        </a>
                      </DropdownMenuItem>
                      
                      {/* Social Media Links */}
                      <div className="px-3 py-2 border-t border-border/50 mt-2">
                        <div className="flex items-center justify-center gap-4">
                          <a 
                            href="https://www.youtube.com/@VayanaDebtPlatform" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-red-50 hover:bg-red-100 transition-colors group"
                          >
                            <Youtube className="h-4 w-4 text-red-600 group-hover:text-red-700" />
                          </a>
                          <a 
                            href="https://www.linkedin.com/company/vayana-debt-platform" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors group"
                          >
                            <Linkedin className="h-4 w-4 text-blue-600 group-hover:text-blue-700" />
                          </a>
                          <a 
                            href="https://vayanadebtplatform.medium.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors group"
                          >
                            <BookOpen className="h-4 w-4 text-gray-600 group-hover:text-gray-700" />
                          </a>
                        </div>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
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
            className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`}
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
                <div className="block font-medium text-gray-700 pb-2">Blockchain</div>
                <div className="pl-4 space-y-2">
                  <div className="block font-medium text-gray-600 pb-1">Tokenization</div>
                  <div className="pl-4 space-y-2">
                    <Link 
                      to="/vdp-debt-capital" 
                      className="block text-sm text-gray-500 hover:text-secondary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Debt Capital Markets
                    </Link>
                    <Link 
                      to="/tokenization?category=real-estate" 
                      className="block text-sm text-gray-500 hover:text-secondary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Real Estate
                    </Link>
                    <Link 
                      to="/tokenization?category=equity-funds" 
                      className="block text-sm text-gray-500 hover:text-secondary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Equity & Funds
                    </Link>
                    <Link 
                      to="/tokenization?category=alternate-assets" 
                      className="block text-sm text-gray-500 hover:text-secondary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Alternate Assets
                    </Link>
                  </div>
                  <Link 
                    to="/vdp-trade-docs" 
                    className="block text-sm text-gray-600 hover:text-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    VDP Trade Docs
                  </Link>
                  <Link 
                    to="/securitization" 
                    className="block text-sm text-gray-600 hover:text-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Securitization
                  </Link>
                  <div className="block font-medium text-gray-600 pb-1">Supply Chain Finance</div>
                  <div className="pl-4 space-y-2">
                    <Link 
                      to="/deep-tier-scf" 
                      className="block text-sm text-gray-500 hover:text-secondary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Multi-Tier Financing
                    </Link>
                    <Link 
                      to="/deep-tier-sc-payments" 
                      className="block text-sm text-gray-500 hover:text-secondary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Deep-Tier Supply Chain Payments
                    </Link>
                  </div>
                  <a 
                    href="https://medium.com/@vayanadebtplatform" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-sm text-gray-600 hover:text-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Articles & Insights
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/vayana-debt-platform/events/?viewAsMember=true" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-sm text-gray-600 hover:text-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Podcasts & Webinars
                  </a>
                  
                  {/* Social Media Links for Mobile */}
                  <div className="flex items-center justify-center gap-4 pt-4 mt-2 border-t border-gray-200">
                    <a 
                      href="https://www.youtube.com/@VayanaDebtPlatform" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-red-50 hover:bg-red-100 transition-colors group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Youtube className="h-4 w-4 text-red-600 group-hover:text-red-700" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/vayana-debt-platform" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Linkedin className="h-4 w-4 text-blue-600 group-hover:text-blue-700" />
                    </a>
                    <a 
                      href="https://medium.com/@vayanadebtplatform" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <BookOpen className="h-4 w-4 text-gray-600 group-hover:text-gray-700" />
                    </a>
                  </div>
                </div>
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
