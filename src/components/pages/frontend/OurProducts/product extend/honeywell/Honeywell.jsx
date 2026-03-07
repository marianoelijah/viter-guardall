import React from 'react';
import { NavLink } from 'react-router-dom';


const products = [
  {
    title: "HON-FIN4000AC-100K: COMPACT FINGERPRINT DEVICE",
    description: "A slender, compact fingerprint device that can provide a high level of security for your property and can effectively identify fake fingerprints.",
    image: "/src/assets/image/HONEYWELL IMG/HON-FIN4000AC-100K.jpg",
    detailRoute: "/our-products/honeywell/fin4000ac"
  },
  {
    title: "HON-FIN4000MIK-100K: COMPACT FINGERPRINT DEVICE",
    description: "A standard fingerprint device with touch keypads and color LCD displays. It can accurately identify wet and dry fingerprints.",
    image: "/src/assets/image/HONEYWELL IMG/HON-FIN4000MIK-100K-COMPACT.jpg",
    detailRoute: "/our-products/honeywell/fin4000mik"
  },
  {
    title: "OMNIPROX: PROXIMITY CARD READER",
    description: "A sleek, compact proximity reader that has a reliable and consistent read range. It has added security to avoid tampering and system compromise.",
    image: "/src/assets/image/HONEYWELL IMG/OMNIPROX.jpg",
    detailRoute: "/our-products/honeywell/omniprox"
  },
  {
    title: "LOBBYWORKS™ CREDENTIALS: CONTACTLESS SMART CARD",
    description: "A platform that enhances your perimeter security by providing a simple and effective way to register, badge, and track visitors.",
    image: "/src/assets/image/HONEYWELL IMG/LOBBYWORKS CREDENTIALS CONTACTLESS.jpg",
    detailRoute: "/our-products/honeywell/lobbyworks-credentials"
  },
  {
    title: "Pro-Watch™ Integrated Security Suite",
    description: "A comprehensive security system that helps secure people, property, and assets. It can monitor access controls, video, and intrusion.",
    image: "/src/assets/image/HONEYWELL IMG/PRO-WATCH INTEGRATED.jpg",
    detailRoute: "/our-products/honeywell/pro-watch"
  },
  {
    title: "LobbyWorks™ Visitor Management Systems",
    description: "A platform that enhances your perimeter security by providing a simple and effective way to register, badge, and track visitors.",
    image: "/src/assets/image/HONEYWELL IMG/LOBBYWORKS-VISITOR.jpg",
    detailRoute: "/our-products/honeywell/lobbyworks-visitor"
  },
  {
    title: "OmniProx™ Credentials: Smart Card Readers",
    description: "A contactless smart card reader that offers superb reliability, consistent read range, and ease of installation. Supports biometric features.",
    image: "/src/assets/image/HONEYWELL IMG/OMNIPROX CREDENTIALS.jpg",
    detailRoute: "/our-products/honeywell/omniprox-credentials"
  },
  {
    title: "OmniAssure™ 2.0 XS Multismart Readers",
    description: "Provides a flexible range of access control readers for reading high frequency and low frequency credentials.",
    image: "/src/assets/image/HONEYWELL IMG/OMNIASSURE.jpg",
    detailRoute: "/our-products/honeywell/omniassure"
  },
  {
    title: "OmniProx™ Credentials: Proximity Card Reader",
    description: "A sleek, compact proximity reader that has a reliable and consistent read range with added security features.",
    image: "/src/assets/image/HONEYWELL IMG/OMNIPROX.jpg",
    detailRoute: "/our-products/honeywell/omniprox-proximity"
  },
  {
    title: "DR4200 Series: Digital Proximity Readers",
    description: "A cost-effective and high-performing proximity access that offers the longest ranges available. It has a fast read time.",
    image: "/src/assets/image/HONEYWELL IMG/DIGIREADER-DR4200-SERIES.jpg",
    detailRoute: "/our-products/honeywell/dr4200-series"
  },
  {
    title: "HON-FIN400MIK-100K: Compact Fingerprint Device",
    description: "A standard fingerprint device with touch keypads and color LCD displays. It can accurately identify wet and dry fingerprints.",
    image: "/src/assets/image/HONEYWELL IMG/HON-FIN400MIK-100K.jpg",
    detailRoute: "/our-products/honeywell/fin400mik"
  },
  {
    title: "HON-FIN400AC-100K: Compact Fingerprint Device",
    description: "A slender, compact fingerprint device that can provide a high level of security for your property and can effectively identify fake fingerprints.",
    image: "/src/assets/image/HONEYWELL IMG/HON-FIN4000AC-100K-COMPACT-FINGERPRINT.jpg",
    detailRoute: "/our-products/honeywell/fin400ac"
  },
  {
    title: "PW6101 Series: Single Door PoE Intelligent Controller",
    description: "A high-performance and cost-effective controller-reader module capable of securing single door access. It is configurable for either Wiegand or OSDP.",
    image: "/src/assets/image/HONEYWELL IMG/PW-6000 SERIES.jpg",
    detailRoute: "/our-products/honeywell/pw6101-series"
  },
  {
    title: "PW-Series Access Modules",
    description: "The PW-Series family of access control modules are controlled by and connected to the intelligent control module. The access modules have been designed to allow for a modular customizable solution.",
    image: "/src/assets/image/HONEYWELL IMG/PW-SERIES.jpg",
    detailRoute: "/our-products/honeywell/pw-series"
  },
  {
    title: "PRO3200 Professional Series Access Modules",
    description: "Designed to work without a PC, the PRO3200 series is a customizable access control that provides real-time processing for connected I/O interfaces.",
    image: "/src/assets/image/HONEYWELL IMG/PRO3200.jpg",
    detailRoute: "/our-products/honeywell/pro3200-series"
  },
  {
    title: "OmniProx™ Credentials: Contactless Proximity Card",
    description: "An easy-to-carry proximity card that utilizes RFID technology. It has a high contactless range and is designed to work with OmniProx™ readers.",
    image: "/src/assets/image/HONEYWELL IMG/OMNIPROX-ISO-CARD.jpg",
    detailRoute: "/our-products/honeywell/contactless-proximity"
  },
  {
    title: "OmniClass™ Credentials: Contactless Smart Card",
    description: "A laminated PVC card that utilizes RFID technology and has an excellent contactless range. It is designed to work with OmniClass™ readers. ",
    image: "/src/assets/image/HONEYWELL IMG/OMNICLASS-CREDENTIALS.jpg",
    detailRoute: "/our-products/honeywell/contactless-smart"
  },
  {
    title: "MF-01 Mifare Proximity Cards",
    description: "A contactless access control fit for student and employee IDs. It also helps in attendance management with Honeywell’s Mifare® technology.",
    image: "/src/assets/image/HONEYWELL IMG/MF-01.jpg",
    detailRoute: "/our-products/honeywell/mifare"
  }
];

const ProductCard = ({ title, description, image, detailRoute }) => (
  <div className="group bg-white border border-gray-200 rounded-xl p-5 flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
    {/* Enhanced Image Container */}
    <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-5 flex items-center justify-center h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" 
      />
    </div>
    
    {/* Text Content */}
    <div className="flex-grow">
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

const Honeywell = () => {
  
  return (
    <div className='bg-[#f0f4f8] min-h-screen px-6 lg:px-12'> 
      <div className="max-w-7xl mx-auto">
      {/* Main Header - font-normal for a cleaner look */}
      <header className="text-center py-16 px-6 md:px-10 lg:px-20">
        <h2 className="text-lg md:text-5xl lg:text-5xl font-figtree text-[#0d3874] mb-6 tracking-tight">
          Access Control System - Honeywell
        </h2>
        <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
      </header>
       
       {/* Improved Grid Spacing */}
      <div className="bg-[#e9eff6] py-16 px-4 md:px-10 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Grid Layout - Standardized gap and size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item, idx) => (
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
    </div>
    </div>
  );

};

export default Honeywell;