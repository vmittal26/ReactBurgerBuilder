import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import withAuthentication from "../../hoc/withAuthentication/withAuthentication";
import Contactdata from "./Contactdata/Contactdata";
import { connect } from "react-redux";
import { Route  } from "react-router-dom";

class Checkout extends Component {
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
 
  render() {
    let checkoutPage = null;
    if(this.props.ingredients){
      checkoutPage = (
        <div className="Checkout">
        <CheckoutSummary {...this.props} />
        <button className="btn btn-secondary px-4 py-2" onClick={this.checkOutCancelHandler}> CANCEL </button>
        <button className="btn btn-primary px-4 py-2 ml-1" onClick={this.checkoutContinuedHandler}> Continue </button>
        <Route path={this.props.match.path + "/contact-data"} render={() => <Contactdata {...this.props}/>} />
      </div>
      );
    }
    return checkoutPage;
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice
  };
};

export default connect( mapStateToProps, null)(Checkout);