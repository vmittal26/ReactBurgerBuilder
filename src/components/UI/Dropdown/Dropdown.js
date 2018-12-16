import React from "react";
import { Link } from 'react-router-dom';

const dropdown = (props) => {
  return (
    <div className="DropDown">
      <button className="DropDown__DropDownBtn">Dropdown<i className="fa fa-caret-down" /></button>
      <div className="DropDown__content">
        <Link to="/orders"><span>My Orders</span></Link>
        <Link to="/logout"><span>Sign Out</span></Link>
        <Link to="/orders"><span>My Orders</span></Link>
      </div>
    </div>
  );
}

export default dropdown;