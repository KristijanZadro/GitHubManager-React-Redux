import {
    USER_ADDED,
    REMOVE_USER,
    USER_NOT_FOUND,
    LOADING_USER
} from '../actions/types'

const initialState = {
    users: [],
    error: false,
    loading: false
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case USER_ADDED:
            return {
                ...state,
                error: false,
                loading: false,
                users: [...state.users,action.users]
            }
        case REMOVE_USER:
            return {
                ...state,
                users: state.users.filter(GitHubUser => GitHubUser.id !== action.user.id )
            }
        case USER_NOT_FOUND:
            return {
                ...state,
                error: true,
                loading: false
            }
        case LOADING_USER:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}
export default userReducer