import React from "react";
import { navLinks } from "../constans";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
const Navbar = () => {
  return (
    <nav className="header">
      <div className="left-side">
        <img src={logo} alt="Logo" className="nav-logo" />
      </div>
      <div className="right-side">
        <img src={menu} alt="Menu Buttons" className="menu-img" />

        <ul className="nav-items">
          {navLinks.map((item) => (
            <a className="nav-link" key={item.id}>
              <li className="nav-item">{item.title}</li>
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
