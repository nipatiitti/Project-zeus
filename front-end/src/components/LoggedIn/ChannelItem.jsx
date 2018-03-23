import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from 'material-ui/Checkbox';

import Button from '../Button'
import Text from '../Text'

const ChannelItem = ({ id, acces, name, onChange }) => (
  <div className="channelItem">
    <Checkbox
      checked={acces}
      onChange={onChange(id)}
      value={name}
    />
    <Text text={name} />
  </div>
)

ChannelItem.propTypes = {
  id: PropTypes.string.isRequired,
  acces: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}

export default ChannelItem
