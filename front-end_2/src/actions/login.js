/**
 * Login action creator
 *
 *
 */

import { LOGIN } from './types'

/**
 * Dispatched when user submits login form
 *
 * @param  {object} repos The user object
 *
 * @return {object} The created login action
 */

export const login = user => ({
    type: LOGIN,
    payload: {
        request: {
            method: 'POST',
            url: '/bearers',
            data: user
        }
    }
})
