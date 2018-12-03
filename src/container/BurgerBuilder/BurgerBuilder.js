import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios_instance from "../../axios_order";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as actions from "./actions";


class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    // this.initialIngredients = null;

    if(!this.props.isAuthenticated){
        this.props.history.replace("/");
    }
    this.state = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      purchasing: false,
      loading: false
    };

    this.purchaseHandler = () => { 
      this.setState({ purchasing: true });
    };

    this.disableStateCheckHandler = type => {
      const disabled = this.props.ingredients[type] === 0;
      return disabled;
    };

    this.onBackdropClick = () => {
      this.setState({ purchasing: false });
    };

    this.onContinueCheckout = () => {
      this.props.history.push("/checkout", {
        ingredients: this.props.ingredients,
        price: this.props.totalPrice
      });
    };
  }

  componentDidMount() {
     this.props.onInitIngredients();
  }
  render() {
    let orderSummary = <Spinner />;
    let burger = <Spinner />;

    if (this.props.ingredients && this.props.totalPrice ) {
      burger = (
        <React.Fragment>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            addIngredientHandler={this.props.onIngredientAdded}
            removeIngredientHandler={this.props.onRemoveIngredient}
            disableStateCheckHandler={this.disableStateCheckHandler}
            totalPrice={this.props.totalPrice.toFixed(2)}
            purchasing={this.props.totalPrice > 4}
            purchaseHandler={this.purchaseHandler}
          />
        </React.Fragment>
      );
      if (!this.state.loading) {
        orderSummary = (
          <OrderSummary
            ingredients={this.props.ingredients}
            onCancelOrder={this.onBackdropClick}
            onContinueCheckout={this.onContinueCheckout}
            totalPrice={this.props.totalPrice.toFixed(2)}
          />
        );
      }
    }
    return (
      <div className="BurgerBuilder">
        <Modal show={this.state.purchasing} onBackdropClick={this.onBackdropClick} > {orderSummary} </Modal>
        {burger}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    isAuthenticated: state.auth.isAuthenticated
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingredientName => dispatch(actions.addIngredientAction(ingredientName)),
    onRemoveIngredient: ingredientName => dispatch(actions.removeIngredientAction(ingredientName)),
    onInitIngredients : ()=>dispatch(actions.initIngredients())
  };
};
export default connect( mapStateToProps, mapDispatchToProps )(withErrorHandler(BurgerBuilder, axios_instance));
