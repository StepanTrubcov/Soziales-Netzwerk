import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "b575a8fc-d607-4a73-b613-5a54225f3c34",
  },
});

export const userAPI = {
    getUsers0(currentPage, pageSize) {
        return instance
          .get(`users?page=${currentPage}&count=${pageSize}`)
          .then((response) => {
            return response.data;
          });
      },
      getFollow(id) {
        return instance.post(`follow/${id}`).then((response) => {
          return response.data;
        });
      },
      getUnFollow(id) {
        return instance.delete(`follow/${id}`).then((response) => {
          return response.data;
        });
      },
      getUsersProfile(userId) {
        return instance.get(`profile/` + userId).then((response) => {
          return response.data;
        });
      },
     getStatus(userId){
        return instance.get(`profile/status/` + userId)
     },
     updeteStatus(status){
        return instance.put(`profile/status`, {status})
     }
}

export const HeaderAPI ={
    getHeader() {
        return instance.get(`auth/me`).then((response) => {
          return response.data;
        });
      },
}

export const authAPI ={
  login(email,password,rememberMe){
    return instance.post(`auth/login`, {email,password,rememberMe})
  },
  logout(){
    return instance.delete(`auth/login`)
  }
}