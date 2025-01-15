import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0'
})

export const SocialAPI = {
    getUsers(page, count){
        return instance.get(`/users?count=${count}&page=${page}`)
    },
    getUserProfile(userId){
        return instance.get(`/profile/${userId}`)
    },
    getUserStatus(userId){
        return instance.get(`/profile/status/${userId}`)
    }
}