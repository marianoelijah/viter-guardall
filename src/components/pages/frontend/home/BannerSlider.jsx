import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const IMAGE_BASE_URL = import.meta.env.VITE_API_URL;

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
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [slides]);

  // Navigation handlers
  const handleNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Helper function to resolve dynamic paths based on slide ID
  const getSlideLink = (id) => {
    switch (id) {
      case 1:
        return "/who-we-are";
      case 2:
        return "/contacts";
      case 3:
        return "/our-products";
      default:
        return "/what-we-do"; // Default fallback route
    }
  };

  if (loading) return <div className="h-[700px] bg-[#F3EFE7] flex items-center justify-center">Loading...</div>;
  if (slides.length === 0) return null;

  return (
    <div className="relative w-full min-h-[750px] md:h-[650px] lg:h-[750px] overflow-hidden bg-[#F3EFE7] font-poppins group">
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
              <button className="bg-[#0D47A1] text-white px-5 py-4 rounded-full sm:rounded-sm font-bold hover:bg-[#ff5f31] active:scale-95 transition-all duration-300 uppercase tracking-widest text-sm shadow-lg">
                <Link to={getSlideLink(slides[current].id)}>
                  {slides[current].cta_text}
                </Link>
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
                src={`${IMAGE_BASE_URL}${slides[current].image_path}`} 
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

      {/* Left Arrow */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-[#0D47A1] hover:text-white text-gray-800 p-3 rounded-full shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block"
        aria-label="Previous Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-[#0D47A1] hover:text-white text-gray-800 p-3 rounded-full shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block"
        aria-label="Next Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Navigation Indicators */}
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