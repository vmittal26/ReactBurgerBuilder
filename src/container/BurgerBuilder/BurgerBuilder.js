import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios_instance from "../../axios_order";
import Spinner from "../../components/UI/Spinner/Spinner";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.initialIngredients = {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
    this.state = {
      ingredients: this.initialIngredients,
      totalPrice: 4,
      purchasing: false,
      loading: false
    };

    this.purchaseHandler = () => {
      this.setState({purchasing:true});
    };
    this.addIngredientHandler = type => {
      const updatedState = {
        ingredients: {
          ...this.state.ingredients,
          [type]: this.state.ingredients[type] + 1
        },
        totalPrice: INGREDIENT_PRICES[type] + this.state.totalPrice
      };

      this.setState(updatedState);
    };

    this.removeIngredientHandler = type => {
      const updatedState = {
        ingredients: {
          ...this.state.ingredients,
          [type]:
            this.state.ingredients[type] > 0
              ? this.state.ingredients[type] - 1
              : 0
        },
        totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type]
      };

      this.setState(updatedState);
    };

    this.disableStateCheckHandler = type => {
      const disabled = this.state.ingredients[type] === 0;
      return disabled;
    };

    this.onBackdropClick = () => {
      this.setState({ purchasing: false });
    };

    this.onContinueCheckout = () => {

      this.setState({ loading: true });

      const order = {
        ingredients: this.state.ingredients,
        price: this.state.totalPrice,
        customer: {
          name: "Vaibhav Mittal",
          adress: {
            flat: "C 202",
            address1: "Prateek Wisteria",
            address2: "Sector 77",
            pincode: 201301,
            city: "Noida",
            country: "India"
          },
          email: "vaibhavmittal.26@gmai.com"
        },
        deliveryMethod: "fastest"
      };
      axios_instance
        .post("/orders.json", order)
        .then(response => this.setState({ ingredients: this.initialIngredients,loading: false,purchasing:false }))
        .catch(error =>this.setState({  ingredients: this.initialIngredients,loading: false ,purchasing:false}));
    };
  }

  render() {
    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        onCancelOrder={this.onBackdropClick}
        onContinueCheckout={this.onContinueCheckout}
        totalPrice={this.state.totalPrice.toFixed(2)}
      />
    );
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <div className="BurgerBuilder">
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          disableStateCheckHandler={this.disableStateCheckHandler}
          totalPrice={this.state.totalPrice.toFixed(2)}
          purchasing={this.state.totalPrice > 4}
          purchaseHandler={this.purchaseHandler}
        />
        <Modal
          purchasing={this.state.purchasing}
          onBackdropClick={this.onBackdropClick}
        >
          {orderSummary}
        </Modal>
      </div>
    );
  }
}

export default BurgerBuilder;
