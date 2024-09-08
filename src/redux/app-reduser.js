import { stopSubmit } from "redux-form";
import { HeaderAPI, authAPI, userAPI } from "../Api/api";
import { getLogin } from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return { ...state, initialized:true };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: SET_INITIALIZED,
});

export const initialize = () => (dispatch) => {
  let promise =  dispatch(getLogin())
   Promise.all ([promise]).then(()=>{
        dispatch(initializedSuccess())
    })
  }

export default appReducer;
