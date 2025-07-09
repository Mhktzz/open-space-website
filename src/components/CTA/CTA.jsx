import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <section id="cta" className="cta-container">
      <div className="cta-overlay"></div>
      <div className="cta-content">
        <h2>Siap Mewujudkan Open Space Impianmu?</h2>
        <p>
          Jangan tunda lagi menciptakan rumah yang lebih lapang, interaktif, dan
          penuh gaya. Nikmati kebebasan desain dan fungsionalitas yang luar
          biasa bersama kami.
        </p>
        <a
          href="https://wa.me/6281234567890?text=Halo%20Open%20Space,%20saya%20tertarik%20dengan%20paket%20desain%20interior."
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          DAPATKAN KONSULTASI & PENAWARAN EKSKLUSIF
        </a>
      </div>
    </section>
  );
};

export default CTA;
