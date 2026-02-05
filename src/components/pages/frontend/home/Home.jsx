import React from "react";
import Header from "../partials/Header";
import BannerSlider from "./BannerSlider";
import Footer from "../partials/Footer";
import TrustedClients from "./TrustedClients";
import AboutLegacy from "./AboutLegacy";
import OurProducts from "./OurProducts";
import SecureLifeCTA from "./SecureLifeCTA";


const Home = () => {
  return (
    <>
      <Header />
      <BannerSlider />
      <TrustedClients />
      <AboutLegacy />
      <OurProducts />
      <SecureLifeCTA />
      <Footer />
    </>
  );
};

export default Home;