import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa"; // Import Icons

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 text-white fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">MovieApp</h1>

        {/* Search Bar - Kept Separate */}
        <div className="relative w-full md:w-[30%] flex justify-center items-center bg-white md:mt-0">
          <input
            onChange={(e) => props.setSearchMovie(e.target.value)}
            type="text"
            placeholder={props.searchMovie}
            className="px-3 py-1 text-black outline-none w-[80%] pr-10 bg-white border border-gray-200 rounded-l-md"
          />
          <button
            className="px-4 py-1 text-white bg-blue-500 hover:bg-blue-700 rounded-r-md"
            onClick={props.fetchMovieData}
          >
            <FaSearch />
          </button>
        </div>

        {/* Right Side - Hamburger Menu */}
        <div className="md:hidden ml-4">
          <button className="text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Navigation Links (Dropdown in Mobile) */}
      <div
        className={`md:flex space-x-4 absolute md:static w-full left-0 bg-blue-600 md:bg-transparent transition-all duration-300 ease-in-out ${
          isOpen ? "top-[60px] flex flex-col items-center py-3" : "hidden"
        } md:flex-row md:py-0`}
      >
        <Link to="/" className="hover:text-gray-300 block py-2 md:py-0">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-300 block py-2 md:py-0">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
