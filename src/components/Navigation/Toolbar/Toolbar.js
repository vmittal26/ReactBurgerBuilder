import React from 'react';
import Logo from "../../Logo/Logo";
import SideDrawerToggler from '../SideDrawer/SideDrawerToggler/SideDrawerToggler';
import { Link } from 'react-router-dom';
import Dropdown from '../../UI/Dropdown/Dropdown';

const Toolbar = (props) => (
        <header className="Toolbar">
            <Logo />
            <SideDrawerToggler clicked = {props.toggleHandler}/>
            <Dropdown/>
            <Link className="Toolbar__Orders" to="/orders"><span>My Orders</span></Link>
        </header>
);

export default Toolbar;