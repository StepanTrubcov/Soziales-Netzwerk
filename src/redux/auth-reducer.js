import { stopSubmit } from "redux-form";
import { HeaderAPI, authAPI, securtityAPI } from "../Api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL"

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    case SET_CAPTCHA_URL:
      return { ...state, captchaUrl: action.captchaUrl };
    default:
      return state;
  }
};

export const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

export const setCaptchaUrl = (captchaUrl) => ({
  type: SET_CAPTCHA_URL,
  captchaUrl: captchaUrl,
});

export const getLogin = () => async (dispatch) => {
  let response = await HeaderAPI.getHeader();
  if (response.resultCode === 0) {
    let { login, id, email } = response.data;
    dispatch(setUserData(id, email, login, true));
  }
};


export const login = (email, password, rememberMe, captcha = null) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) {
    dispatch(getLogin());
  } else {
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
    if (response.data.resultCode === 1) {
      dispatch(getCaptchaUrl())
    }
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securtityAPI.setCapthaUrl();
  const captchaUrl = response.data.url;
  dispatch(setCaptchaUrl(captchaUrl))
};

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false, null));
  }
};


export default authReducer;
