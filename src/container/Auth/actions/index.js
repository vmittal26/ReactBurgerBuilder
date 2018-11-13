import * as actionTypes from "../../../store/actionsTypes";
import axios from 'axios';

export const authStart = ()=>{
    return {
        type:actionTypes.AUTH_START
    };
}


export const authSuccess = (authData) =>{
    return{
         type:actionTypes.AUTH_SUCCESS,
         authData
    }
 }

 export const authFail = (error)=>{
     return {
         type:actionTypes.AUTH_FAIL,
         error
     }
 }

 export const auth = (email,password)=>{

    return dispatch=>{
         dispatch(authStart());
         const authData = {
            email,password,returnSecureToken:true
         }
         axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBrZjq7r1tMcsXJFwoK84Sd2M11uTScMhA'
         ,authData)
               .then(response=>{
                   console.log(response);
                   dispatch(authSuccess(response.data));
               })
               .catch((error)=>{
                   console.log(error);
                   dispatch(authFail(error));
               })
    };
 }