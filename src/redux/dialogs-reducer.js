const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATTE_NEW_MESSAGE_TEXT = "UPDATTE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        to: "/profile",
        img: "https://cspromogame.ru//storage/upload_images/avatars/755.jpg",
        id: 4,
        message: action.textMessage,
        name: "Me",
      };
      state.newMessageText = "";
      state.messagesData.push(newMessage);
      state.newPostImg = action.newImg;
      return state;
    case UPDATTE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
      default:
        return state;
  }
};

export const addMessageActionCreator =(text)=>({
    type:ADD_MESSAGE, textMessage:text
})

export const newTextActionCreator0 =(text)=>({
type:UPDATTE_NEW_MESSAGE_TEXT,text:text
})

export default dialogsReducer;
