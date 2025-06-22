import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import WorkflowPage from './pages/WorkflowPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/workflows" replace />} />
      <Route path="/workflows" element={<WorkflowPage />} />
    </Routes>
  );
};

export default App;
