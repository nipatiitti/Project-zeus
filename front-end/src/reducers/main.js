import { combineReducers } from 'redux'

import error from './error'
import loading from './loading'
import info from './info'
import user from './user'
import channels from './channels'

const main = combineReducers({
  error,
  loading,
  info,
  user,
  channels
})

export default main
