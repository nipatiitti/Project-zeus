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

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <AuthChecker>
            {({ isAuthenticated }) => (
                <Route
                    {...rest}
                    render={props =>
                        isAuthenticated ? (
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
