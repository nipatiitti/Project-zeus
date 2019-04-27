import { ERROR } from 'actions/types'

// error handling reducer
// return error message if there is error returned from action
const initialState = {
    message: null
}

export const errorReducer = (state = initialState, action) => {
    const { type, error } = action
    // Because there might be different forms of error
    // returned from the server
    // Just return error and handle UI res (eg. message) inside component
    // If we came up with a "global" error return
    // then return error message here
    if (error) {
        // console.log(error.response.data)
        return error.response.data
    }
    if (error && !error.response.data) {
        return {
            message: 'Ups! Something went wrong'
        }
    }
    if (type === ERROR) {
        return {
            message: action.text
        }
    }
    return state
}
