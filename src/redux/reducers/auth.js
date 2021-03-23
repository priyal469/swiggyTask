import types from "../types"


const initialState={
    userData:{},
   isLoggedIn:false
}
    export default function authReducers(state=initialState,action){
        switch(action.type){
           
           case types.LOGIN:
               const{userData}={...action.payload};
               return{
                   ...state,userData,isLoggedIn:true
               }
            default:
            return state
        }
     
      

        

   
};