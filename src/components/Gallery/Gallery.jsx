import React from "react";
import "./Gallery.css";

import openSpace1 from "../../assets/Hapsari (5).jpg";
import openSpace2 from "../../assets/Hapsari (6).jpg";
import openSpace3 from "../../assets/Hapsari (7).jpg";
import openSpace4 from "../../assets/Hapsari (9).jpg";

const galleryImages = [
  { id: 1, src: openSpace1, alt: "Gambar 1" },
  { id: 2, src: openSpace2, alt: "Gambar 2" },
  { id: 3, src: openSpace3, alt: "Gambar 3" },
  { id: 4, src: openSpace4, alt: "Gambar 4" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-container">
      <div className="gallery-header">
        <h2>Portofolio Desain Kami</h2>
        <p>
          Lihat Bagaimana Kami Mengubah Ruang menjadi Karya Seni yang
          Fungsional.
        </p>
      </div>
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div className="gallery-item" key={image.id}>
            <img src={image.src} alt={image.title} />
            <div className="gallery-item-overlay">
              <p>{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
