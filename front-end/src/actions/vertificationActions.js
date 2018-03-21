import {loading, error, baseUrl} from './utils'
import axios from 'axios'

import history from '../history'

export const saveUsertoken = (token) => {
  return {
    type: 'SAVE_TOKEN',
    token
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
