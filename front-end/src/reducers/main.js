import { combineReducers } from 'redux'

import error from './error'
import loading from './loading'
import info from './info'

const main = combineReducers({
  error,
  loading,
  info
})

export default main
