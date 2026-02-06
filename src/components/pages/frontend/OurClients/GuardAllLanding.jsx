import React from 'react';

// Unified Client Card with premium hover states
const ClientCard = ({ name, src }) => (
  <div className="group relative flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-slate-100 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 transform hover:-translate-y-2">
    <div className="w-full h-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
      <img 
        src={src} 
        alt={name} 
        className="max-h-full max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
      />
    </div>
    {/* Dynamic Name Label */}
    <div className="absolute bottom-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
      <span className="text-[9px] font-bold tracking-widest text-blue-600 uppercase text-center px-2">
        {name}
      </span>
    </div>
  </div>
);

// Modular Section Wrapper for consistent spacing
const ClientSection = ({ title, clients, cols = "md:grid-cols-4" }) => (
  <div className="mb-24 last:mb-0">
    <div className="flex items-center gap-6 mb-12">
      <div className="h-10 w-1 bg-[#2257a0] rounded-full"></div>
      <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight uppercase">
        {title}
      </h2>
      <div className="h-[1px] flex-grow bg-gradient-to-r from-slate-200 to-transparent"></div>
    </div>

    <div className={`grid grid-cols-2 ${cols} gap-6 md:gap-8`}>
      {clients.map((client, idx) => (
        <ClientCard key={idx} {...client} />
      ))}
    </div>
  </div>
);

const GuardAllLanding = () => {
  const sectors = {
    agencies: [
      { name: 'Embassy of Singapore', src: '/src/assets/image/Group-46.png' },
      { name: 'British Embassy Manila', src: '/src/assets/image/Group-47.png' },
      { name: 'CAA Philippines', src: '/src/assets/image/Group-48.png' },
      { name: 'Australian Embassy', src: '/src/assets/image/Group-49.png' },
      { name: 'Ambassade de France', src: '/src/assets/image/france.png' },
      { name: 'Manila Int. Airport Authority', src: '/src/assets/image/mnl.png' },
      { name: 'Presidential Security Group', src: '/src/assets/image/psg.png' },
      { name: 'GSIS', src: '/src/assets/image/gsis.png' },
    ],
    finance: [
      { name: 'Sun Life Financial', src: '/src/assets/image/sunlife.png' },
      { name: 'HSBC', src: '/src/assets/image/hsbc.png' },
      { name: 'Standard Chartered', src: '/src/assets/image/standard.png' },
      { name: 'Security Bank', src: '/src/assets/image/securitybank.png' },
    ],
    health: [
      { name: 'Unilab', src: '/src/assets/image/unilab.png' },
      { name: 'Zuellig Pharma', src: '/src/assets/image/zuellig.png' },
      { name: 'DOH - RITM', src: '/src/assets/image/ritm.png' },
      { name: 'Oak Ridge National Laboratory', src: '/src/assets/image/oakridge.png' },
      { name: 'Pacific Northwest National Lab', src: '/src/assets/image/pnnl.png' },
    ],
    properties: [
      { name: 'PICC', src: '/src/assets/image/picc.png' },
      { name: 'Solaire Resort Manila', src: '/src/assets/image/solaire.png' },
      { name: 'Tata Consultancy Services', src: '/src/assets/image/tcs.png' },
      { name: 'The Peninsula Manila', src: '/src/assets/image/peninsula.png' },
      { name: 'APMC', src: '/src/assets/image/apmc.png' },
      { name: 'FIVE | NEO', src: '/src/assets/image/fiveneo.png' },
    ]
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-24 px-6 md:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Brand Header */}
        <header className="text-center mb-32 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-[10rem] font-black select-none pointer-events-none whitespace-nowrap">
            GUARD-ALL SECURITY
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#2257a0] mb-6 drop-shadow-sm">
            Our Clients
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Leading the industry by providing exclusive, <span className="text-blue-600 font-bold">world-class security solutions</span> to the most prestigious organizations in the Philippines.
          </p>
        </header>

        {/* Client Sectors */}
        <ClientSection title="Agencies & Embassies" clients={sectors.agencies} />
        <ClientSection title="Finance" clients={sectors.finance} />
        <ClientSection title="Health & Research" clients={sectors.health} cols="lg:grid-cols-5" />
        <ClientSection title="Properties" clients={sectors.properties} cols="lg:grid-cols-3" />

        {/* Simple Call to Action Footer */}
        <footer className="mt-32 pt-12 border-t border-slate-200 text-center">
          <p className="text-slate-400 text-sm tracking-widest uppercase">
            Trusted by Excellence • Secure by Design
          </p>
        </footer>
      </div>
    </div>
  );
};

export default GuardAllLanding;