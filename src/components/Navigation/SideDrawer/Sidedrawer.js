import React from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import ElementsWrapper from "../../../hoc/ElementsWrapper";

const sideDrawer = props => {
 const sideDrawerClasses = ["Sidedrawer",props.show ===true ? "Sidedrawer__Open" :"Sidedrawer__Closed"];
  return (
    <ElementsWrapper>
    <Backdrop show ={props.show} onBackdropClick ={props.onBackdropClick}/>
      <div className={sideDrawerClasses.join(" ")}>
        <ul className="list-group">
          <li className="list-group-item list-group-item-action">Link1</li>
          <li className="list-group-item list-group-item-action">Link2</li>
        </ul>
      </div>
    </ElementsWrapper>
  );
};

export default sideDrawer;
