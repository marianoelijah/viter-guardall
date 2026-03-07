import React from 'react';

const WebgateProducts = [
  {
    title: "NT4100PT-IR-Z3.7W Intelligent Network Camera",
    description: "A high-security pan-tilt-zoom camera with 37x Optical Zoom. It has reliable results even in low-light environments.  Product Features:  Technical Specification: CAMERA MODULE Image Sensor 1/1.8′′ progressive scan CMOS Mini. Illumination",
    image: "/src/assets/image/WEBGATE IMG/NT4100PT-IR-Z37W.png"
  },
  {
    title: "NT4100PT-IR-Z2.5W Intelligent Network Camera",
    description: "A high-security pan-tilt-zoom camera with 25x Optical Zoom. It has reliable results even in low-light environments.  Product Features:  Technical Specification: CAMERA MODULE Image Sensor 1/2.7′′ progressive scan CMOS Mini. Illumination",
    image: "/src/assets/image/WEBGATE IMG/NT4100PT-IR-Z25W.png"
  },
  {
    title: " NK1080D-IR30-AF Network Camera",
    description: "This high-security surveillance camera has Internal IR Distance of 40M and  Wide Dynamic Range. Product Features:  Technical Specification: CAMERA  Sensor Type 1/2.8”, 2.1Megapixel Sony STARVIS Sensor Sensor Pixels 1920(H) ×",
    image: "/src/assets/image/WEBGATE IMG/NK1080D-IR30-AF.png"
  },
  {
    title: "NK1080D-F2.0 Network Camera",
    description: "A high-performance surveillance system with 3D Digital Noise Reduction to improve quality of images.  Product Features:  Technical Specification: CAMERA  Sensor Type 1/2.8”, 2.1Megapixel Sony STARVIS Sensor Sensor Pixels 1920(H) ×",
    image: "/src/assets/image/WEBGATE IMG/NK1080D-F2-0.png"
  },
   {
    title: "NE5100VD-SIR2-AF Network Camera",
    description: "A 5MP surveillance system with motorized lens and basic video analytics.  Product Features:  Technical Specification: VIDEO Compression Type H.265, H.264, MJPEG Resolution 5MP, 4MP, 3MP, 1080P, 720P, D1, 480×240, CIF",
    image: "/src/assets/image/WEBGATE IMG/NE5100VD-SIR2-AF.png"
  },
  {
    title: "NE5100VD-SIR1-F2.8 Network Camera",
    description: "This surveillance system has a 5MP camera and basic video analytics ideal for outdoor installation.  Product Features:  Technical Specification: VIDEO Compression Type H.265, H.264, MJPEG Resolution 5MP, 4MP, 3MP, 1080P,",
    image: "/src/assets/image/WEBGATE IMG/NE5100VD-SIR1-F2.8.png"
  },
  {
    title: "NE5100ED-SIR1-F2.8 Network Camera",
    description: "A surveillance system with 5MP camera and basic video analytics to detect humans or vehicles crossing designated areas.  Product Features:  Technical Specification: VIDEO Compression Type H.265, H.264, MJPEG Resolution 5MP,",
    image: "/src/assets/image/WEBGATE IMG/NE5100ED-SIR1-F2.8.png"
  },
  {
    title: "NE2100ED-SIR2-AF Network Camera",
    description: "A surveillance system with motorized lens and basic video analytics to detect humans or vehicles crossing designated areas.  Product Features:  Technical Specification: VIDEO Compression Type H.265, H.264, MJPEG Resolution 1080P,",
    image: "/src/assets/image/WEBGATE IMG/NE2100ED-SIR2-AF.png"
  },
  {
    title: "NK1080BL-IR48-AF Network Camera",
    description: "A high-security surveillance system that provides clear images in low light condition.  Product Features:  Technical Specification: CAMERA  Sensor Type 1/2.8”, 2.1Megapixel Sony STARVIS Sensor Sensor Pixels 1920(H) × 1080(V) =",
    image: "/src/assets/image/WEBGATE IMG/NK1080BL-IR48-AF-768x508.png"
  },
  {
    title: "NK5100BL-IR42-F.36 AI Network Camera",
    description: "A surveillance system that has an AI/deep-learning engine that detects objects, intrusions, and even line crossing.  Product Features:  Technical Specification: VIDEO Compression Type H.265(HEVC) main@L5.1H.264(AVC) baseline/main/high@L5.2, MJPEG Resolution Stream 1",
    image: "/src/assets/image/WEBGATE IMG/NK5100BL-IR42-F3.6-HD-768x768.png"
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

const Webgate = () => {
  return (
    <div className="bg-[#e9eff6] min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* Changed from font-black to font-normal/medium */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-figtree text-[#0d3874] mb-6 tracking-tight">
           CCTVs – Webgate
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
        </header>

        {/* Responsive Grid with improved spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WebgateProducts.map((p, idx) => (
            <ProductCard key={idx} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Webgate;