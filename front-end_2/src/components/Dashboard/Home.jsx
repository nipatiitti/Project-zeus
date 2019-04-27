/**
 * Dashboard home component
 *
 * @author name <Niilo@vertics.co>
 *
 * @copyright Vertics Co 2019
 */

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { Button, Search, TourList } from '../Utils'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: ''
        }
    }

    handleChange = name => e => this.setState({ [name]: e.target.value })

    render = () => (
        <Fragment>
            <Helmet>
                <title>Dashboard</title>
                <meta name="description" content="Insite Finland dashboard" />
            </Helmet>
            <div className="home-container">
                Home
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(Dashboard)
