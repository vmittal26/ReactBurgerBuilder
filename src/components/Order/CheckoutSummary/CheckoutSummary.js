import React from "react";
import Burger from "../../Burger/Burger";

const checkoutSummary = props => {
  return (
    <div className="Checkoutsummary">
      <h1 >We hope it tastes well!</h1>
      <Burger ingredients={props.ingredients} />
    </div>
  );
};

export default checkoutSummary;
