import React from 'react';
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Who from "./Who";           
import What from "./What";
import Founders from "./Founders"
import SecurityExperts from "./SecurityExperts";

const WhoWeArePage = () => {
  return (
    <>
      <Header />
      <Who />
      <What />  
      <Founders />
      <SecurityExperts />
      <Footer />
    </>
  );
};

export default WhoWeArePage;