import React, { Component } from "react";
import ElementsWrapper from "../../hoc/ElementsWrapper";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      }
    };

    this.addIngredientHandler = type => {
      const upgradedIngredients = {
        ...this.state.ingredients,
        [type]: this.state.ingredients[type] + 1
      };
      this.setState({ ingredients: upgradedIngredients });
    };

    this.removeIngredientHandler = (type) => {
      const upgradedIngredients = {
        ...this.state.ingredients,
        [type]: this.state.ingredients[type]>0 ? this.state.ingredients[type] - 1:0
      };
      this.setState({ ingredients: upgradedIngredients });
    };
  }

  render() {
    return (
      <ElementsWrapper>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
        />
      </ElementsWrapper>
    );
  }
}

export default BurgerBuilder;
