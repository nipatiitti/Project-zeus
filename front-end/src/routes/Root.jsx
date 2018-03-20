import React from 'react'
import PropTypes from 'prop-types'

import {
  Router,
  Route,
  Switch
} from 'react-router-dom'

import { PersistGate } from 'redux-persist/integration/react'

import { Provider } from 'react-redux'

import history from '../history'

import AppContainer from '../containers/AppContainer'

const Root = ({ store, persistor }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <Switch>
          <Route path='/' component={AppContainer} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  persistor: PropTypes.object.isRequired
}

export default Root
