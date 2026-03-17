import React from 'react';
import { NavLink } from 'react-router-dom';

const OrbitaProducts = [
  {
    title: "OBT-2043MB Hotel Room Safe",
    description: "A scratch-resistant safe with manual buttons to unlock. Product Features: Technical Specifications: Size (mm) W420*H200*D370",
    image: "/src/assets/image/ORBITA IMG/OBT 2043MB.png",
    detailRoute: "/our-products/orbita/obt-2043mb"
  },
  {
    title: "OBT-4135MG Hotel Room Safe",
    description: "Made with cold-rolled steel is designed with an upward latch for easier safe access. Product Features: Technical Specifications: Size (mm) W410*H150*D350",
    image: "/src/assets/image/ORBITA IMG/OBT 4135MG.png",
    detailRoute: "/our-products/orbita/obt-4135mg"
  },
  {
    title: "OBT-2042MJ Hotel Room Safe",
    description: "A high-end safe with an  anti-theft, anti-mite, and anti-drill design. It also has an LCD display.  Product Features: Technical Specifications: Size (mm) W420*H200*D370",
    image: "/src/assets/image/ORBITA IMG/OBT 2042MJ.png",
    detailRoute: "/our-products/orbita/obt-2042mj-hotel-room"
  },
  {
    title: "OBT-2042MG Hotel Room Safe",
    description: "A scratch-resistant safe that can be fixated to walls and small spaces. It also has an LCD display.  Product Features: Technical Specifications: Size (mm) W420*H200*D370",
    image: "/src/assets/image/ORBITA IMG/OBT 2042MG.png",
    detailRoute: "/our-products/orbita/obt-2042mg-hotel-room-safe"
  },
  {
    title: "S4432G LCD Luxury Design Hotel Lock",
    description: "A sleek door lock and handle with an LCD screen to show lock status. Product Features: Technical Specifications: Model S4032 Power Consumption Static Load < 30 uA, Dynamic Load <",
    image: "/src/assets/image/ORBITA IMG/S4432G.png",
    detailRoute: "/our-products/orbita/s4432g-lcd-luxury-design"
  },
  {
    title: "S3076 Hotel RFID Lock",
    description: "A fashionable and streamlined hotel lock with a hidden keyhole. It can be accessed with an RFID/keycard. Product Description: The S3076 has a streamlined and fashionable design with a hidden",
    image: "/src/assets/image/ORBITA IMG/S3076.png",
    detailRoute: "/our-products/orbita/s3076-hotel-frid-lock"
  },
  {
    title: "P8030 Fully Automatic Smart Lock",
    description: "A sleek and high-end door handle and lock combined. It can recognize fingerprints, passwords, etc. Product Features: Technical Specifications: Material High strength zinc alloy / C Class 304 Stainless steel",
    image: "/src/assets/image/ORBITA IMG/P8030.png",
    detailRoute: "/our-products/orbita/p8030-fully-automatic-smart-lock"
  },
  {
    title: "P8010 Fingerprint Smart Lock",
    description: "This high-end device can recognize fingerprints for efficient locking or unlocking of doors.  Product Features: Technical Specifications: Material 304 stainless steel Static current ＜50μA Dynamic current ＜250mA Refusal Rate ≤0.15%",
    image: "/src/assets/image/ORBITA IMG/P8010.png",
    detailRoute: "/our-products/orbita/p8010-fingerprint-smart-lock"
  },
  {
    title: "E4041 LCD Smart Electronic Hotel Lock",
    description: "An elegant hotel lock with an LED screen that indicates lock status.  Product Features: Technical Specifications: External Panel dimensions L285mm x W75mm x H22mm Application Hotel, Resort, Apartment, Dormitory, Guesthouse",
    image: "/src/assets/image/ORBITA IMG/E4041.png",
    detailRoute: "/our-products/orbita/e4041-lcd-smart"
  },
   {
    title: "ER3092 Hotel Lock",
    description: "A waterproof and stainless hotel lock that utilizes RFID/ keycards for room entry.  Description: The Orbita Hotel Door Lock E3092 is made of grade 304 stainless steel with a PVC",
    image: "/src/assets/image/ORBITA IMG/ER3092.png",
    detailRoute: "/our-products/orbita/er3092-hotel-lock"
  },
  {
    title: "E3041 Hotel RFID Lock",
    description: "A waterproof and stainless hotel lock that utilizes RFID/ keycards for room entry.  Description: The Orbita Hotel Door Lock E3041 is made of grade 304 stainless steel with a PVC",
    image: "/src/assets/image/ORBITA IMG/E3041.png",
    detailRoute: "/our-products/orbita/e3041-hotel-rfid-lock"
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

const Orbita = () => {
  return (
    <div className="bg-[#e9eff6] min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* Changed from font-black to font-normal/medium */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-figtree text-[#0d3874] mb-6 tracking-tight">
             Hotel Locking Systems and Hotel Safes - Orbita
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
        </header>

        {/* Responsive Grid with improved spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {OrbitaProducts.map((item, idx) => (
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

export default Orbita;