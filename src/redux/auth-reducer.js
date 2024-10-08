import { stopSubmit } from "redux-form";
import { HeaderAPI, authAPI, userAPI } from "../Api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

export const getLogin = () => async (dispatch) => {
 let response = await HeaderAPI.getHeader();
      if (response.resultCode === 0) {
        let { login, id, email } = response.data;
        dispatch(setUserData(id, email, login, true));
      }
  };


export const login = (email, password, rememberMe) => async (dispatch) => {
 let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
      dispatch(getLogin());
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
};

export const logout = () => async (dispatch) => {
   let response = await authAPI.logout();
      if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
      }
  };


export default authReducer;
