import React from "react";
import "./Footer.css";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import logo from "../../assets/logo-black.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-main">
        <div className="footer-about">
          <a href="#hero" className="footer-logo">
            <img src={logo} alt="Open Space Logo" />
            {/* <span>Cipta Ruang Suasana</span> */}
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
          <a href="https://maps.app.goo.gl/bJra1o8ERko9E2XU6?g_st=iw">
            <p>
              Jl. 10 Nopember No.163, Ledug Lor, Ledug, Kec. Kembaran, Kabupaten
              Banyumas, Jawa Tengah 53112
            </p>
          </a>

          <a href="mailto:ciptaruangsuasana@gmail.com">
            <p>Email: ciptaruangsuasana@gmail.com</p>
          </a>

          <a href="tel:08112725572">
            <p>Telp: +62 811 272 5572</p>
          </a>
        </div>
        <div className="footer-social">
          <h4>Ikuti Kami</h4>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/ciptaruangsuasana?igsh=MXVhMnJidHkzb3c2Zw=="
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com/@ciptaruangsuasana?si=Floc41yr7sJmTlbl"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.tiktok.com/@ciptaruang.suasana?_t=ZS-8xsX9G785Ki&_r=1"
              aria-label="TikTok"
            >
              <SiTiktok />
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
