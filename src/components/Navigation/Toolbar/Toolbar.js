import React from 'react';
import Logo from "../../Logo/Logo";

const Toolbar = (props) => (
        <header className="Toolbar">
            <Logo />
            <button className="btn btn-secondary" onClick ={props.toggleHandler}>MENU</button>
        </header>
);

export default Toolbar;