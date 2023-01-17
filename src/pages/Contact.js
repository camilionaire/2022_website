import React from "react";
import "../App.css";
import "../components/BasicHero.css";
import BasicHero from "../components/BasicHero";

function Contact() {
  return (
    <>
      <div id="con_top"></div>
      <div>
        <BasicHero
          cls="basic-hero con-hero"
          title="CONTACT!"
          subheader={["Let's write some code together."]}
        />
      </div>
    </>
  );
}

export default Contact;
