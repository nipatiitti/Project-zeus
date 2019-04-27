/**
 * A Reusable wrapper component
 * Define authentication state and pass it to its children
 *
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import moment from 'moment'

class AuthCheck extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthenticated: true,
            rendering: true
        }
    }

    componentDidMount() {
        if (
            !this.props.main.token ||
            (this.props.main.token && moment().isAfter(moment(this.props.main.expires_in)))
        ) {
            this.setState({ isAuthenticated: false, rendering: false })
        } else {
            this.setState({
                rendering: false
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.main.token && !this.props.main.token) {
            this.setState({ isAuthenticated: false })
        } else if (!prevProps.main.token && this.props.main.token) {
            this.setState({ isAuthenticated: true })
        }
    }
    render = () =>
        this.props.children({
            ...this.state
        })
}

const mapStateToProps = state => ({
    main: state.main
})

export default connect(mapStateToProps)(AuthCheck)
