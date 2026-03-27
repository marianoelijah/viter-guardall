import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const ProductPage = () => {
  const allCategories = [
    {
      title: "Access Control System",
      description: "In today’s world, Access Control remains as a fundamental security feature in various properties. With Access Control, you can increase your building or facility’s door security, manage the flow of visitors within your premises, and limit their access based on identification.",
      img: "/assets/image/Our Products/access.jpg",
      brands: [
        { name: "Honeywell", logo: "/assets/image/products logo/HONEYWELL.png", path: "/products/honeywell" },
        { name: "HIRSCH", logo: "/assets/image/products logo/HIRSCH-Small.png", path: "/products/hirsch" },
        { name: "MAG", logo: "/assets/image/products logo/MAG.png", path: "/products/mag" },
        { name: "uberGARD", logo: "/assets/image/products logo/UBER.png", path: "/products/ubergard" },
        { name: "ALARM.COM", logo: "/assets/image/products logo/Alarm.png", path: "/products/alarm-com" }
      ]
    },
    {
      title: "Audio-Video Intercom & PA-BGM",
      description: "We highly recommended complementing your security systems with Audio-Video Intercom for ease of communication within your properties. Moreover, we also offer voice alarm systems for public addresses.",
      img: "/assets/image/Our Products/intercom.jpg",
      brands: [
        { name: "Honeywell", logo: "/assets/image/products logo/HONEYWELL.png", path: "/products/honeywell" },
        { name: "FERMAX", logo: "/assets/image/products logo/Fermax.png", path: "/products/fermax" },
        { name: "Commend", logo: "/assets/image/products logo/Commend.png", path: "/products/commend" }
      ]
    },
    {
      title: "CCTVs",
      description: "CCTVs serve as your ‘second eye’ in ensuring your properties are secured. It provides focused coverage, surveillance in areas or people, and record events. At Guard-All, we provide cost-effective CCTV Systems tailored to requirements.",
      img: "/assets/image/Our Products/cctv.jpg",
      brands: [
        { name: "WEBGATE", logo: "/assets/image/products logo/Webgate.png", path: "/products/webgate" },
        { name: "PELCO", logo: "/assets/image/products logo/Pelco.png", path: "/products/pelco" },
        { name: "Honeywell", logo: "/assets/image/products logo/HONEYWELL.png", path: "/products/honeywell" },
        { name: "HIKVISION", logo: "/assets/image/products logo/HIKVision.png", path: "/products/hikvision" },
        { name: "ACTi", logo: "/assets/image/Client Logo/ACTi.png", path: "/products/acti" },
        { name: "DAHUA", logo: "/assets/image/products logo/AJHua.png", path: "/products/dahua" }
      ]
    },
    {
      title: "Detection Systems",
      description: "Guard-All has been a trusted provider and installer of metal detection systems and X-Ray machines in various airports, banks, and office buildings. With our most advanced Detection Systems, you can precisely detect high-risk items and hidden weapons.",
      img: "/assets/image/Our Products/autoclear-xray.png",
      brands: [
        { name: "GILARDONI", logo: "/assets/image/products logo/Gilardoni.png", path: "/products/gilardoni" },
        { name: "CEIA", logo: "/assets/image/products logo/CEIA.png", path: "/products/ceia" },
        { name: "AUTOCLEAR", logo: "/assets/image/products logo/Auto-clear.png", path: "/products/autoclear" }
      ]
    },
    {
      title: "Fire Alarm",
      description: "Fire Alarm Systems are a major requirement for buildings today. To equip you with the latest, Guard-All provides smoke & fire detector alarms, beam detectors for open areas, and special devices for high-risk areas.",
      img: "/assets/image/Our Products/Rectangle-11-2.png",
      brands: [
        { name: "Honeywell", logo: "/assets/image/products logo/HONEYWELL.png", path: "/products/honeywell" },
        { name: "detnov", logo: "/assets/image/products logo/Detnov.png", path: "/products/detnov" }
      ]
    },
    {
      title: "Forensic Examination",
      description: "To ensure the authenticity of your critical documents and help you detect evidence tampering, our partners in FOSTER + FREEMAN have scientific-grade VSC to identify document manipulation with unparalleled accuracy.",
      img: "/assets/image/Our Products/forensic.png",
      brands: [
        { name: "foster+freeman", logo: "/assets/image/products logo/Fosterfreeman.png", path: "/products/foster-freeman" }
      ]
    },
    {
      title: "Guard Tour Systems",
      description: "Manage your security personnel and employees with Guard Tour Patrol Systems. It will help you track their live location, communicate two-way, and record their journey to ensure rounds are made safely.",
      img: "/assets/image/Our Products/guard.jpg",
      brands: [
        { name: "EBS", logo: "/assets/image/products logo/EBS.png", path: "/products/ebs" }
      ]
    },
    {
      title: "Hotel Locking System",
      description: "Guard-All offers comprehensive locking systems that range from electronic to mechanical locks. Our hotel locking systems can also integrate with IDENTIV access control systems for enhanced security.",
      img: "/assets/image/Our Products/hotel.jpg",
      brands: [
        { name: "Onity", logo: "/assets/image/products logo/Onity.png", path: "/products/onity" },
        { name: "orbita", logo: "/assets/image/products logo/orbita.png", path: "/products/orbita" }
      ]
    },
    {
      title: "Intrusion / Burglary Alarm Systems",
      description: "These round-the-clock sensors are ideal to secure businesses. Guard-All can help design a system based on your need and connect it to our 24-7-365 Central Monitoring System for prompt response.",
      img: "/assets/image/Our Products/intrusion.jpeg",
      brands: [
        { name: "PARADOX", logo: "/assets/image/products logo/paradox.png", path: "/products/paradox" }
      ]
    },
    {
      title: "Parking Management / Parking Guidance System",
      description: "If you’re looking to expand your Vehicle Systems, we recommend our Parking Management Systems. Manage the vehicular flow in your properties with our systems which includes high-speed gate barriers, ticket-based or token-based entry/exit stations, and more.",
      img: "/assets/image/Our Products/parking.jpeg",
      brands: [
        { name: "CASS", logo: "/assets/image/products logo/CASS.png", path: "/products/cass" }
      ]
    },
    {
      title: "Quick Alert",
      description: "Aside from investing in security equipment, you need to ensure that your systems are connected to a monitoring station like Quick Alert. Quick Alert is a full service Central Monitoring Station devoted to surveil premises and monitor intrusion, fire, and panic alarms.",
      img: "/assets/image/Our Products/quickalert.jpg",
      brands: [
        { name: "QUICK ALERT", logo: "/assets/image/products logo/Quick-Alert.png", path: "/products/quick-alert" }
      ]
    },
    {
      title: "Vehicle Barrier System and Pedestrian Barriers",
      description: "With Vehicle Barrier System and Pedestrian Barriers, you can control the traffic, regulate vehicular access, and limit access to increase security of selected areas. At Guard-All, our vehicle systems include boom barriers for parking and tollways.",
      img: "/assets/image/Our Products/vehicle.png",
      brands: [
        { name: "MAGNETIC", logo: "/assets/image/products logo/Magnetic.png", path: "/products/magnetic" },
        { name: "LEDA", logo: "/assets/image/products logo/Leda.png", path: "/products/leda" },
        { name: "FAAC", logo: "/assets/image/products logo/FAAC.png", path: "/products/faac" },
        { name: "DELTA", logo: "/assets/image/products logo/Delta.png", path: "/products/delta" }
      ]
    },
    {
      title: "Vesda System (Aspirating Smoke Detection)",
      description: "To increase smoke detection in your buildings and office spaces, we highly recommend the VESDA System. It is an Aspirating Smoke Detector that can monitor smoke levels at various locations to signal early fire breakout by constantly testing the airflow.",
      img: "/assets/image/Our Products/vesda.jpg",
      brands: [
        { name: "VESDA by xtralis", logo: "/assets/image/products logo/vesda-1.png", path: "/products/vesda" }
      ]
    }
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mimicking a slight delay for assets to be ready
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#f4f7fa]">
        <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-[#2257a0]"></div>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-24 bg-[#f4f7fa] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-24">
          <h1 className="text-4xl md:text-7xl font-black text-[#2257a0] mb-6 tracking-tight">
            Our Products
          </h1>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
            With our 40-year expertise in the industry, Guard-All has partnered with the best security product manufacturers to be their “Exclusive” or “Authorized” distributors.
          </p>
        </div>

        {/* Product Category Wrapper */}
        <div className="bg-blue-100/40 rounded-[2.5rem] md:rounded-[4rem] p-4 md:p-12 border border-blue-200/30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {allCategories.map((cat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full border border-slate-100"
              >
                {/* Responsive Image Container */}
                <div className="overflow-hidden mb-8 rounded-3xl aspect-video md:aspect-square bg-gray-200">
                  <img 
                    src={`http://localhost:5000${cat.img}`} 
                    alt={cat.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    onError={(e) => { e.target.src = "https://via.placeholder.com/400x400?text=Product+Image"; }}
                  />
                </div>

                {/* Text Content */}
                <h3 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {cat.title}
                </h3>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 flex-grow">
                  {cat.description}
                </p>

                {/* Clickable Brands Section */}
                <div className="mt-auto border-t border-slate-50 pt-8">
                  <p className="text-[#f97316] font-black md:text-xl lg:text-xl text-[15px] uppercase tracking-[0.25em] mb-6 text-center md:text-left">
                    CLICK TO VIEW MORE:
                  </p>

                  {/* Brand Grid: Maintains 2 columns for visibility */}
                  <div className="gap-4 items-stretch">
                    {cat.brands.map((brand, i) => (
                      <Link 
                        key={i} 
                        to={brand.path} 
                        className="group/logo flex items-center justify-center p-4 md:p-5 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-blue-100 transition-all duration-300"
                      >
                        <img 
                          src={brand.logo} 
                          alt={brand.name}
                          /* ENLARGED LOGOS: h-20 on mobile, h-24 on desktop */
                          className="h-20 md:h-20 lg:h-24 w-full object-contain filter group-hover/logo:scale-110 transition-transform duration-300"
                          onError={(e) => { e.target.src = `https://via.placeholder.com/150x80?text=${brand.name}`; }}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;