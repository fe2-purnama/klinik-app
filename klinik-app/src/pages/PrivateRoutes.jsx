import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }) => {
  const isAuthenticated = true;
  const isAdmin = true;

  if (!isAuthenticated) {
    return <Navigate to="/Login" />;
  }

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return element;
};

export default PrivateRoute;
