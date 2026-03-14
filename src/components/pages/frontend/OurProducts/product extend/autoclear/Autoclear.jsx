import React from 'react';
import { NavLink } from 'react-router-dom';

const AutoclearProducts = [
  {
    title: "HandWand",
    description: "A lightweight and ergonomic metal detector known for its fast and large scanning area.  Description: Search for metal weapons and contraband faster and more efficiently with the fully digital HandWand.",
    image: "/src/assets/image/AUTOCLEAR IMG/HandWand.png",
    detailRoute: "/our-products/autoclear/handwand"
  },
  {
    title: "100100TDVS-DV X-Ray Inspection System",
    description: "A dual-view, heavy-duty x-ray system designed for large object screening.  Description: The 100100TDVS-DV heavy-duty conveyorized direct transmission X-ray inspection system is designed for screening large objects, hold baggage and cargo",
    image: "/src/assets/image/AUTOCLEAR IMG/DV XRAY Inspection System.png",
    detailRoute: "/our-products/autoclear/100100tdvs-dv-inspection-system"
  },
  {
    title: "100100TDVS  X-Ray Inspection System",
    description: "This x-ray system is designed for large object screening such as cargos, detecting concealed weapons and explosives. Description: The 100100TDVS heavy-duty conveyorized direct transmission X-ray inspection system is designed for",
    image: "/src/assets/image/AUTOCLEAR IMG/XRAY Inspection System.png",
    detailRoute: "/our-products/autoclear/100100tdvs-inspection-system"
  },
  {
    title: "6040DVS-DV X-Ray Inspection System",
    description: "A dual-view x-ray system to provide complete inspection of items in a single scan. Description: The 6040DVS-DV X-ray scanner delivers a clear picture of hidden explosives, weapons, drugs and other",
    image: "/src/assets/image/AUTOCLEAR IMG/6040dvs dv XRAY.png",
    detailRoute: "/our-products/autoclear/6040dvs-dv-inspection-system"
  },
   {
    title: "6040DVS X-Ray Inspection System",
    description: "A compact x-ray system known for its speed and accurate detection of briefcases, backpacks, and similar-sized items. Description: The user-friendly 6040DVS delivers best-in-class speed and detection capability and makes the",
    image: "/src/assets/image/AUTOCLEAR IMG/6040DVS-HD.png",
    detailRoute: "/our-products/autoclear/6040dvs-inspection-system"
  },
  {
    title: " 5333DVS X-Ray Inspection System",
    description: "A fast and easy to operate x-ray system designed for small to mid-sized screening of items.  Description: Designed to screen small to mid-sized items for weapons, explosives, drugs and other",
    image: "/src/assets/image/AUTOCLEAR IMG/5333DVS-HD.png",
    detailRoute: "/our-products/autoclear/5333dvs-inspection-system"
  },
  {
    title: "N2300 Trace Detector",
    description: "A high sensitivity detector that pinpoints minute traces of illegal drugs and other amphetamine-type stimulants. Description: The N2300 narcotics trace detector pinpoints minute traces of cocaine, opiates, cannabis, hashish, methamphetamine,",
    image: "/src/assets/image/AUTOCLEAR IMG/N2300.png",
    detailRoute: "/our-products/autoclear/n2300-trace-detector"
  },
  {
    title: "E5000 Series Trace Detector",
    description: "A fast and reliable desktop system designed to analyze traces of explosives and narcotics.  Description: The 5000 Series desktop systems deliver fast, accurate and reliable analysis results when screening for",
    image: "/src/assets/image/AUTOCLEAR IMG/E5000-Series.png",
    detailRoute: "/our-products/autoclear/series-trace-detector"
  },
  {
    title: "E3500 Trace Detector",
    description: "This device uses chemiluminescent to detect homemade, military, and commercial explosives. Description: The E3500 explosives trace detector uses chemiluminescence to detect homemade, military and commercial explosives, including ICAO taggants, plastics,",
    image: "/src/assets/image/AUTOCLEAR IMG/E3500 Trace.jpg",
    detailRoute: "/our-products/autoclear/e3500-trace-detector"
  },
  {
    title: "CLX Compact Trace Detector",
    description: "Designed to be used with minimal training, this device can detect traces of military and home explosives. Description: CLX is the latest advanced trace detection system for military and home",
    image: "/src/assets/image/AUTOCLEAR IMG/CLX Compact.png",
    detailRoute: "/our-products/autoclear/compact-tree-detector"
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

const Autoclear = () => {
  return (
    <div className="bg-[#e9eff6] min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* Changed from font-black to font-normal/medium */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-figtree text-[#0d3874] mb-6 tracking-tight">
           CCTVs – Auto Clear
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
        </header>

        {/* Responsive Grid with improved spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {AutoclearProducts.map((item, idx) => (
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

export default Autoclear;