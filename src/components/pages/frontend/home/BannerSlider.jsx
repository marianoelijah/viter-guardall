import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: "Protecting Lives, Securing Properties.",
    cta: "LEARN MORE",
    image: "/src/assets/image/Group-46.png", 
    hasBadge: true,
    clients: ["Nestle", "HSBC", "UNILAB", "British Embassy"]
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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-[#F3EFE7]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col md:flex-row items-center px-8 md:px-20"
        >
          {/* Left Content */}
          <div className="flex-1 z-10 space-y-6">
            <motion.h1 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-[#111] leading-tight max-w-xl"
            >
              {slides[current].title}
            </motion.h1>
            
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-[#0D47A1] text-white px-8 py-3 rounded-sm font-semibold hover:bg-blue-800 transition-colors uppercase tracking-wider"
            >
              {slides[current].cta}
            </motion.button>
          </div>

          {/* Right Visuals */}
          <div className="flex-1 relative flex justify-center items-center w-full h-full">
            {/* Background Blue Decorative Squares */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-[#0D47A1] rounded-2xl -z-10" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#2196F3] rounded-2xl -z-10" />

            {/* Main Image Container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-[80%] aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
            >
              <img 
                src={slides[current].image} 
                alt="Security Services" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating UI Elements (Slide 1 Enhancements) */}
            {slides[current].hasBadge && (
              <>
                {/* Testimonial Card */}
                <motion.div 
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute top-1/2 -right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block"
                >
                  <div className="flex text-blue-900 mb-1">★★★★★</div>
                  <p className="text-sm italic font-medium">"By far best in the Philippines and the lots of fun I've had working with them."</p>
                </motion.div>

                {/* Client Logos Card */}
                <motion.div 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -bottom-4 left-0 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100"
                >
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Satisfied Clients</p>
                  <div className="flex gap-4 items-center grayscale opacity-70">
                    {/* Placeholder for Logos */}
                    <div className="h-6 w-12 bg-gray-400 rounded-sm" />
                    <div className="h-6 w-12 bg-gray-600 rounded-sm" />
                    <div className="h-6 w-12 bg-gray-500 rounded-sm" />
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider Navigation Dots */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={h-2 rounded-full transition-all ${current === idx ? "w-8 bg-[#0D47A1]" : "w-2 bg-gray-300"}}
          />
        ))}
        </div> */}

    </div>
  );
};

export default BannerSlider;