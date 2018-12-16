import * as actionTypes from "../../../store/actionsTypes";

export const logout = () => {
    return {
      type: actionTypes
    };
};

export const onLogout =() => {

  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('expirationDate');

  return dispatch => {
    dispatch(logout());
  }
}