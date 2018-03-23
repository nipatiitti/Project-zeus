import {loading, error, baseUrl} from './utils'
import axios from 'axios'

import history from '../history'

export const saveUsertoken = (token) => {
  return {
    type: 'SAVE_TOKEN',
    token
  }
}

export const saveUserObject = ( userObject ) => {
  return {
    type: 'SAVE_USER',
    userObject
  }
}

export const saveChannels = ( channels ) => {
  return {
    type: 'SAVE_CHANNELS',
    channels
  }
}

export const getToken = ( code ) => {
  return (dispatch, getState) => {
    const { info } = getState()
    dispatch(loading(true))
    axios.post(`${baseUrl}/oauth2/token?client_id=${info.id}&client_secret=${info.secret}&grant_type=authorization_code&code=${code}&redirect_uri=${encodeURI(info.url)}`)
    .then(({data}) => {
      dispatch(saveUsertoken(data.access_token))
      dispatch(loading(false))
    })
    .catch(e => {
      console.log(e)
      dispatch(loading(false))
      dispatch(error(e.response))
    })
  }
}

export const getUser = () => {
  return (dispatch, getState) => {
    const { info } = getState()
    dispatch(loading(true))
    axios.get(`${baseUrl}/users/@me`, {
      headers: {
        'Authorization': 'Bearer ' + info.token
      }
    })
    .then(({data}) => {
      dispatch(saveUserObject(data))
      dispatch(loading(false))
    })
    .catch(e => {
      console.log(e)
      dispatch(loading(false))
      dispatch(error(e.response))
    })
  }
}

export const getChannels = () => {
  return (dispatch, getState) => {
    const { info } = getState()
    dispatch(loading(true))
    axios.get(`${baseUrl}/guilds/${info.guildID}/channels`, {
      headers: {
        'Authorization': 'Bot ' + info.botToken
      }
    })
    .then(({data}) => {
      dispatch(saveChannels(data))
      dispatch(loading(false))
    })
    .catch(e => {
      console.log(e)
      dispatch(loading(false))
      dispatch(error(e.response))
    })
  }
}
