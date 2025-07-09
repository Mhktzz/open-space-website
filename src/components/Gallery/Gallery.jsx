import React from "react";
import "./Gallery.css";

import openSpace1 from "../../assets/Open Space (1).jpg";
import openSpace4 from "../../assets/Open Space (4).jpg";
import openSpace5 from "../../assets/Open Space (5).jpg";
import openSpace6 from "../../assets/Open Space (6).jpg";

const galleryImages = [
  { id: 1, src: openSpace1, alt: "Gambar 1" },
  { id: 2, src: openSpace4, alt: "Gambar 2" },
  { id: 3, src: openSpace5, alt: "Gambar 3" },
  { id: 4, src: openSpace6, alt: "Gambar 4" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-container">
      <div className="gallery-header">
        <h2>Portofolio Desain Kami</h2>
        <p>
          Lihat bagaimana kami mengubah ruang menjadi karya seni yang
          fungsional.
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
