/**
 * Login reducer
 *
 *
 */

import { LOGIN } from 'actions/types'

const initialState = {
    token: null
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loading: true,
                token: action.token
            }

        default:
            return state
    }
}
