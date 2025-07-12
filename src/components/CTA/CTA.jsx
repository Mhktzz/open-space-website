import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <section id="cta" className="cta-container">
      <div className="cta-overlay"></div>
      <div className="cta-content">
        <h2>Ayo Wujudkan Open Space Impianmu!</h2>
        <p>
          Jangan tunda lagi menciptakan rumah yang lebih lapang, interaktif, dan
          penuh gaya. Nikmati kebebasan desain dan fungsionalitas yang luar
          biasa bersama kami.
        </p>
        <a
          href="https://wa.me/628112725572"
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Konsultasi GRATIS Sekarang!
        </a>
      </div>
    </section>
  );
};

export default CTA;
