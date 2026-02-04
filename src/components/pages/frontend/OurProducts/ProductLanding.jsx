import React from 'react';

const ProductLanding = () => {
  const categories = [
    {
      title: "Access Control System",
      description: "In today’s world, Access Control remains as a fundamental security feature in various properties. With Access Control, you can increase your building or facility’s door security, manage the flow of visitors within your premises, and limit their access based on identification.",
      img: "/images/access-control-hero.jpg",
      brands: ["Honeywell", "HIRSCH", "MAG", "uberGARD", "ALARM.COM"]
    },
    {
      title: "Audio-Video Intercom & PA-BGM",
      description: "We highly recommended complementing your security systems with Audio-Video Intercom for ease of communication within your properties. Moreover, we also offer voice alarm systems for public addresses.",
      img: "/images/intercom-hero.jpg",
      brands: ["Honeywell", "FERMAX", "Commend"]
    },
    {
      title: "CCTVs",
      description: "CCTVs serve as your ‘second eye’ in ensuring your properties are secured. It provides focused coverage, surveillance in areas or people, and record events. At Guard-All, we provide cost-effective CCTV Systems tailored to requirements.",
      img: "/images/cctv-hero.jpg",
      brands: ["WEBGATE", "PELCO", "Honeywell", "HIKVISION", "Dahua", "ACTi"]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Our Products</h1>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
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
              <p className="text-gray-500 leading-relaxed text-sm mb-8 flex-grow">
                {cat.description}
              </p>

              {/* Brand Section */}
              <div className="mt-auto border-t border-gray-100 pt-6">
                <span className="text-orange-600 font-bold text-xs uppercase tracking-widest block mb-4">
                  Click to view more:
                </span>
                <div className="flex flex-wrap gap-4 items-center opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                  {cat.brands.map((brand, i) => (
                    <span key={i} className="text-sm font-black text-gray-400 hover:text-blue-900 cursor-pointer uppercase tracking-tighter">
                      {brand}
                    </span>
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