import profileReducer,{addPostActionCreator} from "./profile-reducer"


test('length of posts should be ', () => {
  let action = addPostActionCreator('it')
  let state = {
    postData: [
      {
        message: "Hi, how are you?",
        like: 356,
        bild: "https://avatars.mds.yandex.net/i?id=b66d0b6e6f13afab13e2272dfcabfcb4b3f84855-4231950-images-thumbs&n=13",
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
  };
  let newTest = profileReducer(state,action)

 expect(newTest.postData.length === 4)
});
