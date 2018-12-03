import * as actionTypes from "../../../store/actionsTypes";

const INITITAL_STATE = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  isAuthenticated : false
};

const reducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    default:
      return state;
  }
};

export default reducer;

function authStart(state) {
    return {
        ...state,
        loading: true,
        error: null
    };
}

function authFail(state, action) {
  return {
    ...state,
    error: action.error,
    loading: false,
    isAuthenticated:false
  };
}

function authSuccess(state, action) {
  return {
    ...state,
    token: action.idToken,
    userId: action.localId,
    error: null,
    loading: false,
    isAuthenticated :true
  };
}
