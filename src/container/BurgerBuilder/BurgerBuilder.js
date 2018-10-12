import React, { Component } from "react";
import ElementsWrapper from "../../hoc/ElementsWrapper";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4,
      purchasing:false
    };

    this.purchaseHandler = () =>{
      const updatedState = {
        ...this.state,
        purchasing:true
      };
      this.setState(updatedState);
    }
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
      const updatedState ={
        ingredients: {
          ...this.state.ingredients,
          [type]:  this.state.ingredients[type] > 0 ? this.state.ingredients[type] - 1 : 0
        },
        totalPrice:this.state.totalPrice - INGREDIENT_PRICES[type]
      };
    
      this.setState(updatedState);
    };

    this.disableStateCheckHandler = type => {
      const disabled = this.state.ingredients[type] === 0;
      return disabled;
    };

    this.showHideHandler = ()=>{
      this.setState({purchasing:false});
    }
  }

  
  render() {
    return (
      <ElementsWrapper>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          disableStateCheckHandler={this.disableStateCheckHandler}
          totalPrice={this.state.totalPrice.toFixed(2)}
          purchaseHandler = {this.purchaseHandler}
        />
       <Modal purchasing={this.state.purchasing} showHideHandler={this.showHideHandler} >
        <OrderSummary ingredients = {this.state.ingredients}/>
       </Modal>
      </ElementsWrapper>
    );
  }
}

export default BurgerBuilder;
