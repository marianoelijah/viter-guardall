
import React from 'react';

const ProductPage = () => {
  const allCategories = [
    // ... items from previous row (Access Control, Intercom, CCTV) ...
    {
      title: "Detection Systems",
      description: "Guard-All has been a trusted provider and installer of metal detection systems and X-Ray machines in various airports, banks, and office buildings. With our most advanced Detection Systems, you can precisely detect high-risk items and hidden weapons.",
      img: "/src/assets/image/autoclear-xray.png",
      brands: ["SURESCAN", "metrasens", "GILARDONI", "CEIA", "AUTOCLEAR"],
      brandLogos: [
        "/src/assets/image/products logo/Surescan.png",
        "/src/assets/image/products logo/metrasens.png",
        "/src/assets/image/products logo/Gilardoni.png",
        "/src/assets/image/products logo/CEIA.png",
        "/src/assets/image/products logo/Auto-clear.png"
      ]
    },
    {
      title: "Fire Alarm",
      description: "Fire Alarm Systems are a major requirement for buildings today. To equip you with the latest, Guard-All provides smoke & fire detector alarms, beam detectors for open areas, and special devices for high-risk areas.",
      img: "/src/assets/image/Rectangle-11-2.png",
      brands: ["Honeywell", "detnov"],
      brandLogos: [
        "/src/assets/image/products logo/HONEYWELL.png",
        "/src/assets/image/products logo/Detnov.png",
      ]
    },
    {
      title: "Forensic Examination",
      description: "To ensure the authenticity of your critical documents and help you detect evidence tampering, our partners in FOSTER + FREEMAN have scientific-grade VSC to identify document manipulation with unparalleled accuracy.",
      img: "/src/assets/image/forensic.png",
      brands: ["foster+freeman"],
      brandLogos: [
        "/src/assets/image/products logo/FosterFreeman.png",
      ]
    },
    {
      title: "Guard Tour Systems",
      description: "Manage your security personnel and employees with Guard Tour Patrol Systems. It will help you track their live location, communicate two-way, and record their journey to ensure rounds are made safely.",
      img: "/src/assets/image/guard.jpg",
      brands: ["EBS"],
      brandLogos: [
        "/src/assets/image/products logo/EBS.png",
      ]
    },
    {
      title: "Hotel Locking System",
      description: "Guard-All offers comprehensive locking systems that range from electronic to mechanical locks. Our hotel locking systems can also integrate with IDENTIV access control systems for enhanced security.",
      img: "/src/assets/image/hotel.jpg",
      brands: ["Onity", "orbita"],
      brandLogos: [
        "/src/assets/image/products logo/Onity.png",
        "/src/assets/image/products logo/orbita.png",
      ]
    },
    {
      title: "Intrusion / Burglary Alarm Systems",
      description: "These round-the-clock sensors are ideal to secure businesses. Guard-All can help design a system based on your need and connect it to our 24-7-365 Central Monitoring System for prompt response.",
      img: "/src/assets/image/intrusion.jpeg",
      brands: ["PARADOX"],
      brandLogos: [
        "/src/assets/image/products logo/paradox.png",
      ]
    },
    {
      title: "Parking Management / Parking Guidance System",
      description: "If you’re looking to expand your Vehicle Systems, we recommend our Parking Management Systems. Manage the vehicular flow in your properties with our systems which includes high-speed gate barriers, ticket-based or token-based entry/exit stations, and more.",
      img: "/src/assets/image/parking.jpeg",
      brands: ["CASS"],
      brandLogos: [
        "/src/assets/image/products logo/CASS.png",
      ]
    },
    {
      title: "Quick Alert",
      description: "Aside from investing in security equipment, you need to ensure that your systems are connected to a monitoring station like Quick Alert. Quick Alert is a full service Central Monitoring Station devoted to surveil premises and monitor intrusion, fire, and panic alarms.",
      img: "/src/assets/image/quickalert.jpg",
      brands: ["QUICK ALERT SECURITY DEVICES INC."],
      brandLogos: [
        "/src/assets/image/products logo/Quick-Alert.png",
      ]
    },
    {
      title: "Vehicle Barrier System and Pedestrian Barriers",
      description: "With Vehicle Barrier System and Pedestrian Barriers, you can control the traffic, regulate vehicular access, and limit access to increase security of selected areas. At Guard-All, our vehicle systems include boom barriers for parking and tollways.",
      img: "/src/assets/image/vehicle.png",
      brands: ["MAGNETIC", "LEDA", "FAAC", "DELTA"],
       brandLogos: [
        "/src/assets/image/products logo/Magnetic.png",
        "/src/assets/image/products logo/Leda.png",
        "/src/assets/image/products logo/FAAC.png",
        "/src/assets/image/products logo/Delta.png",
      ]
    },
    {
      title: "Vesda System (Aspirating Smoke Detection)",
      description: "To increase smoke detection in your buildings and office spaces, we highly recommend the VESDA System. It is an Aspirating Smoke Detector that can monitor smoke levels at various locations to signal early fire breakout by constantly testing the airflow.",
      img: "/src/assets/image/vesda.jpg",
      brands: ["VESDA by xtralis"],
      brandLogos: [
        "/src/assets/image/products logo/vesda-1.png",
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#f4f7fa]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCategories.map((cat, index) => (
            <div 
              key={index} 
              className="bg-[#eef2f6] rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
            >
              {/* Image with subtle border radius */}
              <div className="overflow-hidden rounded-3xl mb-8 aspect-square lg:aspect-video">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">{cat.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                {cat.description}
              </p>

              {/* Call to action & Brand Logos */}
              <div className="mt-auto border-t border-gray-200 pt-6">
                <p className="text-[#f97316] font-bold text-lg uppercase tracking-widest mb-6">
                  CLICK TO VIEW MORE:
                </p>
                {/* <div className="flex flex-wrap gap-6 items-center">
                   {cat.brandLogos.map((brand, bIndex) => (
                    <img
                      key={bIndex}                      src={brand}
                      alt={cat.brands[bIndex]}
                      className="h-8 w-auto object-contain transition-all duration-500">
                     <span key={bIndex} className="text-gray-400 font-black text-sm uppercase group-hover:text-[#1e3a8a] transition-colors cursor-pointer">
                       {cat.brands[bIndex]}
                     </span>
                    </img>
                   ))}
                </div> */}
                <div className="flex flex-wrap gap-4 items-center transition-all duration-500">
                  {cat.brandLogos.map((logo, i) => (
                    <img 
                      key={i} 
                      src={logo} 
                      alt={cat.brands[i]} 
                      className="h-8 w-[10rem] object-contains transition-all duration-500"
                    />
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

export default ProductPage;