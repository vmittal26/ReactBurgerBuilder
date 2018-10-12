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
        <p className ="font-weight-bold pt-2">Total Price : {props.totalPrice}</p>
        <p>Continue to checkout ?</p>
        <button className="btn btn-primary" onClick = {props.onCancelOrder}>Cancel</button>
        <button className="btn btn-secondary ml-1" onClick = {props.onContinueCheckout}>Continue</button>
    </ElementsWrapper>
);

export default OrderSummary;
