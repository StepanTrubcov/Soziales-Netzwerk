const SET_USERS = "SET_USERS";

let initialState = {
  FriendsData: [],
  currentPage:9,
  pageSize:8,
};

const FriendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.users };
    default:
      return state;
  }
};

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});



export default FriendsReducer;
