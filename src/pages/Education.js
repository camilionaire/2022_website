// i did a lot of these with rfce <tab>
import React from "react";
import "../App.css";
import "../components/BasicHero.css";
import BasicHero from "../components/BasicHero";

function Education() {
  return (
    <div id="edu_top">
      <BasicHero
        cls="basic-hero edu-hero"
        title="EDUCATION"
        subheader={["MS Computer Science", "BA Mathematics"]}
      />
    </div>
    // <div className="education" id="edu_top">
    //   {/* <h1>EDUCATION</h1>
    //   <p>MS Computer Science</p>
    //   <p>BA Mathematics</p> */}
    // </div>
  );
}

export default Education;
