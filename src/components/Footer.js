import React from "react";
import { logo, facebook, instagram, twitter, linkedin } from "../assets/index";
import { footerLinks, socialMedia } from "../constans/index";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-up">
        <div className="footer-info">
          <img src={logo} alt="Logo" className="footer-img" />
          <p className="footer-text">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        {footerLinks.map((links) => (
          <div className="footer-items" key={links.title}>
            <p className="footer-title">{links.title}</p>
            <ul>
              {links.links.map((item) => (
                <li className="footer-item" key={item.name}>
                  <a href={item.link} className="footer-link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr />
      <div className="footer-down">
        <div className="down-left">
          <p className="copyright">
            Copyright 2021 HooBank. All Rights Reserved.
          </p>
        </div>
        <div className="down-right">
          {socialMedia.map((item) => (
            <a className="social-link" key={item.id}>
              <img src={item.icon} alt="Socail Media" className="social-icon" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
