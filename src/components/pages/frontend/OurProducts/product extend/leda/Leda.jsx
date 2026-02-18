import React from 'react';

const LedaProducts = [
  {
    title: "SecuraPost Slimline Lighting Bollard: Urban Square Light",
    description: "A sleek bollard designed to seamlessly blend with the surrounding while still providing light at night.  Description:Leda’s Lighting Bollards range was developed to complement models in the existing range of",
    image: "/src/assets/image/LEDA IMG/Urban Square Light.jpg"
  },
  {
    title: "SecuraPost Slimline Lighting Bollards",
    description: "Sleek and modern bollards made with stainless steel and have a lighting function at night.  Description:Leda’s Lighting Bollards range was developed to complement models in the existing range of Architectural",
    image: "/src/assets/image/LEDA IMG/Slimline Lighting Bollards.jpg"
  },
  {
    title: "SecuraPost Ambassador Aluminum Bollard",
    description: "Made with corrosion-resistant aluminum, these high-security bollards are ideal for traffic control. Description:Leda’s Securapost aluminum bollards are suitable for casting into both traditional and modern shapes. Aluminum provides an excellent",
    image: "/src/assets/image/LEDA IMG/Ambassador Aluminum Bollard.jpg"
  },
  {
    title: "SecuraPost Slimline Bollard",
    description: "An aesthetically attractive removable bollard made with stainless steel. Description:Leda stainless steel bollards are normally manufactured from Grade 304 material. Grade 316 is available if specified, and is recommended for",
    image: "/src/assets/image/LEDA IMG/Slimline Bollard.jpg"
  },
  {
    title: "SecuraPost Sentinel Bollard",
    description: "A removable and lockable bollard designed to protect factories, warehouses, and shopfronts from ram-raid style attacks. Description:Securapost Sentinel locking and removable bollard provides roller door security for factories and warehouses.",
    image: "/src/assets/image/LEDA IMG/Sentinel Bollard.jpg"
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

const Leda = () => {
  return (
    <div className="bg-[#e9eff6] min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* Changed from font-black to font-normal/medium */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-medium text-[#0d3874] mb-6 tracking-tight">
             Vehicle Barrier System and Pedestrian Barriers – Leda
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
        </header>

        {/* Responsive Grid with improved spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {LedaProducts.map((p, idx) => (
            <ProductCard key={idx} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leda;