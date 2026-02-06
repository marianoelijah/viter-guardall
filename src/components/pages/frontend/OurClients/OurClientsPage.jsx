import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import ClientsSection from "./ClientsSection";
import GuardAllClients from "./GuardAllClients";
import GuardAllLanding from "./GuardAllLanding";
import LandingPageClients from "./LandingPageClients";



const OurClientsPage = () => {
  return (
    <>
      <Header />
      <ClientsSection />
      <GuardAllClients />
      <GuardAllLanding />
      <LandingPageClients />
      <Footer />
    </>
  );
};

export default OurClientsPage;