import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element, requiredRole }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/Login" />;
  }

  if (requiredRole && role !== requiredRole) {
    if (role === "doctor") {
      return <Navigate to="/dashboard-dokter" />;
    } else if (role === "patient") {
      return <Navigate to="/dashboard" />;
    } else if (role === "admin") {
      return <Navigate to="/admin" />;
    }
  }

  return element;
};

export default PrivateRoute;
