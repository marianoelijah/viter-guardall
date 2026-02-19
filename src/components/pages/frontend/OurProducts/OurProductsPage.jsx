import React from 'react';
import Header from "../partials/Header";
import Footer from "../partials/Footer";         
import ProductPage from "./ProductPage";
import ProductHero from "./ProductHero";

const OurProductsPage = () => {
  return (
    <>
      <Header />
      
      <ProductPage />
      <ProductHero />
      <Footer />
    </>
  );
};

export default OurProductsPage;
