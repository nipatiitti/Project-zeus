/**
 * Login reducer
 *
 *
 */

import {
    CODE_SUCCESS,
    CHANNELS,
    CHANNELS_SUCCESS,
    CHANNELS_FAIL,
    USER,
    USER_SUCCESS,
    USER_FAIL,
    TOKEN,
    TOKEN_SUCCESS,
    TOKEN_FAIL
} from 'actions/types'

const initialState = {
    code: null,
    token: null,
    user: null,
    channels: null,
    loading: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case CODE_SUCCESS:
            return {
                ...state,
                code: action.code
            }

        case CHANNELS:
        case CHANNELS_FAIL:
        case USER:
        case USER_FAIL:
        case TOKEN:
        case TOKEN_FAIL:
            return {
                ...state,
                loading: true
            }

        case CHANNELS_SUCCESS:
            return {
                ...state,
                loading: false,
                channels: action.payload.data
            }

        case USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.data
            }

        case TOKEN_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload.data.access_token
            }

        default:
            return state
    }
}
