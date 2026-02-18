import React from 'react';

const ActiProducts = [
  {
    title: "INR 415 256-Channel 12 Bay RAID Backmount Standalone",
    description: "A network video recorder that can manage up to 256 channels. Product Features:  Technical Specification: Model INR-415 Maximum Number of Cameras 256 Maximum Number of Clients Local: 1, Remote: 5",
    image: "/src/assets/image/ACTI IMG/Backmount Standalone.png"
  },
  {
    title: "GNR 340 100-Channel Tower Strandalone",
    description: "A network video recorder that can manage up to 72 channels and can be expanded to host 5 HDDs. Product Description:Record from and manage up to 100 cameras with the",
    image: "/src/assets/image/ACTI IMG/Channel Tower Strandalone.png"
  },
  {
    title: "ENR 130 16-Channel Desktop Standalone NVR- No HDD Included",
    description: " high-performance network video recorder that can accommodate up to 16 channels. Product Description:Stream and record up to 16 channels of video with this ACTi ENR-130 4MP/10MP Standalone NVR. The recorder",
    image: "/src/assets/image/ACTI IMG/Channel Desktop Standalone.png"
  },
  {
    title: "Z86 Outdoor Network Dome Camera with Night Vision",
    description: "Designed both for indoor and outdoor use, this surveillance camera has a wide area coverage and two-way audio.  Product Description:Monitor an indoor or outdoor area with the Z86 4MP Network",
    image: "/src/assets/image/ACTI IMG/Outdoor Network Dome Camera.png"
  },
  {
    title: "Z49 4MP Zoom Bullet with D/N, Adaptive IR, Superior WDR, SLLS, 4.3x Lens",
    description: "A bullet-style surveillance camera with Wide Dynamic Range and can trigger notifications/actis to the user.  Product Description:Monitor an indoor or outdoor area with the Z49 4MP Network Bullet Camera from ",
    image: "/src/assets/image/ACTI IMG/Zoom Bullet With DN.png"
  },
  {
    title: "1915 2MP Outdoor PTZ Network Dome Camera with Night Vision and Heater",
    description: "A pan-tilt-zoom surveillance camera that can capture videos up to 60fps. Product Description:The I915 2MP Outdoor PTZ Network Dome Camera with Night Vision & Heaterfrom ACTi has a 1/2.8″ progressive",
    image: "/src/assets/image/ACTI IMG/Outdoor PTZ Network Dome Camera.png"
  },
  {
    title: "B928 5MP Outdoor PTZ Network Speed Dome Camera with Night Vision",
    description: "A pan-tilt-zoom surveillance camera with 36x optical zoom and extreme Wide Dynamic Range for clearer imaging.  Product Description:The B928 5MP Outdoor PTZ Network Speed Dome Camera from ACTi features a",
    image: "/src/assets/image/ACTI IMG/B928- 5MP Outdoor.png"
  },
  {
    title: "A817 8MP Outdoor Network Dome Camera",
    description: "Designed both for indoor and outdoor use, this surveillance camera has a high resolution to clearly capture images even at night.  Product Description:Monitor an indoor or outdoor area with the",
    image: "/src/assets/image/ACTI IMG/A817 8MP Outdoor.png"
  },
  {
    title: "A713 5MP Outdoor Network Fisheye Dome Camera with Night Vision and Heater",
    description: "A high-security surveillance camera with wide area coverage, night vision, and also two-way audio Product Description:Keep a watchful eye over your property with the A713 5MP Outdoor Network Fisheye Dome",
    image: "/src/assets/image/ACTI IMG/A713 5MP Outdoor Network Fisheye.png"
  }
];

const ProductCard = ({ title, description, image }) => (
  <div className="group bg-white border border-gray-200 rounded-xl p-4 flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:border-blue-300">
    <div className="bg-white rounded-lg p-4 mb-4 flex items-center justify-center h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110" 
      />
    </div>
    <div className="flex-grow px-2">
      <h3 className="text-[#1a365d] font-bold text-sm uppercase mb-3 leading-tight group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-xl leading-relaxed">
        {description}
      </p>
    </div>
    {/* <div className="mt-4 px-2">
       <button className="text-blue-600 font-semibold text-xs uppercase tracking-wider group-hover:underline">
          View Details →
       </button>
    </div> */}
  </div>
);

const Acti = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Hardware Collection</span> */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-medium text-[#0d3874] mb-6 tracking-tight">
            CCTVs - ACTi
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </header>
        
        {/* Improved Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {ActiProducts.map((p, idx) => (
            <ProductCard key={idx} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Acti;