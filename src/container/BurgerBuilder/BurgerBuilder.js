import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios_instance from "../../axios_order";
import Spinner from "../../components/UI/Spinner/Spinner";
import ElementsWrapper from "../../hoc/ElementsWrapper";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import addIngredientAction from "./ActionCreators/addIngredientAction";
import removeIngredientAction from "./ActionCreators/removeIngredientAction";


class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    // this.initialIngredients = null;

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

  // componentDidMount() {
  //   this.initialIngredients = axios_instance
  //     .get(
  //       "https://react-my-burger-builder-f127c.firebaseio.com/ingredients.json"
  //     )
  //     .then(response => {
  //       this.initialIngredients = response.data;
  //       this.setState({ ingredients: this.initialIngredients });
  //     })
  //     .catch(error => console.log(error));
  // }
  render() {
    let orderSummary = <Spinner />;
    let burger = <Spinner />;

    if (this.props.ingredients) {
      burger = (
        <ElementsWrapper>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            addIngredientHandler={this.props.onIngredientAdded}
            removeIngredientHandler={this.props.onRemoveIngredient}
            disableStateCheckHandler={this.disableStateCheckHandler}
            totalPrice={this.props.totalPrice.toFixed(2)}
            purchasing={this.props.totalPrice > 4}
            purchaseHandler={this.purchaseHandler}
          />
        </ElementsWrapper>
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

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice 
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingredientName => dispatch(addIngredientAction(ingredientName)),
    onRemoveIngredient: ingredientName => dispatch(removeIngredientAction(ingredientName))
  };
};
export default connect( mapStateToProps, mapDispatchToProps )(withErrorHandler(BurgerBuilder, axios_instance));
