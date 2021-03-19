import types from "../types"


const initialState={
    count=0
}
    export default function reducers(state=initialState,action){
        switch(action.type){
           case types.ADD_CART :
            return{
                ...state,
                count:[...state.count,count + 1]
            }
            default:
            return state
        }
     
      

        

   
};