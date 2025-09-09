import { getUserData } from './auth_reducer'

const SET_INITIALIZED = 'app/SET_INITIALIZED'

const intitialState = {
    initialized: false,
}

const appReducer = (state = intitialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return { ...state, initialized: true }
        default:
            return state;
    }
}

const setInitialized = () => ({
    type: SET_INITIALIZED,
})

export const initialize = () => async (dispatch) => {
    const promise = dispatch(getUserData())

    Promise.all([promise]).then(
        setTimeout(() => {
            dispatch(setInitialized())
        }, 600)
    )
}


export default appReducer;