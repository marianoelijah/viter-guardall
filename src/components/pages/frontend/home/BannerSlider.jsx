import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: "Protecting Lives, Securing Properties.",
    cta: "LEARN MORE",
    image: "/src/assets/image/Group-46.png", 
    hasBadge: true,
  },
  {
    id: 2,
    title: "Ready to Level Up Your Security?",
    cta: "CONTACT US",
    image: "/src/assets/image/Group-52.png",
    hasBadge: false
  },
  {
    id: 3,
    title: "Your Security Needs, All in One Place",
    cta: "BROWSE PRODUCTS",
    image: "/src/assets/image/Group-53.png",
    hasBadge: false
  }
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Increased slightly for readability
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-[700px] md:h-[650px] lg:h-[750px] overflow-hidden bg-[#F3EFE7] font-poppins">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-24 py-12 md:py-0"
        >
          {/* Content Section */}
          <div className="flex-1 z-20 text-center md:text-left space-y-6 order-2 md:order-1 mt-8 md:mt-0">
            <motion.h1 
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#111] leading-[1.1] max-w-2xl"
            >
              {slides[current].title}
            </motion.h1>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <button className="bg-[#0D47A1] text-white px-10 py-4 rounded-full sm:rounded-sm font-bold hover:bg-red-600 active:scale-95 transition-all duration-300 uppercase tracking-widest text-sm shadow-lg">
                {slides[current].cta}
              </button>
            </motion.div>
          </div>

          {/* Visuals Section */}
          <div className="flex-1 relative flex justify-center items-center w-full h-full order-1 md:order-2">
            {/* Responsive Decorative Squares (Hidden on small mobile) */}
            <div className="absolute top-0 right-0 md:top-10 md:right-10 w-40 h-40 md:w-64 md:h-64 bg-[#0D47A1] rounded-2xl -z-10 opacity-20 md:opacity-100" />
            <div className="absolute bottom-0 left-0 md:bottom-10 md:left-10 w-40 h-40 md:w-64 md:h-64 bg-[#2196F3] rounded-2xl -z-10 opacity-20 md:opacity-100" />

            {/* Main Image Container */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-[70%] md:w-[85%] aspect-square rounded-3xl overflow-hidden shadow-2xl border-[6px] md:border-[12px] border-white z-10"
            >
              <img 
                src={slides[current].image} 
                alt="Security Services" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating UI Elements (Hidden on mobile for clarity) */}
            {slides[current].hasBadge && (
              <div className="hidden lg:block">
                {/* Testimonial */}
                <motion.div 
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute top-[20%] -right-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-gray-100 max-w-[240px] z-20"
                >
                  <div className="flex text-yellow-500 mb-2 text-xs">★★★★★</div>
                  <p className="text-xs italic font-semibold text-gray-700 leading-snug">
                    "The best security integrators in the Philippines. Professional and reliable."
                  </p>
                </motion.div>

                {/* Clients */}
                <motion.div 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -bottom-6 left-10 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-gray-100 z-20"
                >
                  <p className="text-[10px] uppercase tracking-widest text-blue-800 mb-3 font-black">Trusted By</p>
                  <div className="flex gap-4 items-center opacity-60">
                    <div className="h-4 w-10 bg-gray-400 rounded-sm" />
                    <div className="h-4 w-10 bg-gray-600 rounded-sm" />
                    <div className="h-4 w-10 bg-gray-500 rounded-sm" />
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Modern Navigation Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              current === idx ? "w-12 bg-[#0D47A1]" : "w-6 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;