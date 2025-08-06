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

const DebtPlatformShowcase = () => {
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
          <div className="flex justify-center">
            {/* Platform Screenshot */}
            <div className="max-w-4xl w-full">
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
              
              {/* Slide indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {platformScreens.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-vayana-blue' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DebtPlatformShowcase;