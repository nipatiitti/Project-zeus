import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'

const Button = ({ text, onClick }) => (
  <button className="basicButton" onClick={() => {onClick && onClick()}}>
    <Text text={text} />
  </button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Button
