import React from "react";
import "./ServiceStyle.css";
import cardOne from "../../assets/images/cardOne.jpg";
import cardTwo from "../../assets/images/cardTwo.jpg";
import cardThree from "../../assets/images/cardThree.jpg";
import LoginResgistration from "./LoginResgistration";

const Services = () => {
  return (
    <div className="serviceContainer" id="features">
      <div className="text-center">
        <h2>Find your perfect Space</h2>
        <p>Explore the types of vehicles on our shared mobility marketplace.</p>
      </div>
      <div className="card__container">
        <article className="card__article">
          <img src={cardThree} alt="image" className="card__img" />
          <div className="card__data">
            <span className="card__description">
              Add new wheels to the garage
            </span>
            <h2 className="card__title">Add New</h2>
            <a style={{ cursor: "pointer" }} className="card__button">
              <LoginResgistration />
            </a>
          </div>
        </article>
        <article className="card__article">
          <img src={cardOne} alt="image" className="card__img" />
          <div className="card__data">
            <span className="card__description">Wheels Modifications</span>
            <h2 className="card__title">Update</h2>
            <a style={{ cursor: "pointer" }} className="card__button">
              <LoginResgistration />
            </a>
          </div>
        </article>
        <article className="card__article">
          <img src={cardTwo} alt="image" className="card__img" />
          <div className="card__data">
            <span className="card__description">Remove Wheels</span>
            <h2 className="card__title">Remove</h2>
            <a style={{ cursor: "pointer" }} className="card__button">
              <LoginResgistration />
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Services;
