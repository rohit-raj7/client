import React, { useState } from "react";

const AdminPanel = () => {
  const [airdrops, setAirdrops] = useState([]);

  return (
    <div className="p-8 text-gray-300">
      <h2 className="text-3xl font-bold mb-6 text-yellow-400">Admin Panel</h2>

      <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
        <p>Add new airdrops, edit existing ones, and manage submissions.</p>
        {/* You can later add forms for airdrop submission here */}
      </div>
    </div>
  );
};

export default AdminPanel;
