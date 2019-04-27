/**
 * Login component
 *
 */

import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import { Loading } from './Utils'

class Login extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {}

    render() {
        return <Loading />
    }
}

const mapStateToProps = state => ({
    user: getUser(state.loginReducer),
    loading: getLoading(state.loginReducer)
})

export default connect(mapStateToProps)(Login)
