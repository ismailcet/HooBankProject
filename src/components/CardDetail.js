import React from "react";
import { card } from "../assets/index";
const CardDetail = () => {
  return (
    <div className="card-detail">
      <div className="detail-left">
        <h3 className="detail-title">
          Find a better card deal <span> in few easy steps.</span>
        </h3>
        <p className="detail-info">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <a className="business-btn">Get Started</a>
      </div>
      <div className="detail-right">
        <img src={card} alt="Card" className="card-img" />
      </div>
    </div>
  );
};

export default CardDetail;
