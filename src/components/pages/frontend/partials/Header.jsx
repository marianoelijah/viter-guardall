import React from "react";


const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src="/src/assets/image/logo.png" alt="" className="h-10 w-[20rem]" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-700 text-bold text-large font-poppins">
          <a href="/" className="text-blue-700 border-b-2 border-blue-700 pb-1">
            Home
          </a>
          <a href="/who-we-are" className="hover:text-blue-700 transition">
            Who We Are
          </a>
          <a href="/our-products" className="hover:text-blue-700 transition">
            Our Products
          </a>
          <a href="/our-clients" className="hover:text-blue-700 transition"> 
            Our Clients
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-blue-800 text-white text-poppins px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
            CONTACT US
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
