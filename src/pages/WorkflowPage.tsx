import React, { useState } from 'react';
import styled from 'styled-components';
import NodePalette from '../components/NodePalette';
import WorkflowCanvas from '../components/WorkflowCanvas';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  border-right: 1px solid #ccc;
  padding: 1rem;
`;

const Page: React.FC = () => {
  const [nodes, setNodes] = useState<string[]>([]);

  const handleAddNode = (name: string) => {
    setNodes((prev) => [...prev, name]);
  };

  return (
    <Container>
      <Sidebar>
        <h2>Nodes</h2>
        <NodePalette onAddNode={handleAddNode} />
      </Sidebar>
      <WorkflowCanvas nodes={nodes} />
    </Container>
  );
};

export default Page;
