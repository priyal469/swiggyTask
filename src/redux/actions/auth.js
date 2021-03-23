
import types from '../types'
import { LOGIN, SIGNUP } from "../../config/urls";
import { apiDelete,apiGet,apiPost,apiPut, setUserData } from "../../utils/utils";
import store from '../store'
const {dispatch}=store;
export  function login (data={}){ 
   
   return new Promise ((resolve,reject)=>{
       apiPost(LOGIN,data).then(res=>{
           setUserData(res.data).then((res=>{
               dispatch({
                   type:types.LOGIN,
                   payload:res.data
               })
           }))
           resolve(res);
       }).catch(error=>{
           reject(error);
       })
   })
}
export function signup (data={}){ 
   
    return apiPost(SIGNUP,data);
}

