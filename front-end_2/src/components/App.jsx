/**
 * Main container
 *
 * @author name <name@vertics.co>
 *
 * @copyright Vertics Co 2019
 */

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// components
import ProtectedRoute from './Authentication/ProtectedRoute'

import Nav from './Header/Nav'
import { Home } from './Dashboard'
import Login from './Login'

import ErrorMessage from './UI/ErrorMessage'

class App extends Component {

    render = () => {
        return (
            <Fragment>
                <Helmet
                    titleTemplate="%s | Insite Finland"
                    title="Dashboard"
                    defaultTitle="Insite"
                >
                    <meta
                        name="description"
                        content="Insite Finland. Leading the future of 360 images in web"
                    />
                </Helmet>
                <Router>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <ProtectedRoute
                            path="/"
                            component={props => (
                                <Fragment>
                                    <Nav {...props} />
                                    <Route path="/" exact component={Home} />
                                </Fragment>
                            )}
                        />

                        <Route
                            component={() => (
                                <div>
                                    <h2>404 - error</h2>
                                </div>
                            )}
                        />
                    </Switch>
                </Router>
                {/*
					Render error message right away
					Will return null if there is no such error
				*/}
                <ErrorMessage />
            </Fragment>
        )
    }
}

export default connect()(App)
