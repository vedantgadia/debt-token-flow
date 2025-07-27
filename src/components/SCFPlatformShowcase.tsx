import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  Building, 
  Banknote, 
  BarChart3, 
  Shield,
  Play,
  Pause,
  Network,
  TrendingUp
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

import supplierDashboard from '../assets/scf-supplier-dashboard.jpg';
import anchorPortal from '../assets/scf-anchor-portal.jpg';
import lenderDashboard from '../assets/scf-lender-dashboard.jpg';
import analyticsplatform from '../assets/scf-analytics-platform.jpg';
import blockchainMonitor from '../assets/scf-blockchain-monitor.jpg';

const SCFPlatformShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const scfPlatformScreens = [
    {
      id: 'supplier-dashboard',
      title: 'Supplier Dashboard',
      description: 'MSME-friendly interface for financing requests, invoice management, and supply chain program participation.',
      image: supplierDashboard,
      icon: Users,
      features: ['Financing Requests', 'Invoice Upload', 'Payment Tracking', 'Program Access'],
      category: 'Supplier Experience',
      userType: 'Deep-Tier Suppliers'
    },
    {
      id: 'anchor-portal',
      title: 'Anchor Buyer Portal',
      description: 'Comprehensive management of supplier networks, financing programs, and deep-tier supply chain visibility.',
      image: anchorPortal,
      icon: Building,
      features: ['Supplier Onboarding', 'Program Management', 'Supply Chain Visibility', 'Risk Monitoring'],
      category: 'Anchor Management',
      userType: 'Large Corporations'
    },
    {
      id: 'lender-dashboard',
      title: 'Lender Dashboard',
      description: 'Risk assessment tools, portfolio management, and automated financing decisions for SCF programs.',
      image: lenderDashboard,
      icon: Banknote,
      features: ['Risk Assessment', 'Portfolio Analytics', 'Automated Approvals', 'Performance Tracking'],
      category: 'Financial Services',
      userType: 'Banks & NBFCs'
    },
    {
      id: 'analytics-platform',
      title: 'Supply Chain Analytics',
      description: 'Deep insights into multi-tier supplier networks, transaction flows, and program performance metrics.',
      image: analyticsplatform,
      icon: BarChart3,
      features: ['Network Mapping', 'Flow Analysis', 'Performance Metrics', 'Predictive Insights'],
      category: 'Business Intelligence',
      userType: 'Program Managers'
    },
    {
      id: 'blockchain-monitor',
      title: 'Blockchain Transaction Monitor',
      description: 'Real-time monitoring of blockchain transactions, smart contract execution, and audit trails.',
      image: blockchainMonitor,
      icon: Shield,
      features: ['Transaction Monitoring', 'Smart Contract Status', 'Audit Trails', 'Compliance Tracking'],
      category: 'Blockchain Infrastructure',
      userType: 'Operations Teams'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % scfPlatformScreens.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, scfPlatformScreens.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % scfPlatformScreens.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + scfPlatformScreens.length) % scfPlatformScreens.length);
  };

  const currentScreen = scfPlatformScreens[currentSlide];
  const IconComponent = currentScreen.icon;

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="px-4 py-2 text-primary border-primary/30 bg-white/50">
              Live Platform Demo
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Deep-Tier SCF Platform in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the complete ecosystem: from MSME supplier onboarding to anchor management and lender operations.
            </p>
          </div>

          {/* Main Showcase */}
          <div className="flex justify-center">
            {/* Platform Screenshot */}
            <div className="max-w-5xl w-full">
              <div className="relative group">
                {/* Enhanced Browser Frame */}
                <div className="bg-white rounded-xl shadow-2xl p-3 border border-gray-200 hover:shadow-3xl transition-all duration-500">
                  {/* Browser Header */}
                  <div className="flex items-center space-x-3 mb-4 px-4 py-3 bg-gray-50 rounded-lg">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors cursor-pointer"></div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-7 bg-white rounded-md border text-sm flex items-center px-4 text-gray-500 font-mono">
                        🔒 dtscf.vayana.com/{currentScreen.id}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300 transition-colors cursor-pointer"></div>
                      <div className="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300 transition-colors cursor-pointer"></div>
                    </div>
                  </div>
                  
                  {/* Screenshot with enhanced styling */}
                  <div className="relative overflow-hidden rounded-lg shadow-inner">
                    <img 
                      src={currentScreen.image}
                      alt={currentScreen.title}
                      className="w-full h-auto transition-all duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center" />
                    
                    {/* Floating status indicator */}
                    <div className="absolute top-4 right-4 flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium text-gray-700">Live</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Navigation Controls */}
                <div className="absolute top-1/2 -translate-y-1/2 left-6 right-6 flex justify-between pointer-events-none">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={prevSlide}
                    className="pointer-events-auto bg-white/95 hover:bg-white shadow-xl backdrop-blur-sm border-gray-200 hover:border-primary/30 hover:scale-110 transition-all duration-200"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={nextSlide}
                    className="pointer-events-auto bg-white/95 hover:bg-white shadow-xl backdrop-blur-sm border-gray-200 hover:border-primary/30 hover:scale-110 transition-all duration-200"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              {/* Platform indicators below carousel */}
              <div className="mt-8 flex justify-center space-x-3">
                {scfPlatformScreens.map((screen, index) => (
                  <button
                    key={screen.id}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-primary scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              {/* Platform info below indicators */}
              <div className="mt-6 text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {currentScreen.title}
                </h3>
                <Badge variant="outline" className="mb-3">
                  {currentScreen.category} • {currentScreen.userType}
                </Badge>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {currentScreen.description}
                </p>
                
                {/* Play/Pause control */}
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="flex items-center space-x-2 mx-auto"
                >
                  {isAutoPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                  <span className="text-xs">{isAutoPlaying ? 'Pause Demo' : 'Play Demo'}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SCFPlatformShowcase;