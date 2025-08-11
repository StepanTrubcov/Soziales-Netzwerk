import { stopSubmit } from "redux-form"
import { headerAPI } from "../Api/Api"

const SET_USER_DATA = 'SET_USER_DATA'
const DELETE_DATA = 'DELETE_DATA'

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


export const getUserData = () => (dispatch) => {
    return headerAPI.getAuth().then(response => {
        if (response.resultCode === 0) {
            let { id, email, login } = response.data;
            dispatch(setUserData(id, email, login))
        }
    })  
}

export const addLogin = (email, password, rememberMe) => (dispatch) => {
    headerAPI.getLogin(email, password, rememberMe).then(response => {
        if (response.resultCode === 0) {
            dispatch(getUserData())
        } else {
            dispatch(stopSubmit('login', { _error: response.messages }))
        }
    })
}

export const deleteLogin = () => (dispatch) => {
    headerAPI.deleteLogin().then(response => {
        dispatch(deleteData())
        dispatch(getUserData())
    })
}


export default authReducer;