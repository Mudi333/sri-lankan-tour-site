import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={`${style.navbar} ${style.glass_nav}`}>
     
      <button className={style.burger} onClick={() => setOpen(!open)}>
        <span
          className={open ? style.burger_line_open : style.burger_line}
        ></span>
        <span
          className={open ? style.burger_line_open : style.burger_line}
        ></span>
        <span
          className={open ? style.burger_line_open : style.burger_line}
        ></span>
      </button>

      <ul className={`${style.nav_links} ${open ? style.show_menu : ""}`}>
        <li>
          <NavLink
            to="/"
            className={style.nav_link}
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/about"
            className={style.nav_link}
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>
        </li>*/}
         <li> 
          <NavLink
            to="/tours"
            className={style.nav_link}
            onClick={() => setOpen(false)}
          >
            Tours
          </NavLink>
        </li>
        <li>
          <NavLink to="/guides/apply" className={style.nav_link}>
            Become a Guide
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={style.nav_link}
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
