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
import { main } from './main'

// export root reducer
export const rootReducer = combineReducers({
    router: connectRouter(history),
    main
})

// export history
export { history }
