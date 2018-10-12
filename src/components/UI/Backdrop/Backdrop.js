import React, { Component } from 'react';


const Backdrop = (props) => (
      props.show ? <div className="Backdrop" onClick ={props.onBackdropClick}></div> :null
);

export default Backdrop;