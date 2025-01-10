import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0'
})

export const SocialAPI = {
    getUsers(){
        return instance.get('/users')
    }
}