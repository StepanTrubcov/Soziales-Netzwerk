import { dialogsAPI } from "../Api/Api"

const SET_USERS_DATA = 'SET_USERS_DATA'

const intitialState = {
    users: [],
}

const subscriptionsReducer = (state = intitialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return { ...state, users: action.users }
        default:
            return state;
    }
}

const setUserData = (users) => ({
    type: SET_USERS_DATA,
    users: users,
})


export const getUserData = (correntPage, pageSize) => (dispatch) => {
    dialogsAPI.getUsers(correntPage, pageSize).then(response => {
        dispatch(setUserData(response.items))
    })
}


export default subscriptionsReducer;