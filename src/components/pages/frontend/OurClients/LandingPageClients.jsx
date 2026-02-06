import React from 'react';

// Reusable Client Card Component
const ClientCard = ({ name, src }) => (
  <div className="group relative flex flex-col items-center justify-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-transparent hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 transform hover:-translate-y-2">
    <div className="w-full h-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
      <img 
        src={src} 
        alt={name} 
        className="max-h-full max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
      />
    </div>
    <span className="mt-4 text-[10px] font-bold tracking-widest text-blue-900/40 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {name}
    </span>
  </div>
);

// Section Component
const ClientCarousel = ({ title, clients }) => (
  <div className="mb-24">
    <div className="flex items-center justify-center mb-12 space-x-8">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-300"></div>
      <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-[0.2em] uppercase">
        {title}
      </h2>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-300"></div>
    </div>

    <div className="relative group/carousel px-4 md:px-12">
      {/* Navigation - Logic can be added here */}
      <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition-all opacity-0 group-hover/carousel:opacity-100">
        ❮
      </button>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {clients.map((client, idx) => (
          <ClientCard key={idx} {...client} />
        ))}
      </div>

      <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition-all opacity-0 group-hover/carousel:opacity-100">
        ❯
      </button>
    </div>
  </div>
);

const LandingPageClients = () => {
  const agencyClients = [
    { name: 'Ambassade de France', src: '/logos/france.png' },
    { name: 'Manila International Airport Authority', src: '/logos/miaa.png' },
    { name: 'Presidential Security Group', src: '/logos/psg.png' },
    { name: 'GSIS', src: '/logos/gsis.png' },
  ];

  const corporateClients = [
    { name: 'PLDT', src: '/logos/pldt.png' },
    { name: 'Smart', src: '/logos/smart.png' },
    { name: 'NGCP', src: '/logos/ngcp.png' },
    { name: 'San Miguel Corporation', src: '/logos/smc.png' },
    { name: 'Samsung Electro-Mechanics', src: '/logos/samsung.png' },
    { name: 'Coca-Cola', src: '/logos/coca-cola.png' },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] py-20 px-4 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#2257a0] mb-6 tracking-tight transition-all hover:tracking-normal cursor-default">
            Our Clients
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-light">
            We trust Guard-All because they are an exclusive distributor of world-class products 
            to ensure our company gets <span className="text-blue-900 font-semibold">world-class security.</span>
          </p>
        </div>

        {/* Agencies Section */}
        <ClientCarousel title="Agencies & Embassies" clients={agencyClients} />

        {/* Corporations Section */}
        <ClientCarousel title="Corporations" clients={corporateClients} />
      </div>
    </div>
  );
};

export default LandingPageClients;