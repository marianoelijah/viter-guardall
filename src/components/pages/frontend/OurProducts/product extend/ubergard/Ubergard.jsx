import React from 'react';
import { NavLink } from 'react-router-dom';

const uberProducts = [
  {
    title: "iKLAS Software CCMS",
    description: "A management platform and access control for keys management. The CCMS HUB provides a single management platform for planning, intelligent monitoring, and efficient operation.",
    image: "/src/assets/image/UBERGARD IMG/Software-CCMS.png",
    detailRoute: "/our-products/ubergard/software-ccms"
  },
  {
    title: "iKLAS Keys Management System",
    description: "An intelligent Key Lock Application System (iKLAS) that protects and tracks keys to ensure they are properly returned and managed securely.",
    image: "/src/assets/image/UBERGARD IMG/IKLAS KEYS MANAGEMENT.png",
    detailRoute: "/our-products/ubergard/keys-management-system"
  },
  {
    title: "iKLAS Gen 5 Touchscreen",
    description: "A 7″ Colour Touchscreen incorporating a contactless card reader and RFID key-tag reader designed to complement the iKLAS Key Management System.",
    image: "/src/assets/image/UBERGARD IMG/IKLAS GEN 5 TOUCHSCREEN.png",
    detailRoute: "/our-products/ubergard/gen5-touchscreen"
  },
  {
    title: "TBS 3D AIR 22",
    description: "A unique touchless biometric terminal and the world’s first to introduce 3D finger-scanning. Supports Power-over-Ethernet for seamless integration.",
    image: "/src/assets/image/UBERGARD IMG/TBS-AIR-22.png",
    detailRoute: "/our-products/ubergard/3d-air-22"
  },
  {
    title: "TBS AIR 12",
    description: "A touchless biometric scanner featuring advanced 3D finger-scanning technology for fast-throughput identification and superior user experience.",
    image: "/src/assets/image/UBERGARD IMG/TBS-AIR-12.png",
    detailRoute: "/our-products/ubergard/air-12"
  },
  {
    title: "TBS 3D FLY",
    description: "A true on-the-fly experience. 3D FLY delivers high-speed identification for fast-throughput environments through a smooth and seamless hand-scanning process.",
    image: "/src/assets/image/UBERGARD IMG/TBS 3D-Fly.png",
    detailRoute: "/our-products/ubergard/3d-fly"
  }
];

const ProductCard = ({ title, description, image, detailRoute }) => (
  <div className="group bg-white border border-gray-200 rounded-xl p-5 flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
    {/* Enhanced Image Container */}
    <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-5 flex items-center justify-center h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110" 
      />
    </div>
    
    <div className="flex-grow">
      {/* Clean, Non-bold Typography */}
      <h3 className="text-[#1a365d] font-semibold text-sm uppercase mb-3 leading-tight tracking-wide min-h-[2.5rem]">
        {title}
      </h3>
      <p className="text-gray-600 text-xl leading-relaxed">
        {description}
      </p>
        <span className='text-classic block mt-12 text-gray-500 text-sm tracking-widest'>
            <NavLink to={detailRoute} className="text-blue-500 hover:underline mt-2 block">
              <h3 className='text-xl font-poppins hover:text-green-500 transition-colors duration-300'>View Details</h3>
            </NavLink>
        </span>
    </div>
  </div>
);

const Ubergard = () => {
  return (
    <div className="bg-[#e9eff6] min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* Heading weight adjusted to Normal/Medium */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-figtree text-[#0d3874] mb-6 tracking-tight">
            Access Control System – Ubergard
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
        </header>

        {/* Responsive Grid with improved spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {uberProducts.map((item, idx) => (
            <ProductCard
             key={idx}
              title={item.title}
              description={item.description}
              image={item.image}
              detailRoute={item.detailRoute}
             />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Ubergard;