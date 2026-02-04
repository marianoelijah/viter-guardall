import React from 'react';
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import ProductLanding from "./ProductLanding";           
import ProductPage from "./ProductPage";
import ProductHero from "./ProductHero";

const OurProductsPage = () => {
  return (
    <>
      <Header />
      <ProductLanding />
      <ProductPage />
      <ProductHero />
      <Footer />
    </>
  );
};

export default OurProductsPage;
