import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Header = ({
  handleTitleSearch,
  handleLocationSearch,
  handleCheckboxChange,
}) => {
  return (
    <div>
      <header className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex justify-center items-center text-white">
          <FaSearch />
          <input
            type="text"
            placeholder="Filter by title, companies, expertise..."
            className="mr-2 p-2 rounded border border-gray-300 w-96 text-black"
            onChange={handleTitleSearch}
          />
        </div>
        <div className="flex justify-center items-center text-white">
          <FaLocationDot />
          <input
            type="text"
            placeholder="Filter by location"
            className="mr-2 p-2 rounded border border-gray-300 w-80 text-black"
            onChange={handleLocationSearch}
          />
        </div>
        <div className="flex justify-center items-center">
          <label className="flex items-center text-white mr-2">
            <input
              type="checkbox"
              className="mr-1"
              onChange={handleCheckboxChange}
            />
            Full Time Only
          </label>
          <button className="bg-blue-500 text-white p-2 rounded">Search</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
