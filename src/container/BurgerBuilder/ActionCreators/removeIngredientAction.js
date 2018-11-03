
import * as actionTypes  from "../../../store/actionsTypes";

const removeIngredientAction = ( name ) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export default removeIngredientAction;