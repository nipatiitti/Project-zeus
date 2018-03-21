import React, { Component } from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'

import Button from '../Button'
import Text from '../Text'

class LoggedIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: ''
    }
  }

  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search)
    if(this.props.token === '' && parsed.code)
        this.props.getToken(parsed.code)
  }

  render() {
    return (
      <div>
        <p>{this.props.token !== '' ? this.props.token : 'loading'}</p>
      </div>
    )
  }
}

LoggedIn.propTypes = {
  login: PropTypes.func
}

export default LoggedIn
