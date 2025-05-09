
const ADD_POST = 'ADD_POST'
const ADD_INFO = 'ADD_INFO'

const myPostStore = {
   postData:[
   {
        img:'https://avatars.mds.yandex.net/i?id=df7ba99e1adb92eebf29ce71e906a8a39b8de135-4449234-images-thumbs&n=13',
        text:'Hello',
    },
    {
        img:'https://avatars.mds.yandex.net/i?id=df7ba99e1adb92eebf29ce71e906a8a39b8de135-4449234-images-thumbs&n=13',
        text:'Hello',
    },    
    {
        img:'https://avatars.mds.yandex.net/i?id=df7ba99e1adb92eebf29ce71e906a8a39b8de135-4449234-images-thumbs&n=13',
        text:'Hello',
    }
],
ava:'https://avatars.mds.yandex.net/i?id=c4b0adbf3dab69d610bf2365163c9a8c_l-4817585-images-thumbs&n=13',
name:'Stepan Tr.',
id:1,
years:15,
}

const profileReducer = (state = myPostStore , action) =>{
    switch (action.type) {
        case ADD_POST:
          let newPost = {
            img: action.img,
            text: action.text,
          };
          let stateCopy0 = { ...state };
          stateCopy0.postData = [...state.postData];
          stateCopy0.postData.unshift(newPost);
          return stateCopy0;
        case ADD_INFO:
          let stateCopy1 = { ...state };
          stateCopy1.ava = action.ava
          stateCopy1.name = action.name
          stateCopy1.years = action.years
          return stateCopy1;
            default:
                return state;
    }
}

export const addPostActionCreator = (text, img) => ({
    type: ADD_POST,
    text: text,
    img: img,
  });

  export const addInfoActionCreator = (name, ava, years) => ({
    type: ADD_INFO,
    ava: ava,
    name: name,
    years:years,
  });

export default profileReducer;