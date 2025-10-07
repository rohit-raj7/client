import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import CryptoAirdrops from "./components/AirdropCard";
import Details from "./components/AirdropCardDetails/Details";
// import Signup from "./login/Sinup";
import Login from './login/Login'
import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ✅ Navbar shown on all pages except Login/Signup */}
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/airdrops" element={<CryptoAirdrops />} />
                <Route path="/airdrops/:id" element={<Details />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/admin" element={<AdminPanel />} />
              </Routes>
            </>
          }
        />
        {/* ✅ Auth Pages (no Navbar for a clean look) */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </div>
  );
};

export default App;
