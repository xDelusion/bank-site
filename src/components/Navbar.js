import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-orange-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <Link to="/">
              <p className="font-semibold text-black">Home</p>
            </Link>
          </div>
          <div className="ml-10 flex items-baseline space-x-4">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            <Link to="/profile">
              <img
                className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src="https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg"
                alt="Bordered avatar"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
