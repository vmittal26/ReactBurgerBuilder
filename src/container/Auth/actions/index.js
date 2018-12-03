import * as actionTypes from "../../../store/actionsTypes";
import axios from 'axios';

export const authStart = ()=>{
    return {
        type:actionTypes.AUTH_START
    };
}


export const authSuccess = (idToken,localId) =>{
    return{
         type:actionTypes.AUTH_SUCCESS,
         idToken,
         localId
    }
 }

 export const authFail = (error)=>{
     return {
         type:actionTypes.AUTH_FAIL,
         error
     }
 }

 export const auth = (email,password,isSignup)=>{

    return dispatch=>{
         dispatch(authStart());
         const authData = {
            email,password,returnSecureToken:true
         }

         let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBrZjq7r1tMcsXJFwoK84Sd2M11uTScMhA';

         if(!isSignup){
             url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBrZjq7r1tMcsXJFwoK84Sd2M11uTScMhA';
         }
         axios.post(url,authData)
               .then(response=>{
                   console.log(response);
                   dispatch(authSuccess(response.data.idToken , response.data.localId));
               })
               .catch((error)=>{
                   console.log(error);
                   dispatch(authFail(error));
               })
    };
 }