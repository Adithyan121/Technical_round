import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const authToken = localStorage.getItem('authToken');
  if (!authToken) {
    return <Navigate to="/" />;
  }
  return element;
};

export default PrivateRoute;
