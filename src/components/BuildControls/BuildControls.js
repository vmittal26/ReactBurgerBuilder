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
  return (
    <div className="BuildControls">
      {controls.map(({ label, type }) => (
        <BuildControl
          key={label}
          onAdd={props.addIngredientHandler.bind(null, type)}
          onRemove={props.removeIngredientHandler.bind(null, type)}
          label={label}
          type={type}
        />
      ))}
    </div>
  );
};

export default BuildControls;
