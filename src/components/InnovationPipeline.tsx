import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Rocket, Target, Zap, Code, Brain, Shield, Network } from 'lucide-react';
const InnovationPipeline = () => {
  const innovations = [{
    category: "Research Phase",
    icon: Brain,
    color: "from-purple-500 to-indigo-600",
    projects: [{
      name: "AI-Powered Risk Assessment",
      progress: 30,
      description: "Machine learning models for automated risk evaluation"
    }, {
      name: "Cross-chain Interoperability",
      progress: 15,
      description: "Seamless asset transfers across blockchains"
    }, {
      name: "Quantum-Resistant Security",
      progress: 10,
      description: "Future-proofing against quantum computing"
    }]
  }, {
    category: "Development",
    icon: Code,
    color: "from-blue-500 to-cyan-600",
    projects: [{
      name: "Smart Contract Templates",
      progress: 75,
      description: "Pre-built contracts for common use cases"
    }, {
      name: "Advanced Analytics Dashboard",
      progress: 60,
      description: "Real-time insights and reporting"
    }, {
      name: "Mobile SDK",
      progress: 45,
      description: "Native mobile integration capabilities"
    }]
  }, {
    category: "Testing",
    icon: Shield,
    color: "from-green-500 to-emerald-600",
    projects: [{
      name: "Tokenization Engine",
      progress: 85,
      description: "Core asset digitization platform"
    }, {
      name: "Digital Trade Documents",
      progress: 70,
      description: "Paperless trade finance workflows"
    }, {
      name: "Compliance Automation",
      progress: 55,
      description: "Automated regulatory reporting"
    }]
  }, {
    category: "MVP Ready",
    icon: Rocket,
    color: "from-orange-500 to-red-600",
    projects: [{
      name: "Supply Chain Finance",
      progress: 95,
      description: "Digital SCF platform with pilot partners"
    }, {
      name: "Asset Registry",
      progress: 90,
      description: "Secure digital asset management"
    }, {
      name: "API Gateway",
      progress: 88,
      description: "RESTful APIs for platform integration"
    }]
  }];
  return <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Lightbulb className="w-4 h-4 mr-2" />
            Innovation Pipeline
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Building Tomorrow's{' '}
            <span className="gradient-text">Digital Assets Infrastructure</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From research to reality - explore our innovation pipeline and see how we're 
            pioneering the next generation of digital financial solutions.
          </p>
        </div>

        {/* Innovation Stages */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {innovations.map((stage, index) => {
          const IconComponent = stage.icon;
          return;
        })}
        </div>

        {/* Innovation Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center">
            <Target className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Problem-First Approach</h3>
            <p className="text-muted-foreground">
              We identify real market pain points before building solutions, ensuring every 
              feature addresses genuine business needs.
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Rapid Prototyping</h3>
            <p className="text-muted-foreground">
              Quick iteration cycles allow us to test ideas fast, learn from feedback, 
              and pivot when necessary to deliver better solutions.
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <Network className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Collaborative Development</h3>
            <p className="text-muted-foreground">
              Working closely with pilot partners to ensure our innovations solve real-world 
              challenges in digital assets and trade finance.
            </p>
          </Card>
        </div>
      </div>
    </section>;
};
export default InnovationPipeline;