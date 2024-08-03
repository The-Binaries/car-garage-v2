import React from "react";

export default function Navbar({ auth = false, handleLogout }) {
  return (
    <nav id="nav" className="flex items-center justify-between m-4">
      <div id="logo" className="text-slate-500 text-lg">
        <a className="text-slate-600 text-3xl" href="/">
          Logo
        </a>
      </div>
      <div className="text-slate-500 text-lg">
        <ul className="flex">
          <li>
            {auth ? (
              <div className="flex gap-4">
                <a className="text-slate-600 text-3xl" href="/dashboard">
                  Dashboard
                </a>
                <button
                  className="text-slate-600 text-3xl"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <a className="text-slate-600 text-3xl" href="/login">
                Login
              </a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
