import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="./videos/video-2.mp4" autoPlay loop muted></video> */}
      <h1>CAMILO SCHASER HUGHES</h1>
      <p>Computer Scientist for Hire</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-pla-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
