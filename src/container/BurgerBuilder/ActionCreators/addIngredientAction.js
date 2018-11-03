
import * as actionTypes  from "../../../store/actionsTypes";

const addIngredientAction = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export default addIngredientAction;