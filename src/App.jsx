import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Problem from "./components/Problem/Problem.jsx";
import Solution from "./components/Solution/Solution.jsx";
import Features from "./components/Features/Features.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import CTA from "./components/CTA/CTA.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Gallery />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
