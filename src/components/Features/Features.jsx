import React from "react";
import "./Features.css";
import { MdOutlineKitchen, MdOutlineTableBar } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";

const featuresData = [
  {
    icon: <MdOutlineKitchen size={50} className="feature-icon" />,
    title: "Kitchen Set Fungsional & Stylish",
    description:
      "Desain modern dan minimalis yang menyatu sempurna. Material berkualitas tinggi, tahan lama, dan mudah dibersihkan. Penataan cerdas untuk penyimpanan optimal.",
  },
  {
    icon: <MdOutlineTableBar size={50} className="feature-icon" />,
    title: "Meja Island / Meja Bar Multifungsi",
    description:
      "Pusat interaksi baru: tempat ngopi, sarapan, atau area kerja fleksibel. Desain elegan yang berfungsi ganda sebagai sekat visual tanpa memblokir ruang.",
  },
  {
    icon: <PiTelevisionSimpleBold size={50} className="feature-icon" />,
    title: "Backdrop Living Room Estetik",
    description:
      "Hadirkan fokus visual yang memukau. Desain terintegrasi untuk TV dan penyimpanan, membuat area living room lebih rapi dan stylish.",
  },
];

const Features = () => {
  return (
    <section id="features" className="features-container">
      <h2>Rasakan Perbedaannya dengan Paket Eksklusif Kami</h2>
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div className="feature-item" key={index}>
            {feature.icon}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
