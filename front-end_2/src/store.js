/**
 * Configure redux store
 *
 *
 */

import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { routerMiddleware } from 'connected-react-router'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

import { rootReducer, history } from 'reducers'
import { PERSIST_KEY } from 'constants'

// Create client alias
// Used in action creators
const client = axios.create({
    baseURL: 'https://discordapp.com/api/v6',
    responseType: 'json'
})

// Config redux-persist
const persistConfig = {
    key: PERSIST_KEY,
    storage,
    blacklist: ['router']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Define middleware to use
const tools = [applyMiddleware(thunk, routerMiddleware(history), axiosMiddleware(client))]

if (window.__REDUX_DEVTOOLS_EXTENSION__) tools.push(window.__REDUX_DEVTOOLS_EXTENSION__())

// Create redux store
const store = createStore(persistedReducer, compose(...tools))
let persistor = persistStore(store)

export { store, persistor }
