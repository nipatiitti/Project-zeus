/**
 * test reducer
 *
 * @author name <name@vertics.co>
 *
 * @copyright Vertics Co 2019
 */

import { MESSAGE, ERROR } from 'actions/types'

const initialState = {
    message: null,
    error: null
}

export const popups = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGE:
            return {
                ...state,
                message: action.text
            }

        case ERROR:
            return {
                ...state,
                error: action.text
            }

        default:
            return state
    }
}
