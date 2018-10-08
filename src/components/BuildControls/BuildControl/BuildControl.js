import React from "react";

// import classes from "./BuildControl.scss";

const BuildControl = props => {
  const classesLessButton = ["BuildControl__button  BuildControl__button--less"];
  const classesMoreButton = ["BuildControl__button  BuildControl__button--more"];
  
  return (
    <div className="BuildControl">
      <div className="BuildControl__Label">{props.label}</div>
      <button
        onClick={props.onRemove}
        disabled={props.disabled}
        className={props.disabled ? classesLessButton.concat(" disabled text-dark"):classesLessButton}> LESS</button>
      <button onClick={props.onAdd} className={classesMoreButton}>MORE</button>
      
    </div>
  );
};

export default BuildControl;
