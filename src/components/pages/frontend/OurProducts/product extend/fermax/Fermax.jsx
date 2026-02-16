import React from 'react';

const FermaxProducts = [
  {
    title: "WIT 10” HOME AUT. MONITOR POE BLACK MEET",
    description: "With sleek black design and large 10-inch touchscreen display, this device offers a comprehensive solution for video door entry and home control automation. Product Description: WIT is a monitor with",
    image: "/src/assets/image/FERMAX IMG/WIT_10in_HOME_AUT.png"
  },
  {
    title: " WIT 7”  MONITOR POE BLACK MEET",
    description: "A functional video door entry solution with Power over Ethernet (POE). It has a sleek black design, a 7-inch touch display, and clear video communication. Product Description: WIT is a",
    image: "/src/assets/image/FERMAX IMG/WIT_7 monitor.png"
  },
  {
    title: "NEO 7” MONITOR POE WHITE MEET",
    description: "This modern and easy-to-install video door entry solution has a 7-inch color touchscreen display for easy operation and intuitive control. It has Power over Ethernet (POE). Product Description: The NEO",
    image: "/src/assets/image/FERMAX IMG/NEO-7 monitor.png"
  },
  {
    title: "MILO TOUCH DIGITAL VIDEO PANEL",
    description: "A combination of sleek design and advanced functionality, this video & audio door panel features a 7-inch touchscreen for clear communication with visitors. Product Description: The MILO board comes in",
    image: "/src/assets/image/FERMAX IMG/MILO-TOUCH-DIGITAL.png"
  },
  {
    title: "MEET DESKTOP GUARD UNIT",
    description: "A versatile intercom system with 7-inch touchscreen. It is designed for concierge desks or guard posts for easier communication with visitors. Product Description: The CONCIERGE has a 10″ capacitive screen.",
    image: "/src/assets/image/FERMAX IMG/MEET-DESKTOP-GUARD.png"
  },
  {
    title: "MARINE DIGITAL VIDEO PANEL MEET",
    description: "This vandal-proof door and video entry system has a stainless steel finish to withstand harsh weather conditions. Product Description: The MARINE MEET panel is FERMAX’s vandal-proof door entry and video",
    image: "/src/assets/image/FERMAX IMG/MARINE-DIGITAL-VIDEO.png"
  },
  {
    title: "KIN TOUCH PANEL MEET",
    description: "This video & audio panel features a 7-inch capacitive touch screen for easy operation. It offers clear video and audio communication with convenient controls. Product Features/ Specifications: Technical Specification: System",
    image: "/src/assets/image/FERMAX IMG/KIN_TOUCH_PANEL_MEET.png"
  },
  {
    title: " 1W MILO VIDEO PANEL WITH PROX MEET",
    description: "More than just a video & audio door entry, this sleek and compact system has a built-in proximity reader for keyless entry. Product Features/ Specifications: Technical Specification: System CPU: ARM",
    image: "/src/assets/image/FERMAX IMG/1W-MILO-VIDEO-PANEL.png"
  },
  {
    title: "1/W MILO VIDEO PANEL BLACK MEET",
    description: "A video & audio door entry system with compact design and black finish. It is designed for single-family homes and small buildings. Product Features/ Specifications: Technical Specification: System CPU: ARM",
    image: "/src/assets/image/FERMAX IMG/1W-MILO-VIDEO-PANEL-BLACK-MEET.png"
  },
  {
    title: "DUOX PLUS VEO TELEPHONE",
    description: "A complete solution for homes and small buildings, this audio door entry system allows clear two-way communication with visitors. It has adjustable volume and call tone selection. Product Description: The",
    image: "/src/assets/image/FERMAX IMG/TELEFONOVEODUO.png"
  },
  {
    title: "iLOFT TELEPHONE VDS EXTRA",
    description: "A minimalist and highly-functional audio door entry system that offers hands-free communication and high-quality sound. It is an easy to fit wall mounted installation. Product Description: The iLoft telephone is",
    image: "/src/assets/image/FERMAX IMG/ILOFT TELEPHONE.png"
  },
  {
    title: "DUOX PLUS VEO WIFI 4.3” MONITOR",
    description: "Suitable for homes and offices, this simple and easy to use video entry monitor has a built-in- WIFI. It allows users to receive calls and manage access control from their",
    image: "/src/assets/image/FERMAX IMG/DUOX PLUS VEO.png"
  },
  {
    title: "MARINE PANEL DUOX PLUS ST1 AP101",
    description: "Made of 2.5mm thick stainless steel, this weather-resistant video door entry panel is designed for outdoor use. It is best to install in areas or properties with extreme conditions or",
    image: "/src/assets/image/FERMAX IMG/MARINE PANEL.png"
  },
  {
    title: "CITY PANEL DUOX PLUS S1 AP201",
    description: "This versatile outdoor panel for video door entry systems offers hands-free communication and wide-angle color camera for clear visitor identification. Product Description: The CityLine Outdoor Panel is a series of",
    image: "/src/assets/image/FERMAX IMG/CITY PANEL.png"
  },
  {
    title: "CITY PANEL DUOX PLUS S1 CP101",
    description: "A compact and stylish outdoor panel for video door entry systems. It is easy to install and allows for two-way, crystal clear communication within the property. Product Description: The CityLine",
    image: "/src/assets/image/FERMAX IMG/CITY PANEL DUOX.png"
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

const Fermax = () => {
  return (
    <div className="bg-[#e9eff6] min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* Changed from font-black to font-normal/medium */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-medium text-[#2257a0] mb-6 tracking-tight">
            Audio-Video Intercom & PA-BGM - Fermax
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
        </header>

        {/* Responsive Grid with improved spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FermaxProducts.map((p, idx) => (
            <ProductCard key={idx} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fermax;