import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <img
            src="/logo2.png"
            className={styles.header_logo}
            alt="Serendip Tours logo"
          />
          <span className={styles.site_logo}>Serendip Tours</span>
        </Link>

        <button
          className={styles.burger}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span
            className={open ? styles.burger_line_open_top : styles.burger_line}
          />
          <span
            className={
              open ? styles.burger_line_open_middle : styles.burger_line
            }
          />
          <span
            className={
              open ? styles.burger_line_open_bottom : styles.burger_line
            }
          />
        </button>

        <nav
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
          onClick={() => setOpen(false)}
        >
          <ul className={styles.nav_links}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.nav_link} ${styles.nav_link_active}`
                    : styles.nav_link
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tours"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.nav_link} ${styles.nav_link_active}`
                    : styles.nav_link
                }
              >
                Tours
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/guides/apply"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.nav_link} ${styles.nav_link_active}`
                    : styles.nav_link
                }
              >
                Become a Guide
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.nav_link} ${styles.nav_link_active}`
                    : styles.nav_link
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className={styles.auth_buttons}>
            <Link to="/login" className={styles.login_button}>
              Login
            </Link>
            <Link to="/register" className={styles.login_button_secondary}>
              Register
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
