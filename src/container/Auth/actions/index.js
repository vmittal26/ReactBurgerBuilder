import * as actionTypes from "../../../store/actionsTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (idToken, localId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken,
    localId
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  };
};

export const auth = (email, password, isSignup, isAuthenticated) => {
  return dispatch => {
    dispatch(authStart());
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (token && userId) {
      dispatch(authSuccess(token, userId));
      isAuthenticated();
    } else {
      const authData = {
        email,
        password,
        returnSecureToken: true
      };

      let url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBrZjq7r1tMcsXJFwoK84Sd2M11uTScMhA";

      if (!isSignup) {
        url =
          "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBrZjq7r1tMcsXJFwoK84Sd2M11uTScMhA";
      }
      axios
        .post(url, authData)
        .then(response => {
          console.log(response);
          const expirationDate = new Date(
            new Date().getTime() + response.data.expiresIn * 1000
          );

          localStorage.setItem("token", response.data.idToken);
          localStorage.setItem("expirationDate", expirationDate);
          localStorage.setItem("userId", response.data.localId);

          dispatch(authSuccess(response.data.idToken, response.data.localId));
          isAuthenticated(true);
        })
        .catch(error => {
          console.log(error);
          dispatch(authFail(error));
        });
    }
  };
};


export const tryAutoSignUp = (isAuthenticated) => {
  return dispatch => {
    dispatch(authStart());
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (token && userId) {
      dispatch(authSuccess(token, userId));
      isAuthenticated(true);
    }else{
      console.log('Token not present');
      dispatch(authFail(null));
    }
  }
} 