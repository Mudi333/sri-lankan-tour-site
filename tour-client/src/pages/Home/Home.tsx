import React from "react";
import styles from  "./Home.module.css";
import HeroSection from "@/components/Hero/Hero";

import TourPlan from "@/components/TourCards/TourPlan";
import About from "@/components/About/About"
import MapSection from "@/components/MapSection/MapSection";
import FindUs from "@/components/FindUs/FindUs";



const Home = () => {
  return (
   <div className={styles.wrapper}>
      <HeroSection/>
      <About />
      <MapSection />
      <TourPlan />
      <FindUs />


 

    </div>


   
  );
}


 
export default Home;