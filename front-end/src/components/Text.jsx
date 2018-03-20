import React from 'react'
import PropTypes from 'prop-types'

const Text = ({ text }) => (
  <p className='baseText'>{text}</p>
)

Text.propTypes = {
  text: PropTypes.string
}

export default Text
