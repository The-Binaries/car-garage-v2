import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ component: Component, auth }) {
  return auth ? <Component /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
