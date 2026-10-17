import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BrandDetails = () => {
  const { slug } = useParams(); // Grabs 'honeywell' or 'pelco' from the URL
  const [products, setProducts] = useState([]);
  const [brandName, setBrandName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrandProducts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products-by-brand/${slug}`);
        setProducts(response.data);
        
        // Set the title based on the first product's brand name
        if (response.data.length > 0) {
          setBrandName(response.data[0].brand_name);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching brand products:", error);
        setLoading(false);
      }
    };

    fetchBrandProducts();
  }, [slug]);

  if (loading) {
    return (
      <div className="text-center py-20 text-2xl text-gray-800 dark:text-gray-200 bg-white dark:bg-[#121214] transition-colors duration-300">
        Loading {slug} products...
      </div>
    );
  }

  return (
    <section className="py-20 bg-white dark:bg-[#121214] font-poppins transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-[#1e3a8a] dark:text-blue-400 mb-12 border-b-4 border-orange-500 inline-block transition-colors">
          {brandName || slug.toUpperCase()} Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-white dark:bg-[#1e1e22] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300"
            >
              {/* Product Image Container */}
              <div className="bg-gray-100 dark:bg-gray-800/80 aspect-square flex items-center justify-center p-6">
                <img 
                  src={product.product_image} 
                  alt={product.product_name} 
                  className="max-h-full object-contain filter dark:brightness-105"
                />
              </div>

              {/* Product Info */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 transition-colors">
                  {product.product_name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
                  {product.product_description}
                </p>
                
                <button className="bg-[#2257a0] dark:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 dark:hover:bg-[#ff5f31] transition-colors self-start shadow-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 text-xl py-20">
            No products found for this brand yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default BrandDetails;