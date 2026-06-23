import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const IMAGE_BASE_URL = import.meta.env.VITE_API_URL;

const ProductCard = ({ title, description, image, detailRoute }) => (
  <div className="group bg-white border border-gray-200 rounded-xl p-4 flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:border-blue-300 cursor-pointer">
    <div className="bg-white rounded-lg p-4 mb-4 flex items-center justify-center h-48 overflow-hidden">
      <img 
        src={`${IMAGE_BASE_URL}${image}`} 
        alt={title} 
        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110" 
        onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=Image+Not+Found"; }}
      />
    </div>
    <div className="flex-grow px-2">
      <h3 className="text-[#1a365d] font-bold text-xl uppercase mb-3 leading-tight group-hover:text-blue-600 transition-colors min-h-[2.5rem]">
        {title}
      </h3>
      <p className="text-gray-600 text-xl leading-relaxed line-clamp-3">
        {description}
      </p>
      <span className='block mt-12 text-gray-500 text-sm tracking-widest'>
        <NavLink to={detailRoute} className="text-blue-500 hover:underline mt-2 block">
          <h3 className='text-xl font-poppins hover:text-green-500 transition-colors duration-300'>
            View Details
          </h3>
        </NavLink>
      </span>
    </div>
  </div>
);

const Ceia = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCeiaProducts = async () => {
      try {
        const response = await fetch(`${IMAGE_BASE_URL}/api/products/brand/Ceia`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Ceia products:", error);
        setLoading(false);
      }
    };
    fetchCeiaProducts();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center font-figtree text-[#0d3874]">Loading Detection Systems...</div>;

  return (
    <div className="bg-[#f8fafc] min-h-screen py-16 px-4 sm:px-8 lg:px-16 font-figtree">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-5xl text-[#0d3874] mb-6 tracking-tight">
            {products.length > 0 ? products[0].category_name : "Detection Systems"} - Ceia
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
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

export default Ceia;