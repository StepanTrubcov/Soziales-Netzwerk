import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'd0f6ff6f-1b39-4b2a-82a9-1e45ac08c48a'
    }
})

export const usersAPI = {
    getUsers(correntPage, pageSize) {
        return instance.get(`users?page=${correntPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    getFollow(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        })
    },
    getUnFollow(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data
        })
    }
}

export const profileAPI = {
    getProfileId(profileId) {
        return instance.get(`profile/${profileId}`).then(response => {
            return response.data
        })
    },
    getAboutMe(profileId) {
        return instance.get(`profile/status/${profileId}`).then(response => {
            return response.data
        })
    },
    newStatusApi(status) {
        return instance.put(`profile/status`, { status: status }).then(response => {
            return response.data
        })
    },
    newPhotoApi(file) {
        const formData = new FormData();
        formData.append('image', file);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    }
}

export const headerAPI = {
    getAuth() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
    getLogin(email, password, rememberMe) {
        return instance.post(`/auth/login`, { email: email, password: password, rememberMe: rememberMe }).then(response => {
            return response.data
        })
    },
    deleteLogin() {
        return instance.delete(`/auth/login`).then(response => {
            return response.data
        })
    },
}

export const dialogsAPI = {
    getUsers(correntPage, pageSize) {
        return instance.get(`users?page=${correntPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    getBand(e) {
        return instance.get(`profile/${e}`).then(response => {
            return response.data
        })
    },
}