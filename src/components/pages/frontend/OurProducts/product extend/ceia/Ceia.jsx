import React from 'react';

const CeiaProducts = [
  {
    title: "SMD601 Plus:  Most Sensitive Multi-Zone Metal Detector",
    description: "A highly sensitive metal detection system that detects even the smallest metal items anywhere on or in the body.  Description: The SMD601 Plus is a very highly sensitive Walk-Through Metal",
    image: "/src/assets/image/CEIA IMG/SMD601 PLUS.png"
  },
  {
    title: "SMD600 Plus:  Enhanced Walkthrough and Metal Detector",
    description: "A two-in-one metal detector that has high sensitivity and high throughput. Description: The SMD®600 Plus is a very high sensitivity Metal Detector that also offers characteristics of high discrimination and",
    image: "/src/assets/image/CEIA IMG/SMD600 PLUS.png"
  },
  {
    title: "PMD2 Plus/EZHD: Elliptic, Multi-Zone And Heavy Duty Enhanced Metal Detector",
    description: "A walk-through device that quickly detects firearms and knives, even when they are hidden within body cavities.  Description: Strict requirements and detection needs call for security checkpoints to perform efficiently",
    image: "/src/assets/image/CEIA IMG/PMD2 PLUS.png"
  },
  {
    title: "HI-PE Plus: Enhanced Walkthrough Multi-Zone Metal Detector",
    description: "A walk-through detection system that provides accurate detection of all metals and has an exceptional immunity to external interferences. Description: The HI-PE Plus Multi-Zone Metal Detector provides accurate detection of",
    image: "/src/assets/image/CEIA IMG/HIPE PLUS.png"
  },
  {
    title: "OPENGATE®  Weapons Detection System",
    description: "An active walk-through detection system designed for faster screening of backpacks, purses, and bags. Description: OPENGATE is the first and only fully open, active walk-through detection system, composed of two",
    image: "/src/assets/image/CEIA IMG/OPENGATE WEAPONS.png"
  },
  {
    title: "MSDi High-Performance Ferromagnetic Weapons Detector",
    description: "This device can be easily concealed to covertly detect weapons. Description: MSDi has been specifically designed for easy integration of Ferromagnetic Weapons Detection in Covert Access Control. The MSDi’s very",
    image: "/src/assets/image/CEIA IMG/MSDI HIGH PERFORMANCE.jpg"
  },
  {
    title: "MSD Highly Portable Cellphone, Ferrous Weapon, and Contraband Detector",
    description: "An easy-to-carry device designed to detect all cellphones and ferrous contraband, particularly in prisons. Description: The illegal use of cell phones is a growing and dangerous problem in correctional institutions",
    image: "/src/assets/image/CEIA IMG/MSD HIGHLY PORTABLE.png"
  },
  {
    title: "PD240CB Long-Range Hand-Held Metal Detection Set",
    description: "A device with long detection range for weapons and minimum metal targets and has high immunity to external metal masses. Description: The PD240CB is a Hand Held Metal Detector that",
    image: "/src/assets/image/CEIA IMG/PD240CB LONG RANGE.png"
  },
  {
    title: "PD240 Wide Search Area Hand-Held Metal Detection Set",
    description: "This hand-held metal detection device consists of an offset hand grip for a wider search area. Description: The PD240 is a Hand Held Metal Detector that combines high reliability and",
    image: "/src/assets/image/CEIA IMG/PD240 WIDE SEARCH.jpg"
  },
  {
    title: "PD140N Compact Hand-Held Metal Detection Set",
    description: "A highly reliable metal detection device with ergonomic design. Description: The PD140N is a Hand Held Metal Detector that combines high reliability and ergonomics with advanced detection and operator signaling",
    image: "/src/assets/image/CEIA IMG/PD140N COMPACT HAND.png"
  },
  {
    title: "EMIS-MAIL Mail Scanner",
    description: "Mail scanner for the detection of letter bombs and IEDs in small parcels. Description: The EMIS®-MAIL is designed to detect a wide variety of metal threat items including detonators, batteries,",
      image: "/src/assets/image/CEIA IMG/EMIS MAIL.png"
    },
  {
    title: "EMA Liquid Explosive Detector",
    description: "A compact liquid detection device, scanning for possible presence of explosive precursors and exclusive liquids.  Description: The EMA is a compact device designed for the analysis of liquid containers and",
    image: "/src/assets/image/CEIA IMG/EMA LIQUID.png"
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

const Alarm = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Hardware Collection</span> */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-medium text-[#0d3874] mb-6 tracking-tight">
            Detection Systems - Ceia
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </header>
        
        {/* Improved Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {CeiaProducts.map((p, idx) => (
            <ProductCard key={idx} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alarm;