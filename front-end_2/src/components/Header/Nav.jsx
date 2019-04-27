/**
 * Navbar component
 *
 * @author name <Niilo@vertics.co>
 *
 * @copyright Vertics Co 2019
 */

import React from 'react'

import { connect } from 'react-redux'

const Nav = ({
    history: {
        location: { pathname }
    }
}) => (
    <div className="nav">
        nav
    </div>
)

export default connect(mapStateToProps)(Nav)
