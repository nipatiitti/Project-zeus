import React from 'react'
import { Route, Switch } from 'react-router-dom'

import addPostContainer from '../../containers/addPostContainer'
import ItemContainer from '../../containers/ItemContainer'
import mainContainer from '../../containers/mainContainer'

const App = () => (
  <Switch>
    <Route exact path='/' render={mainContainer} />
    <Route exact path='/add' render={addPostContainer} />
    <Route exact path='/items/:id' render={ItemContainer} />
  </Switch>
)


export default App
