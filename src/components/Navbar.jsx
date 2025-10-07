import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const userName = "Rohit"; // default login name

  return (
    <nav className="bg-gray-900 text-white p-4 flex items-center justify-between shadow-md">
      {/* Centered Navigation Links */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        <Link to="/dashboard" className="hover:text-blue-400 transition">Dashboard</Link>
        <Link to="/admin" className="hover:text-blue-400 transition">Admin Panel</Link>
      </div>

      {/* Right Side - User Info */}
      <div className="ml-auto flex items-center gap-3 mr-3">
        <div className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
          {userName}
        </div>
        <Link
          to="/login"
          className="text-gray-300 hover:text-red-400 text-sm transition"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
