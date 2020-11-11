import axios from 'axios'
import {
    USER_ADDED,
    REMOVE_USER,
    USER_NOT_FOUND,
    LOADING_USER
} from './types'

export const addUser = users => ({
    type: USER_ADDED,
    users
})

export const removeUser = user => ({
    type: REMOVE_USER,
    user
})

export const userError = () => ({
    type: USER_NOT_FOUND
})

export const loading = () => ({
    type: LOADING_USER
})

export const handleGetRequest = userName => {
    return dispatch => {
        dispatch(loading())
        axios({
            method: 'get',
            url: `https://api.github.com/users/${userName}`
          })
          .then(res => {
            const users = res.data
            dispatch(addUser(users))
        })
          .catch(err => {
              console.log(err)
              dispatch(userError())
          });

    }
}