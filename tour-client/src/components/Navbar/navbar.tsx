import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar glass-nav">
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/tours" className="nav-link">
            tours
          </NavLink>
        </li>

        <li>
          <NavLink to="/guides" className="nav-link">
            Guides
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className="nav-link">
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
