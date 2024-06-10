import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoutePasien({ element }) {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/Login" />;
  }
  return element;
}

export default PrivateRoutePasien;
