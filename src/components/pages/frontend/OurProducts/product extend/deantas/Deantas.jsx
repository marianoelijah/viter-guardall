import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const IMAGE_BASE_URL = import.meta.env.VITE_API_URL;

const ProductCard = ({ title, description, image, detailRoute }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer group">
    <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-5 flex items-center justify-center h-64 overflow-hidden">
      <img 
        // src={image ? `${IMAGE_BASE_URL}${image}` : "/assets/image/image-not-found.svg"}
        src={image ? image : "/assets/image/image-not-found.svg"} 
        alt={title} 
        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110" 
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/assets/image/image-not-found.svg";
        }}
      />
    </div>
    <div className="flex-grow">
      <h3 className="text-[#1a365d] font-semibold text-xl uppercase mb-3 leading-tight tracking-wide min-h-[3.5rem]">
        {title}
      </h3>
      <p className="text-gray-600 text-xl leading-relaxed line-clamp-3">
        {description}
      </p>
      <span className='block mt-12 text-gray-500 text-sm tracking-widest'>
        <NavLink to={detailRoute} className="text-[#184c9b] hover:underline mt-2 block">
          <h3 className='text-xl font-poppins hover:text-[#ff5f31] transition-colors duration-300'>
            View Details
          </h3>
        </NavLink>
      </span>
    </div>
  </div>
);

const Deantas = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeantasProducts = async () => {
      try {
        const response = await fetch(`${IMAGE_BASE_URL}/api/products/brand/Deantas`);
        const data = await response.json();
        setProducts(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Deantas products:", error);
        setProducts([]);
        setLoading(false);
      }
    };
    fetchDeantasProducts();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center font-figtree text-[#0d3874]">Loading Deantas SmartLock...</div>;

  return (
    <div className="bg-[#e9eff6] min-h-screen py-16 px-6 lg:px-12 font-figtree">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-5xl text-[#0d3874] mb-6 tracking-tight">
            {products.length > 0 ? products[0].category_name : "Deantas SmartLock"} – Deantas
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
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

export default Deantas;