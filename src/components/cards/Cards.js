// rfce creates a basic class... ya basic.
import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check Out My Projects and a Little About Me!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/math.jpg"
              text="My educational journey so far."
              label="Education"
              path="/education"
            />
            <CardItem
              src="images/proj.jpg"
              text="Some of the projects I've done over the years."
              label="Projects"
              path="/projects"
            />
            <CardItem
              src="images/contact.png"
              text="Contact For More Information"
              label="Contact"
              path="/contact"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
