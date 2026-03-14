import React from 'react';
import { NavLink } from 'react-router-dom';

const DetnovProducts = [
  {
    title: "MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs",
    description: "A device ideal for the supervision of any signal for fire control panels.  Description: The MAD-401 and MAD-402 modules are ideal for the supervising of any signal which may require",
    image: "/src/assets/image/DETNOV IMG/MAD-401.png",
    detailRoute: "/our-products/detnov/technical-inputs"
  },
  {
    title: "DOA Series Indicator Light with Buzzer",
    description: "The DOA series indicator lights are signaling devices and acoustic warning by buzzer. Description: The DOA series indicator lights are signaling devices and acoustic warning by buzzer. Due to their",
    image: "/src/assets/image/DETNOV IMG/DOA Series.jpg",
    detailRoute: "/our-products/detnov/indicator-light-with-buzzer"
  },
  {
    title: "TRD-100 Expansion Card of 4 Free Voltage Relay Output",
    description: "An expansion card designed to increase the number of relay outputs of DETNOV’s fire control panels. Description: The TRD-100 expansion card has been designed to increase the number of relay",
    image: "/src/assets/image/DETNOV IMG/Expansion-Cards.jpg",
    detailRoute: "/our-products/detnov/voltage-relay-output"
  },
  {
    title: "Clampbell Fire Alarm Bells",
    description: "An audible alarm that notifies people in case of fire.  Description: Manufactured by Vimpex in the UK, the ClamBell® EN54-3 approved fire bell incorporates traditional and innovative design. The hinged",
    image: "/src/assets/image/DETNOV IMG/Clambell Fire Alarm.jpg",
    detailRoute: "/our-products/detnov/clampbell-fire-alarm"
  },
   {
    title: "DOTD-230 Conventional Dual Heat & Smoke Detector",
    description: "Designed to detect both heat and smoke signals, allowing for early detection of fire. Description: Detnov’s complete range of 200 series detectors allow reliable fire detection thanks to its advanced",
    image: "/src/assets/image/DETNOV IMG/DOTD-230A-768x755.png",
    detailRoute: "/our-products/detnov/heat-and-smoke-detector"
  },
  {
    title: "CCD-102 Conventional Control Panel Series",
    description: "A fire control panel ideal for small and medium installations.  Description: The range of conventional fire detection control panels of Detnov CCD-100 series have been certified according to EN 54-2,",
    image: "/src/assets/image/DETNOV IMG/CAD-150-1_new-768x1149.png",
    detailRoute: "/our-products/detnov/conventional-control-panel"
  },
  {
    title: "TED-151-2PE Multi-Purpose Communication Card",
    description: "A multi-purpose communication card compatible with conventional control panels.  Description: The TED-151-2PE multi-purpose communication card is compatible with conventional CCD-100 control panels and CAD-150 analogue control panels. It provides the",
    image: "/src/assets/image/DETNOV IMG/TED 151.jpg",
    detailRoute: "/our-products/detnov/multi-pupose-communication-card"
  },
  {
    title: "RP-GS1 Conventional Manual Call Point",
    description: "A resettable manual call point that allows the immediate evacuation in case of fire. Description: The conventional manual call point RP-GS1 is designed to be used as part of the",
    image: "/src/assets/image/DETNOV IMG/Conventional Manual.jpg",
    detailRoute: "/our-products/detnov/manual-call-point"
  },
  {
    title: "PED-221/PED 231 Conventional Beacon Series",
    description: "An audible and visible alarm notification compatible with DETNOV control panels. Description: The PED-2X1 series beacons are conventional beacons compatible with Detnov’s conventional control panels and addressable sounder modules MAD-43X,",
    image: "/src/assets/image/DETNOV IMG/Conventional Beacon Series.png",
    detailRoute: "/our-products/detnov/beacon-series"
  },
  {
    title: "TUL 500EN Monitored Power Supply 24V/5A",
    description: "A 24V auxiliary power supply for large and small installations. Description: Monitored 27.6 V and 5 A switched power supply. Microprocessor controlled with constant monitoring of the power supply and",
    image: "/src/assets/image/DETNOV IMG/Power-Supply-768x768.jpg",
    detailRoute: "/our-products/detnov/monitored-power-supply"
  },
   {
    title: " Z-200/ Z-200H Connection Base/ High Connection Base",
    description: "Connection base for all Detnov’s ranges of conventional and addressable detectors. Description: This base has 4 stainless and metallic contact trips and has been designed to be a low-profile device.",
    image: "/src/assets/image/DETNOV IMG/z200.jpg",
    detailRoute: "/our-products/detnov/connection-base"
  },
  {
    title: "TED-151-CL DETNOV Cloud",
    description: "A cloud solution that allows remote connectivity to maintain fire alarm systems. Description: Detnov Cloud is the solution of remote connectivity settled in the cloud that the maintainers were waiting",
    image: "/src/assets/image/DETNOV IMG/TED 151.jpg",
    detailRoute: "/our-products/detnov/detnov-cloud"
  },
   {
    title: "MAD-464-I Addressable Sounder",
    description: "Designed to warm people in a building to start the evacuation procedure if necessary.  Description: The range of addressable sounders MAD-46X-I has been designed to be used with Detnov’s addressable",
    image: "/src/assets/image/DETNOV IMG/MAD-464.png",
    detailRoute: "/our-products/detnov/addressable-sounder"
  },
  {
    title: "PGD-201 Address Programmer",
    description: "A tool that is used to assign addresses to each device in the loop of fire alarm systems.  Description: The PGD-201 address programmer is an addressable system tool that is",
    image: "/src/assets/image/DETNOV IMG/PGD 201.jpg",
    detailRoute: "/our-products/detnov/address-programmer"
  },
   {
    title: "MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs",
    description: "A device ideal for the supervision of any signal for fire control panels.  Description: The MAD-401 and MAD-402 modules are ideal for the supervising of any signal which may require",
    image: "/src/assets/image/DETNOV IMG/MAD-401 AND MAD 402.png",
    detailRoute: "/our-products/detnov/addressable-modules"
  },
  {
    title: "MAD-451-1 Addressable Manual Call Point With Isolator",
    description: "Designed to indicate the alarms manually to addressable fire detection systems. Description: The MAD-451-I addressable manual call point is designed to be used with Detnov’s addressable fire control panels and",
    image: "/src/assets/image/DETNOV IMG/MAD 451.png",
    detailRoute: "/our-products/detnov/manual-call--point-with-isolator"
  },
   {
    title: "DOD-220A/ DOD-220A-I Addressable Optical Smoke Detector",
    description: "A compact detector  that allows reliable fire detection thanks to its advanced technology. Description: Detnov’s complete range of 200 series detectors allow reliable fire detection thanks to its advanced analysis",
    image: "/src/assets/image/DETNOV IMG/DOD-220.png",
    detailRoute: "/our-products/detnov/optical-smoke-detector"
  },
  {
    title: "CAD-150-2-MB | 2-Loop Addressable Control Panel With Metal Box",
    description: "A fire alarm system ideal for all requirements in medium and large-sized facilities.  Description: The Detnov CAD-150 range of addressable fire alarm systems provides the ideal solution for all requirements",
    image: "/src/assets/image/DETNOV IMG/CAD 150 2 MB.jpg",
    detailRoute: "/our-products/detnov/control-panel-with-metal-box"
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

const Hikvision = () => {
  return (
    <div className="bg-[#e9eff6] min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* Changed from font-black to font-normal/medium */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-figtree text-[#0d3874] mb-6 tracking-tight">
           Fire Alarm – Detnov
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
        </header>

        {/* Responsive Grid with improved spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DetnovProducts.map((item, idx) => (
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

export default Hikvision;