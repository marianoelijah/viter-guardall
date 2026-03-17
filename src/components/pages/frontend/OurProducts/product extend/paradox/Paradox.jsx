import React from 'react';
import { NavLink } from 'react-router-dom';

const ParadoxProducts = [
  {
    title: "SP7000 Controller | 16 to 32-Zone Control Panel",
    description: "Delivers advanced security features and flexible expandability for comprehensive protection of residential and commercial properties. Product Description: Paradox Spectra SP7000 is a flexible security alarm control panel with 16 hardwired",
    image: "/src/assets/image/PARADOX IMG/SP7000.png",
    detailRoute: "/our-products/paradox/sp7000-controller"
  },
  {
    title: "SP6000 Controller | 8 to 32-Zone Control Panel",
    description: "Delivers advanced security features and flexible expandability for comprehensive protection of residential and commercial properties. Product Description: Paradox Spectra SP6000 is a flexible security alarm control panel with 8 hardwired",
    image: "/src/assets/image/PARADOX IMG/SP6000.png",
    detailRoute: "/our-products/paradox/sp6000-controller"
  },
  {
    title: "SP5500+ Controller | 5 to 32-Zone Control Panel",
    description: "Offers versatile and scalable security solutions for larger homes or businesses, featuring a high zone capacity and advanced programming options. Product Description: Paradox Spectra SP5500 is a flexible security alarm",
    image: "/src/assets/image/PARADOX IMG/SP5500.png",
    detailRoute: "/our-products/paradox/sp5500-controller"
  },
  {
    title: "SP4000 Controller | 4 to 32-Zone Control Panel",
    description: "Provides comprehensive security management for small to medium-sized premises, with expandable zone capacity and support for wireless devices. Product Description: Paradox SP4000 is a powerful, affordable alarm system control panel.",
    image: "/src/assets/image/PARADOX IMG/SP4000.png",
    detailRoute: "/our-products/paradox/sp4000-controller"
  },
  {
    title: "SP65  | Expandable to 32-Zone Control Panel",
    description: "A reliable and expandable control panel that forms the core of a robust and customizable Paradox security system  Product Description: The Paradox PDX-SP65 offers a combination of innovative features and",
    image: "/src/assets/image/PARADOX IMG/SP65.png",
    detailRoute: "/our-products/paradox/expandable-32-zone-control-panel"
  },
  {
    title: "ZX82 8-Zone Expansion Module",
    description: "This divide provides up to 8 additional hardwired zones inputs, as well as on-board anti-tamper switch. Product Description: The Paradox ZX82 zone expansion module provides up to eight additional hardwired",
    image: "/src/assets/image/PARADOX IMG/ZX82.png",
    detailRoute: "/our-products/paradox/zx82-expansion-module"
  },
  {
    title: "ZX8 8-Zone Expansion Module",
    description: "Connects on the keypad bus of EVO, Spectra, or MG Panels. Product Description: The Paradox 8-zone Expansion Module (ZX8) is an interface between the control panels and any hardwired detection",
    image: "/src/assets/image/PARADOX IMG/ZX8.png",
    detailRoute: "/our-products/paradox/zx8-expansion-module"
  },
  {
    title: "PGM82 8-PGM Expansion Module",
    description: "Expand the capabilities of your Paradox security system with the PGM82 Programmable Output Expansion Module.  Product Description: The Paradox PGM82 programmable output expansion module includes eight programmable relay outputs and",
    image: "/src/assets/image/PARADOX IMG/PGM82.png",
    detailRoute: "/our-products/paradox/pgm82-expansion-module"
  },
  {
    title: "PGM4 4-Output Expansion Module",
    description: "Expand the capabilities of your Paradox security system with the PGM4 Programmable Output Expansion Module.  Product Description: The Paradox PGM4 is an expansion module with four fully programmable relay outputs.",
    image: "/src/assets/image/PARADOX IMG/PGM4.png",
    detailRoute: "/our-products/paradox/pgm4-expansion-module"
  },
   {
    title: "RX1 Wireless Receiver",
    description: "Seamlessly integrates wireless devices with your Paradox security system, expanding its capabilities and offering flexible protection without the need for extensive wiring. Product Description: The RX1 Wireless Receiver adds wireless",
    image: "/src/assets/image/PARADOX IMG/RX1.png",
    detailRoute: "/our-products/paradox/rx1-wireless-receiver"
  },
  {
    title: "PS45 Supervised Power Supply",
    description: "A supervised or standalone backup battery multi-purpose supply.  Product Description: The PS45 is a 75W supervised or standalone backup battery multi-purpose power supply. Mainly designed to power up to 10",
    image: "/src/assets/image/PARADOX IMG/PS45.jpg",
    detailRoute: "/our-products/paradox/ps45-supervised-power-supply"
  },
  {
    title: "PS25 | 2.8A Supervised Power Supply",
    description: "This divide provides reliable and consistent power to your security system, avoiding interruptions. Product Description: The PS25 is a 2.8A supervised switching power supply that connects to Paradox control panel",
    image: "/src/assets/image/PARADOX IMG/PS25.jpg",
    detailRoute: "/our-products/paradox/ps25-supervised-power-supply"
  },
   {
    title: "BUS2SER Integration Module",
    description: "The BUS2SER Paradox EVO RS232 Interface allows you to interface the EVO bus to external systems via a RS232 serial connection. Product Description: When used with an EVO Series control",
    image: "/src/assets/image/PARADOX IMG/BUS2SER.jpg",
    detailRoute: "/our-products/paradox/bus2ser-integration-module"
  },
  {
    title: "NV780MR Digital Outdoor Dual Side-View Detector",
    description: "A comprehensive perimeter protection that detects breaches before it occurs with its dual side-view protection. Product Description: The NV780M detector is designed to provide a pre-entry protection solution, while keeping",
    image: "/src/assets/image/PARADOX IMG/NV780MR.png",
    detailRoute: "/our-products/paradox/nv780mr-digital-outdoor-dual-size-view"
  },
   {
    title: "DM70 High-Security Motion Detector Module with Pet Immunity",
    description: "A high-security detector that offers protection against intruders while ignoring pets up to 40kg.  Product Description: Paradox DM70 is a high-security dual optic motion detector module compatible with Paradox Digiplex",
    image: "/src/assets/image/PARADOX IMG/DM70.png",
    detailRoute: "/our-products/paradox/dm70-high-security-motion-detector"
  },
   {
    title: "DM50 Dual Element Motion Detector Module",
    description: "This device has a dual detection technology ensuring accurate intruder detection while minimizing false alarms. Product Description: Paradox DM50 is a Dual Element Passive Infrared Motion Detector module compatible with",
    image: "/src/assets/image/PARADOX IMG/DM50.png",
    detailRoute: "/our-products/paradox/dm50-dual-element-motion-detector"
  },
  {
    title: "DG467 360 Ceiling Mounted Digital Motion Detector",
    description: "This compact, motion detector is best for high-ceiling installation and has a 360-degree range.  Product Description: This ceiling mounted digital motion detector from Paradox has a 360-degree range. The DG467",
    image: "/src/assets/image/PARADOX IMG/DG467.png",
    detailRoute: "/our-products/paradox/dg467-ceiling-mounted-digital"
  },
   {
    title: "DG457 Glassbreak Detector",
    description: "Designed to be installed on the wall or ceiling near the windows in need of protection. Product Description: GlassTrek delivers effective coverage of plate, tempered, and laminated glass without the",
    image: "/src/assets/image/PARADOX IMG/DG457.png",
    detailRoute: "/our-products/paradox/dg457-glassbreak-detector"
  },
   {
    title: "DG85 Outdoor High-Security Digital Motion Detector Module",
    description: "An impact and temperature-resistant motion detector that is best fit for outdoor installation. Product Description: The Digigard DG85 overcomes environmental challenges by combining a special weatherproof design with the proven",
    image: "/src/assets/image/PARADOX IMG/DG85.png",
    detailRoute: "/our-products/paradox/dg85-outdoor-high-security"
  },
  {
    title: "TM70 Touch Intuitive Touchscreen",
    description: "Designed with a large, 7-inch touchscreen display to conveniently control Paradox panels. Product Description: Experience enhanced control and convenience with the Paradox TM70, a 7” touchscreen keypad boasting a larger",
    image: "/src/assets/image/PARADOX IMG/TM70.png",
    detailRoute: "/our-products/paradox/tm70-touch-intuitive-touchscreen"
  },
   {
    title: "TM50 Touch Intuitive Touchscreen",
    description: "Designed with a large, 5-inch touchscreen display to conveniently control Paradox panels. Product Description: The Paradox TM50 is a sleek 5” touchscreen keypad that brings intuitive control and a vivid",
    image: "/src/assets/image/PARADOX IMG/TM50.png",
    detailRoute: "/our-products/paradox/tm50-touch-intuitive-touchscreen"
  },
   {
    title: "K656 Touch Sense LCD Keypad",
    description: "This sleek, touchpad can help arm or disarm your systems easily. Product Description: The K656 Touch Sense LCD Keypad provides touchpad technology with simplified menu-driven navigation. Whether arming or disarming",
    image: "/src/assets/image/PARADOX IMG/K656.jpg",
    detailRoute: "/our-products/paradox/k656-touch-sense-lcd-keypad"
  },
  {
    title: " K641+  32- Character Blue LCD Keypad",
    description: "A compact, 32-character keypad module that provides a user-friendly experience. Product Features: Technical Specification: Operating Voltage 9 to 16Vdc Operating Temp. -10 to 55°C (14 to 131°F) Power Consumption  Maximum",
    image: "/src/assets/image/PARADOX IMG/K641.jpg",
    detailRoute: "/our-products/paradox/k641+-character-blue-lcd-keypad"
  },
  {
    title: "K32+ 32-Zone Hardwired LED Keypad Module",
    description: "A robust and reliable hardwired keypad that provides comprehensive control over 32 zones in your Paradox security system. Description: The Paradox K32+ is a 32-zone LED keypad Compatible with MG5050",
    image: "/src/assets/image/PARADOX IMG/K32.png",
    detailRoute: "/our-products/paradox/k32+-hardwired-led-keypad"
  },
   {
    title: "K32LX 32-zone Hardwired LCD Keypad Module with Built-in Transceiver",
    description: "A feature-rich hardwired keypad with an LCD display, offering advanced control and monitoring capabilities for 32 zones in your Paradox security system. Description: The K32LX Paradox is a hardwired Blue",
    image: "/src/assets/image/PARADOX IMG/K32LX.png",
    detailRoute: "/our-products/paradox/k32lx-hardwired-lcd-keypad"
  },
  {
    title: "K10V 10-Zone Hardwired LED Keypad Module",
    description: "This device offers convenient system management with its vertical design and clear LED display, making it ideal for controlling 10 zones within your Paradox security setup. Description: The Paradox K10V",
    image: "/src/assets/image/PARADOX IMG/K10V.png",
    detailRoute: "/our-products/paradox/k10v-hardwired-led-keypad"
  },
   {
    title: " K10H 10-Zone Hardwired LED Keypad Module",
    description: "An easy-to-use keypad that provides simple control for your Paradox security system. Description: The Paradox K10H is a 10-zone LED keypad compatible with the MG/SP series control panels. It features",
    image: "/src/assets/image/PARADOX IMG/K10H.png",
    detailRoute: "/our-products/paradox/k10h-hardwired-led-keypad"
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

const Paradox = () => {
  return (
    <div className="bg-[#e9eff6] min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* Changed from font-black to font-normal/medium */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-figtree text-[#0d3874] mb-6 tracking-tight">
             Intrusion / Burglary Alarm Systems - Paradox
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
        </header>

        {/* Responsive Grid with improved spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ParadoxProducts.map((item, idx) => (
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

export default Paradox;