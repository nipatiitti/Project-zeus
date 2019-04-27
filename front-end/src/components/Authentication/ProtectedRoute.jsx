/**
 * Protected route
 * Only let user access the route if user has been authenticated
 * Otherwise redirect user to login page
 *
 *
 */

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthChecker from './AuthChecker'
import { Loading } from '../Utils'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <AuthChecker>
            {({ isAuthenticated, rendering }) => (
                <Route
                    {...rest}
                    render={props =>
                        rendering ? (
                            <Loading />
                        ) : isAuthenticated ? (
                            <Component {...props} />
                        ) : (
                            <Redirect to="/login" />
                        )
                    }
                />
            )}
        </AuthChecker>
    )
}

export default ProtectedRoute
