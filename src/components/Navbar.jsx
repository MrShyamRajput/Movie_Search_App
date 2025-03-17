import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Import Search Icon

const Navbar = (props) => {
  return (
    <nav className="bg-blue-600 p-4 text-white fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between  items-center">
        <h1 className="text-xl font-bold">MovieApp</h1>

        <div className="relative w-[30%] flex align-middle justify-center items-center bg-white ">
          <input onChange={(e)=>props.setSearchMovie(e.target.value)}
            type="text"
            placeholder={props.searchMovie}
            className="px-3 py-1 text-black outline-none w-[80%] pr-10 ml-0 bg-white border-amber-50"
          />
          {/* Search Icon */}
          <button  className="flex ml-3 h-full w-14 items-center justify-center text-black bg-blue-400 rounded border" onClick={props.fetchMovieData}>Search</button>
        </div>

        {/* Navigation Links on the Right */}
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;