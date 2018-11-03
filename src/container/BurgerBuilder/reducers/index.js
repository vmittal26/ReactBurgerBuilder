import * as actionTypes from "../../../store/actionsTypes";
import { addIngredientReducer } from "./addIngredientReducer";
import { removeIngredientReducer } from "./removeIngredientReducer";
import { setIngredientsReducer } from "./setIngredientsReducer";

export const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

export const INITIAL_STATE = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 4
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredientReducer(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredientReducer(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredientsReducer(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return{
        
      }
    default:
      return state;
  } 
};

export default reducer;

