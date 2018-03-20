import React, { Component } from 'react'
import PropTypes from 'prop-types'

import history from '../../history'

import { NavLink } from 'react-router-dom'

import PostItem from './PostItem'

import Button from '../Button'
import Text from '../Text'

class Main extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getPosts('math')
  }

  render() {

    const { data, loading } = this.props

    return (
      <div className='mainView'>
        <Text text="Welcome" />
        <NavLink to="/add">
          <Button text="Add new"/>
        </NavLink>
        {!loading && data.map(item => (
          <PostItem {...item} key={item._id} onClick={() => history.push(`/items/${item._id}`)} />
        ))}
      </div>
    )
  }
}

Main.propTypes = {
  getPosts: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
}

export default Main
