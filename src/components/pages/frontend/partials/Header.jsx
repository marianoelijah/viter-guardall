import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  // Shared classes for nav links to keep code DRY
  const linkStyles = ({ isActive }) => 
    `relative py-1 transition-all duration-300 font-medium hover:text-blue-700 ${
      isActive ? "text-blue-700 after:w-full" : "text-gray-700 after:w-0"
    } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center hover:opacity-90 transition">
          <img 
            src="/src/assets/image/logo.png" 
            alt="Guard-All Electronic Security Systems" 
            className="h-15 w-[19rem]" // Changed w-[20rem] to auto to prevent stretching
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-xl font-poppins">
          <NavLink to="/" className={linkStyles}>
            Home
          </NavLink>
          <NavLink to="/who-we-are" className={linkStyles}>
            Who We Are
          </NavLink>
          <NavLink to="/our-products" className={linkStyles}>
            Our Products
          </NavLink>
          <NavLink to="/our-clients" className={linkStyles}> 
            Our Clients
          </NavLink>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/contacts">
            <button className="bg-[#1e40af] text-white px-7 py-2.5 rounded shadow-sm font-semibold tracking-wide hover:bg-red-500 active:scale-95 transition-all duration-200">
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;