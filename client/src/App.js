import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";

function AdminDashboard() {
  return <h2>Admin Dashboard</h2>;
}

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
  }, []);

  const handleSetAuth = (value) => {
    setAuth(value);
    localStorage.setItem("auth", JSON.stringify(value));
  };

  return (
    <Router>
      <Routes>
        {auth ? (
          <Route path="/login" element={<Navigate to="/admin" />} />
        ) : (
          <Route path="/login" element={<Login setAuth={handleSetAuth} />} />
        )}
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
