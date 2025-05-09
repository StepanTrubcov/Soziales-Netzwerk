const ADD_MESSAGE = 'ADD_MESSAGE'

const dialogStore = {
message:[
    {
        img:'https://avatars.mds.yandex.net/i?id=451adfa260c792fc2ddac886a2efa46f6ac340c7-10642623-images-thumbs&n=13',
        message:'Hello'
    },
]
}
const dialogReducer = (state = dialogStore , action) =>{
    switch(action.type){
        case ADD_MESSAGE:
            const newMessage ={
                img:action.img,
                message:action.message
            }
            const newState = {...state}
            newState.message = [...state.message]
            newState.message.push(newMessage)
            return newState;

            default:
                return state
    }
}


export const addNewMessage = (message,img) =>({
type:ADD_MESSAGE,
message:message,
img:img,
})

export default dialogReducer;