import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Authentication/Login';
import Signup from './pages/Authentication/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import UserDetails from './pages/UserDetails/UserDetails';
import PrivateRoute from './pages/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/user/:id" element={<PrivateRoute element={<UserDetails />} />} />
      </Routes>
    </Router>
  );
};

export default App;
