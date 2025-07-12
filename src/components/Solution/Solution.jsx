import React from "react";
import "./Solution.css";
import beforeImg from "../../assets/Sebelum.jpg";
import afterImg from "../../assets/Open Space (2).jpg";

const Solution = () => {
  return (
    <section id="solution" className="solution-container">
      <div className="solution-text">
        <h2>Wujudkan Ruang Impianmu dengan Konsep Open Space!</h2>
        <p>
          Kami punya solusi desain interior terpadu yang menggabungkan sirkulasi
          udara, pencahayaan alami, fungsionalitas dan memakasimalkan setiap
          inci ruang untuk kebersamaan
        </p>
      </div>
      <div className="solution-images">
        <div className="image-card">
          <h3>SEBELUM</h3>
          <img src={beforeImg} alt="Denah ruangan terpisah" />
        </div>
        <div className="image-card">
          <h3>SESUDAH</h3>
          <img src={afterImg} alt="Denah ruangan open space" />
        </div>
      </div>
    </section>
  );
};

export default Solution;
