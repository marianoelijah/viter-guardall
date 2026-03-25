import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const IMAGE_BASE_URL = "http://localhost:5000";

const ProductCard = ({ title, description, image, detailRoute }) => (
  <div className="group bg-white border border-gray-200 rounded-xl p-5 flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
    <div className="bg-gray-200 border border-gray-100 rounded-lg p-6 mb-5 flex items-center justify-center h-64 overflow-hidden">
      <img 
        src={`${IMAGE_BASE_URL}${image}`} 
        alt={title} 
        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110" 
      />
    </div>
    
    <div className="flex-grow">
      <h3 className="text-[#1a365d] font-semibold text-sm uppercase mb-3 leading-tight tracking-wide min-h-[2.5rem]">
        {title}
      </h3>
      <p className="text-gray-600 text-xl leading-relaxed">
        {description}
      </p>
      <span className='text-classic block mt-12 text-gray-500 text-sm tracking-widest'>
        <NavLink to={detailRoute} className="text-blue-500 hover:underline mt-2 block">
          <h3 className='text-xl font-poppins hover:text-green-500 transition-colors duration-300'>View Details</h3>
        </NavLink>
      </span>
    </div>
  </div>
);

const Mag = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMagProducts = async () => {
      try {
        const response = await fetch(`${IMAGE_BASE_URL}/api/products/brand/Mag`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Mag products:", error);
        setLoading(false);
      }
    };
    fetchMagProducts();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading Mag Products...</div>;

  return (
    <div className="bg-[#e9eff6] min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-lg md:text-5xl lg:text-5xl font-figtree text-[#0d3874] mb-6 tracking-tight">
            {products.length > 0 ? products[0].category_name : "Access Control System"} – MAG
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
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

        <footer className="mt-20 pt-10 border-t border-gray-300 text-center text-gray-500 text-sm tracking-widest uppercase">
          MAG Security Solutions | Innovative Door Access
        </footer>
      </div>
    </div>
  );
};

export default Mag;