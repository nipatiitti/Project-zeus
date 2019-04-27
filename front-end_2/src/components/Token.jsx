/**
 * Token component
 *
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getToken, getUser, getChannels } from 'actions/discord'
import { CODE_SUCCESS } from 'actions/types'

import { Loading } from './Utils'

class Token extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
        const code = this.props.location.search.split('=')[1]
        this.props.dispatch({
            type: CODE_SUCCESS,
            code
        })

        try {
            await this.props.dispatch(getToken())
            await Promise.all([this.props.dispatch(getUser()), this.props.dispatch(getChannels())])
            this.props.history.replace('/')
        } catch (e) {
            console.error(e)
        }
    }

    render() {
        return <Loading />
    }
}

export default connect()(Token)
