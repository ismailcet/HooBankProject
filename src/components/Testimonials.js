import React from "react";
import { people01, people02, people03, quotes } from "../assets";
import { feedback } from "../constans/index";

const Testimonials = () => {
  const addClicked = (e) => {
    const classLists = e.target.parentElement.classList;

    if (classLists.contains("person-item")) {
      console.log("eklenecek");
      classLists.contains("clicked")
        ? classLists.remove("clicked")
        : classLists.add("clicked");
    }
  };
  return (
    <div className="testimonials">
      <div className="testimonials-up">
        <div className="up-left">
          <h3 className="testimonials-title">
            What people are <span> saying about us</span>
          </h3>
        </div>
        <div className="up-right">
          <p className="testimonials-info">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="testimonials-down">
        {feedback.map((item) => (
          <div
            className="person-item"
            key={item.id}
            onClick={(e) => addClicked(e)}
          >
            <img src={quotes} alt="Quotes" className="person-quotes" />
            <p className="person-info">{item.content}</p>
            <div className="person-profile">
              <div className="person-left">
                <img src={item.img} alt="Person Image" className="person-img" />
              </div>
              <div className="person-right">
                <h4 className="person-name">{item.name}</h4>
                <p className="person-job">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
