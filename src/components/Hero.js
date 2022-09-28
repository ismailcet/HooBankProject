import React from "react";
import discountImg from "../assets/Discount.svg";
import arrowUp from "../assets/arrow-up.svg";
import robot from "../assets/robot.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="discount">
          <p className="discount-text">
            <img src={discountImg} alt="Discount" className="discount-img" />
            <span>20% </span> DISCOUNT FOR <span> 1 MONTH </span> ACCOUNT
          </p>
        </div>
        <div className="hero-info">
          <h1 className="hero-title">
            The Next <span className="blue">Generation</span>Payment Method.
          </h1>
          <p className="hero-text">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
          <a className="hero-btn">
            Get <img src={arrowUp} className="hero-up" /> Started{" "}
          </a>
        </div>
      </div>
      <div className="hero-right">
        <img src={robot} alt="Robot Img" className="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
