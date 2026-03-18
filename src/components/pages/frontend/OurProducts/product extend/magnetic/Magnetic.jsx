import React from 'react';
import { NavLink } from 'react-router-dom';

const MagneticProducts = [
  {
    title: "Terminal-MS, -MH -ML",
    description: "A supplementary with Magnetic barriers, these terminals provide tickets for vehicles entering or exiting the vicinity.  Description:MS, MH and ML Terminals are the optimum functional and de- sign supplements for",
    image: "/src/assets/image/MAGNETIC IMG/Terminal.jpg",
    detailRoute: "/our-products/magnetic/terminal-ms"
  },
  {
    title: "Toll Barrier",
    description: "Designed for toll areas, these gate barriers are fast and efficient. Description:Rapid, reliable, and economical processing of road users is essential when collecting toll charges at bridges, tunnels and on motorways. CASS Toll Barrier is designed to meet the needs of toll operators, providing a fast and efficient solution for toll collection.",
    image: "/src/assets/image/MAGNETIC IMG/Toll Barrier.jpg",
    detailRoute: "/our-products/magnetic/toll-barrier"
  },
  {
    title: "Access XL2/ XXL Barriers for Wide Lanes",
    description: "A high-security parking control with optional boom skirts designed for car parks. Description:With its barrier width of up to 10 m and the optional security grating or security grating with",
    image: "/src/assets/image/MAGNETIC IMG/Access XL2.jpg",
    detailRoute: "/our-products/magnetic/barriers-for-wide-lanes"
  },
  {
    title: "Access Pro-L/ Pro-H",
    description: "A high-security parking control with optional boom skirts designed for car parks. Description:At the entrances of companies, building sites, port facilities and other secured areas – the Access Pro-H from",
    image: "/src/assets/image/MAGNETIC IMG/Access.jpg",
    detailRoute: "/our-products/magnetic/access-pro-l"
  },
  {
    title: "Access Pro/ Pro-M",
    description: "An economical access control with an l-shaped boom suitable for car parks or company grounds. Description:These access barriers from Magnetic are cost-optimized solutions for access control at car parks, company",
    image: "/src/assets/image/MAGNETIC IMG/Access-Pro.jpg",
    detailRoute: "/our-products/magnetic/access-pro"
  },
  {
    title: "Magnetic Parking/ Parking-M",
    description: "Designed for heavily frequented parking facilities, this parking barrier has an optional folding boom. Description:In a multi-storey car park or an underground garage, Parking barriers from Magnetic are the ideal",
    image: "/src/assets/image/MAGNETIC IMG/Magnetic.jpg",
    detailRoute: "/our-products/magnetic/magnetic-parking"
  },
  {
    title: "MPS Wing Gate",
    description: "Swing door in timeless design for use in high-quality environments with low to medium visitor frequencies. Description:The visible elements of the MPS are reduced to a minimum. Because the control",
    image: "/src/assets/image/MAGNETIC IMG/MPS Wing.jpg",
    detailRoute: "/our-products/magnetic/wing-gate"
  },
  {
    title: "MPP Turnstiles",
    description: "This passageway is ideal for division and management of large number of people  such as public pools or sports stadiums. Description:At swimming pools, sports stadiums or public toilets – MPP",
    image: "/src/assets/image/MAGNETIC IMG/MPP.jpg",
    detailRoute: "/our-products/magnetic/mpp-turnstiles"
  },
  {
    title: "MPW Swing Gates",
    description: "Allows rapid separation of visitors, designed with enlarged widths to allow transport of people and materials. Description:For access control, steering visitors, and passage into secured areas – MPW swing gates",
    image: "/src/assets/image/MAGNETIC IMG/MPW Swing.jpg",
    detailRoute: "/our-products/magnetic/mpw-swing-gates"
  },
  {
    title: "MPR Retractable Gates",
    description: "Designed for multiple entries and rapid separation of visitors in low-to-medium security areas. Description:For access control, steering visitors, and passage into secured areas – MPR retractable gates are the ideal",
    image: "/src/assets/image/MAGNETIC IMG/MPR Retractable.jpg",
    detailRoute: "/our-products/magnetic/retractable-gates"
  },
  {
    title: "MWing Pedestrian Passageway with Wing Gates",
    description: "A high-security yet elegant pedestrian passageway that  allows non-contact passage.  Description:High visitor numbers, wheelchair-friendly access, escape routes during emergencies – a single gate is often insufficient to meet all the",
    image: "/src/assets/image/MAGNETIC IMG/MWING.png",
    detailRoute: "/our-products/magnetic/pedestrian-passageway-with-wing-gates"
  },
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

const Magnetic = () => {
  return (
    <div className="bg-[#e9eff6] min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* Changed from font-black to font-normal/medium */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-figtree text-[#0d3874] mb-6 tracking-tight">
             Vehicle Barrier System and Pedestrian Barriers – Magnetic
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
        </header>

        {/* Responsive Grid with improved spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MagneticProducts.map((item, idx) => (
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

export default Magnetic;