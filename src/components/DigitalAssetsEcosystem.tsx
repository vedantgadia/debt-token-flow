import React, { useCallback } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Coins, 
  Network, 
  FileText, 
  Shield, 
  TrendingUp,
  Database,
  Users,
  BarChart3,
  Globe,
  Zap
} from 'lucide-react';

const ProductNode = ({ data }: { data: any }) => {
  const IconComponent = data.icon;
  
  return (
    <Card className={`p-4 min-w-[200px] border-2 ${data.bgColor} transition-all duration-300 hover:scale-105`}>
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${data.gradient} flex items-center justify-center`}>
          <IconComponent className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-sm">{data.title}</h3>
          <Badge variant="secondary" className="text-xs">{data.category}</Badge>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mb-3">{data.description}</p>
      <div className="space-y-1">
        {data.capabilities.slice(0, 3).map((cap: string, idx: number) => (
          <div key={idx} className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-primary" />
            <span className="text-xs">{cap}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

const HubNode = ({ data }: { data: any }) => {
  return (
    <Card className="p-6 border-4 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-3">
          <Zap className="w-8 h-8 text-white" />
        </div>
        <h2 className="font-bold text-lg gradient-text">{data.title}</h2>
        <p className="text-sm text-muted-foreground mt-1">{data.subtitle}</p>
        <div className="flex gap-2 mt-3">
          <Badge variant="outline" className="text-xs">Unified API</Badge>
          <Badge variant="outline" className="text-xs">Real-time</Badge>
        </div>
      </div>
    </Card>
  );
};

const ServiceNode = ({ data }: { data: any }) => {
  const IconComponent = data.icon;
  
  return (
    <Card className="p-3 border border-border/50 bg-muted/30">
      <div className="flex flex-col items-center text-center">
        <IconComponent className="w-6 h-6 text-primary mb-2" />
        <h4 className="font-medium text-xs">{data.title}</h4>
        <p className="text-xs text-muted-foreground">{data.subtitle}</p>
      </div>
    </Card>
  );
};

const nodeTypes = {
  product: ProductNode,
  hub: HubNode,
  service: ServiceNode,
};

const initialNodes: Node[] = [
  // Central Hub
  {
    id: 'hub',
    type: 'hub',
    position: { x: 400, y: 300 },
    data: {
      title: 'Vayana Digital Assets Platform',
      subtitle: 'Unified Ecosystem Hub'
    },
  },
  
  // Core Products
  {
    id: 'tokenization',
    type: 'product',
    position: { x: 100, y: 100 },
    data: {
      title: 'Asset Tokenization',
      category: 'Core Module',
      description: 'Transform any asset into secure, compliant digital tokens',
      icon: Coins,
      gradient: 'from-blue-500 to-purple-600',
      bgColor: 'border-blue-200 bg-blue-50/50 dark:bg-blue-950/20',
      capabilities: ['Real Estate Tokens', 'Private Credit', 'Commodities', 'Art & Collectibles']
    },
  },
  {
    id: 'scf',
    type: 'product',
    position: { x: 700, y: 100 },
    data: {
      title: 'Supply Chain Finance',
      category: 'Core Module',
      description: 'Multi-level supplier financing with blockchain transparency',
      icon: Network,
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'border-green-200 bg-green-50/50 dark:bg-green-950/20',
      capabilities: ['Multi-tier Financing', 'Real-time Analytics', 'Risk Assessment', 'Instant Settlements']
    },
  },
  {
    id: 'trade-docs',
    type: 'product',
    position: { x: 100, y: 500 },
    data: {
      title: 'Trade Documentation',
      category: 'Core Module',
      description: 'Digitized trade finance workflows with smart automation',
      icon: FileText,
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'border-orange-200 bg-orange-50/50 dark:bg-orange-950/20',
      capabilities: ['Document Digitization', 'Smart Workflows', 'Multi-bank Support', 'Compliance Automation']
    },
  },
  {
    id: 'securitization',
    type: 'product',
    position: { x: 700, y: 500 },
    data: {
      title: 'Asset Securitization',
      category: 'Core Module',
      description: 'Structure and distribute asset-backed securities',
      icon: Shield,
      gradient: 'from-purple-500 to-pink-600',
      bgColor: 'border-purple-200 bg-purple-50/50 dark:bg-purple-950/20',
      capabilities: ['TRS Structures', 'PTC Management', 'SDI Processing', 'Investor Portals']
    },
  },
  {
    id: 'payments',
    type: 'product',
    position: { x: 400, y: 50 },
    data: {
      title: 'Supply Chain Payments',
      category: 'Core Module',
      description: 'Streamlined payment solutions for complex ecosystems',
      icon: TrendingUp,
      gradient: 'from-indigo-500 to-blue-600',
      bgColor: 'border-indigo-200 bg-indigo-50/50 dark:bg-indigo-950/20',
      capabilities: ['Instant Payments', 'Multi-currency', 'Smart Contracts', 'Analytics']
    },
  },
  
  // Support Services
  {
    id: 'data-analytics',
    type: 'service',
    position: { x: 200, y: 300 },
    data: {
      title: 'Data Analytics',
      subtitle: 'Real-time Insights',
      icon: BarChart3
    },
  },
  {
    id: 'compliance',
    type: 'service',
    position: { x: 600, y: 300 },
    data: {
      title: 'Compliance Engine',
      subtitle: 'Global Standards',
      icon: Shield
    },
  },
  {
    id: 'user-management',
    type: 'service',
    position: { x: 400, y: 550 },
    data: {
      title: 'Identity Management',
      subtitle: 'Multi-tenant',
      icon: Users
    },
  },
  {
    id: 'data-storage',
    type: 'service',
    position: { x: 300, y: 200 },
    data: {
      title: 'Secure Storage',
      subtitle: 'Encrypted Vault',
      icon: Database
    },
  },
  {
    id: 'global-network',
    type: 'service',
    position: { x: 500, y: 200 },
    data: {
      title: 'Global Network',
      subtitle: 'Multi-region',
      icon: Globe
    },
  },
];

const initialEdges: Edge[] = [
  // Hub connections to core products
  { id: 'hub-tokenization', source: 'hub', target: 'tokenization', animated: true, style: { stroke: '#3b82f6' } },
  { id: 'hub-scf', source: 'hub', target: 'scf', animated: true, style: { stroke: '#10b981' } },
  { id: 'hub-trade-docs', source: 'hub', target: 'trade-docs', animated: true, style: { stroke: '#f59e0b' } },
  { id: 'hub-securitization', source: 'hub', target: 'securitization', animated: true, style: { stroke: '#8b5cf6' } },
  { id: 'hub-payments', source: 'hub', target: 'payments', animated: true, style: { stroke: '#6366f1' } },
  
  // Product interconnections
  { id: 'tokenization-scf', source: 'tokenization', target: 'scf', style: { stroke: '#64748b', strokeDasharray: '5,5' } },
  { id: 'scf-payments', source: 'scf', target: 'payments', style: { stroke: '#64748b', strokeDasharray: '5,5' } },
  { id: 'tokenization-securitization', source: 'tokenization', target: 'securitization', style: { stroke: '#64748b', strokeDasharray: '5,5' } },
  { id: 'trade-docs-scf', source: 'trade-docs', target: 'scf', style: { stroke: '#64748b', strokeDasharray: '5,5' } },
  
  // Service connections
  { id: 'hub-analytics', source: 'hub', target: 'data-analytics', style: { stroke: '#e2e8f0' } },
  { id: 'hub-compliance', source: 'hub', target: 'compliance', style: { stroke: '#e2e8f0' } },
  { id: 'hub-users', source: 'hub', target: 'user-management', style: { stroke: '#e2e8f0' } },
  { id: 'hub-storage', source: 'hub', target: 'data-storage', style: { stroke: '#e2e8f0' } },
  { id: 'hub-network', source: 'hub', target: 'global-network', style: { stroke: '#e2e8f0' } },
];

const DigitalAssetsEcosystem = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Network className="w-4 h-4 mr-2" />
            Digital Assets Ecosystem
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Everything You Need in{' '}
            <span className="gradient-text">Digital Assets Space</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A unified platform with interconnected modules covering the entire digital assets lifecycle - 
            from tokenization to settlement, all working seamlessly together.
          </p>
        </div>

        {/* Interactive Ecosystem Diagram */}
        <Card className="w-full h-[700px] border-2 border-primary/20 bg-gradient-to-br from-background to-muted/20 overflow-hidden">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            fitView
            attributionPosition="bottom-left"
            className="bg-transparent"
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={false}
          >
            <Controls className="bg-background border border-border" />
            <Background color="#e2e8f0" gap={20} size={1} />
          </ReactFlow>
        </Card>

        {/* Coverage Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <Card className="p-6 text-center border-blue-200 bg-blue-50/50 dark:bg-blue-950/20">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Asset Class Coverage</div>
          </Card>
          <Card className="p-6 text-center border-green-200 bg-green-50/50 dark:bg-green-950/20">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Global Compliance Standards</div>
          </Card>
          <Card className="p-6 text-center border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Real-time Processing</div>
          </Card>
          <Card className="p-6 text-center border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
            <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Platform Uptime</div>
          </Card>
        </div>

        {/* Value Proposition */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">One Platform, Infinite Possibilities</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto">
                <Network className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold">Interconnected Modules</h4>
              <p className="text-sm text-muted-foreground">
                All products share data and workflows, eliminating silos and reducing integration complexity.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold">Enterprise Security</h4>
              <p className="text-sm text-muted-foreground">
                Bank-grade security with compliance built into every module from the ground up.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold">Unified Analytics</h4>
              <p className="text-sm text-muted-foreground">
                Single dashboard for insights across tokenization, financing, and settlement activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalAssetsEcosystem;