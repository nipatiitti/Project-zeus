import { combineReducers } from 'redux'

import error from './error'
import loading from './loading'

const main = combineReducers({
  error,
  loading
})

export default main
