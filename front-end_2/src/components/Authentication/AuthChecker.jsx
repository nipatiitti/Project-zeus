/**
 * A Reusable wrapper component
 * Define authentication state and pass it to its children
 *
 *
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUser } from 'reducers'

class AuthCheck extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthenticated: true
        }
    }

    componentDidMount() {
        if (!this.props.token) {
            this.setState({ isAuthenticated: false })
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.token !== this.props.token) {
            this.setState({ isAuthenticated: true })
        }
    }
    render() {
        return this.props.children({
            isAuthenticated: this.state.isAuthenticated
        })
    }
}

const mapStateToProps = state => ({
    user: state.loginReducer.token
})

export default connect(mapStateToProps)(AuthCheck)
