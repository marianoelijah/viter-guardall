import React from 'react';
import { Link } from 'react-router-dom';

const ProductHero = () => {
  return (
    <section className="bg-[#1e40af] dark:bg-[#0f172a] py-16 px-6 font-poppins overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Video Preview Container */}
        <div className="w-full lg:w-3/5 relative group">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-cyan-600 dark:to-blue-800 aspect-video flex items-center justify-center relative">
            
            <div className="w-full h-full overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white dark:border-gray-800 relative z-0 transition-colors duration-300">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/bqcRTWnevJ8"
                title="Guard-All Electronic Security Systems Inc - Products"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>    

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-all duration-300 pointer-events-none z-10">
              <div className="w-20 h-20 bg-white/20 dark:bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white dark:border-gray-400 group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white dark:border-l-gray-200 border-b-[15px] border-b-transparent ml-2"></div>
              </div>
            </div>
          </div>
          
          {/* Decorative blue accent behind the video */}
          <div className="absolute -left-4 -top-4 w-full h-full bg-cyan-500/20 dark:bg-cyan-500/10 -z-10 rounded-2xl"></div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full lg:w-2/3 text-white dark:text-gray-100">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Explore Guard-All <br /> Security Systems
          </h2>
          
          <div className="space-y-6 mb-10">
            <p className="text-lg md:text-xl leading-relaxed opacity-90 dark:opacity-100 dark:text-gray-200">
              For over 40 years, Guard-All has been the trusted security systems integrator in the Philippines.
            </p>
            <p className="text-lg leading-relaxed opacity-85 dark:opacity-95 dark:text-gray-300">
              Watch this video to see our full range of products including access control systems, CCTVs, fire alarms, detection systems, hotel locking systems, and more.
            </p>
            <p className="text-lg leading-relaxed opacity-85 dark:opacity-95 dark:text-gray-300">
              Guard-All delivers cost-effective solutions for commercial, industrial, government, and residential clients. Our expertise ensures reliable protection for your property, people, and assets.
            </p>
          </div>

          <div className="h-px bg-white/30 dark:bg-gray-700 w-full mb-8"></div>

          <Link 
            to="/our-products" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
           >
            <button className="bg-white dark:bg-blue-600 text-blue-900 dark:text-white hover:bg-[#ff5f31] dark:hover:bg-[#ff5f31] hover:text-white dark:hover:text-white font-bold py-3 px-10 rounded-full transition-all uppercase tracking-wide shadow-md">
              Browse Products 
            </button>
          </Link>
         
        </div>

      </div>
    </section>
  );
};

export default ProductHero;