import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/airdrops">Airdrops</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/admin">Admin Panel</Link>
    </nav>
  );
};

export default Navbar;
