import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const IMAGE_BASE_URL = import.meta.env.VITE_API_URL;

const ProductCard = ({ title, description, image, detailRoute }) => (
  <div className="bg-white dark:bg-[#1e1e22] border border-gray-200 dark:border-gray-800 rounded-xl p-5 flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-gray-900/50 cursor-pointer group">
    {/* Product Image Container */}
    <div className="bg-gray-50 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/50 rounded-lg p-6 mb-5 flex items-center justify-center h-64 overflow-hidden">
      <img 
        src={`${IMAGE_BASE_URL}${image}`} 
        alt={title} 
        className="max-h-full max-w-full object-contain filter dark:brightness-105 transition-transform duration-500 group-hover:scale-110" 
        onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=Image+Not+Found"; }}
      />
    </div>
    
    <div className="flex-grow flex flex-col justify-between">
      <div>
        <h3 className="text-[#1a365d] dark:text-blue-400 font-semibold text-xl uppercase mb-3 leading-tight tracking-wide min-h-[3rem] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed">
          {description}
        </p>
      </div>

      <span className="block mt-12 text-gray-500 dark:text-gray-400 text-sm tracking-widest">
        <NavLink to={detailRoute} className="text-blue-500 dark:text-blue-400 hover:underline mt-2 block">
          <h3 className="text-xl font-poppins hover:text-[#ff5f31] dark:hover:text-[#ff5f31] transition-colors duration-300">
            View Details
          </h3>
        </NavLink>
      </span>
    </div>
  </div>
);

const Webgate = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWebgateProducts = async () => {
      try {
        const response = await fetch(`${IMAGE_BASE_URL}/api/products/brand/Webgate`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Webgate products:", error);
        setLoading(false);
      }
    };
    fetchWebgateProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#e9eff6] dark:bg-[#121214] text-gray-800 dark:text-gray-200 font-figtree transition-colors duration-300">
        Loading Webgate CCTVs...
      </div>
    );
  }

  return (
    <div className="bg-[#e9eff6] dark:bg-[#121214] min-h-screen py-16 px-6 lg:px-12 font-figtree transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-5xl md:text-5xl lg:text-5xl text-[#0d3874] dark:text-blue-400 mb-6 tracking-tight font-bold transition-colors">
            {products.length > 0 ? products[0].category_name : "CCTVs"} – Webgate
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] dark:bg-blue-400 mx-auto rounded-full opacity-20"></div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image_path}
              detailRoute={item.detail_route}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Webgate;