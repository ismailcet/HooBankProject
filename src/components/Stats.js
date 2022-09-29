import React from "react";
import { stats } from "../constans";
const Stats = () => {
  return (
    <div className="stats">
      {stats.map((item) => (
        <div className="stats-item" key={item.id}>
          <h3 className="stats-number">{item.value}</h3>
          <p className="stats-title">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
