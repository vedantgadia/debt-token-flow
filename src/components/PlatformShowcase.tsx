import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  Monitor, 
  Shield, 
  BarChart3, 
  TrendingUp, 
  Settings,
  Play,
  Pause
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

import investorDashboard from '../assets/platform-investor-dashboard.jpg';
import tokenIssuance from '../assets/platform-token-issuance.jpg';
import complianceDashboard from '../assets/platform-compliance-dashboard.jpg';
import assetManagement from '../assets/platform-asset-management.jpg';
import tradingInterface from '../assets/platform-trading-interface.jpg';

const PlatformShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const platformScreens = [
    {
      id: 'investor-dashboard',
      title: 'Investor Dashboard',
      description: 'Comprehensive portfolio view with real-time tokenized asset performance, analytics, and investment tracking.',
      image: investorDashboard,
      icon: BarChart3,
      features: ['Portfolio Analytics', 'Real-time Valuations', 'Transaction History', 'Performance Metrics'],
      category: 'Investment Management'
    },
    {
      id: 'token-issuance',
      title: 'Token Issuance Platform',
      description: 'Streamlined asset tokenization workflow with smart contract deployment and regulatory compliance built-in.',
      image: tokenIssuance,
      icon: Settings,
      features: ['Asset Digitization', 'Smart Contracts', 'Compliance Checks', 'Distribution Setup'],
      category: 'Issuance & Setup'
    },
    {
      id: 'compliance-dashboard',
      title: 'Compliance Management',
      description: 'Advanced regulatory controls with automated KYC/AML, audit trails, and transaction monitoring.',
      image: complianceDashboard,
      icon: Shield,
      features: ['KYC/AML Automation', 'Regulatory Reporting', 'Audit Trails', 'Risk Monitoring'],
      category: 'Compliance & Risk'
    },
    {
      id: 'asset-management',
      title: 'Asset Management Suite',
      description: 'Professional-grade tools for managing tokenized asset lifecycles, distributions, and operations.',
      image: assetManagement,
      icon: TrendingUp,
      features: ['Asset Lifecycle', 'Distribution Management', 'Operational Tools', 'Performance Analytics'],
      category: 'Operations'
    },
    {
      id: 'trading-interface',
      title: 'Trading & Liquidity',
      description: 'Sophisticated trading interface for secondary market transactions with advanced order management.',
      image: tradingInterface,
      icon: Monitor,
      features: ['Order Management', 'Market Data', 'Liquidity Pools', 'Trade Execution'],
      category: 'Secondary Markets'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % platformScreens.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, platformScreens.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % platformScreens.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + platformScreens.length) % platformScreens.length);
  };

  const currentScreen = platformScreens[currentSlide];
  const IconComponent = currentScreen.icon;

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="px-4 py-2 text-vayana-blue border-vayana-blue/30">
              Platform Screenshots
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              See the Platform in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore real screenshots of our tokenization platform, from investor dashboards to compliance management and trading interfaces.
            </p>
          </div>

          {/* Main Showcase */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Platform Screenshot */}
            <div className="lg:col-span-8">
              <div className="relative group">
                {/* Browser Frame */}
                <div className="bg-white rounded-lg shadow-2xl p-2 border border-gray-200">
                  {/* Browser Header */}
                  <div className="flex items-center space-x-2 mb-3 px-3 py-2 bg-gray-50 rounded-t-md">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-6 bg-white rounded border text-xs flex items-center px-3 text-gray-500">
                        platform.vayana.com/{currentScreen.id}
                      </div>
                    </div>
                  </div>
                  
                  {/* Screenshot */}
                  <div className="relative overflow-hidden rounded-md">
                    <img 
                      src={currentScreen.image}
                      alt={currentScreen.title}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={prevSlide}
                    className="pointer-events-auto bg-white/90 hover:bg-white shadow-lg"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={nextSlide}
                    className="pointer-events-auto bg-white/90 hover:bg-white shadow-lg"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Platform Details */}
            <div className="lg:col-span-4 space-y-8">
              {/* Current Platform Info */}
              <Card className="border-2 border-vayana-blue/20 bg-white">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-vayana-blue/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-vayana-blue" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {currentScreen.category}
                        </Badge>
                        <h3 className="text-xl font-bold text-gray-900">
                          {currentScreen.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600">
                      {currentScreen.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {currentScreen.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-vayana-blue" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Platform Navigation */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900">Platform Modules</h4>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="flex items-center space-x-2"
                  >
                    {isAutoPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                    <span className="text-xs">{isAutoPlaying ? 'Pause' : 'Play'}</span>
                  </Button>
                </div>
                
                <div className="space-y-2">
                  {platformScreens.map((screen, index) => (
                    <button
                      key={screen.id}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                        index === currentSlide 
                          ? 'bg-vayana-blue text-white shadow-md' 
                          : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <screen.icon className={`h-4 w-4 ${index === currentSlide ? 'text-white' : 'text-vayana-blue'}`} />
                        <div>
                          <div className={`font-medium text-sm ${index === currentSlide ? 'text-white' : 'text-gray-900'}`}>
                            {screen.title}
                          </div>
                          <div className={`text-xs ${index === currentSlide ? 'text-white/80' : 'text-gray-500'}`}>
                            {screen.category}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Progress</span>
                  <span>{currentSlide + 1} / {platformScreens.length}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-vayana-blue h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentSlide + 1) / platformScreens.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformShowcase;