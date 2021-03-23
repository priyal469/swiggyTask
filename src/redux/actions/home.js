
 import store from '../store';
 import types from '../types'
 const {dispatch} =store;
 
 export const addToCart=(food_item_array,elementIndex)=>{
    dispatch({
        type:types.ADD_TO_CART,
        payload:{food_item_array,elementIndex}
    })    
}

 export const  deleteItem=(id)=>{
    dispatch({
        type:types.DELETE_ITEM,
        payload:{id}
    })
}

export const increaseQuantity=(id)=>{
    dispatch({
        type:types.INCREASE_QUANTITY,
        payload:{id}
    })
}

export const decreaseQuantity=(id)=>{
    dispatch({
        type:types.DECREASE_QUANTITY,
        payload:{id}
    })
}

export const forTotalPrice=(aryForPrice)=>{
    dispatch({
        type:types.TOTAL_PRICE,
        payload:{aryForPrice}
    })
}