import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const IMAGE_BASE_URL = import.meta.env.VITE_API_URL;

const ProductCard = ({ title, description, image, detailRoute }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer group">
    <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-5 flex items-center justify-center h-64 overflow-hidden">
      <img 
        src={image ? `${IMAGE_BASE_URL}${image}` : "/assets/image/image-not-found.svg"} 
        alt={title} 
        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110" 
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/assets/image/image-not-found.svg";
        }}
      />
    </div>
    <div className="flex-grow">
      <h3 className="text-[#1a365d] font-semibold text-xl uppercase mb-3 leading-tight tracking-wide min-h-[3rem]">
        {title}
      </h3>
      <p className="text-gray-600 text-xl leading-relaxed line-clamp-3">
        {description}
      </p>
      <span className='block mt-12 text-gray-500 text-sm tracking-widest'>
        <NavLink to={detailRoute} className="text-[#184c9b] hover:underline mt-2 block">
          <h3 className='text-xl font-poppins hover:text-green-500 transition-colors duration-300'>
            View Details
          </h3>
        </NavLink>
      </span>
    </div>
  </div>
);

const Hanwha = () => {
    
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHanwhaProducts = async () => {
      try {
        const response = await fetch(`${IMAGE_BASE_URL}/api/products/brand/Hanwha`);
        const data = await response.json();
        setProducts(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Hanwha products:", error);
        setProducts([]);
        setLoading(false);
      }
    };
    fetchHanwhaProducts();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center font-figtree text-[#0d3874]">Loading Hanwha Catalog...</div>;

  return (
    <div className="bg-[#e9eff6] min-h-screen px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        <header className="text-center py-16 px-6 md:px-10 lg:px-20">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium text-[#0d3874] mb-6 tracking-tight">
            {products.length > 0 ? products[0].category_name : "CCTVs"} – Hanwha
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
        </header>

         {/* Grid Layout - Standardized gap and size */}
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

export default Hanwha;