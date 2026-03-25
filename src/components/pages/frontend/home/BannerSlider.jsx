import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IMAGE_BASE_URL = "http://localhost:5000";

const BannerSlider = () => {
  const [slides, setSlides] = useState([]); // Start with an empty array
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  // 1. Fetch data from your new API route
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(`${IMAGE_BASE_URL}/api/home-banners`);
        const data = await response.json();
        setSlides(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching banners:", error);
        setLoading(false);
      }
    };
    fetchBanners();
  }, []);

  // 2. Auto-play timer (only starts once slides are loaded)
  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides]);

  if (loading) return <div className="h-[700px] bg-[#F3EFE7] flex items-center justify-center">Loading...</div>;
  if (slides.length === 0) return null;

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
                {slides[current].cta_text} {/* Note: updated to match DB column name */}
              </button>
            </motion.div>
          </div>

          {/* Visuals Section */}
          <div className="flex-1 relative flex justify-center items-center w-full h-full order-1 md:order-2">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-[70%] md:w-[85%] aspect-square rounded-3xl overflow-hidden shadow-2xl border-[6px] md:border-[12px] border-white z-10"
            >
              <img 
                src={`${IMAGE_BASE_URL}${slides[current].image_path}`} // Note: updated to match DB column name
                alt="Security Services" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Badge (Conditional based on DB value) */}
            {slides[current].has_badge === 1 && (
               <div className="hidden lg:block">
                  {/* ... (Keep your existing Badge UI code here) ... */}
               </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              current === idx ? "w-12 bg-[#0D47A1]" : "w-6 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;