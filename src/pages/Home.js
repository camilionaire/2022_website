import React from "react";
import "../App.css";
import HeroSection from "../components/HeroSection";
import Cards from "../components/cards/Cards";

function Home() {
  return (
    <div id="hom_top">
      <HeroSection />
      <Cards />
    </div>
  );
}

export default Home;
