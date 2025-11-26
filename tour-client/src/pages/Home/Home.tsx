import React from "react";
import "./Home.css";
import HeroSection from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import TourPlan from "@/components/TourCards/TourPlan";

const Home = () => {
  return (
    <div className="home">
      <HeroSection/>
      <TourPlan />

      <Footer/>

    </div>
  );
};

export default Home;