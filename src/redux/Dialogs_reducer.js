import { dialogsAPI } from "../Api/Api"

const ADD_MESSAGE = 'ADD_MESSAGE'
const SET_DIALOGS = 'SET_DIALOGS'
const SET_BANG = 'SET_BANG'

const dialogStore = {
    message: [],
    dialogs: [],
    bang: [],
}
const dialogReducer = (state = dialogStore, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = action.message
            const newState = { ...state }
            newState.message = [...state.message]
            newState.message.push(newMessage)
            return newState;
        case SET_DIALOGS:
            return { ...state, dialogs: action.dialogs }
        case SET_BANG:
            return { ...state, bang: action.bang }
        default:
            return state
    }
}


export const addNewMessage = (message) => ({
    type: ADD_MESSAGE,
    message: message,
})

const setDialogs = (dialogs) => ({
    type: SET_DIALOGS,
    dialogs: dialogs
})

export const setBand = (bang) => ({
    type: SET_BANG,
    bang: bang,
})

export const getUsers = (correntPage, pageSize) => (dispatch) => {
    dialogsAPI.getUsers(correntPage, pageSize).then(response => {
        console.log(correntPage, pageSize)
        dispatch(setDialogs(response.items))
    })
}

export const getBand = (e) => (dispatch) => {
    dialogsAPI.getBand(e).then(response => {
        dispatch(setBand(response))
    })
}

export default dialogReducer;