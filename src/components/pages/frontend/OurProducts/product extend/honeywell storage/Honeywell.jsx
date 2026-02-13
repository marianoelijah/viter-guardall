import React from 'react';

const products = [
  {
    title: "HON-FIN4000AC-100K: COMPACT FINGERPRINT DEVICE",
    description: "A slender, compact fingerprint device that can provide a high level of security for your property and can effectively identify fake fingerprints.",
    image: "/src/assets/image/HONEYWELL IMG/HON-FIN4000AC-100K.jpg"
  },
  {
    title: "HON-FIN4000MIK-100K: COMPACT FINGERPRINT DEVICE",
    description: "A standard fingerprint device with touch keypads and color LCD displays. It can accurately identify wet and dry fingerprints.",
    image: "/src/assets/image/HONEYWELL IMG/HON-FIN4000MIK-100K-COMPACT.jpg"
  },
  {
    title: "OMNIPROX: PROXIMITY CARD READER",
    description: "A sleek, compact proximity reader that has a reliable and consistent read range. It has added security to avoid tampering and system compromise.",
    image: "/src/assets/image/HONEYWELL IMG/OMNIPROX.jpg"
  },
  {
    title: "LOBBYWORKS™ CREDENTIALS: CONTACTLESS SMART CARD",
    description: "A platform that enhances your perimeter security by providing a simple and effective way to register, badge, and track visitors.",
    image: "/src/assets/image/HONEYWELL IMG/LOBBYWORKS CREDENTIALS CONTACTLESS.jpg"
  },
  {
    title: "Pro-Watch™ Integrated Security Suite",
    description: "A comprehensive security system that helps secure people, property, and assets. It can monitor access controls, video, and intrusion.",
    image: "/src/assets/image/HONEYWELL IMG/PRO-WATCH INTEGRATED.jpg"
  },
  {
    title: "LobbyWorks™ Visitor Management Systems",
    description: "A platform that enhances your perimeter security by providing a simple and effective way to register, badge, and track visitors.",
    image: "/src/assets/image/HONEYWELL IMG/LOBBYWORKS-VISITOR.jpg"
  },
  {
    title: "OmniProx™ Credentials: Smart Card Readers",
    description: "A contactless smart card reader that offers superb reliability, consistent read range, and ease of installation. Supports biometric features.",
    image: "/src/assets/image/HONEYWELL IMG/OMNIPROX CREDENTIALS.jpg"
  },
  {
    title: "OmniAssure™ 2.0 XS Multismart Readers",
    description: "Provides a flexible range of access control readers for reading high frequency and low frequency credentials.",
    image: "/src/assets/image/HONEYWELL IMG/OMNIASSURE.jpg"
  },
  {
    title: "OmniProx™ Credentials: Proximity Card Reader",
    description: "A sleek, compact proximity reader that has a reliable and consistent read range with added security features.",
    image: "/src/assets/image/HONEYWELL IMG/OMNIPROX.jpg"
  },
  {
    title: "DR4200 Series: Digital Proximity Readers",
    description: "A cost-effective and high-performing proximity access that offers the longest ranges available. It has a fast read time.",
    image: "/src/assets/image/HONEYWELL IMG/DIGIREADER-DR4200-SERIES.jpg"
  },
  {
    title: "HON-FIN400MIK-100K: Compact Fingerprint Device",
    description: "A standard fingerprint device with touch keypads and color LCD displays. It can accurately identify wet and dry fingerprints.",
    image: "/src/assets/image/HONEYWELL IMG/HON-FIN400MIK-100K.jpg"
  },
  {
    title: "HON-FIN400AC-100K: Compact Fingerprint Device",
    description: "A slender, compact fingerprint device that can provide a high level of security for your property and can effectively identify fake fingerprints.",
    image: "/src/assets/image/HONEYWELL IMG/HON-FIN4000AC-100K-COMPACT-FINGERPRINT.jpg"
  },
  {
    title: "PW6101 Series: Single Door PoE Intelligent Controller",
    description: "A high-performance and cost-effective controller-reader module capable of securing single door access. It is configurable for either Wiegand or OSDP.",
    image: "/src/assets/image/HONEYWELL IMG/PW-6000 SERIES.jpg"
  },
  {
    title: "PW-Series Access Modules",
    description: "The PW-Series family of access control modules are controlled by and connected to the intelligent control module. The access modules have been designed to allow for a modular customizable solution.",
    image: "/src/assets/image/HONEYWELL IMG/PW-SERIES.jpg"
  },
  {
    title: "PRO3200 Professional Series Access Modules",
    description: "Designed to work without a PC, the PRO3200 series is a customizable access control that provides real-time processing for connected I/O interfaces.",
    image: "/src/assets/image/HONEYWELL IMG/PRO3200.jpg"
  },
  {
    title: "OmniProx™ Credentials: Contactless Proximity Card",
    description: "An easy-to-carry proximity card that utilizes RFID technology. It has a high contactless range and is designed to work with OmniProx™ readers.",
    image: "/src/assets/image/HONEYWELL IMG/OMNIPROX-ISO-CARD.jpg"
  },
   {
    title: "OmniClass™ Credentials: Contactless Smart Card",
    description: "An easy-to-carry proximity card that utilizes RFID technology. It has a high contactless range and is designed to work with OmniProx™ readers.",
    image: "/src/assets/image/HONEYWELL IMG/OMNICLASS-CREDENTIALS.jpg"
  },
   {
    title: "MF-01 Mifare Proximity Cards",
    description: "An easy-to-carry proximity card that utilizes RFID technology. It has a high contactless range and is designed to work with OmniProx™ readers.",
    image: "/src/assets/image/HONEYWELL IMG/MF-01.jpg"
  }
];

const ProductCard = ({ title, description, image }) => (
    

  <div className="bg-white border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow duration-200 p-2 flex flex-col group-hover:scale-110">
    {/* Image Container with inner padding/border to match image style */}
    <div className="bg-white border border-gray-100 rounded p-4 mb-3 flex items-center justify-center h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110" 
      />
    </div>
    
    {/* Text Content */}
    <div className="px-1 pb-2 flex-grow">
      <h3 className="text-[#1a365d] font-bold text-xs uppercase mb-2 tracking-tight leading-[1.1rem]">
        {title}
      </h3>
      <p className="text-gray-500 text-[11px] leading-relaxed line-clamp-4">
        {description}
      </p>
    </div>
  </div>
);

const Honeywell = () => {
   
  return (
    <div className='bg-white mx-auto font-poppins text-xl'> 
      {/* Main Header */}
      <div className="text-center py-10 md:px-10 lg:px-20 display-block text-xl">
        <h1 className="text-2xl md:text-7xl font-black text-[#2257a0] mb-6 drop-shadow-sm tracking-tigh">
             Access Control System - Honeywell
        </h1>
      </div>
       
      <div className="bg-[#e9eff6] min-h-screen py-10 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">

  {/* Introductory Text */}

          {/* The Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 transition-transform duration-700 group-hover:scale-110">
            {products.map((item, idx) => (
              <ProductCard
                key={idx}
                title={item.title}
                description={item.description}
                image={item.image} />
            ))}
          </div>

          {/* Footer/Pagination Placeholder */}
          <div className="mt-12 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Honeywell Access Solutions
          </div>
        </div>
      </div>
    </div>
  );
};

export default Honeywell;