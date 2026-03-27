import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const IMAGE_BASE_URL = "http://localhost:5000";

const OurProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch(`${IMAGE_BASE_URL}/api/home-featured-products`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching featured products:", error);
        setLoading(false);
      }
    };
    fetchFeaturedProducts();
  }, []);

  if (loading) return <div className="py-20 text-center">Loading Products...</div>;

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-7xl text-[#2257a0] mb-6 drop-shadow-sm tracking-tigh">
          Our Products
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-xl leading-relaxed">
          Guard-All offers a comprehensive range of state-of-the-art electronic security products tailored to meet diverse security needs.
        </p>

        <div className="relative px-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            loop={products.length > 4} // Only loop if we have enough products
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="product-swiper pb-12"
          >
            {products.map((item, index) => (
              <SwiperSlide key={item.id || index}>
                <div className="flex flex-col items-center">
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 mb-4">
                    <img 
                      src={`${IMAGE_BASE_URL}${item.image_path}`} 
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

        <Link to="/our-products" className="inline-block mt-8 bg-blue-800 text-white px-10 py-3 rounded-md lg:rounded font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-lg">
          Browse Products
        </Link>
      </div>
    </section>
  );
};

export default OurProducts;