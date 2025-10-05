import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const CategoryDropdown = ({ categories, selectedCategory, setSelectedCategory }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-6 py-2.5 bg-gray-800 rounded-full flex items-center gap-2 hover:bg-gray-700"
      >
        {selectedCategory}
        <ChevronDown size={18} />
      </button>

      {open && (
        <div className="absolute top-full mt-2 bg-gray-900 border border-gray-700 rounded-lg py-2 min-w-[200px] z-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpen(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-800 transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
