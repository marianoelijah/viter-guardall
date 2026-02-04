
import React from 'react';

const AboutLegacy = () => {
  const stats = [
    { label: "Satisfied Customers", value: "500+" },
    { label: "Years Experience", value: "40+" },
    { label: "Projects Completed", value: "400+" },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Image/Video Area */}
        <div className="w-full lg:w-1/2 relative">
          <div className="rounded-xl overflow-hidden shadow-2xl relative group">
            <img 
              src="/path-to-your-team-image.jpg" 
              alt="Guard-All Team Meeting" 
              className="w-full h-auto object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
              </button>
            </div>
            {/* Blue accent bar on the left */}
            <div className="absolute left-0 top-1/4 bottom-1/4 w-2 bg-blue-500 rounded-r-lg"></div>
          </div>
        </div>

        {/* Right Side: Content Area */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-orange-500">40 Years</span> <br />
            <span className="text-blue-900">of Protecting Properties</span>
          </h2>
          
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            From a security systems integrator to one of the Philippines' most trusted solutions provider. 
            Guard-All's legacy is built on trust and dedication to protect the lives of our fellow Filipinos. 
            We assure that you're getting only the best from engineering to installation down to after-sales.
          </p>

          <button className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded hover:bg-blue-900 hover:text-white transition-colors font-semibold mb-12">
            SEE MORE SERVICES
          </button>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 border-t border-gray-200 pt-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-left">
                <div className="text-4xl font-black text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-2 leading-tight uppercase tracking-wider font-semibold">
                  {stat.label.split(' ').map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutLegacy;