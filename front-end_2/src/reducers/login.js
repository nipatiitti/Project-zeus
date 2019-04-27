/**
 * Login reducer
 *
 * @author name <name@vertics.co>
 *
 * @copyright Vertics Co 2019
 */

import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from 'actions/types'

const initialState = {
    bearer: null,
    user: null,
    loading: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                bearer: action.payload.data.bearer,
                user: action.payload.data.user
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false
            }

        case REGISTER:
            return {
                ...state,
                loading: true
            }
        case REGISTER_FAIL:
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
}

export const getLoading = (state = initialState) => state.loading

export const getUser = (state = initialState) => state.user

export const getBearer = (state = initialState) => state.bearer
