import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Profiles from './pages/Profiles';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CreateProject from './pages/dashboard-partials/CreateProject';
import Settings from './pages/dashboard-partials/Settings';
import ProfileSettings from './pages/dashboard-partials/ProfileSettings';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleLogin = () => {
      console.log("Logging in...");
      localStorage.setItem('token', 'your-token'); // Simulate setting a token
      setIsAuthenticated(true);
  };

  const handleLogout = () => {
      console.log("Logging out...");
      localStorage.removeItem('token');
      setIsAuthenticated(false);
  };

  console.log("Authenticated:", isAuthenticated);

  return (
      <Router>
          <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/profiles" element={<Profiles />} />
              <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
              <Route path="/create-project" element={isAuthenticated ? <CreateProject /> : <Navigate to="/login" />} />
              <Route path="/settings" element={isAuthenticated ? <Settings /> : <Navigate to="/login" />} />
              <Route path="/profile" element={isAuthenticated ? <ProfileSettings /> : <Navigate to="/login" />} />
              <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
      </Router>
  );
};

export default App;