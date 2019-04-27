/**
 * Dashboard main component
 *
 */

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { Button, Search } from '../Utils'

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: ''
        }
    }

    handleChange = name => e => this.setState({ [name]: e.target.value })

    render = () => (
        <Fragment>
            <Helmet title="Zeus" />
            <Search
                value={this.state.search}
                onChange={this.handleChange('search')}
            />
            <div className="home-container">Home</div>
        </Fragment>
    )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(Main)
