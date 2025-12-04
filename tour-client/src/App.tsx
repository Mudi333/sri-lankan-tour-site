import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "@/components/Navbar/Navbar";
import Header from "./components/Header/Header";
// import HomeVideo from "./HomeVideo/HomeVideo";

// import "./styles/globals.css";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className={styles.layout}>
      <video className={styles.backgroundVideo} autoPlay loop muted playsInline>
        <source src="/videos/ocean-waves.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <HomeVideo /> */}

      <div className={styles.overlay}>
        <Header />
        {/* <Navbar /> */}
        <main className={styles.mainContent}>
          <div className={styles.mainInner}>
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
