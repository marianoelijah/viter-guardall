import React from 'react';

const SecurityExperts = () => {
  const experts = [
    { name: "Marlon V. Ramos", position: "Engineering Manager", img: "/images/expert-marlon.jpg" },
    { name: "Prince John Lizardo", position: "Service Department Manager", img: "/images/expert-prince.jpg" },
    { name: "Ramir S. Aguilar", position: "MIS/IT Department Manager", img: "/images/expert-ramir.jpg" },
    { name: "Benedick Santiago", position: "Alarm Department Manager", img: "/images/expert-benedick.jpg" },
    { name: "Veronica T. Reyes", position: "Asset Protection Manager", img: "/images/expert-veronica.jpg" },
    { name: "Liza E. Cabral", position: "HR Officer/Collection Officer", img: "/images/expert-liza.jpg" },
    { name: "Norman R. Pacia", position: "Warehouse Officer", img: "/images/expert-norman.jpg" },
    { name: "Rosendel T. Siason", position: "Purchasing Officer", img: "/images/expert-rosendel.jpg" },
    { name: "Veronica T. Reyes", position: "Asset Protection Manager", img: "/images/expert-veronica.jpg" },
    { name: "Liza E. Cabral", position: "HR Officer/Collection Officer", img: "/images/expert-liza.jpg" },
    { name: "Norman R. Pacia", position: "Warehouse Officer", img: "/images/expert-norman.jpg" },
    { name: "Rosendel T. Siason", position: "Purchasing Officer", img: "/images/expert-rosendel.jpg" },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Department Intro */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-4xl font-bold text-blue-900 leading-tight">
                Meet Our <br /> Security Experts
              </h2>
              <div className="bg-orange-500 p-2 rounded-full text-white shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 border-l-4 border-orange-500 pl-6">
            <h3 className="text-xl font-bold text-blue-900 uppercase mb-2">Engineering Department</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our Engineers are committed to deliver tailor-fit solutions for your security needs. 
              From basic integration to complex access control systems, we offer services 
              which anticipate the future needs of companies.
            </p>
          </div>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {experts.map((expert, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image Container with Hover Effect */}
              <div className="relative overflow-hidden rounded-lg shadow-md aspect-[4/5] mb-4">
                <img 
                  src={expert.img} 
                  alt={expert.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Subtle dark overlay on hover */}
                <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Text Info */}
              <div className="flex items-start gap-2">
                <div className="mt-1.5 w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-orange-500 border-b-[5px] border-b-transparent shrink-0"></div>
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