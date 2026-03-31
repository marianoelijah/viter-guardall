import React, { useState, useEffect } from 'react';

const IMAGE_BASE_URL = import.meta.env.VITE_API_URL;

const Who = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${IMAGE_BASE_URL}/api/who-we-are`);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Who We Are data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading || !data) return <div className="py-20 text-center">Loading...</div>;

  return (
    <section className="bg-white pt-16 font-poppins">
      <div className="text-center px-6 h-full">
        {/* Section Title from DB */}
        <h1 className="text-5xl md:text-7xl text-[#2257a0] mb-6 drop-shadow-sm tracking-tigh">
          {data.title}
        </h1>

        {/* Mission & Vision Blue Bar */}
        <div className="bg-[#1e40af] text-white py-16 px-8 md:px-16 text-left width-full rounded-lg shadow-lg">
          <div className="w-full rounded-t-lg overflow-hidden shadow-lg">
            {/* Image from DB */}
            <img 
              src={`${IMAGE_BASE_URL}${data.main_image}`} 
              alt="Guard-All Team" 
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">
            
            {/* Our Mission from DB */}
            <div className="border-b border-white/30 md:border-b-0 pb-8 md:pb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-orange-500 border-b-[8px] border-b-transparent"></div>
                <h3 className="text-2xl font-bold uppercase tracking-wide">Our Mission</h3>
              </div>
              <p className="text-lg font-light leading-relaxed max-w-md">
                {data.mission_text}
              </p>
              <div className="h-px bg-white/30 mt-8 w-full"></div>
            </div>

            {/* Our Vision from DB */}
            <div className="pb-8 md:pb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-orange-500 border-b-[8px] border-b-transparent"></div>
                <h3 className="text-2xl font-bold uppercase tracking-wide">Our Vision</h3>
              </div>
              <p className="text-lg font-light leading-relaxed max-w-md">
                {data.vision_text}
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