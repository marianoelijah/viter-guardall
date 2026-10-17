import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGE_BASE_URL = import.meta.env.VITE_API_URL;

const ClientCard = ({ name, logo_path }) => (
  <div className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 md:pl-8 group">
    <div className="relative flex flex-col items-center justify-center p-6 md:p-10 bg-white dark:bg-[#1e1e22] rounded-3xl border border-slate-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/15 dark:hover:shadow-gray-900/50 transition-all duration-500 transform hover:-translate-y-3 h-56 md:h-64">
      <div className="w-full h-28 md:h-32 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
        <img 
          src={`${IMAGE_BASE_URL}${logo_path}`} 
          alt={name} 
          className="max-h-full max-w-full object-contain filter grayscale-[0.2] dark:brightness-110 group-hover:grayscale-0 duration-700"
          onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Logo+Missing"; }}
        />
      </div>
      <div className="absolute bottom-4 md:bottom-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-center px-4">
        <span className="text-xl md:text-lg font-extrabold tracking-[0.25em] text-blue-600 dark:text-blue-400 uppercase block leading-tight">
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
          <div className="h-8 md:h-10 w-1 bg-[#2257a0] dark:bg-blue-400 rounded-full"></div>
          <h2 className="text-lg md:text-2xl font-black text-slate-800 dark:text-gray-100 tracking-tight uppercase truncate">{title}</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-slate-200 dark:from-gray-800 to-transparent"></div>
        </div>
        <div className="flex gap-2 self-end sm:self-auto">
          <button 
            onClick={scrollPrev} 
            className="p-2 md:p-2.5 rounded-full border border-slate-200 dark:border-gray-800 text-slate-400 dark:text-gray-400 hover:bg-[#2257a0] dark:hover:bg-blue-500 hover:text-white transition-all"
            aria-label="Previous Clients"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={scrollNext} 
            className="p-2 md:p-2.5 rounded-full border border-slate-200 dark:border-gray-800 text-slate-400 dark:text-gray-400 hover:bg-[#2257a0] dark:hover:bg-blue-500 hover:text-white transition-all"
            aria-label="Next Clients"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div className="overflow-hidden cursor-grab" ref={emblaRef}>
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
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#c6d3e0] dark:bg-[#121214] text-slate-800 dark:text-gray-200 font-bold transition-colors duration-300">
        Loading Partners...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#c6d3e0] dark:bg-[#121214] py-12 md:py-20 px-4 md:px-12 font-sans overflow-x-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16 md:mb-32 relative">
          <h1 className="text-5xl md:text-7xl font-bold text-[#2257a0] dark:text-blue-400 mb-4 md:mb-6 tracking-tight">
            Our Clients
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-[#ff5f31] hover:text-black dark:hover:text-white mb-4 md:mb-6 tracking-tight transition-colors">
            We trust Guard-All because they are an exclusive system integrators <br/>
            of world-class products to ensure our company gets world-class security.
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