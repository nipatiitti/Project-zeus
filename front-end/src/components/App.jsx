/**
 * Main container
 *
 *
 */

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// components
import ProtectedRoute from './Authentication/ProtectedRoute'

import { Main } from './Dashboard'
import Login from './Login'
import Token from './Token'

class App extends Component {
    render = () => {
        return (
            <Fragment>
                <Helmet titleTemplate="%s | ICT ZEUS" title="Login" defaultTitle="Zeus" />
                <Router>
                    <Switch>
                        <Route path="/token" exact component={Token} />
                        <Route path="/login" exact component={Login} />
                        <ProtectedRoute path="/" exact component={Main} />
                        <Route
                            component={() => (
                                <div>
                                    <h2>404 - error</h2>
                                </div>
                            )}
                        />
                    </Switch>
                </Router>
            </Fragment>
        )
    }
}

export default connect()(App)
