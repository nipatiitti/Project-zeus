/**
 * Login action creator
 *
 * @author name <Niilo@vertics.co>
 *
 * @copyright Vertics Co 2019
 */

import { REGISTER } from './types'

/**
 * Dispatched when user submits registering form
 *
 * @param  {object} repos The user object
 *
 * @return {object} The created login action
 */

export const register = user => ({
    type: REGISTER,
    payload: {
        request: {
            method: 'POST',
            url: '/users',
            data: user
        }
    }
})
