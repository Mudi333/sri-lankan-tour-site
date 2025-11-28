import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={`${style.navbar} ${style.glass_nav}`}>
      <ul className={style.nav_links}>
        <li>
          <NavLink to="/" className={style.nav_link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={style.nav_link}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/tours" className={style.nav_link}>
            Tours
          </NavLink>
        </li>
        <li>
          <NavLink to="/guides" className={style.nav_link}>
            Guides
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={style.nav_link}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}


/* 
        <div className="flex gap-2">
          <Button variant="ghost" onClick={() => setOpenAuth('login')}>Sign in</Button>
          <Button onClick={() => setOpenAuth('register')}>Register</Button>
        </div> */

{
  /* <AuthModel mode={openAuth} onOpenChange={setOpenAuth} /> */
}
