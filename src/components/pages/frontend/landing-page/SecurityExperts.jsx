import React, { useState, useEffect } from 'react';

const IMAGE_BASE_URL = import.meta.env.VITE_API_URL;

const SecurityExperts = () => {
  const [experts, setExperts] = useState([]);
  const [intros, setIntros] = useState([]); // Changed to support an array of intros
  const [currentSlide, setCurrentSlide] = useState(0); // Track the slideshow index
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpertData = async () => {
      try {
        const [expertsRes, introRes] = await Promise.all([
          fetch(`${IMAGE_BASE_URL}/api/security-experts`),
          fetch(`${IMAGE_BASE_URL}/api/dept-intro`)
        ]);
        
        const expertsData = await expertsRes.json();
        const introData = await introRes.json();
   
        setExperts(expertsData);
        // Ensure intros is stored as an array even if database returns single row
        setIntros(Array.isArray(introData) ? introData : [introData]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching experts:", error);
        setLoading(false);
      }
    };
    fetchExpertData();
  }, []);

  // Autoplay slideshow effect (rotates every 5 seconds)
  useEffect(() => {
    if (intros.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % intros.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [intros]);

  if (loading || intros.length === 0) return null;

  return (
    <section className="py-20 px-6 bg-white font-poppins">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Department Intro Slideshow Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-[3rem] font-bold text-blue-900 leading-tight">
                Meet Our <br /> Security Experts
              </h2>
              <div className="bg-[#ff5f31] p-2 rounded-full text-white shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Active Slide Content */}
          <div className="lg:w-2/3 w-full flex flex-col justify-between min-h-[180px]">
            <div className="border-l-4 border-[#ff5f31] pl-6 transition-all duration-500 ease-in-out">
              <h3 className="text-xl font-bold text-blue-900 uppercase mb-2">
                {intros[currentSlide]?.dept_name}
              </h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                {intros[currentSlide]?.description}
              </p>
            </div>

            {/* Slideshow Dots Navigation */}
            {intros.length > 1 && (
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-6 pl-6">
                {intros.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'w-6 bg-[#ff5f31]' : 'w-3 bg-[#ff5f31]/30'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {experts.map((expert) => (
            <div key={expert.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-md aspect-[4/5] mb-4">
                <img 
                  src={`${IMAGE_BASE_URL}${expert.image_path}`} 
                  alt={expert.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-1.5 w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-[#ff5f31] border-b-[5px] border-b-transparent shrink-0"></div>
                <div>
                  <h4 className="text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                    {expert.name}
                  </h4>
                  <p className="text-blue-500 text-sm font-medium mt-1 uppercase tracking-wider">
                    {expert.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityExperts;