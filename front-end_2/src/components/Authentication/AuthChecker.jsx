/**
 * A Reusable wrapper component
 * Define authentication state and pass it to its children
 *
 * @author name <name@vertics.co>
 *
 * @copyright Vertics Co 2019
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
        if (!this.props.user) {
            this.setState({ isAuthenticated: false })
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.user !== this.props.user) {
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
    user: getUser(state.loginReducer)
})

export default connect(mapStateToProps)(AuthCheck)
