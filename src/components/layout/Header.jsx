import React from "react";
import { NavLink } from "react-router-dom";
import { FaCoins } from 'react-icons/fa'; 

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex flex-row justify-around items-center p-4 bg-gray-800 z-50">
      <NavLink to='/'>
        <div className="flex flex-row justify-center items-center md:gap-4 gap-2">
          <FaCoins className="md:w-6 md:h-6 h-4 w-4 text-yellow-500" />
          <span className="md:text-2xl text-lg font-semibold text-white">ProjectManager</span>
        </div>
      </NavLink>
      <ul className="flex flex-row gap-2 text-white">
        <li>
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => isActive ? "p-2 bg-white text-black rounded" : "p-2"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/newproject" 
            className={({ isActive }) => isActive ? "p-2 bg-white text-black rounded" : "p-2"}
          >
            Add +
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? "p-2 bg-white text-black rounded" : "p-2"}
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
