import React from 'react';
import { NavLink } from 'react-router-dom';

const CommendProducts = [
  {
    title: "AFLS 10H SC W: Cabinet Speaker",
    description: "Designed specifically to provide reliable voice signal transmission under indoor conditions.  Product Description: The IP cabinet loudspeaker AFLS 10H SC W is designed specifically to provide reliable voice signal transmission",
    image: "/src/assets/image/COMMEND IMG/AFLC 10H SCW CABINET.png",
    detailRoute: "/our-products/commend/cabinet-speaker"
  },
  {
    title: "AFLS 10H PW: IP Projector Speaker",
    description: "IP projector loudspeaker, designed specifically for Public Address in buildings and halls. Product Description: The IP projector loudspeaker AFLS 10H PW is designed specifically to provide reliable voice signal transmission",
    image: "/src/assets/image/COMMEND IMG/AFLS10HPW PROJECTOR.png",
    detailRoute: "/our-products/commend/projector-speaker"
  },
  {
    title: " AFLS 10H HG: IP Horn Speaker",
    description: "A Public Address loudspeaker designed for rough, industrial conditions such as industrial sites and railway stations. Product Description: The IP horn loudspeaker AFLS 10H HG is designed specifically to provide",
    image: "/src/assets/image/COMMEND IMG/AFLS10H IP HORN.png",
    detailRoute: "/our-products/commend/horn-speaker"
  },
  {
    title: " AFLS 10H CW: IP Ceiling Speaker",
    description: "This fitted loudspeaker is designed for installation in drywall ceilings and buildings. Product Description: The AF 500H provides a high output range and various connections from a microphone input The",
    image: "/src/assets/image/COMMEND IMG/AFLS10HCW IP CEILING.png",
    detailRoute: "/our-products/commend/ceiling-speaker"
  },
  {
    title: " AF 500 – 500 Watt Amplifier",
    description: "A 500 Watt IP amplifier with metal housing, 1U. Product Description: The AF 500H provides a high output range and various connections from a microphone input to a relay output.",
    image: "/src/assets/image/COMMEND IMG/AF-500 WATT.png",
    detailRoute: "/our-products/commend/watt-amplifier-500"
  },
  {
    title: " AF 250 – 250 Watt Amplifier",
    description: "A 250 Watt IP amplifier with metal housing. Product Description: The AF 250H provides a high output range and various connections from a microphone input to a relay output. That’s",
    image: "/src/assets/image/COMMEND IMG/AF-250-HD-768x380.png",
    // typo corrected below so NavLink points at a defined route
    detailRoute: "/our-products/commend/watt-amplifier-250"
  },
  {
    title: " AF 125 – 125 Watt Amplifier",
    description: "A 125 Watt amplifier with metal housing. Product Description: The AF 125H provides a high output range and various connections from a microphone input to a relay output. That’s why",
    image: "/src/assets/image/COMMEND IMG/AF-125-HD-768x380.png",
    detailRoute: "/our-products/commend/watt-amplifier-125"
  },
  {
    title: " AF 50 – 50 Watt Amplifier",
    description: "A 50 Watt amplifier with polycarbonate housing. Product Description: The AF 50H provides a particularly high output range and various loudspeaker outputs. The amplifier is universally suitable for any size",
    image: "/src/assets/image/COMMEND IMG/AF-50-HD-768x380.png",
    detailRoute: "/our-products/commend/watt-amplifier-50"
  },
  {
    title: " AF 20  – 20 Watt Amplifier",
    description: "A 20 Watt amplifier with polycarbonate housing. Product Description: Their compact design makes the 20 Watt amplifiers ideal for a decentralized, cable saving installation next to PA loudspeakers and Intercom",
    image: "/src/assets/image/COMMEND IMG/AF-20-HD-768x380.png",
    detailRoute: "/our-products/commend/watt-amplifier-20"
  },
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
              <h3 className='text-xl font-poppins hover:text-green-500 transition-colors duration-300'>View Details</h3>
            </NavLink>
        </span>
    </div>
  </div>
);

const Commend = () => {
  return (
    <div className="bg-[#e9eff6] min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* Changed from font-black to font-normal/medium */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-figtree text-[#0d3874] mb-6 tracking-tight">
           Audio-Video Intercom & PA-BGM – Commend
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
        </header>

        {/* Responsive Grid with improved spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CommendProducts.map((item, idx) => (
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

export default Commend;