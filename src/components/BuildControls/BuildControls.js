import React from "react";

// import styles from "./BuildControls.scss";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => {
  const classesOrderNowButton = "BuildControls__orderNowButton";
  return (
    <div className="BuildControls">
      <p>Current Prices : {props.totalPrice}</p>
      {controls.map(({ label, type }) => (
        <BuildControl
          key={label}
          onAdd={props.addIngredientHandler.bind(null, type)}
          onRemove={() => props.removeIngredientHandler(type)}
          disabled={props.disableStateCheckHandler(type)}
          label={label}
          type={type}
        />
      ))}
      <button onClick = {props.purchaseHandler} disabled={!props.purchasing} className={classesOrderNowButton}>ORDER NOW</button>
    </div>
  );
};

export default BuildControls;
