import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGE_BASE_URL = import.meta.env.VITE_API_URL;

const ClientCard = ({ name, logo_path }) => (
  // Changed flex-[0_0_340px] to percentage-based widths per breakpoint
  <div className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 md:pl-8 group">
    <div className="relative flex flex-col items-center justify-center p-6 md:p-10 bg-white rounded-3xl border border-slate-100 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500 transform hover:-translate-y-3 h-56 md:h-64">
      <div className="w-full h-28 md:h-32 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
        <img 
          src={`${IMAGE_BASE_URL}${logo_path}`} 
          alt={name} 
          className="max-h-full max-w-full object-contain filter grayscale-[0.2] group-hover:grayscale-0 duration-700"
          onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Logo+Missing"; }}
        />
      </div>
      <div className="absolute bottom-4 md:bottom-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-center px-4">
        <span className="text-[10px] md:text-[11px] font-extrabold tracking-[0.25em] text-blue-600 uppercase block leading-tight">
          {name}
        </span>
      </div>
    </div>
  </div>
);

const ClientSection = ({ title, clients }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', containScroll: 'trimSnaps' },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="mb-16 md:mb-24 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-10 gap-4">
        <div className="flex items-center gap-4 md:gap-6 flex-grow">
          <div className="h-8 md:h-10 w-1 bg-[#2257a0] rounded-full"></div>
          <h2 className="text-lg md:text-2xl font-black text-slate-800 tracking-tight uppercase truncate">{title}</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-slate-200 to-transparent"></div>
        </div>
        <div className="flex gap-2 self-end sm:self-auto">
          <button onClick={scrollPrev} className="p-2 md:p-2.5 rounded-full border border-slate-200 text-slate-400 hover:bg-[#2257a0] hover:text-white transition-all"><ChevronLeft size={18} /></button>
          <button onClick={scrollNext} className="p-2 md:p-2.5 rounded-full border border-slate-200 text-slate-400 hover:bg-[#2257a0] hover:text-white transition-all"><ChevronRight size={18} /></button>
        </div>
      </div>
      <div className="overflow-hidden cursor-grab" ref={emblaRef}>
        {/* Adjusted negative margins to match the padding of cards on mobile */}
        <div className="flex -ml-4 md:-ml-8">
          {clients.map((client) => <ClientCard key={client.id} {...client} />)}
        </div>
      </div>
    </div>
  );
};

const GuardAllLanding = () => {
  const [groupedClients, setGroupedClients] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${IMAGE_BASE_URL}/api/clients`)
      .then(res => res.json())
      .then(data => {
        const groups = data.reduce((acc, client) => {
          (acc[client.sector] = acc[client.sector] || []).push(client);
          return acc;
        }, {});
        setGroupedClients(groups);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false); // prevent infinite loading state on error
      });
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-slate-800 font-bold">Loading Partners...</div>;

  return (
    <div className="min-h-screen bg-[#c6d3e0] py-12 md:py-20 px-4 md:px-12 font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16 md:mb-32 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 text-[4rem] sm:text-[8rem] md:text-[12rem] font-black select-none pointer-events-none whitespace-nowrap">
            GUARD-ALL
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#2257a0] mb-4 md:mb-6 tracking-tight">
            Our Clients
          </h1>
          <p className="text-black max-w-3xl mx-auto text-xl md:text-2xl">
            We trust Guard-All because they are an exclusive system integrators of world-class
            products to ensure our company gets world-class security
          </p>
        </header>

        {Object.entries(groupedClients).map(([sectorName, clients]) => (
          <ClientSection key={sectorName} title={sectorName} clients={clients} />
        ))}
      </div>
    </div>
  );
};

export default GuardAllLanding;