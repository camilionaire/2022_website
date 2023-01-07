// rfce creates a basic class... ya basic.
import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="My educational journey so far."
              label="Education"
              path="/education"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Some of the projects I've done over the years."
              label="Projects"
              path="/projects"
            />
            <CardItem
              src="images/newPhone.png"
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
