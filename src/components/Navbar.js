import React, { useState } from "react";
import { navLinks } from "../constans";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="header">
        <div className="left-side">
          <img src={logo} alt="Logo" className="nav-logo" />
        </div>
        <div className="hide-right-side">
          <a className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            <img src={menu} alt="Menu Buttons" className="menu-img" />
          </a>
        </div>
        <div className="right-side">
          <ul className="nav-items">
            {navLinks.map((item) => (
              <a className="nav-link" key={item.id}>
                <li className="nav-item">{item.title}</li>
              </a>
            ))}
          </ul>
        </div>
      </nav>
      <div className={`drop-down ${isOpen ? "" : "close-items"}`}>
        <ul className="nav-items">
          {navLinks.map((item) => (
            <a className="nav-link" key={item.id}>
              <li className="nav-item">{item.title}</li>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
