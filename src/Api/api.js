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
  getStatus(userId) {
    return instance.get(`profile/status/` + userId)
  },
  updeteStatus(status) {
    return instance.put(`profile/status`, { status })
  },
  savePhotos(file) {
    let Photos = new FormData()
    Photos.append('image', file)
    return instance.put(`profile/photo`, Photos, { headers: { "Content-Type": "multipart/form-data" } })
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile)
  },
}

export const HeaderAPI = {
  getHeader() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
}

export const authAPI = {
  login(email, password, rememberMe) {
    return instance.post(`auth/login`, { email, password, rememberMe })
  },
  logout() {
    return instance.delete(`auth/login`)
  },
}

export const securtityAPI = {
  setCapthaUrl(text) {
    return instance.get(`security/get-captcha-url`)
  },
}