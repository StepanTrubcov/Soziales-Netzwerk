import { userAPI } from "../Api/api";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATTE_NEW_MESSAGE_TEXT = "UPDATTE-NEW-MESSAGE-TEXT";
const ADD_DIALOGS = "ADD_DIALOGS";

let initialState = {
  dialogsData: null,
  messagesData: [
    {
      to: "/profile",
      name: "Me",
      message: "Hello",
      id: 1,
      img: "https://cspromogame.ru//storage/upload_images/avatars/755.jpg",
    },
    {
      to: "/profile",
      name: "Me",
      message: "I im from Russia",
      id: 2,
      img: "https://cspromogame.ru//storage/upload_images/avatars/755.jpg",
    },
    {
      to: "/profileDimych",
      name: "Dimych",
      message: "Hello",
      id: 3,
      img: "https://img.freepik.com/free-psd/3d-illustration-of-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1713118909~exp=1713119509~hmac=f3cddbc51a512b50fc2d48bd328892d630bc6bede302d313de2ef02ea5523a27",
    },
    {
      to: "/profileDimych",
      name: "Dimych",
      message: "I im from Amerika",
      id: 4,
      img: "https://img.freepik.com/free-psd/3d-illustration-of-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1713118909~exp=1713119509~hmac=f3cddbc51a512b50fc2d48bd328892d630bc6bede302d313de2ef02ea5523a27",
    },
  ],
  currentPage:4,
  pageSize:100,
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        to: "/profile",
        img: "https://cspromogame.ru//storage/upload_images/avatars/755.jpg",
        id: 4,
        message: action.textMessage,
        name: "Me",
      };
      let stateCopy={...state}
      stateCopy.messagesData = [...state.messagesData]
      stateCopy.messagesData.push(newMessage);
      stateCopy.newMessageText = "";
      return stateCopy;
      case ADD_DIALOGS:
        return{...state, dialogsData:action.response}
      default:
        return state;
  }
};

export const addMessageActionCreator =(text)=>({
    type:ADD_MESSAGE, textMessage:text
})

export const addDialogsActionCreator =(response)=>({
  type:ADD_DIALOGS,response:response,

})

export const newTextActionCreator0 =(text)=>({
type:UPDATTE_NEW_MESSAGE_TEXT,text:text
})



export const getUsers = (currentPage, pageSize) => async (dispatch) => {
let response = await userAPI.getUsers0(currentPage, pageSize)
dispatch(addDialogsActionCreator(response))
  };

export default dialogsReducer;
