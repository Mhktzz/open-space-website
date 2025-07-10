import React from "react";
import "./Features.css";
import { MdOutlineKitchen, MdOutlineTableBar } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";

const featuresData = [
  {
    icon: <MdOutlineKitchen size={50} className="feature-icon" />,
    title: "Kitchen Set Fungsional & Stylish",
    description:
      "Desain modern minimalis kami menyatu sempurna, pakai material berkualitas dan gampang dibersihkan. Penataan cerdas juga bikin penyimpanan jadi optimal.",
  },
  {
    icon: <MdOutlineTableBar size={50} className="feature-icon" />,
    title: "Meja Island / Meja Bar Multifungsi",
    description:
      "Pusat interaksi baru ini menyediakan tempat multifungsi untuk ngopi, sarapan, atau kerja. Desain elegannya berfungsi ganda sebagai sekat visual yang tak memblokir ruang.",
  },
  {
    icon: <PiTelevisionSimpleBold size={50} className="feature-icon" />,
    title: "Backdrop Living Room Estetik",
    description:
      "Fokus visual memukau hadir dengan desain terintegrasi untuk TV dan penyimpanan, menciptakan living room yang rapi dan stylish.",
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
