import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import Contactdata from "./Contactdata/Contactdata";
import { Route } from "react-router-dom";

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.checkOutCancelHandler = () => {
      this.props.history.goBack();
    };

    this.checkoutContinuedHandler = () => {
      this.props.history.push("/checkout/contact-data");
    };
  }
  componentWillMount() {
    this.props.location.state ?  this.setState({ ...this.props.location.state }) : this.props.history.replace("/");
  }
  render() {
    let checkoutPage = null;
    if(this.state.ingredients){
      checkoutPage = (
        <div className="Checkout">
        <CheckoutSummary {...this.state} />
        <button className="btn btn-secondary px-4 py-2" onClick={this.checkOutCancelHandler}> CANCEL </button>
        <button className="btn btn-primary px-4 py-2 ml-1" onClick={this.checkoutContinuedHandler}> Continue </button>
        <Route path={this.props.match.path + "/contact-data"} render={() => <Contactdata {...this.state} {...this.props}/>} />
      </div>
      );
    }
    return checkoutPage;
  }
}
