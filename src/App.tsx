import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Login from './pages/Login';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import AIAssessment from './pages/AIAssessment';
import Workout from './pages/Workout';
import Meditation from './pages/Meditation';
import Diet from './pages/Diet';
import Community from './pages/Community';
import LocalClasses from './pages/LocalClasses';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="/" element={isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" replace />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="ai-assessment" element={<AIAssessment />} />
            <Route path="workouts" element={<Workout />} />
            <Route path="meditation" element={<Meditation />} />
            <Route path="diet" element={<Diet />} />
            <Route path="community" element={<Community />} />
            <Route path="local-classes" element={<LocalClasses />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;