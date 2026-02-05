
import React from 'react';

const SecureLifeCTA = () => {
  return (
    <section className="px-6 py-12">
      <div 
        className="max-w-7xl mx-auto rounded-2xl overflow-hidden relative min-h-[400px] flex items-center justify-center text-center"
        style={{
          // Replace with your actual image path
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.8)), url('/src/assets/image/secure.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
            Secure Your Life Today
          </h2>
          
          <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
            Contact Guard-All now for a customized security solution to protect what matters most.
          </p>

          <button className="bg-[#4dc3e766] hover:bg-blue-500 text-white text-lg font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl border border-white/20 uppercase tracking-wide">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecureLifeCTA;