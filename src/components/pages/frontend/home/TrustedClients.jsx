import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const IMAGE_BASE_URL = import.meta.env.VITE_API_URL;

const TrustedClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // 1. Fetch clients
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

  // 2. Duplicate clients to ensure the loop is seamless
  // We double the array so when the first half finishes, the second half is visible
  const duplicatedClients = [...clients, ...clients];

  if (loading) return <div className="bg-[#0a0a0a] py-16 text-center text-white">Loading Clients...</div>;
  if (clients.length === 0) return null;

  return (
    <div className="bg-[#0a0a0a] py-16 overflow-hidden border-t border-white/5 font-poppins">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-blue-500 text-4xl font-black mb-6 tracking-tight">
          Our Trusted Clients
        </h2>
      </div>

      <div className="relative flex items-center group">
        {/* Gradients for smooth fade-in/out effect */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

        <motion.div
          className="flex whitespace-nowrap gap-16 md:gap-24"
          initial={{ x: 0 }}
          animate={{
            // Move by 50% because we duplicated the list. 
            // Once it hits -50%, it snaps back to 0 instantly, creating the loop.
            x: isPaused ? undefined : "-50%",
          }}
          transition={{
            duration: 30, // Adjust speed here (higher = slower)
            ease: "linear",
            repeat: Infinity,
          }}
          // Pause on hover for better UX
          onHoverStart={() => setIsPaused(true)}
          onHoverEnd={() => setIsPaused(false)}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[150px] md:min-w-[200px] py-4"
            >
              <img
                src={`${IMAGE_BASE_URL}${client.logo_path}`}
                alt={`${client.name} logo`}
                className="h-10 md:h-14 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Optional: Simple Indicator */}
      <div className="flex justify-center mt-8">
        <div className="h-1 w-16 bg-blue-500/20 rounded-full overflow-hidden">
            <motion.div 
                className="h-full bg-blue-500"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
        </div>
      </div>
    </div>
  );
};

export default TrustedClients;