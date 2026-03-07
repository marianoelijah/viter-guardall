import React from 'react';

const PelcoProducts = [
  {
    title: "Ulisee Enhanced PTZ 2 Series",
    description: "A high-security camera built for outdoor environments while still providing high-resolution video.  Product Description: The Ulisse Enhanced PTZ 2 is a PTZ camera for mission-critical applications. This security camera is",
    image: "/src/assets/image/PELCO IMG/Ulisse-Enhanced-PTZ-2.png"
  },
  {
    title: "Spectra Enhanced 8 PTZ Camera",
    description: "This pan-tilt-zoom (PTZ) camera can provide fast updates when human activity or vehicle is detected within the property. Product Description: Have you ever found yourself overwhelmed by the sheer size",
    image: "/src/assets/image/PELCO IMG/Spectra-Enhanced-8-Series.png"
  },
  {
    title: "Esprit Anti-Corrosion Bispectral PTZ",
    description: "Designed for environments with harsh conditions,, this corrosion-resistant camera provides visual and thermal imaging to secure a property. Product Description: Securing rugged environments means accounting for intense snowfall, to harsh",
    image: "/src/assets/image/PELCO IMG/Esprit-Anti-Corrosion-Bispectral-PTZ.png"
  },
  {
    title: "Sarix Multi Enhanced Camera",
    description: "This camera delivers multi-directional coverage from a single vantage point helping reduce blind spots.  Product Description: The Pelco Sarix Multi Enhanced camera delivers multi-directional coverage from a single vantage point,",
    image: "/src/assets/image/PELCO IMG/Sarix-Multi-Enhanced Camera.png"
  },
   {
    title: "Optera IMM Series with SureVision 2.0",
    description: "A panoramic surveillance camera that enables users to zoom in for detail and provide a seamless viewing experience. Product Description: The OpteraTM IMM Series camera with SureVisionTM 2.0 provides a",
    image: "/src/assets/image/PELCO IMG/Optera IMM Series.png"
  },
  {
    title: "Pelco Fisheye Camera",
    description: "A surveillance camera that provides a 360-degree view of the surrounding to avoid any blind spots.  Product Description: The Pelco Fisheye camera features built-in AI-powered Pelco Smart Analytics, powered by",
    image: "/src/assets/image/PELCO IMG/Pelco Fisheye Camera.png"
  },
  {
    title: "Sarix Value Series IR Environmental Turret Camera (ITV529-1ERS)",
    description: "A cost-effective, dome-shaped camera that can provide maximum coverage even in total darkness.  Product Description: Sarix Value ITV Series cameras are easy to install with a bubble-less design, saving time",
    image: "/src/assets/image/PELCO IMG/Sarix Value Series IR Environmental Turret.png"
  },
  {
    title: "Sarix Value Series IR Environmental Mini Dome Cameras (IMV229-1ERS, IMV529-1ERS)",
    description: "A budget-friendly, compact surveillance camera that blends with its surroundings.  Product Description: Sarix Value IMV Series cameras are ideal for discreet surveillance with their compact size and design that blends",
    image: "/src/assets/image/PELCO IMG/Sarix Value Series IR Environmental Mini Dome.png"
  },
  {
    title: "Sarix Professional 4 Series Dome Camera",
    description: "A high-performance, dome-shaped security camera designed to capture activity in high-definition.  Product Description: With security challenges becoming increasingly complex, it’s more important than ever to future-proof your site. Enhance your",
    image: "/src/assets/image/PELCO IMG/Sarix Professional 4 Series Dome Camera.png"
  },
  {
    title: "Sarix Enhanced 4 And 4P Series Dome Camera",
    description: "A dome-shaped surveillance camera designed to run multiple analytics at once.  Product Description: The Sarix Enhanced 4 Series camera line, consisting of the 4 and 4P Series dome cameras, introduces",
    image: "/src/assets/image/PELCO IMG/Sarix-Enhanced-4 and 4P Series Dome Camera.png"
  },
  {
    title: "Sarix Enhanced 4 and 4P Series Short and Long Bullet Cameras",
    description: "A high-performance surveillance camera designed to run multiple analytics at once.  Product Description: The Sarix Enhanced 4 and 4P Series short and long bullet cameras introduce new analytic capabilities and",
    image: "/src/assets/image/PELCO IMG/Sarix Enhanced 4 and 4P Series Short and Long.png"
  },
  {
    title: "Sarix Thermal Enhanced 4 Camera Series",
    description: "More than just a security camera, this surveillance device has a heat-sensing technology to identify incoming threats.  Product Description: The Sarix® Thermal Enhanced 4 Series enables sites to harness the",
    image: "/src/assets/image/PELCO IMG/Sarix Thermal Enhanced-4 Camera Series.png"
  },
   {
    title: "Sarix Professional 4 Series Bullet Camera",
    description: "A high-performance, bullet-style security camera designed to capture activity in high-definition.  Product Description: With security challenges becoming increasingly complex, it’s more important than ever to future-proof your site. Enhance your",
    image: "/src/assets/image/PELCO IMG/Sarix-Professional-4-Series-Bullet Camera.png"
  },
  {
    title: "Sarix Value Series IR Environmental Bullet Cameras (IBV229-1ER, 1BV529-1ER)",
    description: "A cost-friendly, surveillance camera with reliable image quality and excellent low-light performance. Product Description: Sarix Value IBV Series cameras are ideal for overt surveillance that can help deter criminal activity.",
    image: "/src/assets/image/PELCO IMG/Sarix Value Series IR Environmental Bullet.png"
  },
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

const Pelco = () => {
  return (
    <div className="bg-[#e9eff6] min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* Changed from font-black to font-normal/medium */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-figtree text-[#0d3874] mb-6 tracking-tight">
           CCTVs – Pelco
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
        </header>

        {/* Responsive Grid with improved spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PelcoProducts.map((p, idx) => (
            <ProductCard key={idx} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pelco;