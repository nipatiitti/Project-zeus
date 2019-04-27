/**
 * Login action creator
 *
 * @author name <name@vertics.co>
 *
 * @copyright Vertics Co 2019
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
