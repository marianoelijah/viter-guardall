import React from 'react';
import { NavLink } from 'react-router-dom';

const EbsProducts = [
  {
    title: "EBS: AT MOBILE",
    description: "A mobile app which supports lone workers real-time that works best with Active Track. Product Features: ",
    image: "/src/assets/image/EBS IMG/AT MOBILE.png",
    detailRoute: "/our-products/ebs/at-mobile"
  },
  {
    title: "EBS: ACTIVE VIEW",
    description: "A cloud-based monitoring system to help maintain your people, property, and enhance your services. This product works best with Active Track. It’s designed for real-time monitoring and management of lone",
    image: "/src/assets/image/EBS IMG/ACTIVE VIEW.png",
    detailRoute: "/our-products/ebs/active-view"
  },
  {
    title: "EBS: ACTIVE TRACK",
    description: "An easy-to-carry device that combines GPS, RFID, and 4G for remote employee monitoring.  Product Description: ACTIVE TRACK 2 devices are a traditional solution for remote employee monitoring. It is equipped",
    image: "/src/assets/image/EBS IMG/ACTIVE TRACK.png",
    detailRoute: "/our-products/ebs/active-track"
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

const Foster = () => {
  return (
    <div className="bg-[#e9eff6] min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* Changed from font-black to font-normal/medium */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-figtree text-[#0d3874] mb-6 tracking-tight">
           Guard Tour Systems – EBS
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
        </header>

        {/* Responsive Grid with improved spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {EbsProducts.map((item, idx) => (
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

export default Foster;