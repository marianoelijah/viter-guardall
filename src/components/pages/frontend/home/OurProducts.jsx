import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const OurProducts = () => {
  const products = [
    { title: "Quick Alert", img: "/src/assets/image/Our Products/quickalert.jpg" },
    { title: "Vehicle Barrier System and Pedestrian Barriers", img: "/src/assets/image/Our Products/vehicle.png" },
    { title: "Vesda System (Aspirating Smoke Detection)", img: "/src/assets/image/Our Products/vesda.jpg" },
    { title: "Access Control System", img: "/src/assets/image/Our Products/access.jpg" },
    { title: "Forensic Examination", img: "/src/assets/image/Our Products/forensic.png" },
    { title: "Guard Tour Systems", img: "/src/assets/image/Our Products/guard.jpg" },
    { title: "Hotel Locking", img: "/src/assets/image/Our Products/hotel.jpg" },
    { title: "Intrusion /Burglary Alarm Systems", img: "/src/assets/image/Our Products/intrusion.jpeg" },
    { title: "Parking Management / Parking Guiding System", img: "/src/assets/image/Our Products/parking.jpeg" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header Section */}
        <h2 className="text-4xl md:text-7xl text-[#2257a0] mb-6 drop-shadow-sm tracking-tigh">
          Our Products
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-xl leading-relaxed">
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
        <Link to="/our-products" className="inline-block mt-8 bg-blue-800 text-white px-10 py-3 rounded-md font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-lg">
          Browse Products
        </Link>
      </div>
    </section>
  );
};

export default OurProducts;