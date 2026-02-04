import React from 'react';

const Founders = () => {
  const founders = [
    {
      name: "Derek A. Ramsay",
      position: "General Manager",
      img: "/images/founder-derek.jpg"
    },
    {
      name: "Remedios P. Ramsay",
      position: "President",
      img: "/images/founder-remedios.jpg"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Portraits Grid */}
        <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {founders.map((person, index) => (
            <div key={index} className="flex flex-col">
              <div className="rounded-xl overflow-hidden shadow-xl mb-6 aspect-[4/5]">
                <img 
                  src={person.img} 
                  alt={person.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="flex items-center gap-2">
                 <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-orange-500 border-b-[6px] border-b-transparent"></div>
                 <h4 className="text-2xl font-bold text-blue-900 leading-none">{person.name}</h4>
              </div>
              <p className="text-blue-500 font-medium mt-2 ml-4">{person.position}</p>
            </div>
          ))}
        </div>

        {/* Right Side: Message Content */}
        <div className="w-full lg:w-2/5">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              A Message from <br /> our Founders
            </h2>
            <div className="bg-orange-500 p-3 rounded-full text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-6xl text-orange-500 font-serif leading-none">“</span>
            <p className="text-3xl font-bold text-blue-900 leading-snug -mt-8">
              At Guard-All, we believe that a secured life is one’s greatest asset.
            </p>
            
            <div className="flex gap-4">
              <div className="mt-2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-orange-500 border-b-[6px] border-b-transparent shrink-0"></div>
              <p className="text-gray-600 text-lg leading-relaxed italic">
                In our 40 years of experience, we take pride in the fact that we do not just integrate security solutions to our partners, but we also help protect the lives of people. We continue to strive today because we only work with the best.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Founders;