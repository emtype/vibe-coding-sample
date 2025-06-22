import React from 'react';
import styled from 'styled-components';

const Canvas = styled.div`
  flex: 1;
  position: relative;
  padding: 1rem;
`;

const NodeBox = styled.div`
  padding: 0.5rem 1rem;
  border: 1px solid #888;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  background: #fff;
`;

interface Props {
  nodes: string[];
}

const WorkflowCanvas: React.FC<Props> = ({ nodes }) => {
  return (
    <Canvas>
      {nodes.map((name, index) => (
        <NodeBox key={index}>{`Step ${index + 1}: ${name}`}</NodeBox>
      ))}
    </Canvas>
  );
};

export default WorkflowCanvas;
