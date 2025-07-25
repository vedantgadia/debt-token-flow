import React, { useCallback } from 'react';
import {
  ReactFlow,
  addEdge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
  Node,
  Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { 
      label: (
        <div className="text-center">
          <div className="font-semibold text-vayana-blue">Asset Digitization</div>
          <div className="text-xs text-gray-500 mt-1">Legal & Valuation</div>
        </div>
      ) 
    },
    position: { x: 50, y: 50 },
    style: {
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      border: '2px solid #3b82f6',
      borderRadius: '12px',
      width: 150,
      height: 80,
    },
  },
  {
    id: '2',
    data: { 
      label: (
        <div className="text-center">
          <div className="font-semibold text-vayana-red">Smart Contract</div>
          <div className="text-xs text-gray-500 mt-1">ERC3643 Deployment</div>
        </div>
      ) 
    },
    position: { x: 300, y: 50 },
    style: {
      background: 'linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)',
      border: '2px solid #ef4444',
      borderRadius: '12px',
      width: 150,
      height: 80,
    },
  },
  {
    id: '3',
    data: { 
      label: (
        <div className="text-center">
          <div className="font-semibold text-vayana-purple">Investor Registry</div>
          <div className="text-xs text-gray-500 mt-1">KYC/AML Verification</div>
        </div>
      ) 
    },
    position: { x: 550, y: 50 },
    style: {
      background: 'linear-gradient(135deg, #faf5ff 0%, #e9d5ff 100%)',
      border: '2px solid #8b5cf6',
      borderRadius: '12px',
      width: 150,
      height: 80,
    },
  },
  {
    id: '4',
    data: { 
      label: (
        <div className="text-center">
          <div className="font-semibold text-green-600">Token Distribution</div>
          <div className="text-xs text-gray-500 mt-1">Primary Offering</div>
        </div>
      ) 
    },
    position: { x: 175, y: 200 },
    style: {
      background: 'linear-gradient(135deg, #f0fdf4 0%, #bbf7d0 100%)',
      border: '2px solid #22c55e',
      borderRadius: '12px',
      width: 150,
      height: 80,
    },
  },
  {
    id: '5',
    type: 'output',
    data: { 
      label: (
        <div className="text-center">
          <div className="font-semibold text-orange-600">Ongoing Management</div>
          <div className="text-xs text-gray-500 mt-1">Compliance & Trading</div>
        </div>
      ) 
    },
    position: { x: 425, y: 200 },
    style: {
      background: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)',
      border: '2px solid #ea580c',
      borderRadius: '12px',
      width: 150,
      height: 80,
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#3b82f6', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#ef4444', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#ef4444' },
  },
  {
    id: 'e1-4',
    source: '1',
    target: '4',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#22c55e', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#22c55e' },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#8b5cf6', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#8b5cf6' },
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#ea580c', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#ea580c' },
  },
];

const TokenizationFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div className="w-full h-96 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="bottom-left"
        style={{ 
          background: 'transparent',
        }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
      >
        <Controls />
        <Background color="#e2e8f0" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default TokenizationFlow;