// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
// import AdminPanel from "./pages/AdminPanel";
// import CryptoAirdrops from "./components/AirdropCard";
// import './index.css'
// const App = () => {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/airdrops" element={<CryptoAirdrops />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/admin" element={<AdminPanel />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;







import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import CryptoAirdrops from "./components/AirdropCard";
import Details from "./components/AirdropCardDetails/Details"; // ✅ Import the details page
import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airdrops" element={<CryptoAirdrops />} />
        {/* ✅ Add route for airdrop details */}
        <Route path="/airdrops/:id" element={<Details />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
  );
};

export default App;
