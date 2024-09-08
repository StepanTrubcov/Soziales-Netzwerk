const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATTE_NEW_MESSAGE_TEXT = "UPDATTE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogsData: [
    {
      ava: "https://img.freepik.com/free-psd/3d-illustration-of-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1713118909~exp=1713119509~hmac=f3cddbc51a512b50fc2d48bd328892d630bc6bede302d313de2ef02ea5523a27",
      name: "Dimych",
      id: "1",
    },
    {
      ava: "https://img.freepik.com/free-psd/3d-illustration-of-person-with-glasses_23-2149436185.jpg?w=740&t=st=1714664218~exp=1714664818~hmac=dddfdc3b68bf4dcf59ebce56ab576262117d674ded418962ab0c419cb71ce494",
      name: "Sveta",
      id: "2",
    },
    {
      ava: "https://img.freepik.com/premium-photo/a-cat-wearing-sunglasses-and-a-suit-with-a-tie_917213-21811.jpg?w=740",
      name: "Vasay",
      id: "3",
    },
    {
      ava: "https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556782.jpg?t=st=1714664310~exp=1714667910~hmac=604308e3699d7af2c0c7c934b29f9ef3be331648f82596ed0ae3d35b06413ff1&w=900",
      name: "Sasha ",
      id: "4",
    },
    {
      ava: "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611746.jpg?t=st=1714664333~exp=1714667933~hmac=01e5e8df7a46da11b24efc6f2b4d5f4d1076decdc18a7f6c706bffa3177c8fea&w=740",
      name: "Viktor",
      id: "5",
    },
    {
      ava: "https://img.freepik.com/premium-vector/geek-monkey-logo-template_232120-37.jpg?w=740",
      name: "Valera",
      id: "6",
    },
  ],
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
