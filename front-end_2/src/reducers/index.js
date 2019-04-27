/**
 * Root reducer
 *
 * @author name <name@vertics.co>
 *
 * @copyright Vertics Co 2019
 */

import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

// Error handling reducer
import { errorReducer } from './errorReducer'

// login reducer
import { loginReducer, getUser, getBearer, getLoading } from './login'

// popup reducer
import { popups } from './popups'

// export root reducer
export const rootReducer = combineReducers({
    form: reduxFormReducer,
    router: connectRouter(history),
    errorReducer,
    popups,
    loginReducer,
    reducer360
})

// export history
export { history }

// export getters/ selectors
// these will be used in individual react component
export {
    // login selectors
    getUser,
    getBearer,
    getLoading,
    // 360 Selectors
    getDialogs,
    getRooms,
    getTour
}
