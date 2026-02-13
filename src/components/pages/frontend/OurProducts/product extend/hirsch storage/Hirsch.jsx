import React from 'react';

const products = [
  {
    title: "uTrust TS Contact Smart Card Readers",
    description: "Delivers upgraded security and flexibility for users and PACS, combining high-assurance smart card technology with Hirsch controllers and versatile reader technologies.",
    image: "/src/assets/image/HIRSCH IMG/Utrust TS Contact.jpg"
  },
  {
    title: "uTrust TS Government Readers: Mullion, Wall Mount, And Wall Mount Keypad",
    description: "Provides a contactless, high-secure, and compliant ID management solution for federal agencies and contractors.",
    image: "/src/assets/image/HIRSCH IMG/Utrust TS Government.jpg"
  },
  {
    title: "uTrust TS Readers: Mullion, Wall Mount, And Wall Mount Keypad",
    description: "Delivers high performance and maximum flexibility for diverse access control needs. Support for current and future technology.",
    image: "/src/assets/image/HIRSCH IMG/Utrust TS Readers.jpg"
  },
  {
    title: "Hirsch TS ScramblePad SC: FICAM-Capable TS ScramblePad With Contact Smart Card Reader",
    description: "A high-security keypad that features a patented scrambling function, incorporating a contact smart card reader.",
    image: "/src/assets/image/HIRSCH IMG/Hirsch TS ScramblePad SC.jpg"
  },
  {
    title: "Hirsch Scramble Pad Readers",
    description: "A high-security keypad with patented scrambling function to avoid pattern recognition and prevent code identification.",
    image: "/src/assets/image/HIRSCH IMG/Hirsch ScramblePad Readers.jpg"
  },
  {
    title: "Hirsch Scramble Factor: High-Assurance Biometrics And Multi-Factor Authentication Reader",
    description: "An advanced fingerprint reader with LCD touchscreen keypad designed for high-security environments.",
    image: "/src/assets/image/HIRSCH IMG/Hirsch Scramble Factor.jpg"
  },
  {
    title: "MEB/CB Memory Expansion Board/Code Buffering Board",
    description: "Helps expand the memory capacity of controllers. Increases the number of users and events stored locally.",
    image: "/src/assets/image/HIRSCH IMG/MebCB Memory Expansion Board.jpg"
  },
  {
    title: "AEB8 Alarm Expansion Board With 8 Additional Line Model Inputs",
    description: "Used for a variety of security monitoring, this device provides additional line model inputs on board.",
    image: "/src/assets/image/HIRSCH IMG/AEB8-Alarm-Expansion-Board.jpg"
  },
  {
    title: "Hirsch M8N Controller: Standalone Access Control System With ScramblePad",
    description: "High-level security access control, with alarm monitoring, relay control and reporting capabilities.",
    image: "/src/assets/image/HIRSCH IMG/AEB8-Alarm-Expansion-Board.jpg"
  },
  {
    title: "Hirsch Mx-1-ME Controller: High-Security Access Control",
    description: "A fully integrated, single-door access control unit designed for high-security standalone or networked systems.",
    image: "/src/assets/image/HIRSCH IMG/Hirsch Mx-1-ME.jpg"
  },
  {
    title: "Hirsch Mx-1 Controller: High-Security Access Control",
    description: "An access control with an integrated Ethernet manager to support multiple high-end reader technologies.",
    image: "/src/assets/image/HIRSCH IMG/HIRSCH MxCONTROLLER.jpg"
  },
  {
    title: "Hirsch Mx Controller: High-Security Access Control",
    description: "An access control unit with integrated door modules. It provides a highly versatile and cost-effective management system.",
    image: "/src/assets/image/HIRSCH IMG/Hirsch MX-1 Controller.jpg"
  },
  {
    title: "SNIB3 Secure Network Interface Board",
    description: "A leading edge communication device that provides TCP/IP version 6, Gigabit Ethernet, and AES 256 bit encryption. Product Description:  The SNIB3 is a leading edge communication device that provides IPv4",
    image: "/src/assets/image/HIRSCH IMG/snib3_onWhite-768x1152.jpg"
  },
  {
    title: "RS-485 Relay Expansion Board",
    description: "Provides fast, two-way OSDP communication and processing for PIV Certificates. Product Description:  Identiv’s RS-485 Reader Expansion Board (RREB) is a unique reader communication device that installs onto the expansion cable",
    // image: "/src/assets/image/HIRSCH IMG/RS-485 Relay Expansion Board.jpg"
  },
  {
    title: "REB8 Relay Expansion Board with 8 Dry Relay Outputs",
    description: "Expands the control relay capacity of M-Series Controllers with 8 additional dry relay outputs.  Product Description:  Identiv’s Relay Expansion Board (REB8) expands the control relay capacity of M-Series Controllers. REB8",
    image: "/src/assets/image/HIRSCH IMG/RREB-onWhite-768x1152.jpg"
  },
  {
    title: "Cirrus Cloud Access Control",
    description: "A secure, cloud-based electronic access control and security management solution. Product Description:  Velocity Cirrus manages access control and security operations from single high-secure rooms to multi-building, multi-location campuses. Control doors,",
    // image: "/src/assets/image/HIRSCH IMG/Cirrus Cloud Access Control.jpg"
  },
  {
    title: "UTrust UHF Credentials",
    description: "An ultra high frequency smart card designed for long distance reading. Product Description:  uTrust UHF Credentials provide multiple options for durable,interoperable radio frequency identification (RFID) cards. Ultra high frequency (UHF)",
    image: "/src/assets/image/HIRSCH IMG/Utrust UHF Credentials.jpg"
  },
  {
    title: "UTrust TS Cards",
    description: "A high-frequency smart card designed for contactless access to offices and similar properties.  Product Description:  Identiv’s uTrust TS Cards are modern, secure credentials for physical access control, based on NXP®",
    image: "/src/assets/image/HIRSCH IMG/Utrust TS Cards.jpg"
  },
  {
    title: "UTrust HF Key Fob",
    description: "An easy-to-bring physical access commonly used for gym facilities. Product Description:  Packed with the same technology as Identiv’s proximity and high-frequency (HF) card credentials, uTrust HF Keyfobs match the security",
    image: "/src/assets/image/HIRSCH IMG/Utrust HF Key.jpg"
  },
  {
    title: "UTrust Wristband Proximity Central",
    description: "Allows for seamless access and management of amusement parks, gyms, and other active facilities. Product Description:  Identiv’s 125 kHz Wristband Proximity Credential is the perfect access control solution for active",
    image: "/src/assets/image/HIRSCH IMG/Utrust Wristband Proximity.jpg"
  },
   {
    title: "uTrust Proximity Credentials: Mag Stripe Card",
    description: "A contactless smart card with mag stripe, suitable for office access.  Product Description:  From enterprise to government, Identiv’s uTrust Proximity Credentials enable access for employees, temporary workers, and visitors. These",
    image: "/src/assets/image/HIRSCH IMG/Utrust Proximity.jpg"
  },
  {
    title: "uTrust Proximity Credentials (General)",
    description: "A series of cost-effective contactless credentials that come in various formats such as key fob, smart card, and wristband.  Product Description:  From enterprise to government, Identiv’s uTrust Proximity Credentials enable",
    image: "/src/assets/image/HIRSCH IMG/Utrust Proximity Credentials.jpg"
  },
];

const ProductCard = ({ title, description, image }) => (
  <div className="bg-white border border-gray-200 rounded shadow-sm hover:shadow-md transition-all duration-300 p-2 flex flex-col group">
    {/* Image Container */}
    <div className="bg-white border border-gray-50 rounded p-4 mb-4 flex items-center justify-center h-44 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" 
      />
    </div>
    
    {/* Text Content */}
    <div className="px-1 pb-3 flex-grow flex flex-col">
      <h3 className="text-[#1a365d] font-bold text-xs uppercase mb-3 min-h-[2.5rem] tracking-tight leading-tight">
        {title}
      </h3>
      <p className="text-gray-500 text-[11px] leading-relaxed line-clamp-5">
        {description}
      </p>
    </div>
  </div>
);

const Hirsch = () => {
  return (
    <div className="bg-[#f0f4f8] min-h-screen py-12 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-[#1a365d] text-2xl md:text-3xl font-extrabold inline-block relative">
            Access Control System – Hirsch
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#1a365d]"></span>
          </h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>

        {/* Brand Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-200 text-center text-gray-400 text-xs">
          Hirsch Identification Solutions | High-Security Access Control
        </footer>
      </div>
    </div>
  );
};

export default Hirsch;