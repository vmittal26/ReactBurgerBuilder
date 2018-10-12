import React, { Component } from 'react';


const Backdrop = (props) => (
      <div className="Backdrop" onClick ={props.showHideHandler}></div>
);

export default Backdrop;