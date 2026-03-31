import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 1. Define the Backend URL
const IMAGE_BASE_URL = import.meta.env.VITE_API_URL;

const TrustedClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Fetch clients from the database
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch(`${IMAGE_BASE_URL}/api/trusted-clients`);
        const data = await response.json();
        setClients(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching clients:", error);
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  // 3. Duplicate the array for the infinite scroll effect
  const duplicatedClients = [...clients, ...clients];

  if (loading) return <div className="bg-[#0a0a0a] py-16 text-center text-white">Loading Clients...</div>;
  if (clients.length === 0) return null;

  return (
    <div className="bg-[#0a0a0a] py-16 overflow-hidden border-t border-white/5 font-poppins">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-blue-500 text-4xl md:text-4xl font-black mb-6 drop-shadow-sm tracking-tigh">
          Our Trusted Clients
        </h2>
      </div>

      <div className="relative flex items-center">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

        <motion.div
          className="flex whitespace-nowrap gap-16 md:gap-24"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 40, 
            repeat: Infinity,
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[150px] md:min-w-[200px]"
            >
             <img 
              // 4. Use logo_path from the DB column
              src={`${IMAGE_BASE_URL}${client.logo_path}`}
              alt={`${client.name} logo`}
              className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Manual Navigation Arrows */}
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