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
        const response = await axios.get(`http://localhost:5000/api/products-by-brand/${slug}`);
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

  if (loading) return <div className="text-center py-20 text-2xl">Loading {slug} products...</div>;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-[#1e3a8a] mb-12 border-b-4 border-orange-500 inline-block">
          {brandName || slug.toUpperCase()} Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              {/* Product Image */}
              <div className="bg-gray-100 aspect-square flex items-center justify-center p-6">
                <img 
                  src={product.product_image} 
                  alt={product.product_name} 
                  className="max-h-full object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{product.product_name}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{product.product_description}</p>
                
                <button className="bg-[#2257a0] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors self-start">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <p className="text-center text-gray-500 text-xl py-20">No products found for this brand yet.</p>
        )}
      </div>
    </section>
  );
};

export default BrandDetails;