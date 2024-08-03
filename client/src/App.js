import React, { useState, useEffect, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./components/Navbar";

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

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setAuth(false);
  };

  return (
    <Fragment>
      <Navbar auth={auth} handleLogout={handleLogout} />
      <Router>
        <Routes>
          {auth ? (
            <Route path="/login" element={<Navigate to="/dashboard" />} />
          ) : (
            <Route path="/login" element={<Login setAuth={handleSetAuth} />} />
          )}
          <Route
            path="/dashboard"
            element={<ProtectedRoute auth={auth} component={AdminDashboard} />}
          />
          <Route path="/" element={<h2>Home Page</h2>} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
