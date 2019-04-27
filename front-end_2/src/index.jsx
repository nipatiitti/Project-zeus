/**
 * Root client file
 *
 *
 */

// React stuffs
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ConnectedRouter } from 'connected-react-router'

import { store, persistor } from './store'

// history from reducer
import { history } from 'reducers'

// Styling
import './styles/index.scss'

// Components
import App from './components/App'

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
)
