import React from 'react';
import ElementsWrapper from "../../../hoc/ElementsWrapper";

const OrderSummary = (props) => (
    <ElementsWrapper>
        <h3>Your Order</h3>
        <p>A delecious burger with following ingredients</p>
        <ul className="list-group">
                {Object.keys(props.ingredients).map((key)=>
                    <li className="list-group-item" key = {key} >{key} : {props.ingredients[key]}</li>
                )}
        </ul>
    </ElementsWrapper>
);

export default OrderSummary;
