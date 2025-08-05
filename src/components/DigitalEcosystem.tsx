import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  Coins, 
  Network, 
  FileText, 
  Shield, 
  TrendingUp, 
  Globe, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const DigitalEcosystem = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const platformModules = [
    {
      id: 'tokenization',
      title: 'Tokenization Module',
      description: 'Transform any asset into secure, tradeable digital tokens',
      icon: Coins,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/30',
      capabilities: ['Real Estate', 'Private Credit', 'Commodities', 'Art & Collectibles'],
      metrics: '500M+ Assets Tokenized',
      position: { x: 20, y: 20 }
    },
    {
      id: 'scf',
      title: 'Supply Chain Finance Module',
      description: 'Deep-tier financing across multi-level supply networks',
      icon: Network,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      borderColor: 'border-secondary/30',
      capabilities: ['Multi-tier Financing', 'Real-time Analytics', 'Risk Assessment', 'Instant Settlements'],
      metrics: '50B+ Transactions',
      position: { x: 70, y: 15 }
    },
    {
      id: 'trade-docs',
      title: 'Trade Documentation Module',
      description: 'Digitized trade finance workflows and documentation',
      icon: FileText,
      color: 'text-vayana-green',
      bgColor: 'bg-vayana-green/10',
      borderColor: 'border-vayana-green/30',
      capabilities: ['Document Digitization', 'Smart Workflows', 'Compliance Automation', 'Multi-bank Support'],
      metrics: '1M+ Documents Processed',
      position: { x: 15, y: 65 }
    },
    {
      id: 'securitization',
      title: 'Securitization Module',
      description: 'Structure and distribute asset-backed securities',
      icon: Shield,
      color: 'text-vayana-purple',
      bgColor: 'bg-vayana-purple/10',
      borderColor: 'border-vayana-purple/30',
      capabilities: ['TRS', 'PTC', 'SDI', 'Pool Management'],
      metrics: '10B+ Securities Issued',
      position: { x: 65, y: 70 }
    }
  ];

  const connections = [
    { from: 'tokenization', to: 'scf' },
    { from: 'scf', to: 'securitization' },
    { from: 'securitization', to: 'trade-docs' },
    { from: 'trade-docs', to: 'tokenization' }
  ];

  return (
    <section id="ecosystem" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Globe className="w-4 h-4 mr-2" />
            Digital Assets Ecosystem
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Platform{' '}
            <span className="gradient-text">Modules</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the integrated modules that power the Vayana Digital Assets Platform. 
            Each module seamlessly connects to create a unified financial ecosystem.
          </p>
        </div>

        {/* Interactive Ecosystem Visualization */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="relative h-[600px] bg-gradient-to-br from-card/50 to-muted/30 rounded-3xl border border-border/50 backdrop-blur-sm overflow-hidden">
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
              {connections.map((connection, index) => {
                const fromNode = platformModules.find(n => n.id === connection.from);
                const toNode = platformModules.find(n => n.id === connection.to);
                if (!fromNode || !toNode) return null;

                const x1 = (fromNode.position.x / 100) * 100;
                const y1 = (fromNode.position.y / 100) * 100;
                const x2 = (toNode.position.x / 100) * 100;
                const y2 = (toNode.position.y / 100) * 100;

                return (
                  <line
                    key={index}
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="url(#ecosystemGradient)"
                    strokeWidth="2"
                    className="opacity-40"
                    strokeDasharray="5,5"
                  />
                );
              })}
              <defs>
                <linearGradient id="ecosystemGradient">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" />
                </linearGradient>
              </defs>
            </svg>

            {/* Ecosystem nodes */}
            {platformModules.map((node, index) => {
              const NodeIcon = node.icon;
              const isSelected = selectedNode === node.id;
              
              return (
                <div
                  key={node.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                    isSelected ? 'scale-110 z-20' : 'z-10'
                  }`}
                  style={{
                    left: `${node.position.x}%`,
                    top: `${node.position.y}%`,
                  }}
                >
                  <Card
                    className={`ecosystem-node w-64 cursor-pointer ${
                      isSelected ? `${node.borderColor} shadow-2xl` : ''
                    }`}
                    onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                  >
                    <div className={`w-12 h-12 rounded-lg ${node.bgColor} flex items-center justify-center mb-4`}>
                      <NodeIcon className={`w-6 h-6 ${node.color}`} />
                    </div>
                    
                    <h3 className="font-semibold text-lg mb-2">{node.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{node.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-primary font-medium">{node.metrics}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>

                    {/* Expanded details */}
                    {isSelected && (
                      <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                        <h4 className="font-medium mb-2">Key Capabilities:</h4>
                        <div className="space-y-1">
                          {node.capabilities.map((capability, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-primary" />
                              {capability}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </Card>
                </div>
              );
            })}

            {/* Central connection hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary animate-glow flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Integration Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingUp,
              title: 'Compound Value',
              description: 'Each platform amplifies the others, creating exponential value for your digital assets strategy.'
            },
            {
              icon: Network,
              title: 'Seamless Integration',
              description: 'Built-in APIs and shared infrastructure ensure effortless data flow between all platforms.'
            },
            {
              icon: Shield,
              title: 'Unified Compliance',
              description: 'Single compliance framework across all solutions, reducing complexity and ensuring consistency.'
            }
          ].map((benefit, index) => {
            const BenefitIcon = benefit.icon;
            return (
              <Card key={index} className="p-6 text-center hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BenefitIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DigitalEcosystem;