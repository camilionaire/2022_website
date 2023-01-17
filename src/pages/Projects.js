import React from "react";
import "../App.css";
import "../components/BasicHero.css";
import BasicHero from "../components/BasicHero";

function Projects() {
  return (
    <>
      <div id="pro_top"></div>
      <div className="main">
        <BasicHero
          cls="basic-hero pro-hero"
          title="PROJECTS"
          subheader={["A Selection of a Few Choic Projects"]}
        />
      </div>
    </>
  );
}

export default Projects;
