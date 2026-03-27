import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const IMAGE_BASE_URL = "http://localhost:5000";

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
    <section className="px-6 py-12 font-poppins">
      <div 
        className="max-w-7xl mx-auto rounded-2xl overflow-hidden relative min-h-[400px] flex items-center justify-center text-center"
        style={{
          // Using the image_path from the database
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.8)), url('${IMAGE_BASE_URL}${ctaData.image_path}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {ctaData.title}
          </h2>
          
          <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
            {ctaData.description}
          </p>

          <button className="bg-[#4dc3e766] hover:bg-blue-700 text-white text-xs font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl border border-white/20 uppercase tracking-wide ">
            <Link to="/contacts">{ctaData.button_text}</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecureLifeCTA;