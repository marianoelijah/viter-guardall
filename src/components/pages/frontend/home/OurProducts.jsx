import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const OurProducts = () => {
  const products = [
    { title: "Quick Alert", img: "/images/quick-alert.jpg" },
    { title: "Vehicle Barrier System and Pedestrian Barriers", img: "/images/barriers.jpg" },
    { title: "Vesda System (Aspirating Smoke Detection)", img: "/images/vesda.jpg" },
    { title: "Access Control System", img: "/images/access-control.jpg" },
    { title: "Forensic Examination", img: "/images/forensic.jpg" },
    { title: "Guard Tour Systems", img: "/images/guard-tour.jpg" },
    { title: "Hotel Locking", img: "/images/hotel-locking.jpg" },
    { title: "Intrusion/Burglary Alarm Systems", img: "/images/intrusion.jpg" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header Section */}
        <h2 className="text-4xl font-bold text-blue-900 uppercase tracking-tight mb-4">Our Products</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
          Guard-All offers a comprehensive range of state-of-the-art electronic security products, 
          including fire alarm systems, CCTV, access control, and intruder alarms, tailored to meet 
          diverse security needs.
        </p>

        {/* Slider Container */}
        <div className="relative px-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            loop={true}
            autoplay={{
              delay: 5000, // 5 seconds per slide for a "slow" feel
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="product-swiper pb-12"
          >
            {products.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center">
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 mb-4">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 leading-tight h-12 flex items-center justify-center">
                    {item.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Browse Button */}
        <button className="mt-8 bg-blue-800 text-white px-10 py-3 rounded-md font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-lg">
          Browse Products
        </button>
      </div>
    </section>
  );
};

export default OurProducts;