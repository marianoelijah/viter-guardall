import React from 'react';

const GilardoniProducts = [
  {
    title: "FEP CARGO",
    description: "Designed for screening pallets and large packages, this x-ray system is suitable for high-security cargos. Description: The new FEP ME CARGO DV is a multi-energy X-ray system suitable for screening",
    image: "/src/assets/image/GILARDONI IMG/FEP CARGO.png"
  },
  {
    title: "FEP CARGO DV",
    description: "Designed for cargo and large object screening, this x-ray inspection system provides dual view images. Description: The new FEP ME CARGO DV is a multi-energy X-ray system suitable for the",
    image: "/src/assets/image/GILARDONI IMG/FEP CARGO DV.png"
  },
  {
    title: " FEP 1000",
    description: "An x-ray system designed for large baggage and cargo screening. Description: One of the larger X ray machines that Gilardoni manufacturer, the ME 1000 has a belt height of 376mm",
    image: "/src/assets/image/GILARDONI IMG/FEP 1000.png"
  },
  {
    title: "FEP 1000 HC DV",
    description: "This high-performance x-ray is designed for hold baggage screening, giving dual-view images for enhanced threat detection.  Description: New hold luggage inspection system for large baggage and medium to large parcels.",
    image: "/src/assets/image/GILARDONI IMG/FEP 1000 HC DV.png"
  },
  {
    title: " FEP 640 X-Ray",
    description: "A versatile, multi-energy x-ray system designed for inspecting baggage and parcels capable of detecting dangerous objects. Description: Metal detector Gilardoni FEP ME 640. The ideal solution for hand baggage and",
    image: "/src/assets/image/GILARDONI IMG/FEP 640 XRAY.png"
  },
  {
    title: "FEP 640 AMX",
    description: "A multi-energy x-ray system designed for aviation security checkpoints; can detect explosives, narcotics, and weapons. Description: FEP ME 640 AMX – Advanced Multiview X-ray – introduces multiview technology for hand",
    image: "/src/assets/image/GILARDONI IMG/FEP 640 AMX.png"
  },
  {
    title: "BREVA TRS: BREVA Automatic Tray Return System",
    description: "An advanced tray handling system that can be perfectly integrated with X-ray baggage screening machines with the aim of facilitating the work of airport security staff. Description: TRS BREVA is",
    image: "/src/assets/image/GILARDONI IMG/BREVA TRS.png"
  },
  {
    title: "ARGO 640: Single View Hand Baggage X-Ray Scanner",
    description: "Offers high-performance security screening using advanced algorithms to generate detailed images for accurate threat detection. Description: ARGO 640 is designed to examine baggage, mails and parcels at the entrance to",
    image: "/src/assets/image/GILARDONI IMG/ARGO 640.png"
  },
  {
    title: "ARGO 640DV: Dual View Hand Baggage X-Ray Scanner",
    description: "A compact x-ray inspection system that delivers dual-view imaging, providing comprehensive threat detection. Description: ARGO 640 DV is designed to examine baggage, mails and parcels at the entrance to delimited",
    image: "/src/assets/image/GILARDONI IMG/ARGO 640DV.png"
  },
   {
    title: "ARGO 536: Single View Hand Baggage X-Ray Scanner",
    description: "A compact x-ray inspection system that provides high-level security screening for baggage and parcels, best suitable for buildings with limited spaces. Description: ARGO 536 is designed to examine baggage, mails",
    image: "/src/assets/image/GILARDONI IMG/ARGO 536.png"
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
    <div className="mt-4 px-2">
       <button className="text-blue-600 font-semibold text-xs uppercase tracking-wider group-hover:underline">
          View Details →
       </button>
    </div>
  </div>
);

const Alarm = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Hardware Collection</span> */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-figtree text-[#0d3874] mb-6 tracking-tight">
            Detection Systems - Gilardoni
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </header>
        
        {/* Improved Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {GilardoniProducts.map((p, idx) => (
            <ProductCard key={idx} {...p} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Alarm;