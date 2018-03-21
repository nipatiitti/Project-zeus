import React from 'react'
import { Route, Switch } from 'react-router-dom'

import mainContainer from '../../containers/mainContainer'
import LoginContainer from '../../containers/LoginContainer'

const App = () => (
  <Switch>
    <Route exact path='/' render={mainContainer} />
    <Route exact path='/login' render={LoginContainer} />
  </Switch>
)


export default App
