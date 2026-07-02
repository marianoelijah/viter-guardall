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
        // This endpoint calls the backend route we created
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
      <div className="flex justify-center items-center h-screen bg-[#f4f7fa]">
        <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-[#2257a0]"></div>
      </div>
    );
  }



  return (

    <section className="py-12 md:py-24 bg-[#c6d3e0] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 text-[4rem] sm:text-[8rem] md:text-[12rem] font-black select-none pointer-events-none whitespace-nowrap">
            GUARD-ALL
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#2257a0] mb-4 md:mb-6 tracking-tight">
             Our Products
          </h1>
        </div>


        {/* Change this line  */}
        {/* This is a stretch product card  */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"> */}

        {/* This is not using a stretch product card  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 items-start">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-white rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
              {/* Product Image */}
              <div className="overflow-hidden mb-8 rounded-3xl aspect-video bg-gray-200">
                <img
                  src={`${API_URL}${cat.img}`}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
              </div>



              <h3 className="text-3xl font-bold text-[#1e3a8a] mb-4">{cat.title}</h3>
              <p className="text-gray-500 mb-8 flex-grow text-xl">{cat.description}</p>



              {/* Brands Section */}

              <div className="mt-auto border-t pt-8">
                <p className="text-[#f97316] text-xl lg:text-lg  font-black uppercase tracking-[0.25em] mb-6 text-center">
                  Click to view more:
                </p>
                <div className="grid gap-4">
                  {cat.brands && cat.brands.map((brand, i) => (
                    <Link
                      key={i}
                      to={brand.path}
                      className="p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-100 transition-all"
                    >
                      <img
                        src={`${API_URL}${brand.logo}`}
                        alt={brand.name}
                        className="h-16 w-full object-contain"
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