import React from "react";
import { airbnb, binance, coinbase, dropbox } from "../assets/index";
import { clients } from "../constans/index";
const Clients = () => {
  return (
    <div className="clients">
      {clients.map((item) => (
        <div className="clients-item" key={item.id}>
          <img src={item.logo} alt="CLients Logo" className="clients-img" />
        </div>
      ))}
    </div>
  );
};

export default Clients;
