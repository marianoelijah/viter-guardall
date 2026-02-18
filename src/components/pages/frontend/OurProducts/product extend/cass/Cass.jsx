import React from 'react';

const CassProducts = [
  {
    title: "CP-020X Gate Barrier",
    description: "A gate barrier that can help deny entry or exit of unauthorized vehicles within your property.  Description: Securing access is one of the most important concerns for any commercial or",
    image: "/src/assets/image/CASS IMG/CO-020X.jpg"
  },
  {
    title: "CP-555 Gen 2  Entry Station/ Ticket Dispenser and CP-655 Gen 2 Exit Station/ Token Acceptor",
    description: "A chipcoin-based parking management system that helps control traffic within your property. Description: One of the best ways to solve parking related issues and to improve motorists’ experience is the",
    image: "/src/assets/image/CASS IMG/CP-555.png"
  },
  {
    title: "CP-505 Gen 2 Entry Station/ Ticket Dispenser and CP-605 Gen 2 Exit Station/ Ticket Scanner",
    description: "A parking management system that prints/releases and scans tickets for efficient entry and exit. Description: CASS Parking offers a completely new series of parking management system products that helps to",
    image: "/src/assets/image/CASS IMG/CP-505.png"
  }
];

const ProductCard = ({ title, description, image }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer">
    {/* Enhanced Image Container Size */}
    <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-5 flex items-center justify-center h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-110" 
      />
    </div>
    <div className="flex-grow">
      <h3 className="text-[#1a365d] font-semibold text-lg uppercase mb-3 leading-tight tracking-wide">
        {title}
      </h3>
      <p className="text-gray-600 text-xl leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const Paradox = () => {
  return (
    <div className="bg-[#e9eff6] min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* Changed from font-black to font-normal/medium */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-medium text-[#0d3874] mb-6 tracking-tight">
             Parking Management / Parking Guidance System - CASS
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
        </header>

        {/* Responsive Grid with improved spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CassProducts.map((p, idx) => (
            <ProductCard key={idx} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Paradox;