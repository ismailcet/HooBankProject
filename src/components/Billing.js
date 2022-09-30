import React from "react";
import { bill, apple, google } from "../assets/index";
const Billing = () => {
  return (
    <div className="billing">
      <div className="billing-left">
        <img src={bill} alt="Billing Image" className="billing-img" />
      </div>
      <div className="billing-right">
        <h3 className="billing-title">
          Easily control your <span> billing & invoicing.</span>
        </h3>
        <p className="billing-info">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="billing-apps">
          <img src={apple} alt="Apple Logo" className="apple-logo" />
          <img src={google} alt="Google Logo" className="google-logo" />
        </div>
      </div>
    </div>
  );
};

export default Billing;
