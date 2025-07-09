import React from "react";
import "./Hero.css";
import heroVideo from "../../assets/hero-video-1.mp4";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-video-wrapper">
        <video src={heroVideo} autoPlay loop muted playsInline />
      </div>
      <div className="hero-content">
        <h1>Hidup Tanpa Batas, Ruang Tanpa Sekat</h1>
        <h2>Ciptakan Open Space Impianmu!</h2>
      </div>
    </section>
  );
};

export default Hero;
