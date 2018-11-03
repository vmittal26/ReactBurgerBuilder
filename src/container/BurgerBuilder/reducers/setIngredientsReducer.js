export function setIngredientsReducer(state, {ingredients}) {
  return {
    ...state,
    ingredients
  };
}