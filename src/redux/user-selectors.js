export const get_Users = (state) => {
  return state.usersPage.users;
};

export const getpageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getcurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getisFentching = (state) => {
    return state.usersPage.isFentching;
  };

export const gettotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
  };

export const getfollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
  };  
//18.2.0