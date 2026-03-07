import React from 'react';
import { NavLink } from 'react-router-dom';

const AlarmProducts = [
  {
    title: "ADC-AC-ET Access Control Readers",
    description: "A series of multi-technology, contactless access control to properly secure your properties or business. Product Description: Alarm.com’s Smarter Access Control is a powerful, easy-to-use solution for commercial properties that seamlessly",
    image: "/src/assets/image/ALARM IMG/ADC-AC-ET ACCESS.jpg",
    detailRoute: "/our-products/alarm/access-control-readers"
  },
  {
    title: "ADC-AC-CARD and ADC-AC-FOB Smart Credentials",
    description: "Secure your properties or business through smart cards and keyfobs designed to work with Alarm.com readers. Product Description: Alarm.com’s Smarter Access Control is a powerful, easy-to-use solution for commercial properties",
    image: "/src/assets/image/ALARM IMG/ADC-AC-CARD.png",
    detailRoute: "/our-products/alarm/smart-credentials"
  },
  {
    title: "ADC-AC-X1100-4PSE  Four Door Controller and Power Kit",
    description: "Secure your expansion modules and door controllers in this secured kit. Product Description: Alarm.com’s Smarter Access Control is a powerful, easy-to-use solution for commercial properties that seamlessly integrates with the",
    image: "/src/assets/image/ALARM IMG/ADC-AC-X1100-4PSE.png",
    detailRoute: "/our-products/alarm/four-door-controller"
  },
  {
    title: "ADC-AC-X1100 Door Controller",
    description: "This device supports two card readers with four relay outputs and four programmable inputs. Product Description: Alarm.com’s Smarter Access Control is a powerful, easy-to-use solution for commercial properties that seamlessly",
    image: "/src/assets/image/ALARM IMG/ADC-AC-X1100.png",
    detailRoute: "/our-products/alarm/door-controller"
  },
  {
    title: "ADC-AC-X300 Output Control Expansion Module",
    description: "Designed to work with X1100 Door Controllers, this expansion module adds 12 additional outputs and two additional outputs. Product Description: Alarm.com’s Smarter Access Control is a powerful, easy-to-use solution for",
    image: "/src/assets/image/ALARM IMG/ADC-AC-X300.png",
    detailRoute: "/our-products/alarm/output-control-expansion"
  },
  {
    title: "ADC-AC-X200 Input Monitor Expansion Module",
    description: "Designed to work with X1100 Door Controllers, this expansion module adds support for 16 additional inputs and two relay outputs. Product Description: Alarm.com’s Smarter Access Control is a powerful, easy-to-use",
    image: "/src/assets/image/ALARM IMG/ADC-AC-X200.png",
    detailRoute: "/our-products/alarm/input-monitor-expansion"
  },
  {
    title: "ADC-AC-X100 Two Reader Expansion Module",
    description: "Designed to work with X1100 Door Controllers, this expansion module adds support for two additional readers and four programmable inputs. Product Description: Alarm.com’s Smarter Access Control is a powerful, easy-to-use",
    image: "/src/assets/image/ALARM IMG/ADC-AC-X100 TWO.jpg",
    detailRoute: "/our-products/alarm/two-reader-expansion"
  }
];

const ProductCard = ({ title, description, image, detailRoute }) => (
  <div className="group bg-white border border-gray-200 rounded-xl p-4 flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:border-blue-300">
    <div className="bg-white rounded-lg p-4 mb-4 flex items-center justify-center h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110" 
      />
    </div>

    <div className="flex-grow px-2">
      <h3 className="text-[#1a365d] font-bold text-sm uppercase mb-3 leading-tight group-hover:text-blue-600 transition-colors">
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

const Alarm = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Hardware Collection</span> */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-figtree text-[#0d3874] mb-6 tracking-tight">
            Access Control System - Alarm.com
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </header>
        
        {/* Improved Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {AlarmProducts.map((item, idx) => (
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

export default Alarm;