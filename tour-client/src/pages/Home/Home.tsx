import React from "react";
import styles from  "./Home.module.css";
import HeroSection from "@/components/Hero/Hero";

import TourPlan from "@/components/TourCards/TourPlan";
import About from "@/components/About/About"



const Home = () => {
  return (
   <div className={styles.wrapper}>
      <HeroSection/>
      <About />
      <TourPlan />


 

    </div>


   
  );
}


 
export default Home;