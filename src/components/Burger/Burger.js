import React from "react";
import classes from "./Burger.scss";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  let tranformIngredients = 
              Object.keys(props.ingredients)
                    .map(key => [...Array(props.ingredients[key])]
                    .map((_, index) =>  <BurgerIngredient key={index + key} type={key} /> ))
                    .reduce((acc,el)=>acc.concat(el));


  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {tranformIngredients.length!==0?tranformIngredients:<p>Please add some ingredients</p>}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
