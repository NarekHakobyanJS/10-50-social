import { SocialAPI } from "../api/api"
const GET_ALL_USERS = 'GET_ALL_USERS'

const initState = {
    users: []
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}

export const getAllUsersAC = (users) => ({ type: GET_ALL_USERS, payload: users })

export const getAllUsersThunkCreator = () => {
    return (dispatch) => {
        SocialAPI.getUsers()
            .then((res) => {
                dispatch(getAllUsersAC(res.data.items))
            })
    }
}
export default usersReducer