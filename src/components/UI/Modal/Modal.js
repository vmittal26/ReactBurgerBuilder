import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import ElementsWrapper from "../../../hoc/ElementsWrapper";

const Modal = props => (
  <ElementsWrapper>
    <Backdrop show ={props.show} onBackdropClick = {props.onBackdropClick}/>
    <div
      className="Modal"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </ElementsWrapper>
);

export default Modal;
