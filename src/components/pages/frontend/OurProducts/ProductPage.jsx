import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const ProductPage = () => {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/products`);
        setCategories(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#f4f7fa] dark:bg-[#121214] transition-colors duration-300">
        <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-[#2257a0] dark:border-blue-400"></div>
      </div>
    );
  }

  return (

    <section className="py-12 md:py-24 bg-[#c6d3e0] dark:bg-[#121214] font-poppins overflow-x-hidden transition-colors duration-300">
      <div className="max-w-8xl mx-15 md:mx-20 px-4 md:px-8">
        <div className="text-center mb-12 md:mb-24 relative">
          <h1 className="text-5xl md:text-7xl font-bold text-[#2257a0] dark:text-blue-400 mb-4 md:mb-6 tracking-tight">
             Our Products
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-[#ff5f31] hover:text-black dark:hover:text-white mb-4 md:mb-6 tracking-tight transition-colors">
             With our 40-year expertise in the industry, Guard-All has partnered with the best security product manufacturers <br/>
             to be their “Exclusive” or “Authorized” distributors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-white dark:bg-[#1e1e22] border border-transparent dark:border-gray-800 rounded-[2.5rem] p-8 shadow-sm dark:shadow-gray-900/50 transition-all duration-500 flex flex-col h-full justify-between ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer group">

              {/* Product Image */}
              <div className="overflow-hidden mb-8 rounded-xl aspect-video bg-gray-200 dark:bg-gray-800">
                <img
                  src={`${API_URL}${cat.image_path || cat.img_path || cat.img || '/assets/image/Our Products/Deantas.jpeg'}`}
                  alt={cat.title}
                  className="w-full h-full object-cover dark:mix-blend-normal mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => { 
                    e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; 
                  }}
               />
              </div>

              <h3 className="text-3xl md:text-3xl font-bold text-[#1e3a8a] dark:text-blue-400 mb-4 transition-colors">
                {cat.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl leading-relaxed">
                {cat.description}
              </p>

              {/* Brands Section */}
              <div className="mt-auto border-t border-gray-100 dark:border-gray-800 pt-8">
                <p className="text-[#ff5f31] text-xl md:text-xl font-black uppercase tracking-[0.25em] mb-6 text-center">
                  Click to view more:
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                  {cat.brands && cat.brands.map((brand, i) => (
                    <Link
                      key={i}
                      to={brand.path}
                      className="p-2 bg-slate-50 dark:bg-gray-800/80 rounded-2xl border border-transparent dark:border-gray-700 hover:border-blue-100 dark:hover:border-blue-400 flex items-center justify-center min-h-[70px] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer group"
                    >
                      <img
                        src={`${API_URL}${brand.logo}`}
                        alt={brand.name}
                        className="max-h-30 w-full object-contain filter dark:brightness-110"
                      />
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>

  );

};

export default ProductPage;