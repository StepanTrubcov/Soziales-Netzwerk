const ADD_POST = 'ADD-POST'
const UPDATTE_NEW_POST_TEXT = 'UPDATTE-NEW-POST-TEXT'
const UPDATTE_NEW_POST_IMG ='UPDATTE-NEW-POST-IMG'
const ADD_MESSAGE ='ADD-MESSAGE'
const UPDATTE_NEW_MESSAGE_TEXT = 'UPDATTE-NEW-MESSAGE-TEXT'
const ADD_LIKE ='ADD-LIKE'

let store = {
  _state: {
    profilePage: {
      postData: [
        {
          message: "Hi, how are you?",
          like: 356,
          bild: "https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-28.jpg",
          id: 1,
        },
        {
          message: "Cool picture?",
          like: 334,
          bild: "https://img.freepik.com/free-photo/bus-rural-surroundings-daylight_23-2149125544.jpg?t=st=1712758552~exp=1712762152~hmac=3d7a3b204620479df57f93ae73eaf1df777337566838cc95fb83705f3bedb9d0&w=360",
          id: 2,
        },
        {
          message: "It's my first post",
          like: 35,
          bild: "https://i.pinimg.com/originals/67/0d/e1/670de17faf5150f7e3b76fe0b9b541e7.jpg",
          id: 3,
        },
      ],
      profileInfo: {
        img: "https://cspromogame.ru//storage/upload_images/avatars/755.jpg",
        name: "Stepan T.",
        Birthday: "Birthday: 17 June",
        City: "City: Rzhev",
        Education: "Education: МОУСОШ № 1",
      },
      newPostText: "Hello",
      newPostImg: "",
    },
    profilePageVasay: {
      postDataVasay: [
        {
          message: "what do you do for a living?",
          like: 533,
          bild: "https://avatars.mds.yandex.net/i?id=495a558cbf190312b93dea34356fd5d3ac5ab875-4450519-images-thumbs&ref=rim&n=33&w=250&h=250",
          id: 1,
        },
        {
          message: "Hello i am a computer programmer",
          like: 233,
          bild: "https://catherineasquithgallery.com/uploads/posts/2021-02/1613680451_33-p-fon-dlya-prezentatsii-programmirovanie-44.jpg",
          id: 2,
        },
        {
          message: "It's my first post!!!",
          like: 52,
          bild: "https://dz2cdn1.dzone.com/storage/article-thumb/15917360-thumb.jpg",
          id: 3,
        },
      ],
      profileInfo: {
        img: "https://img.freepik.com/premium-photo/a-cat-wearing-sunglasses-and-a-suit-with-a-tie_917213-21811.jpg?w=740",
        name: "Vasay G.",
        Birthday: "Birthday: 25 April",
        City: "City: Rzhev",
        Education: "Education: МОУСОШ № 1",
      },
    },
    profilePageSacha: {
      postDataSacha: [
        {
          message: "I wish everyone well",
          like: 33,
          bild: "https://proprikol.ru/wp-content/uploads/2020/09/lyubovnye-kartinki-47.jpg",
          id: 1,
        },
        {
          message: "Hello",
          like: 124,
          bild: "https://www.rabstol.net/uploads/gallery/main/34/rabstol_net_waterfalls_1.jpg",
          id: 2,
        },
        {
          message: "It's my first post",
          like: 5,
          bild: "https://www.fonstola.ru/pic/201404/1680x1050/fonstola.ru_144383.jpg",
          id: 3,
        },
      ],
      profileInfo: {
        img: "https://cspromogame.ru//storage/upload_images/avatars/3358.jpg",
        name: "Sacha G.",
        Birthday: "Birthday: 25 April",
        City: "City: Rzhev",
        Education: "Education: МОУСОШ № 1",
      },
    },
    profilePageSveta: {
      postDataSveta: [
        {
          message: "How are you?",
          like: 90,
          bild: "https://www.sunhome.ru/i/wallpapers/38/sinie-glaza-leoparda.orig.jpg",
          id: 1,
        },
        {
          message: "Hello my Name Is Sveta!!!",
          like: 23,
          bild: "https://gas-kvas.com/grafic/uploads/posts/2023-10/1696602070_gas-kvas-com-p-kartinki-s-prirodoi-45.jpg",
          id: 2,
        },
        {
          message: "It's my first post!!!",
          like: 5,
          bild: "https://wdorogu.ru/images/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-37.jpg",
          id: 3,
        },
      ],
      profileInfo: {
        img: "https://img.freepik.com/free-psd/3d-illustration-of-person-with-glasses_23-2149436185.jpg?w=740&t=st=1714664218~exp=1714664818~hmac=dddfdc3b68bf4dcf59ebce56ab576262117d674ded418962ab0c419cb71ce494",
        name: "Sveta T.",
        Birthday: "Birthday: 14 Jule",
        City: "City: Moskay",
        Education: "Education: МОУСОШ № 5",
      },
    },
    profilePageDimych: {
      postDataDimych: [
        {
          message: "Wie geht es dir?",
          like: 334,
          bild: "https://priroda.club/uploads/posts/2023-12/1703031553_priroda-club-p-fon-zakat-instagram-43.jpg",
          id: 1,
        },
        {
          message: "Hallo zusammen",
          like: 32,
          bild: "https://i.pinimg.com/originals/f8/f6/17/f8f617d6016e2b6e6228835e738c27d5.jpg",
          id: 2,
        },
        {
          message: "It's my first post",
          like: 35,
          bild: "https://i.pinimg.com/originals/f4/34/4f/f4344f8a578da8c5085bad6a4899c391.jpg",
          id: 3,
        },
      ],
      profileInfo: {
        img: "https://img.freepik.com/free-psd/3d-illustration-of-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1713118909~exp=1713119509~hmac=f3cddbc51a512b50fc2d48bd328892d630bc6bede302d313de2ef02ea5523a27",
        name: "Dimych R.",
        Birthday: "Birthday: 25 June",
        City: "City: Moskay",
        Education: "Education: МОУСОШ № 10",
      },
    },
    messagesPage: {
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
    },
    FriendsPage: {
      FriendsData: [
        {
          ava: "https://img.freepik.com/free-psd/3d-illustration-of-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1713118909~exp=1713119509~hmac=f3cddbc51a512b50fc2d48bd328892d630bc6bede302d313de2ef02ea5523a27",
          name: "Dimych",
          id: "/profileDimych",
        },
        {
          ava: "https://img.freepik.com/free-psd/3d-illustration-of-person-with-glasses_23-2149436185.jpg?w=740&t=st=1714664218~exp=1714664818~hmac=dddfdc3b68bf4dcf59ebce56ab576262117d674ded418962ab0c419cb71ce494",
          name: "Sveta",
          id: "/profileSveta",
        },
        {
          ava: "https://img.freepik.com/premium-photo/a-cat-wearing-sunglasses-and-a-suit-with-a-tie_917213-21811.jpg?w=740",
          name: "Vasay",
          id: "/profileVasay",
        },
        {
          ava: "https://cspromogame.ru//storage/upload_images/avatars/3358.jpg",
          name: "Sasha ",
          id: "/profileSacha",
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
    },
  },

  getState() {
    return this._state;
  },
  subscribed(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {},
  
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        bild: this._state.profilePage.newPostImg,
        message: this._state.profilePage.newPostText,
        like: 0,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      debugger;
      this._state.profilePage.newPostImg = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATTE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if(action.type===ADD_MESSAGE){
      let newMessage = {
        to: "/profile",
        img: "https://cspromogame.ru//storage/upload_images/avatars/755.jpg",
        id: 4,
        message: action.textMessage,
        name: "Me",
      };
      this._state.messagesPage.messagesData.push(newMessage);
      this._state.messagesPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if(action.type===UPDATTE_NEW_POST_IMG){
      this._state.profilePage.newPostImg = action.newImg;
      this._callSubscriber(this._state);
    } else if(action.type===UPDATTE_NEW_MESSAGE_TEXT){
      this._state.messagesPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    } else if(action.type===ADD_LIKE){
        this._state.profilePage.postData[0].like = this._state.profilePage.postData[0].like + 1
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = (text,img) => ({
    type: ADD_POST,
    text: text,
    img: img,

});

export const newTextActionCreator = (newText) => ({
    type: UPDATTE_NEW_POST_TEXT,
    newText: newText,
});

export const newImgActionCreator = (newImg) => ({
    type: UPDATTE_NEW_POST_IMG,
    newImg: newImg,
});

export const addMessageActionCreator =(text)=>({
    type:ADD_MESSAGE, textMessage:text
})

export const newTextActionCreator0 =(text)=>({
type:UPDATTE_NEW_MESSAGE_TEXT,text:text
})

export const addLikeActionCreaton =()=>({
  type:ADD_LIKE
})

export default store;
