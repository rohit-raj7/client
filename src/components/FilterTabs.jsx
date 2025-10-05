import React from "react";
import { MapPin, Calendar, ChevronDown } from "lucide-react";

const FilterTabs = () => {
  return (
    <>
      <button className="px-6 py-2.5 bg-yellow-500 text-black rounded-full font-medium hover:bg-yellow-400">
        Airdrops
      </button>
      <button className="px-6 py-2.5 bg-gray-800 rounded-full hover:bg-gray-700">
        Sign Up bonuses
      </button>
      <button className="px-6 py-2.5 bg-gray-800 rounded-full hover:bg-gray-700">
        Trade bonuses
      </button>
      <button className="px-6 py-2.5 bg-gray-800 rounded-full hover:bg-gray-700">
        Ends Soon
      </button>

      <div className="ml-auto flex items-center gap-4">
        <button className="px-4 py-2.5 bg-gray-800 rounded-lg flex items-center gap-2 hover:bg-gray-700">
          <MapPin size={18} />
          Worldwide
          <ChevronDown size={18} />
        </button>
        <button className="px-4 py-2.5 bg-gray-800 rounded-lg flex items-center gap-2 hover:bg-gray-700">
          <Calendar size={18} />
          Any end date
          <ChevronDown size={18} />
        </button>
      </div>
    </>
  );
};

export default FilterTabs;
