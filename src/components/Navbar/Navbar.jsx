import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo">
          {/* <img src={logo} alt="Open Space Logo" /> */}
          <span>Rumah Open Space</span>
        </a>

        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "✕" : "☰"}
        </div>

        <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a
              href="#solution"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Solusi
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#features"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Paket Kami
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#gallery"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Galeri
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#cta"
              className="nav-link-button"
              onClick={() => setIsMenuOpen(false)}
            >
              Konsultasi Gratis
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
