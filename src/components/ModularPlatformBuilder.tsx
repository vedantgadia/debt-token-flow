import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Building2, 
  Coins, 
  Network, 
  FileText, 
  Shield, 
  Settings,
  Plus,
  Check,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const ModularPlatformBuilder = () => {
  const [selectedModules, setSelectedModules] = useState<string[]>(['tokenization']);
  const [buildingPhase, setBuildingPhase] = useState(0);

  const modules = [
    {
      id: 'tokenization',
      title: 'Asset Tokenization',
      description: 'Convert any asset into compliant digital tokens',
      icon: Coins,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      price: 'Core Module',
      features: ['ERC3643 Standard', 'Regulatory Compliance', 'Multi-asset Support']
    },
    {
      id: 'scf',
      title: 'Supply Chain Finance',
      description: 'Deep-tier supplier financing ecosystem',
      icon: Network,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      price: '+$50K/month',
      features: ['Multi-tier Financing', 'Risk Analytics', 'Real-time Monitoring']
    },
    {
      id: 'trade-docs',
      title: 'Trade Documentation',
      description: 'Automated trade finance workflows',
      icon: FileText,
      color: 'text-vayana-green',
      bgColor: 'bg-vayana-green/10',
      price: '+$30K/month',
      features: ['Document Digitization', 'Smart Workflows', 'Multi-bank Integration']
    },
    {
      id: 'securitization',
      title: 'Securitization',
      description: 'Asset-backed securities management',
      icon: Shield,
      color: 'text-vayana-purple',
      bgColor: 'bg-vayana-purple/10',
      price: '+$75K/month',
      features: ['Pool Management', 'Investor Portals', 'Compliance Reporting']
    }
  ];

  const useCases = [
    {
      title: 'Private Credit Fund',
      modules: ['tokenization', 'securitization'],
      description: 'Launch tokenized private credit offerings with built-in securitization'
    },
    {
      title: 'Supply Chain Ecosystem',
      modules: ['scf', 'trade-docs'],
      description: 'Complete trade finance and supplier financing solution'
    },
    {
      title: 'Comprehensive Platform',
      modules: ['tokenization', 'scf', 'trade-docs', 'securitization'],
      description: 'Full-stack digital assets and trade finance platform'
    }
  ];

  const toggleModule = (moduleId: string) => {
    if (moduleId === 'tokenization') return; // Core module cannot be removed
    
    setSelectedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const selectUseCase = (useCase: typeof useCases[0]) => {
    setSelectedModules(useCase.modules);
    setBuildingPhase(1);
  };

  const deployPlatform = () => {
    setBuildingPhase(2);
    setTimeout(() => setBuildingPhase(3), 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Settings className="w-4 h-4 mr-2" />
            Modular Platform Builder
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Build Your{' '}
            <span className="gradient-text">Custom Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the modules you need. Deploy in days, not months. Scale as you grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Module Selection */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6">Choose Your Modules</h3>
              
              {/* Quick Use Cases */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {useCases.map((useCase, index) => (
                  <Card 
                    key={index}
                    className="p-4 cursor-pointer hover:border-primary/30 transition-colors"
                    onClick={() => selectUseCase(useCase)}
                  >
                    <h4 className="font-medium mb-2">{useCase.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{useCase.description}</p>
                    <div className="flex gap-1">
                      {useCase.modules.map((moduleId) => {
                        const module = modules.find(m => m.id === moduleId);
                        if (!module) return null;
                        const ModuleIcon = module.icon;
                        return (
                          <div key={moduleId} className={`w-6 h-6 rounded ${module.bgColor} flex items-center justify-center`}>
                            <ModuleIcon className={`w-3 h-3 ${module.color}`} />
                          </div>
                        );
                      })}
                    </div>
                  </Card>
                ))}
              </div>

              {/* Module Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {modules.map((module) => {
                  const ModuleIcon = module.icon;
                  const isSelected = selectedModules.includes(module.id);
                  const isCore = module.id === 'tokenization';
                  
                  return (
                    <Card 
                      key={module.id}
                      className={`module-card ${isSelected ? 'border-primary/50 bg-primary/5' : ''} ${
                        isCore ? 'border-primary border-2' : ''
                      }`}
                      onClick={() => toggleModule(module.id)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-10 h-10 rounded-lg ${module.bgColor} flex items-center justify-center`}>
                          <ModuleIcon className={`w-5 h-5 ${module.color}`} />
                        </div>
                        <div className="flex items-center gap-2">
                          {isCore && <Badge variant="secondary">Core</Badge>}
                          {isSelected ? (
                            <Check className="w-5 h-5 text-primary" />
                          ) : (
                            <Plus className="w-5 h-5 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-lg mb-2">{module.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{module.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        {module.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <Check className="w-3 h-3 text-primary" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <div className="text-primary font-medium">{module.price}</div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Platform Preview */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-2xl font-semibold mb-6">Your Platform</h3>
              
              <Card className="platform-preview">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Custom Digital Assets Platform</span>
                </div>
                
                {/* Selected Modules */}
                <div className="space-y-3 mb-6">
                  {selectedModules.map((moduleId) => {
                    const module = modules.find(m => m.id === moduleId);
                    if (!module) return null;
                    const ModuleIcon = module.icon;
                    
                    return (
                      <div key={moduleId} className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                        <div className={`w-8 h-8 rounded ${module.bgColor} flex items-center justify-center`}>
                          <ModuleIcon className={`w-4 h-4 ${module.color}`} />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{module.title}</div>
                          <div className="text-xs text-muted-foreground">{module.price}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Deployment Status */}
                {buildingPhase === 0 && (
                  <Button 
                    onClick={deployPlatform}
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={selectedModules.length === 0}
                  >
                    Deploy Platform
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                )}

                {buildingPhase === 1 && (
                  <div className="text-center">
                    <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Configuring modules...</p>
                  </div>
                )}

                {buildingPhase === 2 && (
                  <div className="text-center">
                    <div className="animate-pulse w-8 h-8 bg-primary rounded-full mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Deploying infrastructure...</p>
                  </div>
                )}

                {buildingPhase === 3 && (
                  <div className="text-center animate-fade-in">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-medium text-green-600 mb-2">Platform Ready!</p>
                    <p className="text-sm text-muted-foreground mb-4">Your custom platform is live and ready to use.</p>
                    <Button 
                      size="sm" 
                      onClick={() => setBuildingPhase(0)}
                      variant="outline"
                    >
                      Build Another
                    </Button>
                  </div>
                )}

                {/* Platform Stats */}
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="font-semibold text-lg">{selectedModules.length}</div>
                      <div className="text-xs text-muted-foreground">Modules</div>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">7-14</div>
                      <div className="text-xs text-muted-foreground">Days to Deploy</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModularPlatformBuilder;