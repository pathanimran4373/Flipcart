import React from "react";
import Banner from "../../components/Banner/Banner";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import Footer from "../../components/home/Footer/Footer"
const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <NewArrivals />
      <BestSellers />
      <YearProduct />
      <SpecialOffers />
      <Footer/>
    </div>
  );
};

export default Home;
