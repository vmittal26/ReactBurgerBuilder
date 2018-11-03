import * as actionTypes from "../../../store/actionsTypes";
import axios from "../../../axios_order";

export const addIngredientAction = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredientAction = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

const setIngredients = ingredients => ({
  type: actionTypes.SET_INGREDIENTS,
  ingredients
});

const fetchIngredientsFailed = () => ({
  type: actionTypes.FETCH_INGREDIENTS_FAILED
});

export const initIngredients = () => {
  return dispatch => {
    axios
      .get("https://react-my-burger-builder-f127c.firebaseio.com/ingredients.json")
      .then(response => {
         dispatch(setIngredients(response.data));
       })
      .catch(error => dispatch(fetchIngredientsFailed()));
  };
};
