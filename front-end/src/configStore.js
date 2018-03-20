import { createStore, applyMiddleware } from 'redux'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import thunk from 'redux-thunk'

import main from './reducers/main'

const persistConfig = {
  key: 'projectapi_root',
  storage,
  blacklist: []
}

const persistedReducer = persistReducer(persistConfig, main)

let store = createStore(persistedReducer, applyMiddleware(thunk))
let persistor = persistStore(store)

export { store, persistor }
