/**
 * Root reducer
 *
 *
 */

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

// login reducer
import { loginReducer } from './loginReducer'

// export root reducer
export const rootReducer = combineReducers({
    router: connectRouter(history),
    loginReducer
})

// export history
export { history }
