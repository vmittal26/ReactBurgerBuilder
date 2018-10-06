import React from 'react';

// import classes from "./BuildControl.scss";


const BuildControl = (props) => {
    return(
        <div className ="BuildControl">
            <div className="Label">{props.label}</div>
            <button onClick = {props.onRemove}  className="BuildControl__button BuildControl__button--less">LESS</button>
            <button onClick = {props.onAdd} 
                    className="BuildControl__button BuildControl__button--more ">MORE</button>
        </div>
    )
}

export default BuildControl;
