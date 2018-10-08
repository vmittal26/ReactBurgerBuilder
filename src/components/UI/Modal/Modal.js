import React from 'react';

const Modal = (props) => 
   (
     <div className="Modal"
     style={
       {transform : props.purchasing ? 'translateY(0)':'translateY(-100vh)',
        opacity: props.purchasing ? '1':'0'}
     }>
     {props.children}</div>
  );


export default Modal;