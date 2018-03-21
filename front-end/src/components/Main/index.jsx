import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'
import Text from '../Text'

const Main = ({ login }) => (
  <div className='mainView'>
    <Text text="Welcome" />
    <Button text="Log in" onClick={login} />
  </div>
)

Main.propTypes = {
  login: PropTypes.func.isRequired
}

export default Main
