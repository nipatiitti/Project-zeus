/**
 * Helper actions
 *
 * @author name <name@vertics.co>
 *
 * @copyright Vertics Co 2019
 */

import { MESSAGE, ERROR } from './types'

/**
 * To dispatch in order to show app wide message
 *
 * @param  {string} const The message to show
 *
 */

const message = text => ({
    type: MESSAGE,
    text
})

/**
 * To dispatch in order to show app wide message
 *
 * @param  {string} const The message to show
 *
 */

const error = text => ({
    type: ERROR,
    text
})

const errorHandler = r => {
    // TODO
}

export { message, error, errorHandler }
