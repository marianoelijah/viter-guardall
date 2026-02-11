import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Premium Client Card Component
 * Optimized for slider layout
 */
const ClientCard = ({ name, src }) => (
  <div className="flex-[0_0_280px] min-w-0 pl-6 md:pl-10 group">
    <div className="relative flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-slate-100 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2 h-48">
      <div className="w-full h-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <img 
          src={src} 
          alt={name} 
          className="max-h-full max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
        />
      </div>
      {/* Label that slides up on hover */}
      <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-center">
        <span className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase">
          {name}
        </span>
      </div>
    </div>
  </div>
);

/**
 * Slider Section Component
 * Handles the Carousel logic and Navigation toggles
 */
const ClientSection = ({ title, clients }) => {
  // Slow autoplay configuration for a "prestigious" feel
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'start',
      containScroll: 'trimSnaps'
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="mb-24 last:mb-0">
      {/* Header with Navigation Controls */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-6 flex-grow">
          <div className="h-10 w-1 bg-[#2257a0] rounded-full"></div>
          <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight uppercase">
            {title}
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-slate-200 to-transparent"></div>
        </div>

        <div className="flex gap-2 ml-4">
          <button 
            onClick={scrollPrev}
            className="p-2.5 rounded-full border border-slate-200 text-slate-400 hover:bg-[#2257a0] hover:text-white hover:border-[#2257a0] transition-all duration-300 active:scale-90"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={scrollNext}
            className="p-2.5 rounded-full border border-slate-200 text-slate-400 hover:bg-[#2257a0] hover:text-white hover:border-[#2257a0] transition-all duration-300 active:scale-90"
            aria-label="Next Slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Viewport Area */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex -ml-6 md:-ml-10">
          {clients.map((client, idx) => (
            <ClientCard key={idx} {...client} />
          ))}
        </div>
      </div>
    </div>
  );
};

const GuardAllLanding = () => {
  const sectors = {
    agencies: [
      { img: '/src/assets/image/singapore.png', name: 'Embassy of Singapore' },
      { name: 'British Embassy Manila', img: '/src/assets/image/british.png' },
      { name: 'CAA Philippines', img: '/src/assets/image/caa.png' },
      { name: 'Australian Embassy', img: '/src/assets/image/australian.png' },
      { name: 'Ambassade de France', img: '/src/assets/image/ambassade.png' },
      { name: 'Manila Int. Airport Authority', img: '/src/assets/image/manila.png' },
      { name: 'Presidential Security Group', img: '/src/assets/image/presidential.png' },
      { name: 'GSIS', img: '/src/assets/image/gsis.png' },
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
    <div className="min-h-screen bg-[#f8fafc] py-20 px-6 md:px-12 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Modern Brand Header */}
        <header className="text-center mb-32 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-[6rem] md:text-[12rem] font-black select-none pointer-events-none whitespace-nowrap">
            GUARD-ALL
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#2257a0] mb-6 drop-shadow-sm tracking-tight">
            Our Clients
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Delivering <span className="text-blue-600 font-semibold underline underline-offset-4 decoration-blue-200">uncompromising security excellence</span> to the nation's most critical institutions.
          </p>
        </header>

        {/* Dynamic Slider Sections */}
        <ClientSection title="Agencies & Embassies" clients={sectors.agencies} />
        <ClientSection title="Finance & Banking" clients={sectors.finance} />
        <ClientSection title="Health & Research" clients={sectors.health} />
        <ClientSection title="Premier Properties" clients={sectors.properties} />

        {/* Footer Branding */}
        <footer className="mt-32 pt-16 border-t border-slate-200 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-[2px] bg-blue-600"></div>
            <p className="text-slate-400 text-xs tracking-[0.4em] uppercase font-bold">
              Trusted by Excellence • Secure by Design
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default GuardAllLanding;