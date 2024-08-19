import {HeaderAPI} from '../Api/api'

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth:false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data ,isAuth:true, };
    default:
      return state;
  }
};

export const setUserData = (id, email, login) => ({
  type: SET_USER_DATA,
  data: { id, email, login },
});

export const getLogin = () => {
  return(dispatch)=>{
    HeaderAPI.getHeader()
      .then((response) => {
        if(response.resultCode === 0){
            let {login,id,email} = response.data
            dispatch(setUserData(id,email,login))
        }
      });
  }
}


export default authReducer;
