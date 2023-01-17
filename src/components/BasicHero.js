import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./BasicHero.css";

function BasicHero(props) {
  return (
    <div className={props.cls}>
      {/* <video src="./videos/video-2.mp4" autoPlay loop muted></video> */}
      <h1>{props.title}</h1>
      {props.subheader.map((element, idx) => {
        return <p key={idx}>{element}</p>;
      })}
    </div>
  );
}

export default BasicHero;
