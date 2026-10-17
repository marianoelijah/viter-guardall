import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const IMAGE_BASE_URL = import.meta.env.VITE_API_URL;

const SecureLifeCTA = () => {
  const [ctaData, setCtaData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCta = async () => {
      try {
        const response = await fetch(`${IMAGE_BASE_URL}/api/home-cta`);
        const data = await response.json();
        setCtaData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching CTA data:", error);
        setLoading(false);
      }
    };
    fetchCta();
  }, []);

  if (loading || !ctaData) return null;

  return (
    <section className="px-6 py-12 font-poppins bg-[#b0acac] dark:bg-[#121214] transition-colors duration-300">
      <div 
        className="max-w-7xl mx-auto rounded-2xl overflow-hidden relative min-h-[400px] flex items-center justify-center text-center shadow-lg dark:shadow-gray-900/50"
        style={{
          // Linear gradient overlay provides strong contrast for both light and dark mode
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.85), rgba(15, 23, 42, 0.9)), url('${IMAGE_BASE_URL}${ctaData.image_path}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {ctaData.title}
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            {ctaData.description}
          </p>

          <Link to="/contacts">
            <button className="bg-[#110d7366] hover:bg-[#ff5f31] dark:bg-blue-900/80 dark:hover:bg-[#ff5f31] text-white text-lg md:text-xl font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl border border-white/20 uppercase tracking-wide">
              {ctaData.button_text}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SecureLifeCTA;