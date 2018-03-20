import React from 'react'
import PropTypes from 'prop-types'

const MultilineInput = ({ value, onChange, placeholder, ...other}) => (
  <textarea
    className='input'
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    {...other}
  >
  </textarea>
)

MultilineInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

export default MultilineInput
