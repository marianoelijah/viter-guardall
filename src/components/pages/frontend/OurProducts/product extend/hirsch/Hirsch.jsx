import React from 'react';
import { NavLink } from 'react-router-dom';

const products = [
  {
    title: "uTrust TS Contact Smart Card Readers",
    description: "Delivers upgraded security and flexibility for users and PACS, combining high-assurance smart card technology with Hirsch controllers and versatile reader technologies.",
    image: "/src/assets/image/HIRSCH IMG/Utrust TS Cards.png",
    detailRoute: "/our-products/hirsch/utrust-ts-contact-smart-card-readers"
  },
  {
    title: "uTrust TS Government Readers: Mullion, Wall Mount, And Wall Mount Keypad",
    description: "Provides a contactless, high-secure, and compliant ID management solution for federal agencies and contractors and smart card technology.",
    image: "/src/assets/image/HIRSCH IMG/Utrust TS Government.png",
    detailRoute: "/our-products/hirsch/utrust-ts-government-readers"
  },
  {
    title: "uTrust TS Readers: Mullion, Wall Mount, And Wall Mount Keypad",
    description: "Delivers high performance and maximum flexibility for diverse access control needs. Support for current and future technology.",
    image: "/src/assets/image/HIRSCH IMG/Utrust TS Readers.png",
    detailRoute: "/our-products/hirsch/utrust-ts-readers"
  },
  {
    title: "Hirsch TS ScramblePad SC: FICAM-Capable TS ScramblePad With Contact Smart Card Reader",
    description: "A high-security keypad that features a patented scrambling function, incorporating a contact smart card reader.",
    image: "/src/assets/image/HIRSCH IMG/Hirsch TS ScramblePad SC.png",
    detailRoute: "/our-products/hirsch/hirsch-ts-scramblepad-sc"
  },
  {
    title: "Hirsch Scramble Pad Readers",
    description: "A high-security keypad with patented scrambling function to avoid pattern recognition and prevent code identification.",
    image: "/src/assets/image/HIRSCH IMG/Hirsch ScramblePad Readers.png",
    detailRoute: "/our-products/hirsch/hirsch-scramble-pad-readers"
  },
  {
    title: "Hirsch Scramble Factor: High-Assurance Biometrics And Multi-Factor Authentication Reader",
    description: "An advanced fingerprint reader with LCD touchscreen keypad designed for high-security environments.",
    image: "/src/assets/image/HIRSCH IMG/Hirsch Scramble Factor.png",
    detailRoute: "/our-products/hirsch/hirsch-scramble-factor"
  },
  {
    title: "MEB/CB Memory Expansion Board/Code Buffering Board",
    description: "Helps expand the memory capacity of controllers. Increases the number of users and events stored locally.",
    image: "/src/assets/image/HIRSCH IMG/MebCB Memory Expansion Board.png",
    detailRoute: "/our-products/hirsch/meb-cb-memory-expansion-board"
  },
  {
    title: "AEB8 Alarm Expansion Board With 8 Additional Line Model Inputs",
    description: "Used for a variety of security monitoring, this device provides additional line model inputs on board.",
    image: "/src/assets/image/HIRSCH IMG/AEB8-Alarm-Expansion-Board.jpg",
    detailRoute: "/our-products/hirsch/aeb8-alarm-expansion-board"
  },
  {
    title: "Hirsch M64 Controller: Standalone Access Control System with ScramblePad",
    description: "Provide a variety of access control, high-security alarm monitoring, relay control outputs, and programmable logic configurations. Product Description:  Identiv’s Hirsch M64 Controllers have the same firmware functionality as Hirsch Mx",
    // image: "/src/assets/image/HIRSCH IMG/AEB8-Alarm-Expansion-Board.jpg",
    detailRoute: "/our-products/hirsch/hirsch-m64-controller"
  },
  {
    title: "Hirsch Mx-1-ME Controller: High-Security Access Control",
    description: "A fully integrated, single-door access control unit designed for high-security standalone or networked systems.",
    image: "/src/assets/image/HIRSCH IMG/Hirsch MX-1-ME.png",
    detailRoute: "/our-products/hirsch/hirsch-mx-1-me-controller"
  },
  {
    title: "Hirsch Mx-1 Controller: High-Security Access Control",
    description: "An access control with an integrated Ethernet manager to support multiple high-end reader technologies.",
    image: "/src/assets/image/HIRSCH IMG/HIRSCH MxCONTROLLER.png",
    detailRoute: "/our-products/hirsch/hirsch-mx-1-controller"
  },
  {
    title: "Hirsch Mx Controller: High-Security Access Control",
    description: "An access control unit with integrated door modules. It provides a highly versatile and cost-effective management system.",
    image: "/src/assets/image/HIRSCH IMG/Hirsch MX-1 Controller.png",
    detailRoute: "/our-products/hirsch/hirsch-mx-controller"
  },
  {
    title: "SNIB3 Secure Network Interface Board",
    description: "A leading edge communication device that provides TCP/IP version 6, Gigabit Ethernet, and AES 256 bit encryption. Product Description:  The SNIB3 is a leading edge communication device that provides IPv4",
    image: "/src/assets/image/HIRSCH IMG/snib3_onWhite-768x1152.jpg",
    detailRoute: "/our-products/hirsch/snib3-secure-network-interface-board"
  },
  {
    title: "RS-485 Relay Expansion Board",
    description: "Provides fast, two-way OSDP communication and processing for PIV Certificates. Product Description:  Identiv’s RS-485 Reader Expansion Board (RREB) is a unique reader communication device that installs onto the expansion cable",
    image: "/src/assets/image/HIRSCH IMG/RREB-onWhite-768x1152.jpg",
    detailRoute: "/our-products/hirsch/rs-485-relay-expansion-board"
  },
  {
    title: "REB8 Relay Expansion Board with 8 Dry Relay Outputs",
    description: "Expands the control relay capacity of M-Series Controllers with 8 additional dry relay outputs.  Product Description:  Identiv’s Relay Expansion Board (REB8) expands the control relay capacity of M-Series Controllers. REB8",
    image: "/src/assets/image/HIRSCH IMG/RREB-onWhite-768x1152.jpg",
    detailRoute: "/our-products/hirsch/reb8-relay-expansion-board"
  },
  {
    title: "Cirrus Cloud Access Control",
    description: "A secure, cloud-based electronic access control and security management solution. Product Description:  Velocity Cirrus manages access control and security operations from single high-secure rooms to multi-building, multi-location campuses.",
    image: "/src/assets/image/placeholder-cloud.png",
    detailRoute: "/our-products/hirsch/cirrus-cloud-access-control"
  },
  {
    title: "UTrust UHF Credentials",
    description: "An ultra high frequency smart card designed for long distance reading. Product Description:  uTrust UHF Credentials provide multiple options for durable,interoperable radio frequency identification (RFID) cards.",
    image: "/src/assets/image/HIRSCH IMG/Utrust UHF Credentials.png",
    detailRoute: "/our-products/hirsch/utrust-uhf-credentials"
  },
  {
    title: "UTrust TS Cards",
    description: "A high-frequency smart card designed for contactless access to offices and similar properties.  Product Description:  Identiv’s uTrust TS Cards are modern, secure credentials for physical access control.",
    image: "/src/assets/image/HIRSCH IMG/Utrust TS Cards.png",
    detailRoute: "/our-products/hirsch/utrust-ts-cards"
  },
  {
    title: "UTrust HF Key Fob",
    description: "An easy-to-bring physical access commonly used for gym facilities. Product Description:  Packed with the same technology as Identiv’s proximity and high-frequency (HF) card credentials.",
    image: "/src/assets/image/HIRSCH IMG/Utrust HF Key.png",
    detailRoute: "/our-products/hirsch/utrust-hf-key-fob"
  },
  {
    title: "UTrust Wristband Proximity Central",
    description: "Allows for seamless access and management of amusement parks, gyms, and other active facilities. Product Description:  Identiv’s 125 kHz Wristband Proximity Credential is the perfect access control solution.",
    image: "/src/assets/image/HIRSCH IMG/Utrust Wristband Proximity.png",
    detailRoute: "/our-products/hirsch/utrust-wristband-proximity"
  },
  {
    title: "uTrust Proximity Credentials: Mag Stripe Card",
    description: "A contactless smart card with mag stripe, suitable for office access.  Product Description:  From enterprise to government, Identiv’s uTrust Proximity Credentials enable access.",
    image: "/src/assets/image/HIRSCH IMG/Utrust Proximity.png",
    detailRoute: "/our-products/hirsch/utrust-proximity-credentials-mag-stripe-card"
  },
  {
    title: "uTrust Proximity Credentials (General)",
    description: "A series of cost-effective contactless credentials that come in various formats such as key fob, smart card, and wristband.",
    image: "/src/assets/image/HIRSCH IMG/Utrust Proximity Credentials.png",
    detailRoute: "/our-products/hirsch/utrust-proximity-credentials"
  },
];

const ProductCard = ({ title, description, image, detailRoute }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer group">
    {/* Enlarged Image Container */}
    <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-5 flex items-center justify-center h-64 overflow-hidden">
      <img 
        src={image || "https://via.placeholder.com/300"} 
        alt={title} 
        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110" 
      />
    </div>
    
    <div className="flex-grow">
      <h3 className="text-[#1a365d] font-semibold text-sm uppercase mb-3 leading-tight tracking-wide min-h-[3rem]">
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

const Hirsch = () => {
  return (
    <div className="bg-[#f0f4f8] min-h-screen px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header - Clean Normal Weight */}
        <header className="text-center py-16 px-6 md:px-10 lg:px-20">
          <h2 className="text-lg md:text-5xl lg:text-5xl font-figtree text-[#0d3874] mb-6 tracking-tight">
            Access Control System – Hirsch
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-30"></div>
        </header>

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
  );
};

export default Hirsch;