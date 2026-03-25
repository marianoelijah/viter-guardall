import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

const IMAGE_BASE_URL = "http://localhost:5000";

const ProductCard = ({ title, description, image, detailRoute }) => (
  <div className="group bg-white border border-gray-200 rounded-xl p-5 flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
    <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-5 flex items-center justify-center h-64 overflow-hidden">
      <img 
        src={`${IMAGE_BASE_URL}${image}`} 
        alt={title} 
        className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" 
      />
    </div>
    
    <div className="flex-grow">
      <h3 className="text-[#1a365d] font-semibold text-sm uppercase mb-3 leading-tight tracking-wide min-h-[2.5rem]">
        {title}
      </h3>
      <p className="text-gray-600 text-xl leading-relaxed">
        {description}
      </p>
      <span className='block mt-12 text-gray-500 text-sm tracking-widest'>
        <NavLink to={detailRoute} className="text-blue-500 hover:underline mt-2 block">
          <h3 className='text-xl font-poppins hover:text-green-500 transition-colors duration-300'>View Details</h3>
        </NavLink>
      </span>
    </div>
  </div>
);

const BrandProducts = () => {
  const { brandName } = useParams(); // Grabs 'Honeywell', 'Hirsch', etc. from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrandProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${IMAGE_BASE_URL}/api/products/brand/${brandName}`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching brand products:", error);
        setLoading(false);
      }
    };
    fetchBrandProducts();
  }, [brandName]); // Refetch if the brand in the URL changes

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading {brandName} Products...</div>;

  return (
    <div className='bg-[#f0f4f8] min-h-screen px-6 lg:px-12 font-figtree'> 
      <div className="max-w-7xl mx-auto">
        <header className="text-center py-16 px-6 md:px-10 lg:px-20">
          <h2 className="text-lg md:text-5xl lg:text-5xl text-[#0d3874] mb-6 tracking-tight uppercase">
            {brandName} - {products.length > 0 ? products[0].category_name : "Products"}
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
        </header>
        
        <div className="bg-[#e9eff6] py-16 px-4 md:px-10 lg:px-12 rounded-3xl shadow-inner">
          <div className="max-w-7xl mx-auto">
            {products.length > 0 ? (
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
            ) : (
              <div className="text-center py-20 text-gray-500">No products found for {brandName}.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProducts;