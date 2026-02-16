import React from 'react';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const allCategories = [
    {
      title: "Detection Systems",
      description: "Guard-All has been a trusted provider and installer of metal detection systems and X-Ray machines in various airports, banks, and office buildings. With our most advanced Detection Systems, you can precisely detect high-risk items and hidden weapons.",
      img: "/src/assets/image/autoclear-xray.png",
      brands: [
        // { name: "SURESCAN", logo: "/src/assets/image/products logo/Surescan.png", path: "/products/surescan" },
        // { name: "metrasens", logo: "/src/assets/image/products logo/metrasens.png", path: "/products/metrasens" },
        { name: "GILARDONI", logo: "/src/assets/image/products logo/Gilardoni.png", path: "/products/gilardoni" },
        { name: "CEIA", logo: "/src/assets/image/products logo/CEIA.png", path: "/products/ceia" },
        { name: "AUTOCLEAR", logo: "/src/assets/image/products logo/Auto-clear.png", path: "/products/autoclear" }
      ]
    },
    {
      title: "Fire Alarm",
      description: "Fire Alarm Systems are a major requirement for buildings today. To equip you with the latest, Guard-All provides smoke & fire detector alarms, beam detectors for open areas, and special devices for high-risk areas.",
      img: "/src/assets/image/Rectangle-11-2.png",
      brands: [
        { name: "Honeywell", logo: "/src/assets/image/products logo/HONEYWELL.png", path: "/products/honeywell" },
        { name: "detnov", logo: "/src/assets/image/products logo/Detnov.png", path: "/products/detnov" }
      ]
    },
    {
      title: "Forensic Examination",
      description: "To ensure the authenticity of your critical documents and help you detect evidence tampering, our partners in FOSTER + FREEMAN have scientific-grade VSC to identify document manipulation with unparalleled accuracy.",
      img: "/src/assets/image/forensic.png",
      brands: [
        { name: "foster+freeman", logo: "/src/assets/image/products logo/FosterFreeman.png", path: "/products/foster-freeman" }
      ]
    },
    {
      title: "Guard Tour Systems",
      description: "Manage your security personnel and employees with Guard Tour Patrol Systems. It will help you track their live location, communicate two-way, and record their journey to ensure rounds are made safely.",
      img: "/src/assets/image/guard.jpg",
      brands: [
        { name: "EBS", logo: "/src/assets/image/products logo/EBS.png", path: "/products/ebs" }
      ]
    },
    {
      title: "Hotel Locking System",
      description: "Guard-All offers comprehensive locking systems that range from electronic to mechanical locks. Our hotel locking systems can also integrate with IDENTIV access control systems for enhanced security.",
      img: "/src/assets/image/hotel.jpg",
      brands: [
        { name: "Onity", logo: "/src/assets/image/products logo/Onity.png", path: "/products/onity" },
        { name: "orbita", logo: "/src/assets/image/products logo/orbita.png", path: "/products/orbita" }
      ]
    },
    {
      title: "Intrusion / Burglary Alarm Systems",
      description: "These round-the-clock sensors are ideal to secure businesses. Guard-All can help design a system based on your need and connect it to our 24-7-365 Central Monitoring System for prompt response.",
      img: "/src/assets/image/intrusion.jpeg",
      brands: [
        { name: "PARADOX", logo: "/src/assets/image/products logo/paradox.png", path: "/products/paradox" }
      ]
    },
    {
      title: "Parking Management / Parking Guidance System",
      description: "If you’re looking to expand your Vehicle Systems, we recommend our Parking Management Systems. Manage the vehicular flow in your properties with our systems which includes high-speed gate barriers, ticket-based or token-based entry/exit stations, and more.",
      img: "/src/assets/image/parking.jpeg",
      brands: [
        { name: "CASS", logo: "/src/assets/image/products logo/CASS.png", path: "/products/cass" }
      ]
    },
    {
      title: "Quick Alert",
      description: "Aside from investing in security equipment, you need to ensure that your systems are connected to a monitoring station like Quick Alert. Quick Alert is a full service Central Monitoring Station devoted to surveil premises and monitor intrusion, fire, and panic alarms.",
      img: "/src/assets/image/quickalert.jpg",
      brands: [
        { name: "QUICK ALERT", logo: "/src/assets/image/products logo/Quick-Alert.png", path: "/products/quick-alert" }
      ]
    },
    {
      title: "Vehicle Barrier System and Pedestrian Barriers",
      description: "With Vehicle Barrier System and Pedestrian Barriers, you can control the traffic, regulate vehicular access, and limit access to increase security of selected areas. At Guard-All, our vehicle systems include boom barriers for parking and tollways.",
      img: "/src/assets/image/vehicle.png",
      brands: [
        { name: "MAGNETIC", logo: "/src/assets/image/products logo/Magnetic.png", path: "/products/magnetic" },
        { name: "LEDA", logo: "/src/assets/image/products logo/Leda.png", path: "/products/leda" },
        { name: "FAAC", logo: "/src/assets/image/products logo/FAAC.png", path: "/products/faac" },
        { name: "DELTA", logo: "/src/assets/image/products logo/Delta.png", path: "/products/delta" }
      ]
    },
    {
      title: "Vesda System (Aspirating Smoke Detection)",
      description: "To increase smoke detection in your buildings and office spaces, we highly recommend the VESDA System. It is an Aspirating Smoke Detector that can monitor smoke levels at various locations to signal early fire breakout by constantly testing the airflow.",
      img: "/src/assets/image/vesda.jpg",
      brands: [
        { name: "VESDA by xtralis", logo: "/src/assets/image/products logo/vesda-1.png", path: "/products/vesda" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#f4f7fa]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allCategories.map((cat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full border border-slate-100"
            >
              {/* Image Container */}
              <div className="overflow-hidden rounded-3xl mb-8 aspect-square lg:aspect-video">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4 group-hover:text-blue-700 transition-colors">
                {cat.title}
              </h3>
              <p className="text-gray-600 text-xl leading-relaxed mb-8 flex-grow">
                {cat.description}
              </p>

              {/* Clickable Brands */}
              <div className="mt-auto border-t border-gray-100 pt-6">
                <p className="text-[#f97316] hover:text-[#f97316]/20 font-bold text-xl uppercase tracking-[0.2em] mb-6">
                  CLICK TO VIEW MORE:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
                  {cat.brands.map((brand, i) => (
                    <Link 
                      key={i} 
                      to={brand.path} 
                      className="transition-all duration-300 hover:scale-110 active:scale-90"
                      title={`Explore ${brand.name}`}
                    >
                      <img 
                        src={brand.logo} 
                        alt={brand.name} 
                        className="h-12 w-[12rem] object-contain transition-all duration-300"
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

export default ProductPage;