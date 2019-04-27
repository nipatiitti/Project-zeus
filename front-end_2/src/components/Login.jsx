/**
 * Login component
 *
 */

import React, { Component } from 'react'

import INFO from 'constants'

import { Loading } from './Utils'

class Login extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        if (INFO) {
            window.location = `https://discordapp.com/api/oauth2/authorize?response_type=code&client_id=${
                INFO.id
            }&scope=identify%20guilds&redirect_uri=${encodeURI(INFO.url)}`
        }
    }

    render() {
        return <Loading />
    }
}

export default Login
