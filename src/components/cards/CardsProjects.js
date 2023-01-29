// rfce creates a basic class... ya basic.
import React from "react";
import CardItemTitle from "./CardItemTitle";
import "./Cards.css";

function CardsProjects() {
  return (
    <div className="cards">
      <h1>Check Out My Projects and a Little About Me!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItemTitle
              title="Phone Book Application"
              src="images/math.jpg"
              text="Done with Java using OOP, went from a command line program, to input / output and finally to an Android app."
              label="Java"
              path="https://github.com/camilionaire/Adv_Java_Summer_2022"
            />
            <CardItemTitle
              title="Full Stack Web App"
              src="images/forester.jpg"
              text="3 person project utilizing Google maps API's, React, JavaScript."
              label="Web Dev"
              path="https://foragecompass.herokuapp.com/"
            />
            <CardItemTitle
              title="Kingdom of Frupal"
              src="images/contact.png"
              text="SCRUM leader for an OOP project utilizing C++ and the ncurses library."
              label="C++"
              path="https://github.com/camilionaire/copy_foo"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsProjects;
