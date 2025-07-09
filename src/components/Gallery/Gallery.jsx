import React from "react";
import "./Gallery.css";

import kitchenImg1 from "../../assets/kitchen-1.jpg";
import backdropImg1 from "../../assets/backdrop-1.jpg";
import kitchenImg2 from "../../assets/kitchen-2.jpg";
import livingRoomImg1 from "../../assets/living-room-1.jpg";

const galleryImages = [
  { id: 1, src: kitchenImg1, alt: "Kitchen Design 1" },
  { id: 2, src: backdropImg1, alt: "Backdrop Design 1" },
  { id: 3, src: kitchenImg2, alt: "Kitchen Design 2" },
  { id: 4, src: livingRoomImg1, alt: "Living Room Design 1" },
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
