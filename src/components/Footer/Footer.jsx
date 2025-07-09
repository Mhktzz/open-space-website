import React from "react";
import "./Footer.css";
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import logo from "../../assets/react.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-main">
        <div className="footer-about">
          <a href="#hero" className="footer-logo">
            <img src={logo} alt="Open Space Logo" />
            <span>Open Space</span>
          </a>
          <p>
            Mewujudkan ruang impian Anda melalui desain yang fungsional dan
            estetik.
          </p>
        </div>
        <div className="footer-links">
          <h4>Navigasi</h4>
          <ul>
            <li>
              <a href="#solution">Solusi</a>
            </li>
            <li>
              <a href="#features">Paket Kami</a>
            </li>
            <li>
              <a href="#gallery">Galeri</a>
            </li>
            <li>
              <a href="#cta">Kontak</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Hubungi Kami</h4>
          <p>Jl. Desain Interior No. 123, Purwokerto, Indonesia</p>
          <p>Email: halo@openspace.com</p>
          <p>Telp: (024) 123-4567</p>
        </div>
        <div className="footer-social">
          <h4>Ikuti Kami</h4>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Open Space. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
