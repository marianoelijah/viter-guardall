import React from 'react';
import { Link } from 'react-router-dom';

const ProductLanding = () => {
  const categories = [
    {
      title: "Access Control System",
      description: "In today’s world, Access Control remains as a fundamental security feature in various properties. With Access Control, you can increase your building or facility’s door security, manage the flow of visitors within your premises, and limit their access based on identification.",
      img: "/src/assets/image/access.jpg",
      // Map brand names to logos and URLs
      brands: [
        { name: "Honeywell", logo: "/src/assets/image/products logo/HONEYWELL.png", path: "/products/honeywell" },
        { name: "HIRSCH", logo: "/src/assets/image/products logo/HIRSCH-Small.png", path: "/products/hirsch" },
        { name: "MAG", logo: "/src/assets/image/products logo/MAG.png", path: "/products/mag" },
        { name: "uberGARD", logo: "/src/assets/image/products logo/UBER.png", path: "/products/ubergard" },
        { name: "ALARM.COM", logo: "/src/assets/image/products logo/Alarm.png", path: "/products/alarm-com" }
      ]
    },
    {
      title: "Audio-Video Intercom & PA-BGM",
      description: "We highly recommended complementing your security systems with Audio-Video Intercom for ease of communication within your properties. Moreover, we also offer voice alarm systems for public addresses.",
      img: "/src/assets/image/intercom.jpg",
      brands: [
        { name: "Honeywell", logo: "/src/assets/image/products logo/HONEYWELL.png", path: "/products/honeywell" },
        { name: "FERMAX", logo: "/src/assets/image/products logo/Fermax.png", path: "/products/fermax" },
        { name: "Commend", logo: "/src/assets/image/products logo/Commend.png", path: "/products/commend" }
      ]
    },
    {
      title: "CCTVs",
      description: "CCTVs serve as your ‘second eye’ in ensuring your properties are secured. It provides focused coverage, surveillance in areas or people, and record events. At Guard-All, we provide cost-effective CCTV Systems tailored to requirements.",
      img: "/src/assets/image/cctv.jpg",
      brands: [
        { name: "WEBGATE", logo: "/src/assets/image/products logo/Webgate.png", path: "/products/webgate" },
        { name: "PELCO", logo: "/src/assets/image/products logo/Pelco.png", path: "/products/pelco" },
        { name: "Honeywell", logo: "/src/assets/image/products logo/HONEYWELL.png", path: "/products/honeywell" },
        { name: "HIKVISION", logo: "/src/assets/image/products logo/Hikvision.png", path: "/products/hikvision" },
        { name: "ACTi", logo: "/src/assets/image/products logo/Acti.png", path: "/products/acti" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-[6rem] md:text-[12rem] font-black select-none pointer-events-none whitespace-nowrap">
            GUARD-ALL
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#2257a0] mb-6 drop-shadow-sm tracking-tigh">Our Products</h1>
          <p className="text-gray-600 max-w-4xl mx-auto text-xl leading-relaxed">
            With our 40-year expertise in the industry, Guard-All has partnered with the best security product manufacturers to be their “Exclusive” or “Authorized” distributors.
          </p>
        </div>

        {/* Product Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full border border-gray-100 group"
            >
              {/* Product Image with Zoom Hover */}
              <div className="overflow-hidden rounded-2xl mb-8 aspect-[4/3]">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>

              {/* Text Content */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors">
                {cat.title}
              </h2>
              <p className="text-gray-500 leading-relaxed text-xl mb-8 flex-grow">
                {cat.description}
              </p>

              {/* Brand Section */}
              <div className="mt-auto border-t border-gray-100 pt-6">
                <span className="text-[#f97316] hover:text-[#f97316]/20 font-bold text-xl uppercase tracking-widest block mb-4">
                  CLICK TO VIEW MORE:
                </span>
                <div className="flex flex-wrap gap-5 items-center">
                  {cat.brands.map((brand, i) => (
                    <Link 
                      key={i} 
                      to={brand.path} 
                      className="hover:scale-110 transition-transform duration-300 active:scale-95"
                      title={`View ${brand.name} products`}
                    >
                      <img 
                        src={brand.logo} 
                        alt={brand.name} 
                        className="h-12 w-[10rem] object-contain transition-all duration-300"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductLanding;