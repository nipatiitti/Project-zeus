import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ value, onChange, placeholder, ...other}) => (
  <input
    className='input'
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    {...other}
  />
)

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

export default Input
