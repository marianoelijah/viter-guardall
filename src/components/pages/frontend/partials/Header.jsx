import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize theme from localStorage or system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Toggle dark mode class on <html> and update localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Shared classes for nav links
  const linkStyles = ({ isActive }) =>
    `relative py-1 transition-all duration-300 font-medium hover:text-blue-700 ${
      isActive ? "text-blue-700 md:after:w-full" : "text-gray-700 dark:text-gray-300 md:after:w-0"
    } md:after:content-[''] md:after:absolute md:after:left-0 md:after:bottom-0 md:after:h-[2px] md:after:bg-blue-700 md:after:transition-all md:after:duration-300 md:hover:after:w-full`;

  return (
    <header className="w-full bg-white dark:bg-[#121214] shadow-md sticky top-0 z-50 font-poppins transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center hover:opacity-90 transition">
          <img 
            src="/assets/image/Client Logo/logo.png"
            alt="Guard-All" 
            className="h-12 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-lg md:text-sm lg:text-xl">
          <NavLink to="/" className={linkStyles}>Home</NavLink>
          <NavLink to="/who-we-are" className={linkStyles}>Who We Are</NavLink>
          <NavLink to="/our-products" className={linkStyles}>Our Products</NavLink>
          <NavLink to="/our-clients" className={linkStyles}>Our Clients</NavLink>
        </nav>

        {/* Desktop CTA & Theme Switcher */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isDarkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} />}
          </button>
          
          <Link to="/contacts">
            <button className="bg-[#1e40af] text-white px-7 py-2.5 rounded shadow-sm font-semibold tracking-wide hover:bg-[#ff5f31] active:scale-95 transition-all duration-200">
              CONTACT US
            </button>
          </Link>
        </div>

        {/* Mobile Action Container */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isDarkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} />}
          </button>
          
          <button 
            className="text-gray-700 dark:text-gray-300 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={toggleMenu}
      />

      {/* Mobile Navigation Menu */}
      <nav className={`fixed top-0 right-0 h-full w-[70%] max-w-sm bg-white dark:bg-[#121214] shadow-xl transform transition-transform duration-300 ease-in-out z-[60] md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col p-8 space-y-6 text-xl h-full">
          <button onClick={toggleMenu} className="self-end mb-4 text-gray-700 dark:text-gray-300">
            <X size={32} />
          </button>
          
          <NavLink to="/" onClick={toggleMenu} className={linkStyles}>Home</NavLink>
          <NavLink to="/who-we-are" onClick={toggleMenu} className={linkStyles}>Who We Are</NavLink>
          <NavLink to="/our-products" onClick={toggleMenu} className={linkStyles}>Our Products</NavLink>
          <NavLink to="/our-clients" onClick={toggleMenu} className={linkStyles}>Our Clients</NavLink>
          
          <Link to="/contacts" onClick={toggleMenu} className="pt-4">
            <button className="w-full bg-[#1e40af] text-white py-3 rounded font-bold">
              CONTACT US
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;