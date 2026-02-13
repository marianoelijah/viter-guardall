import React from 'react';
import Header from "../partials/Header";

const Who = () => {
  return (
    <section className="bg-white pt-16">
      <div className="text-center px-6 h-full">
        {/* Section Title */}
        <h1 className="text-5xl md:text-7xl font-black text-[#2257a0] mb-6 drop-shadow-sm tracking-tigh">Who We Are</h1>

        {/* Mission & Vision Blue Bar */}
        <div className="bg-[#1e40af] text-white py-16 px-8 md:px-16 text-left width-full rounded-lg shadow-lg">
          <div className="">

             {/* Team Image Container */}
          <div className="w-full rounded-t-lg overflow-hidden shadow-lg">
          <img 
            src="/src/assets/image/Who.jpg" 
            alt="Guard-All Team" 
            className="w-full h-auto object-cover"
          />
        </div>
        </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">
            
            {/* Our Mission */}
            <div className="border-b border-white/30 md:border-b-0 pb-8 md:pb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-orange-500 border-b-[8px] border-b-transparent"></div>
                <h3 className="text-2xl font-bold font-poppins uppercase tracking-wide">Our Mission</h3>
              </div>
              <p className="text-lg font-light leading-relaxed max-w-md">
                To be your trusted partner in providing high quality and expert-backed security systems.
              </p>
              <div className="h-px bg-white/30 mt-8 w-full"></div>
            </div>

            {/* Our Vision */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-orange-500 border-b-[8px] border-b-transparent"></div>
                <h3 className="text-2xl font-bold font-poppins uppercase tracking-wide">Our Vision</h3>
              </div>
              <p className="text-lg font-light leading-relaxed max-w-md">
                To be the most reliable security systems integrator in the Philippines.
              </p>
              <div className="h-px bg-white/30 mt-8 w-full"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;