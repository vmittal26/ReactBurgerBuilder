import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios_instance from "../../axios_order";
import Spinner from "../../components/UI/Spinner/Spinner";
import ElementsWrapper from "../../hoc/ElementsWrapper";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.initialIngredients = null;

    this.state = {
      ingredients: this.initialIngredients,
      totalPrice: 4,
      purchasing: false,
      loading: false
    };

    this.purchaseHandler = () => {
      this.setState({ purchasing: true });
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
      this.props.history.push("/checkout", {
        ingredients: this.state.ingredients,
        price:this.state.totalPrice
      });
     
    };
  }

  componentDidMount() {
    this.initialIngredients = axios_instance
      .get(
        "https://react-my-burger-builder-f127c.firebaseio.com/ingredients.json"
      )
      .then(response => {
        this.initialIngredients = response.data;
        this.setState({ ingredients: this.initialIngredients });
      })
      .catch(error => console.log(error));
  }
  render() {
    let orderSummary = <Spinner />;
    let burger = <Spinner />;

    if (this.state.ingredients) {
      burger = (
        <ElementsWrapper>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            addIngredientHandler={this.addIngredientHandler}
            removeIngredientHandler={this.removeIngredientHandler}
            disableStateCheckHandler={this.disableStateCheckHandler}
            totalPrice={this.state.totalPrice.toFixed(2)}
            purchasing={this.state.totalPrice > 4}
            purchaseHandler={this.purchaseHandler}
          />
        </ElementsWrapper>
      );
      if (!this.state.loading) {
        orderSummary = (
          <OrderSummary
            ingredients={this.state.ingredients}
            onCancelOrder={this.onBackdropClick}
            onContinueCheckout={this.onContinueCheckout}
            totalPrice={this.state.totalPrice.toFixed(2)}
          />
        );
      }
    }
    return (
      <div className="BurgerBuilder">
        <Modal
          show={this.state.purchasing}
          onBackdropClick={this.onBackdropClick}
        >
          {orderSummary}
        </Modal>
        {burger}
      </div>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios_instance);
