import React from 'react'

const order = ({ingredients,price}) => {
    let addIngredients=(ingredients)=>{
         let ingredientItems=[];
            for(let key in ingredients){
                ingredientItems
                .push(<span key ={key}className="badge"> {key.toUpperCase()} : {ingredients[key]}</span>)
            }
        
        return ingredientItems;
    }

    return(
        <div className="Order">
            <p>{addIngredients(ingredients)}</p>
            <p className="badge"> Price: <strong >{price}</strong></p>
        </div>
    )
}

export default order;
