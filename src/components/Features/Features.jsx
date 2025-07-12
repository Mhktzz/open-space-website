import React from "react";
import "./Features.css";
import { MdOutlineKitchen, MdOutlineTableBar } from "react-icons/md";
import { FaChair } from "react-icons/fa";
import { GiTable } from "react-icons/gi";
import BarTable from "../../assets/bar-table.png";
import { PiTelevisionSimpleBold } from "react-icons/pi";

const featuresData = [
  {
    icon: <MdOutlineKitchen size={50} className="feature-icon" />,
    title: "Kitchen Set Fungsional & Stylish",
    description:
      "Desain kami menyatu sempurna, menggunakan material berkualitas. Penataan storage jadi optimal.",
  },
  {
    icon: (
      <img
        src={BarTable}
        alt="Bar Table"
        className="feature-icon"
        style={{ width: 50 }}
      />
    ),
    title: "Meja Island / Meja Bar Multifungsi",
    description:
      "Designnya berfungsi ganda, sebagai sekat viusal yang tidak memblokir ruang, dan sebagai tempat multifungsi untuk ngopi, sarapan atau bekerja.",
  },
  {
    icon: <PiTelevisionSimpleBold size={50} className="feature-icon" />,
    title: "Backdrop Living Room Estetik",
    description:
      "Fokus visual yang menarik untuk TV dan penyimpanan, menciptakan living room yang rapi dan stylish.",
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
