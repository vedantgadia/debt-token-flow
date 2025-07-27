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
    <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
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
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Platform Screenshot */}
            <div className="lg:col-span-8">
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
            </div>

            {/* Enhanced Platform Details */}
            <div className="lg:col-span-4 space-y-8">
              {/* Current Platform Info */}
              <Card className="border-2 border-primary/20 bg-white/80 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center shadow-lg">
                        <IconComponent className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {currentScreen.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs text-gray-600">
                            {currentScreen.userType}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {currentScreen.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {currentScreen.description}
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        <Network className="h-4 w-4 mr-2 text-primary" />
                        Key Capabilities:
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {currentScreen.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50 hover:bg-primary/5 transition-colors">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                            <span className="text-sm text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Platform Navigation */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                    Platform Modules
                  </h4>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="flex items-center space-x-2 hover:bg-primary/5"
                  >
                    {isAutoPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                    <span className="text-xs">{isAutoPlaying ? 'Pause' : 'Play'}</span>
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {scfPlatformScreens.map((screen, index) => (
                    <button
                      key={screen.id}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 transform ${
                        index === currentSlide 
                          ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-[1.02]' 
                          : 'bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-100 hover:border-primary/30 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <screen.icon className={`h-5 w-5 ${index === currentSlide ? 'text-white' : 'text-primary'}`} />
                        <div className="flex-1">
                          <div className={`font-semibold text-sm ${index === currentSlide ? 'text-white' : 'text-gray-900'}`}>
                            {screen.title}
                          </div>
                          <div className={`text-xs ${index === currentSlide ? 'text-white/80' : 'text-gray-500'}`}>
                            {screen.userType}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Enhanced Progress Indicator */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="font-medium">Demo Progress</span>
                  <span className="font-mono">{currentSlide + 1} / {scfPlatformScreens.length}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-700 shadow-sm"
                    style={{ width: `${((currentSlide + 1) / scfPlatformScreens.length) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Supplier View</span>
                  <span>Blockchain Monitor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SCFPlatformShowcase;