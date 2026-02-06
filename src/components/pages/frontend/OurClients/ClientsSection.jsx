import React from 'react';

const ClientsSection = () => {
  const allClients = [
    // From first image
    { name: 'Embassy of Singapore', src: '/src/assets/image/Group-46.png' },
    { name: 'British Embassy Manila', src: '/src/assets/image/Group-47.png' },
    { name: 'CAA Philippines', src: '/src/assets/image/Group-48.png' },
    { name: 'Australian Embassy', src: '/src/assets/image/Group-49.png' },
    // Added from second image
    { name: 'Ambassade de France', src: '/src/assets/image/france.png' },
    { name: 'Manila International Airport Authority', src: '/src/assets/image/mnl.png' },
    { name: 'Presidential Security Group', src: '/src/assets/image/psg.png' },
    { name: 'GSIS', src: '/src/assets/image/gsis.png' },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white min-h-screen font-sans">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Main Header with Enhanced Hover */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#2257a0] mb-4 transition-all duration-300 hover:tracking-tight hover:text-blue-800 cursor-default">
          Our Clients
        </h1>
        
        <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg leading-relaxed hover:text-gray-800 transition-colors duration-300">
          We trust Guard-All because they are an exclusive distributor of world-class products 
          to ensure our company gets world-class security.
        </p>

        <div className="relative flex items-center mb-8">
            <div className="flex-grow border-t border-gray-200"></div>
            <h2 className="px-6 text-2xl md:text-3xl font-bold text-gray-700 uppercase tracking-widest">
              Agencies & Embassies
            </h2>
            <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Logo Carousel Container */}
        <div className="flex items-center gap-2 md:gap-6">
          
          {/* Nav Button - Left */}
          <button className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#2257a0] text-white shadow-md hover:bg-blue-800 hover:scale-110 transition-all active:scale-95">
            <span className="text-xl font-bold">❮</span>
          </button>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 flex-grow py-4">
            {allClients.map((client, index) => (
              <div 
                key={index} 
                className="group relative flex flex-col items-center justify-center transition-all duration-500"
              >
                {/* Logo Wrapper */}
                <div className="w-full h-32 flex items-center justify-center p-2 transform group-hover:scale-110 group-hover:-translate-y-3 transition-all duration-300 ease-out">
                  <img 
                    src={client.src} 
                    alt={client.name} 
                    className="max-h-full max-w-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
                
                {/* Text Hover Effect (Hidden by default, fades in) */}
                <p className="mt-4 text-xs font-semibold text-[#2257a0] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {client.name}
                </p>
              </div>
            ))}
          </div>

          {/* Nav Button - Right */}
          <button className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#2257a0] text-white shadow-md hover:bg-blue-800 hover:scale-110 transition-all active:scale-95">
            <span className="text-xl font-bold">❯</span>
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;