import React, { Component } from "react";
import ElementsWrapper from "../../hoc/ElementsWrapper";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 1,
        bacon: 1,
        cheese: 1,
        meat: 1
      }
    };
  }
  render() {
    return (
      <ElementsWrapper>
        <Burger ingredients={this.state.ingredients}/>
        <div>Controls</div>
      </ElementsWrapper>
    );
  }
}

export default BurgerBuilder;
