import React, { useState } from "react";
import { features } from "../constans/index";
import { send, shield, star } from "../assets/index";
const Business = () => {
  const [isClicked, setIsClicked] = useState();
  const addClicked = (e) => {
    const classLists = e.target.parentElement.parentElement.classList;
    console.log(classLists);
    if (classLists.contains("features-item")) {
      classLists.contains("clicked")
        ? classLists.remove("clicked")
        : classLists.add("clicked");
    }
  };
  return (
    <div className="business">
      <div className="business-left">
        <h2 className="business-title">
          You do the business, <span>we’ll handle the money.</span>
        </h2>
        <p className="business-info">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <a className="business-btn">Get Started</a>
      </div>
      <div className="business-right">
        {features.map((item) => (
          <a
            className="features-item"
            key={item.id}
            value={item.id}
            onClick={(e) => addClicked(e)}
          >
            <div className="features-left">
              <div className="item-icon">
                <img
                  src={item.icon}
                  alt="Features Icon"
                  className="features-img"
                />
              </div>
            </div>
            <div className="features-right">
              <h4 className="features-title">{item.title}</h4>
              <p className="features-info">{item.content}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Business;
