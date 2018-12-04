import React from 'react';
import Logo from "../../Logo/Logo";
import SideDrawerToggler from '../SideDrawer/SideDrawerToggler/SideDrawerToggler';

const Toolbar = (props) => (
        <header className="Toolbar">
            <Logo />
            <SideDrawerToggler clicked = {props.toggleHandler}/>
            
        </header>
);

export default Toolbar;