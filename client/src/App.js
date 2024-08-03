import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";

function AdminDashboard() {
  return <h2>Admin Dashboard</h2>;
}

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route
          path="/admin"
          element={<ProtectedRoute auth={auth} component={AdminDashboard} />}
        />
        <Route path="/" element={<h2>Home Page</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
