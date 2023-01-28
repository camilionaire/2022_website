import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function CardItemTitle(props) {
  return (
    <>
      <li className="cards__item">
        {/* this takes whatever the props are and is called 'path' */}
        <Link className="cards__item__link" to={props.path}>
          <h2>{props.title}</h2>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="Travel Something"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItemTitle;
