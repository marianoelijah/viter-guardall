import React from 'react';

const OnityProducts = [
  {
    title: "Onity DirectKey with Serene",
    description: "Designed for luxury hotels, this sleek all-in-one lock allows guests to unlock with the DirectKey mobile access technology.  Description: Serene, from Onity, is a sleek all-in-one lock designed both inside",
    image: "/src/assets/image/ONITY IMG/Onity DirectKey.jpg"
  },
  {
    title: "Trillium RFID",
    description: "Designed with a one-piece module, this hotel lock can be accessed with RFID and DirectKey mobile access.  Description: Designed for today’s modern aesthetics, Onity’s Trillium lock is available in a",
    image: "/src/assets/image/ONITY IMG/Trillium RFID.png"
  },
  {
    title: "Advance Trillium RFID",
    description: "A hotel lock designed with a slim two-piece module that can be unlocked with RFID and DirectKey mobile access.  Description: Designed for today’s modern aesthetics, Onity’s ADVANCE lock is available",
    image: "/src/assets/image/ONITY IMG/Advance Trillium RFID.png"
  },
  {
    title: "Self Storage Passport Locking Solution",
    description: "A compact, easy-to-install lock designed to be accessed with DirectKey mobile access.  Description: The Passport self-storage locking solution from Onity is a secure and reliable ecosystem designed to meet the",
    image: "/src/assets/image/ONITY IMG/Self Storage Passport.png"
  },
  {
    title: "OS700 Contactless RFID Card Safe",
    description: "A high-end safe that utilizes contactless RFID technology to unlock.  Description: The Onity OS700 RFID guestroom safe is designed to efficiently utilize space and securely store laptops, tablets, purses or",
    image: "/src/assets/image/ONITY IMG/OS700 Contactless RFID.png"
  },
  {
    title: "OS500 In-Room Safe with Keypad and Audit Trail",
    description: "This sleek, solid steel safe is designed to be mounted on shelfs, cabinets, and walls. Description: The Onity OS500 in-room safe is an excellent choice for hotels looking for a",
    image: "/src/assets/image/ONITY IMG/OS500 In Room Safe With Keypad.png"
  },
  {
    title: "OS200  In-Room Safe with Keypad and Top-Opening Option",
    description: "A reliable safe designed to secure laptops, tablets, and other valuables. Description: The Onity OS200 in-room safe is an excellent choice for hotels looking for a reliable safe designed to",
    image: "/src/assets/image/ONITY IMG/OS200 In Room Safe With Keypad and Top Opening.png"
  },
  {
    title: "OS100 In-Room Safe with Keypad and Audit Trail",
    description: "An economical and cost-effective safe to help secure key properties of hotel guests.  Description: Safes have become an expected amenity for many travelers today. The OS100 is an economical safe",
    image: "/src/assets/image/ONITY IMG/OS100 In Room Safe With Keypad.png"
  },
  {
    title: "Onity DirectKey: Mobile Access Solution",
    description: "Designed for luxury hotels, this sleek all-in-one lock allows guests to unlock with the DirectKey mobile access technology.  Description: Serene, from Onity, is a sleek all-in-one lock designed both inside",
    image: "/src/assets/image/ONITY IMG/Onity-DirectKey Mobile Access Solution.png"
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

const Onity = () => {
  return (
    <div className="bg-[#e9eff6] min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* Changed from font-black to font-normal/medium */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-medium text-[#0d3874] mb-6 tracking-tight">
             Hotel Locking Systems and Hotel Safes - Onity
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
        </header>

        {/* Responsive Grid with improved spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {OnityProducts.map((p, idx) => (
            <ProductCard key={idx} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Onity;