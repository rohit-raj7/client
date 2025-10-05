import React, { useState } from "react";
import CategoryDropdown from "../components/CategoryDropdown";
import FilterTabs from "../components/FilterTabs";
import AirdropCard from "../components/AirdropCard";
import { categories } from "../data/categories";
import { airdrops } from "../data/airdropsData";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-5xl font-bold mb-4">Crypto Airdrops</h1>
          <p className="text-gray-400 text-lg">
            Find the best and most promising free airdrops. Latest and hottest airdrops all in one place.
          </p>
        </div>
        <button className="px-6 py-3 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors">
          Submit your bonus
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-8 flex-wrap">
        <CategoryDropdown
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <FilterTabs />
      </div>

      {/* Airdrops Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {airdrops.map((item, idx) => (
          <AirdropCard key={idx} airdrop={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
