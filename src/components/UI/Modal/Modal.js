import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import ElementsWrapper from "../../../hoc/ElementsWrapper";

const Modal = props => (
  <ElementsWrapper>
    {this.props.show ? <Backdrop /> : null}
    <div
      className="Modal"
      style={{
        transform: props.purchasing ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.purchasing ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </ElementsWrapper>
);

export default Modal;
