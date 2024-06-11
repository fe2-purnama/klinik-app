import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/Login" />;
  }

  return element;
};

export default PrivateRoute;
