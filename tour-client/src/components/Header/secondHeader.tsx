import React from "react";
import styles from "./Header.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        
        {/* LEFT SIDE — LOGO */}
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" />
          <span>SERENDIP TOURS</span>
        </div>

        {/* RIGHT SIDE — TWO LEVELS */}
        <div className={styles.rightSide}>
          
          {/* TOP LEVEL — LOGIN + REGISTER */}
          <div className={styles.topButtons}>
            <a className={`${styles.btn} ${styles.login}`} href="#">Login</a>
            <a className={`${styles.btn} ${styles.register}`} href="#">Register</a>
          </div>

          {/* BOTTOM LEVEL — NAV LINKS */}
          <ul className={styles.bottomLinks}>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">TOURS</a></li>
            <li><a href="#">BECOME A GUIDE</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>

        </div>
      </nav>
    </header>
  );
}
