import { stopSubmit } from "redux-form"
import { headerAPI } from "../Api/Api"

const SET_USER_DATA = 'auth/SET_USER_DATA'
const DELETE_DATA = 'auth/DELETE_DATA'

const intitialState = {
    userId: null,
    email: null,
    login: null,
    IsFetching: false,
}

const authReducer = (state = intitialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.data, IsFetching: true }
        case DELETE_DATA:
            return {
                ...state,
                IsFetching: false
            }
        default:
            return state;
    }
}

const setUserData = (userId, email, login) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login,
    },
})

const deleteData = () => ({
    type: DELETE_DATA,
})


export const getUserData = () => async (dispatch) => {
    let response = await headerAPI.getAuth()
    if (response.resultCode === 0) {
        let { id, email, login } = response.data;
        dispatch(setUserData(id, email, login))
    }
}

export const addLogin = (email, password, rememberMe) => async (dispatch) => {
    let response = await headerAPI.getLogin(email, password, rememberMe)
    if (response.resultCode === 0) {
        dispatch(getUserData())
    } else {
        dispatch(stopSubmit('login', { _error: response.messages }))
    }
}

export const deleteLogin = () => async (dispatch) => {
   await headerAPI.deleteLogin()
        dispatch(deleteData())
        dispatch(getUserData())

}


export default authReducer;