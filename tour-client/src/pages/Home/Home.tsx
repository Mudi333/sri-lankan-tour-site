import React from "react";
import "./Home.css";
import HeroSection from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <HeroSection/>
      <Footer/>

    </div>
  );
};

export default Home;