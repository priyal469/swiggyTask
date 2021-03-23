import types from "../types"


const initialState={
   cartArray:[],
   TotalPrice:0
}
    export default function cartReducer(state=initialState,action){
        switch(action.type){
           case types.ADD_TO_CART:
             const {food_item_array, elementIndex}=action.payload;


                if (!state.cartArray.includes(food_item_array[elementIndex])){
                    food_item_array[elementIndex].item_quantity+=1;
                        let newCartAry=[...state.cartArray,food_item_array[elementIndex]];
                        return {...state, cartArray:[...newCartAry]}
                }
                else{
                    alert("Product is already in your Cart");
                }


            return{
                ...state,
             
            }
            case types.DELETE_ITEM:
          
               let newArray=state.cartArray
               let newDeleteArray=newArray.filter(item=>item.id!==action.payload.id)
               
              
                return{
                    ...state,
                   cartArray:[...newDeleteArray]
                }

                case types.INCREASE_QUANTITY:
                    let newCountData=[...state.cartArray]
                  let itemindex = newCountData.findIndex((item) => item.id == action.payload.id);
                   let newTotalPrice=0
                   
                  newCountData[itemindex].item_quantity += 1;

                  for (let i in newCountData) {
                    newTotalPrice += newCountData[i].item_price * newCountData[i].item_quantity;
              
                  }
                    return{
                        ...state, cartArray:[...newCountData],
                        TotalPrice:newTotalPrice
                    }

                    case types.DECREASE_QUANTITY:
                         newCountData=[...state.cartArray]
                     itemindex = newCountData.findIndex((item) => item.id == action.payload.id);
                     newTotalPrice=0
                        newCountData[itemindex].item_quantity -= 1;
                        for (let i in newCountData) {
                            newTotalPrice += newCountData[i].item_price * newCountData[i].item_quantity;
                      
                          }
                        return{
                            ...state, cartArray:[...newCountData],
                            TotalPrice:newTotalPrice
                        } 

                case types.TOTAL_PRICE:
                    const {aryForPrice}=action.payload;
                    let newAryForPrice=[...aryForPrice];
                    let initialTotalPrice=0;
                    for (let i in newAryForPrice) {
                        initialTotalPrice += newAryForPrice[i].item_price * newAryForPrice[i].item_quantity;
                  
                      }

                    return {...state,TotalPrice:initialTotalPrice }
            default:
            return state
        }
     
      

        

   
};