import React from 'react';
import { NavLink } from 'react-router-dom';

const DeltaProducts = [
  {
    title: "DSC HD300 Wedge Barricade",
    description: "Designed to stop large vehicles at a high-speed, this barrier can be installed with a fully electronic or hydraulic control unit.  Description:The HD300 barrier, available with either a fully electric",
    image: "/src/assets/image/DELTA IMG/DSC HD300.jpg",
    detailRoute: "/our-products/delta/dsc-hd300-wedge-barricade"
  },
  {
    title: "DSC 2000 Modular Wedge Barricade",
    description: "Designed for remote locations, this barricade can be easily transported while still protecting areas. Description:Because each module weighs only 1100 pounds (500 kg) and is easy to install, the DSC2000",
    image: "/src/assets/image/DELTA IMG/DSC 2000.jpeg",
    detailRoute: "/our-products/delta/dsc-2000-modular-wedge-barricade"
  },
  {
    title: "DSC 550 Open Frame Wedge Barricade",
    description: "An open frame barricade ideal for underground utilities, buried pipes, and other obstructions. Description:The new Delta DSC550 open frame barricade marks the latest accomplishment from Delta Scientific Corporation. The DSC550’s",
    image: "/src/assets/image/DELTA IMG/DSC 550.jpg",
    detailRoute: "/our-products/delta/dsc-550-open-frame-wedge-barricade"
  },
  {
    title: "DSC 501 Wedge Barricade",
    description: "A high-security barricade suitable for high water table locations and areas with corrosive soils. Description:This high security barricade was designed for the U.S. Navy and has also been selected for",
    image: "/src/assets/image/DELTA IMG/DSC 501.jpg",
    detailRoute: "/our-products/delta/dsc-501-wedge-barricade"
  },
  {
    title: "DSC 800 High Security Bollard",
    description: "Suitable for high-security areas, this bollard can help control vehicles while also having a design to fit its environment.  Description:The DSC800 crash rated bollards can be a hydraulic, pneumatic, manual",
    image: "/src/assets/image/DELTA IMG/DSC 800.jpg",
    detailRoute: "/our-products/delta/dsc-800-high-seurity-bollard"
  },
  {
    title: "DSC 720 High Security Bollard",
    description: "Designed for high-security properties, this bollard can stop and destroy much larger vehicles at high velocities.  Description:The DSC720 is Delta’s highest crash rated bollard tested with a 15,000 lb vehicle",
    image: "/src/assets/image/DELTA IMG/DSC 720.png",
    detailRoute: "/our-products/delta/dsc-720-high-security-bollard"
  },
  {
    title: "DSC 305 Medium Security Chrome Bollard",
    description: "Made with steel, these bollards are designed to control entry and exit of vehicles in restricted areas. Description:The Model DSC305-PE Bollard System (“DSC305”) is designed to provide positive control of",
    image: "/src/assets/image/DELTA IMG/DSC 305.jpg",
    detailRoute: "/our-products/delta/dsc-305-medium-security"
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

const Delta = () => {
  return (
    <div className="bg-[#e9eff6] min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* Changed from font-black to font-normal/medium */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-figtree text-[#0d3874] mb-6 tracking-tight">
             Vehicle Barrier System and Pedestrian Barriers – Delta
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
        </header>

        {/* Responsive Grid with improved spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DeltaProducts.map((item, idx) => (
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

export default Delta;