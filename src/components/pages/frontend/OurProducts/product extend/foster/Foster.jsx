import React from 'react';

const FosterProducts = [
  {
    title: " VSC9000",
    description: "A high-performance optical system that enables multi-spectral examinations of documents to reveal and identify tampering or manipulation. Product Description: Equipped with a high-performance optical and illumination system, the VSC9000 enables",
    image: "/src/assets/image/FOSTER IMG/VSC-9000.jpg"
  },
  {
    title: "VSC80i",
    description: "A touch screen workstation that provides a complete examination of secure travel and identity documents.   Product Description: The VSC®80i is fully integrated workstation that provides a complete solution to the",
    image: "/src/assets/image/FOSTER IMG/VSC80i.jpg"
  },
  {
    title: "DCS 5: FINGERPRINT IMAGING WORKSTATION",
    description: "A comprehensive imaging system for any type of fingerprint on any surface or background, ensuring that maximum detail is revealed. Product Description: DCS 5 is a comprehensive imaging system for",
    image: "/src/assets/image/FOSTER IMG/DCS-5.jpg"
  },
  {
    title: "CRIME-LITE X",
    description: "A handheld, multi-spectral LED light source that helps examiners to seamlessly switch between various light options during an examination of a crime scene.  Product Description: A complete ALS kit in",
    image: "/src/assets/image/FOSTER IMG/Crime-Lite-X.jpg"
  },
   {
    title: "CRIME-LITE AUTO",
    description: "A semi-automated evidence screening tool with a complete, all-in-one solution for the detection and imaging of evidence. Product Description: Combining the latest forensic imaging technology with high- intensity multi-spectral illumination,",
    image: "/src/assets/image/FOSTER IMG/Crime-Lite-Auto.jpg"
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

const Foster = () => {
  return (
    <div className="bg-[#e9eff6] min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* Changed from font-black to font-normal/medium */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-medium text-[#0d3874] mb-6 tracking-tight">
           Forensic Examination – Foster + Freeman
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
        </header>

        {/* Responsive Grid with improved spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FosterProducts.map((p, idx) => (
            <ProductCard key={idx} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Foster;