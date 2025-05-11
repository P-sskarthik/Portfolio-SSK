import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import ProjectDetail from './Components/ProjectDetail'; // ✅ updated to relative path
import './index.css'; // or './globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
