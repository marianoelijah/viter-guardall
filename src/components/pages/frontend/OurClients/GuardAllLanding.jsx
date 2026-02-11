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
      { name: 'Embassy of Singapore', src: '/src/assets/image/agencies img/singapore.png' },
      { name: 'British Embassy Manila', src: '/src/assets/image/agencies img/british.png' },
      { name: 'CAA Philippines', src: '/src/assets/image/agencies img/caa.png' },
      { name: 'Australian Embassy', src: '/src/assets/image/agencies img/australian.png' },
      { name: 'Ambassade de France', src: '/src/assets/image/agencies img/ambassade.png' },
      { name: 'Manila Int. Airport Authority', src: '/src/assets/image/agencies img/manila.png' },
      { name: 'Presidential Security Group', src: '/src/assets/image/agencies img/presidential.png' },
      { name: 'GSIS', src: '/src/assets/image/agencies img/gsis.png' },
    ],
     corporations: [
      { name: 'Samsung Electro Mechanics', src: '/src/assets/image/corporations img/samsung.png' },
      { name: 'Coca-Cola Philippines', src: '/src/assets/image/corporations img/coca-cola.png' },
      { name: 'Marubeni', src: '/src/assets/image/corporations img/marubeni.png' },
      { name: 'Nestle', src: '/src/assets/image/corporations img/nestle.png' },
      { name: 'PLDT', src: '/src/assets/image/corporations img/pldt.png' },
      { name: 'Smart', src: '/src/assets/image/corporations img/smart.png' },
      { name: 'NGCP', src: '/src/assets/image/corporations img/ngcp.png' },
      { name: 'San Miguel Corporation', src: '/src/assets/image/corporations img/san miguel.png' },
    ],
    engineering: [
      { name: 'Egis', src: '/src/assets/image/ecl img/egis.png' },
      { name: 'Hanjin Heavy Indrustries', src: '/src/assets/image/ecl img/hanjin.png' },
      { name: 'ICTS', src: '/src/assets/image/ecl img/icts.png' },
      { name: 'Negros Navigation', src: '/src/assets/image/ecl img/negros.png' },
      { name: 'Holcim', src: '/src/assets/image/ecl img/holcim.png' },
      { name: 'DHL', src: '/src/assets/image/ecl img/dhl.png' },
    ],
    finance: [
      { name: 'Sun Life Financial', src: '/src/assets/image/finance img/sunlife.png' },
      { name: 'HSBC', src: '/src/assets/image/finance img/hsbc.png' },
      { name: 'Standard Chartered', src: '/src/assets/image/finance img/standard.png' },
      { name: 'Security Bank', src: '/src/assets/image/finance img/security-bank.png' },
    ],
    health: [
      { name: 'Unilab', src: '/src/assets/image/h&r img/unilab.png' },
      { name: 'Zuellig Pharma', src: '/src/assets/image/h&r img/zuellig.png' },
      { name: 'DOH - RITM', src: '/src/assets/image/h&r img/doh.png' },
      { name: 'Oak Ridge National Laboratory', src: '/src/assets/image/h&r img/oak-ridge.png' },
      { name: 'Pacific Northwest National Lab', src: '/src/assets/image/h&r img/pacific-northwest.png' },
    ],
    properties: [
      { name: 'PICC', src: '/src/assets/image/properties img/picc.png' },
      { name: 'Solaire Resort Manila', src: '/src/assets/image/properties img/solaire.png' },
      { name: 'Tata Consultancy Services', src: '/src/assets/image/properties img/consultance.png' },
      { name: 'The Peninsula Manila', src: '/src/assets/image/properties img/peninsula-manila.png' },
      { name: 'APMC', src: '/src/assets/image/properties img/apmc.png' },
      { name: 'FIVE | NEO', src: '/src/assets/image/properties img/five-neo.png' },
    ]
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-20 px-6 md:px-12 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto text-xl md:text-2xl text-slate-700  leading-relaxed">
        
        {/* Modern Brand Header */}
        <header className="text-center mb-32 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-[6rem] md:text-[12rem] font-black select-none pointer-events-none whitespace-nowrap">
            GUARD-ALL
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#2257a0] mb-6 drop-shadow-sm tracking-tight">
            Our Clients
          </h1>
          <p className="text-black text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
           We trust Guard-All because they are an exclusive distributor of world-class products to ensure our company gets world-class security
          </p>
        </header>

        {/* Dynamic Slider Sections */}
        <ClientSection title="Agencies & Embassies" clients={sectors.agencies} />
        <ClientSection title="Corporations" clients={sectors.corporations} />
        <ClientSection title="Engineering, Construction & Logistics" clients={sectors.engineering} />
        <ClientSection title="Finance" clients={sectors.finance} />
        <ClientSection title="Health & Research" clients={sectors.health} />
        <ClientSection title="Properties" clients={sectors.properties} />

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