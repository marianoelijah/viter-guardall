import React from 'react';
import { NavLink } from 'react-router-dom';

const FaacProducts = [
  {
    title: "JS80 High Security Steel Bollards",
    description: "Made of high-strength steel certified to stop cars and trucks.  Description:JS bollards are provided with protective covers mDure® which, unlike other bollards on the market, allows the bollard to be",
    image: "/src/assets/image/FAAC IMG/JS80.jpg",
    detailRoute: "/our-products/faac/js80"
  },
  {
    title: "JS48 High Security Bollards",
    description: "Made of high-strength steel certified to stop cars and trucks. Description:JS bollards are provided with protective covers mDure® which, unlike other bollards on the market, allows the bollard to be",
    image: "/src/assets/image/FAAC IMG/JS48.jpg",
    detailRoute: "/our-products/faac/js48"
  },
  {
    title: "J275 Automatic Bollards",
    description: "Designed to help regulate vehicular access to commercial, industrial, and urban restricted areas Description:The Automatic retractable traffic bollard J275 HA V2 is recommended for all areas when many daily transits",
    image: "/src/assets/image/FAAC IMG/J275.jpg",
    detailRoute: "/our-products/faac/j275"
  },
  {
    title: "J200 Automatic Traffic Bollards",
    description: "A series of bollards designed to help regulate vehicle access to residential areas Description:The Automatic retractable traffic bollard FAAC J200 HA is particularly suitable to regulate vehicle traffic in residential",
    image: "/src/assets/image/FAAC IMG/J200.jpg",
    detailRoute: "/our-products/faac/j200"
  }
];

const ProductCard = ({ title, description, image, detailRoute }) => (
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
      <span className='text-classic block mt-12 text-gray-500 text-sm tracking-widest'>
            <NavLink to={detailRoute} className="text-blue-500 hover:underline mt-2 block">
              <h3 className='text-xl font-poppins hover:text-green-500 transition-colors duration-300'>
                View Details
              </h3>
            </NavLink>
        </span>
    </div>
  </div>
);

const Faac = () => {
  return (
    <div className="bg-[#e9eff6] min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* Changed from font-black to font-normal/medium */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-figtree text-[#0d3874] mb-6 tracking-tight">
             Vehicle Barrier System and Pedestrian Barriers – FAAC
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
        </header>

        {/* Responsive Grid with improved spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FaacProducts.map((item, idx) => (
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

export default Faac;