import React, { useState } from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

const NodeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NodeItem = styled.li`
  padding: 0.5rem;
  border: 1px solid #ccc;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

const AVAILABLE_NODES = [
  'MCP',
  'Database',
  'API',
  'PDF Analysis',
  'Create GitHub Issue',
  'Assign Agent',
  'Create PR',
];

interface Props {
  onAddNode?: (node: string) => void;
}

const NodePalette: React.FC<Props> = ({ onAddNode }) => {
  const [query, setQuery] = useState('');
  const filtered = AVAILABLE_NODES.filter((n) =>
    n.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
      <SearchInput
        type="text"
        placeholder="Search nodes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <NodeList>
        {filtered.map((name) => (
          <NodeItem key={name} onClick={() => onAddNode?.(name)}>
            {name}
          </NodeItem>
        ))}
      </NodeList>
    </div>
  );
};

export default NodePalette;
