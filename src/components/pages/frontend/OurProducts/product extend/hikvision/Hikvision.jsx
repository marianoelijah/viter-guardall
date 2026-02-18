import React from 'react';

const HikvisionProducts = [
  {
    title: "DS-2CD2T43G2-2I/4I 4MP  AcuSense Fixed Bullet Network Camera",
    description: "A bullet-style, 4MP surveillance camera that can accurately detect human or vehicle motion/target. Product Description: Empowered by deep learning algorithms, Hikvision AcuSense technology brings human and vehicle targets classification alarms",
    image: "/src/assets/image/HIKVISION IMG/Acusense Fixed Bullet Network.jpg"
  },
  {
    title: "DS-2DE7A825IW-AEB(T5) 8MP 25 x IR Network Speed Dome Camera",
    description: "Designed for outdoor use, this surveillance dome camera has 25x optical zoom lens and up to 200m IR distance. Product Description: Hikvision DS-2DE7A825IW-AEB(T5) 8 MP 25× IR Network Speed Dome",
    image: "/src/assets/image/HIKVISION IMG/Network Speed Dome Camera.png"
  },
  {
    title: "DS-2SE7C432MWG-EB/26(F0) TandemVu 4MP 32 x Network PTZ Camera",
    description: "A panoramic surveillance camera with 32x optical zoom and AcuSense technology. Product Description: The TandemVu PTZ cameras feature Hikvision’s next-generation camera design, integrating multiple lenses in one security camera to",
    image: "/src/assets/image/HIKVISION IMG/TandemVu 4MP 32X Network PTZ.png"
  },
  {
    title: " DS-7700NI-I4 (B) Series NVR",
    description: "A network video-recorder with up to 32 channel input. Product Description: With built-in analytics, Hikvision’s Network Video Recorders (NVRs) provide advanced artificial intelligence capabilities for any connected data stream, even",
    image: "/src/assets/image/HIKVISION IMG/Series NVR.png"
  },
   {
    title: "DS-7608NXI-I2/8P/S AcuSense Series NVR",
    description: "A network video-recorder with AI functionality and can offer up to 8 channel input. Product Description: With built-in analytics, Hikvision’s Network Video Recorders (NVRs) provide advanced artificial intelligence capabilities for",
    image: "/src/assets/image/HIKVISION IMG/Acusense Series NVR.png"
  },
  {
    title: "DS-2CD2143G2-I(S) 4MP AcuSense Fixed Dome Network Camera",
    description: "A dome-shaped surveillance camera that can accurately detect human or vehicle motion/target. Product Description: Empowered by deep learning algorithms, Hikvision AcuSense technology brings human and vehicle targets classification alarms to",
    image: "/src/assets/image/HIKVISION IMG/4MP AcuSense Fixed Dome Network.jpg"
  },
  {
    title: "DS-2CD2083G2-I(U) 8MP AcuSense Fixed Bullet Network Camera",
    description: "A bullet-style surveillance camera that can accurately detect human or vehicle motion/target. Product Description: Empowered by deep learning algorithms, Hikvision AcuSense technology brings human and vehicle targets classification alarms to",
    image: "/src/assets/image/HIKVISION IMG/8MP AcuSense Fixed Bullet Network.jpg"
  },
  {
    title: "DS-2DE4225IW-DE(T5) 2MP 25 x Network IR Speed Dome Camera",
    description: "Designed for outdoor use, this surveillance dome camera has 25x optical zoom lens to capture expansive areas.  Product Description: Hikvision DS-2DE4225IW-DE(T5) 2MP 25× Network IR Speed Dome adopts 1/2.8″ progressive",
    image: "/src/assets/image/HIKVISION IMG/Network IR Speed Dome Camera.png"
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

const Hikvision = () => {
  return (
    <div className="bg-[#e9eff6] min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* Changed from font-black to font-normal/medium */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-medium text-[#0d3874] mb-6 tracking-tight">
           CCTVs – Hikvision
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
        </header>

        {/* Responsive Grid with improved spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {HikvisionProducts.map((p, idx) => (
            <ProductCard key={idx} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hikvision;