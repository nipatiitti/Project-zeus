import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'
import Text from '../Text'

import ChannelItem from './ChannelItem'

class LoggedIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: '',
      tokenSaved: false,
      userSaved: false,
      channelsSaved: false,
      checkChannels: false,
      mask: 1 << 10,
      channels: [],
      loading: props.loading
    }
  }

  componentDidMount() {
    const parsed = this.props.location.search.split('=')[1]
    
    if(!this.state.tokenSaved) {
        this.props.getToken(parsed)
        this.setState({
          tokenSaved: true
        })
    }
  }

  onChange = id => event => {
    this.props.changeChannelAcces(id, event.target.checked)
    let newChannels = this.state.channels.map(channel => {
      if (channel.id == id)
        return Object.assign({}, channel, {
          acces: event.target.checked
        })
      else
        return channel
    })

    this.setState({
      channels: newChannels
    })
  }

  checkChannels(channels) {
    this.setState({
      loading: true
    })

    let newChannels = []
    console.log(channels)
    channels.forEach(channel => {
      const { permission_overwrites } = channel

      if(channel.type !== 0) {
        return
      }

      let newChannel = {
        id: channel.id,
        name: channel.name,
        acces: true
      }

      let addToList = true

      permission_overwrites.forEach(overwrite => {
        if (overwrite.type === "role" && overwrite.id === this.props.removeRole) {
          addToList = false
        } else if (overwrite.type === "member" && overwrite.id === this.props.user.id) {
          if ((overwrite.deny & this.state.mask) != 0) {
            newChannel.acces = false
          }
        }
      })

      if(addToList)
        newChannels.push(newChannel)
    })

    this.setState({
      channels: newChannels,
      loading: false
    })

  }

  componentDidUpdate() {
    if(!this.state.userSaved && this.props.token !== '') {
        this.props.getUser()
        this.setState({
          userSaved: true
        })
    } else if (this.props.user.id !== '' && !this.state.channelsSaved &&  this.props.channels.length < 1) {
      this.props.getChannels()
      this.setState({
        channelsSaved: true
      })
    } else if (this.state.channelsSaved && !this.state.checkChannels && this.props.channels.length > 0) {
      this.checkChannels(this.props.channels)
      this.setState({
        checkChannels: true
      })
    }

  }

  render() {
    return (
      <div>
        <p>{this.props.user.username !== '' ? this.props.user.username + ' Welcome to project zeus' : 'loading'}</p>

        {this.state.channels.length > 0 && this.state.channels.map(channel => (
          <ChannelItem {...channel} key={channel.id} onChange={this.onChange} />
        ))}
      </div>
    )
  }
}

LoggedIn.propTypes = {
  getToken: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  getChannels: PropTypes.func.isRequired,
  changeChannelAcces: PropTypes.func.isRequired
}

export default LoggedIn
