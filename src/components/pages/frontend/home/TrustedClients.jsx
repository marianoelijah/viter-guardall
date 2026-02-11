import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: 'Smart', logo: '/src/assets/image/Logo2-1-2.png' },
  { name: 'Decathlon', logo: '/src/assets/image/Logo4-1-1.png' },
  { name: 'CAA', logo: '/src/assets/image/Logo3-1-1.png' },
  { name: 'Egis', logo: '/src/assets/image/Logo1-1.png' },
  { name: 'PLDT', logo: '/src/assets/image/Logo5-1-2.png' },
];

const TrustedClients = () => {
  
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="bg-[#0a0a0a] py-16 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-white text-2xl md:text-3xl font-semibold font-poppins tracking-wide">
          Our Trusted Clients
        </h2>
      </div>

      <div className="relative flex items-center">
        {/* Left/Right Gradient Fades for a professional look */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

        {/* The Scrolling Track */}
        <motion.div
          className="flex whitespace-nowrap gap-16 md:gap-24"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 20, // Adjust speed here (lower is faster)
            repeat: Infinity,
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[150px] md:min-w-[200px]"
            >
             <img 
              src={client.logo}
              alt={`${client.name} logo`} // Fixed: Added backticks inside the curly braces
              className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
        />
            </div>
          ))}
        </motion.div>
      </div>

      

      {/* Manual Navigation Arrows (Optional, as per your screenshot) */}
      <div className="flex justify-center gap-4 mt-8">
        <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    
    </div>
  );
};

export default TrustedClients;