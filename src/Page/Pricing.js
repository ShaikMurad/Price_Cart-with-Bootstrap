import React from "react";
import PricingCard from "../Components/PricingcCard";

function Pricing(props) {
  return (
    <div className="container">
      <div className="row">
        <PricingCard price={10} />
        <PricingCard price={20} />
        <PricingCard price={30} />
        <PricingCard price={40} />
      </div>
    </div>
  );
}

export default Pricing;
