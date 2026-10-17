import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const IMAGE_BASE_URL = import.meta.env.VITE_API_URL;

const ProductCard = ({ title, description, image, detailRoute }) => (
  <div className="group bg-white dark:bg-[#1e1e22] border border-gray-200 dark:border-gray-800 rounded-xl p-4 flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-2xl dark:hover:shadow-gray-900/50 hover:-translate-y-2 hover:border-blue-300 dark:hover:border-blue-500 cursor-pointer">
    {/* Product Image Container */}
    <div className="bg-white dark:bg-gray-800/80 rounded-lg p-4 mb-4 flex items-center justify-center h-48 overflow-hidden">
      <img 
        src={image ? `${IMAGE_BASE_URL}${image}` : "/assets/image/image-not-found.svg"} 
        alt={title} 
        className="max-h-full max-w-full object-contain filter dark:brightness-105 transition-transform duration-500 group-hover:scale-110" 
        onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=Image+Not+Found"; }}
      />
    </div>

    <div className="flex-grow flex flex-col justify-between px-2">
      <div>
        <h3 className="text-[#1a365d] dark:text-blue-400 font-bold text-xl uppercase mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors min-h-[2.5rem]">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed">
          {description}
        </p>
      </div>

      <span className="block mt-12 text-gray-500 dark:text-gray-400 text-sm tracking-widest">
        <NavLink to={detailRoute} className="text-[#184c9b] dark:text-blue-400 hover:underline mt-2 block">
          <h3 className="text-xl font-poppins hover:text-[#ff5f31] dark:hover:text-[#ff5f31] transition-colors duration-300">
            View Details
          </h3>
        </NavLink>
      </span>
    </div>
  </div>
);

const Acti = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActiProducts = async () => {
      try {
        const response = await fetch(`${IMAGE_BASE_URL}/api/products/brand/ACTi`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching ACTi products:", error);
        setLoading(false);
      }
    };
    fetchActiProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] dark:bg-[#121214] text-[#0d3874] dark:text-blue-400 font-figtree transition-colors duration-300">
        Loading ACTi Catalog...
      </div>
    );
  }

  return (
    <div className="bg-[#f8fafc] dark:bg-[#121214] min-h-screen py-16 px-4 sm:px-8 lg:px-16 font-figtree transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-5xl text-[#0d3874] dark:text-blue-400 mb-6 tracking-tight font-bold transition-colors">
            {products.length > 0 ? products[0].category_name : "CCTVs"} – ACTi
          </h2>
          <div className="h-1 w-20 bg-blue-500 dark:bg-blue-400 mx-auto rounded-full"></div>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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

export default Acti;