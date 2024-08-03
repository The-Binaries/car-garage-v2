import React from "react";

export default function Navbar({ auth = false, handleLogout }) {
  return (
    <nav
      id="nav"
      className="flex items-center justify-between px-4 py-5 bg-stone-600"
    >
      <div id="logo" className="text-white text-lg">
        <a className="text-white text-3xl" href="/">
          Rayamajhi Boora Car Garage
        </a>
      </div>
      <div className="text-white text-lg">
        <ul className="flex">
          <li>
            {auth ? (
              <div className="flex gap-4">
                <a className="text-white text-3xl" href="/dashboard">
                  Dashboard
                </a>
                <button className="text-white text-3xl" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <a className="text-white text-3xl" href="/login">
                Login
              </a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
