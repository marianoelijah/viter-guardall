import React from 'react';
import { Link } from 'react-router-dom';

const AboutLegacy = () => {
  const stats = [
    { label: "Satisfied Customers", value: "500+" },
    { label: "Years Experience", value: "40+" },
    { label: "Projects Completed", value: "400+" },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
        
        {/* Left Side: YouTube Video with Blue Border */}
        <div className="w-full lg:w-1/2">
          <div className="relative p-4 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl">
            <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/xXfo_pewtMY"
                title="Guard-All Electronic Security Systems Inc Company Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Right Side: Content Area */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-5xl md:text-5xl font-bold mb-6">
            <span className="text-orange-500">40 Years</span> <br />
            <span className="text-blue-900">of Protecting Properties</span>
          </h2>
          
          <p className="text-gray-600 leading-relaxed mb-8 text-lg md:text-lg">
            From a security systems integrator to one of the Philippines' most trusted solutions provider. 
            Guard-All's legacy is built on trust and dedication to protect the lives of our fellow Filipinos. 
            We assure that you're getting only the best from engineering to installation down to after-sales.
          </p>

          <Link to="/who-we-are">
          <button className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded hover:bg-blue-900 hover:text-white transition-colors font-semibold mb-12">
            SEE MORE SERVICES
          </button>
          </Link>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 border-t border-gray-300 pt-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-left">
                <div className="text-5xl md:text-5xl font-black text-gray-900 gap-3">
                  {stat.value}
                </div>
                <div className="text-lg md:text-sm text-gray-600 mt-2 leading-tight uppercase tracking-wider font-semibold">
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