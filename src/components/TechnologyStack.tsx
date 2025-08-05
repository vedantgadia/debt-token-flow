import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Zap, 
  Database, 
  Cloud, 
  Lock, 
  RefreshCw,
  Code,
  Cpu,
  Network
} from 'lucide-react';

const TechnologyStack = () => {
  const techLayers = [
    {
      category: "Security Layer",
      icon: Shield,
      gradient: "from-red-500 to-pink-600",
      technologies: [
        { name: "End-to-End Encryption", status: "Active" },
        { name: "Multi-Factor Authentication", status: "Active" },
        { name: "Zero-Trust Architecture", status: "Active" },
        { name: "Hardware Security Modules", status: "Active" }
      ]
    },
    {
      category: "Blockchain Infrastructure",
      icon: Network,
      gradient: "from-blue-500 to-cyan-600",
      technologies: [
        { name: "Ethereum Compatible", status: "Live" },
        { name: "Polygon Network", status: "Live" },
        { name: "Smart Contract Engine", status: "Active" },
        { name: "Cross-chain Bridges", status: "Beta" }
      ]
    },
    {
      category: "Data Processing",
      icon: Database,
      gradient: "from-green-500 to-emerald-600",
      technologies: [
        { name: "Real-time Analytics", status: "Active" },
        { name: "AI/ML Risk Models", status: "Active" },
        { name: "Document Processing", status: "Active" },
        { name: "Automated Workflows", status: "Active" }
      ]
    },
    {
      category: "Cloud Infrastructure",
      icon: Cloud,
      gradient: "from-purple-500 to-indigo-600",
      technologies: [
        { name: "Multi-Region Deployment", status: "Global" },
        { name: "Auto-scaling", status: "Active" },
        { name: "99.9% Uptime SLA", status: "Guaranteed" },
        { name: "Disaster Recovery", status: "Active" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Cpu className="w-4 h-4 mr-2" />
            Technology Stack
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Built on{' '}
            <span className="gradient-text">Enterprise-Grade Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform leverages cutting-edge technology to deliver security, scalability, 
            and performance at institutional standards.
          </p>
        </div>

        {/* Technology Layers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techLayers.map((layer, index) => {
            const IconComponent = layer.icon;
            return (
              <Card key={index} className="p-6 border-2 hover:border-primary/50 transition-all duration-300 group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${layer.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-4">{layer.category}</h3>
                <div className="space-y-3">
                  {layer.technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm">{tech.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {tech.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Performance Metrics */}
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Platform Performance</h3>
            <p className="text-muted-foreground">Real-time system metrics and capabilities</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Zap className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">&lt;100ms</div>
              <div className="text-sm text-muted-foreground">API Response Time</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Database className="w-8 h-8 text-blue-500" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">1M+</div>
              <div className="text-sm text-muted-foreground">Transactions/Day</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Lock className="w-8 h-8 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">256-bit</div>
              <div className="text-sm text-muted-foreground">Encryption Standard</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <RefreshCw className="w-8 h-8 text-purple-500" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">System Monitoring</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TechnologyStack;