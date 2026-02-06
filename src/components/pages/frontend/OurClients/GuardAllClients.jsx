import React from 'react';

// Reusable Client Card Component
const ClientCard = ({ name, src }) => (
  <div className="group relative flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-100 hover:border-blue-400 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
    <div className="w-full h-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
      <img 
        src={src} 
        alt={name} 
        className="max-h-full max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
      />
    </div>
    <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase text-center px-2">
        {name}
      </span>
    </div>
  </div>
);

// Section Header Component
const SectionHeader = ({ title }) => (
  <div className="flex items-center gap-4 mb-10">
    <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
    <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-wider uppercase">
      {title}
    </h2>
    <div className="h-[1px] flex-grow bg-slate-200"></div>
  </div>
);

const GuardAllClients = () => {
  const allSectors = {
    agencies: [
      { name: 'Embassy of Singapore', src: '/src/assets/image/Group-46.png' },
      { name: 'British Embassy Manila', src: '/src/assets/image/Group-47.png' },
      { name: 'CAA Philippines', src: '/src/assets/image/Group-48.png' },
      { name: 'Australian Embassy', src: '/src/assets/image/Group-49.png' },
    ],
    finance: [
      { name: 'Sun Life Financial', src: '/src/assets/image/sunlife.png' },
      { name: 'HSBC', src: '/src/assets/image/hsbc.png' },
      { name: 'Standard Chartered', src: '/src/assets/image/standard.png' },
      { name: 'Security Bank', src: '/src/assets/image/securitybank.png' },
    ],
    health: [
      { name: 'Unilab', src: '/logos/unilab.png' },
      { name: 'Zuellig Pharma', src: '/logos/zuellig.png' },
      { name: 'DOH - RITM', src: '/logos/ritm.png' },
      { name: 'Oak Ridge National Laboratory', src: '/logos/oakridge.png' },
      { name: 'Pacific Northwest National Laboratory', src: '/logos/pnnl.png' },
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Page Header */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-black text-[#2257a0] mb-4">
            Our Clients
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We trust <span className="text-blue-700 font-bold underline decoration-blue-200 underline-offset-4">Guard-All</span> because they ensure our facilities 
            receive world-class security through exclusive global partnerships.
          </p>
        </div>

        {/* Agencies Section */}
        <div className="mb-20">
          <SectionHeader title="Agencies & Embassies" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {allSectors.agencies.map((c, i) => <ClientCard key={i} {...c} />)}
          </div>
        </div>

        {/* Finance Section */}
        <div className="mb-20">
          <SectionHeader title="Finance" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {allSectors.finance.map((c, i) => <ClientCard key={i} {...c} />)}
          </div>
        </div>

        {/* Health & Research Section */}
        <div className="mb-20">
          <SectionHeader title="Health & Research" />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {allSectors.health.map((c, i) => <ClientCard key={i} {...c} />)}
          </div>
        </div>

      </div>
    </div>
  );
};

export default GuardAllClients;