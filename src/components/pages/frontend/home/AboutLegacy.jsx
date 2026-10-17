import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Reusable counter component
const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = parseInt(target, 10);
          if (start === end) return;

          const totalMiliseconds = duration;
          const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 10);
          
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) {
              clearInterval(timer);
            }
          }, incrementTime);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={elementRef}>{count}</span>;
};

const AboutLegacy = () => {
  const stats = [
    { label: "Satisfied Customers", value: 500, suffix: "+" },
    { label: "Years Experience", value: 40, suffix: "+" },
    { label: "Projects Completed", value: 400, suffix: "+" },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto transition-colors duration-300">
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
        
        {/* Left Side: YouTube Video Container */}
        <div className="w-full lg:w-1/2">
          <div className="relative p-4 bg-gradient-to-br from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-900 rounded-xl shadow-lg">
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
            <span className="text-orange-500 dark:text-orange-400">40 Years</span> <br />
            <span className="text-blue-900 dark:text-blue-400">of Protecting Properties</span>
          </h2>
          
          <p className="text-xl md:text-xl text-gray-800 dark:text-gray-300 leading-relaxed mb-8">
            From a security systems integrator to one of the Philippines' most trusted solutions provider. 
            Guard-All's legacy is built on trust and dedication to protect the lives of our fellow Filipinos. 
            We assure that you're getting only the best from engineering to installation down to after-sales.
          </p>

          <Link to="/who-we-are">
            <button className="border-2 border-blue-900 text-blue-900 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 px-8 py-3 rounded hover:bg-blue-900 hover:text-white transition-colors font-semibold mb-12">
              SEE MORE SERVICES
            </button>
          </Link>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 border-t border-gray-300 dark:border-gray-800 pt-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-left">
                <div className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tabular-nums">
                  <AnimatedCounter target={stat.value} duration={1500} />
                  {stat.suffix}
                </div>
                <div className="text-lg md:text-sm text-gray-600 dark:text-gray-400 mt-2 leading-tight uppercase tracking-wider font-semibold">
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