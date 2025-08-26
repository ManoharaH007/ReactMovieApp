import React from 'react';
import logo from '../assets/logo.jpeg';
import { NavLink } from 'react-router-dom';
import user from '../assets/user.jpeg';
import { CiSearch } from "react-icons/ci";

function Header() {
  const navigation = [
    { label: "Tv Show", to: "/tv" },
    { label: "Movies", to: "/movie" },
  ];

  return (
    <header className="fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75">
      <div className="container mx-auto px-3 flex items-center justify-between h-full">
        
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" width={100} />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-end gap-5 mr-auto ml-4">
          {navigation.map((nav, index) => (
            <NavLink
              key={index}
              to={nav.to}
              className={({ isActive }) =>
                `px-2 hover:text-yellow-500 ${isActive ? "bg-orange-500 font-semibold" : ""}`
              }
            >
              {nav.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side - Search + User */}
        <div className="ml-auto flex items-center gap-4">
           <form  className='flex items-center'>
            <input type='text' placeholder='seach here..'
            className='bg-transparent px-4 py-1 outline-none border-none'/>
            <button className="text-2xl cursor-pointer hover:text-yellow-500 ml-4">
                <CiSearch />
            </button>
            </form>
         

          {/* User Profile */}
          <div>
            <img
              src={user}
              alt="user"
              className="w-10 h-10 rounded-full object-cover cursor-pointer transition-all"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
