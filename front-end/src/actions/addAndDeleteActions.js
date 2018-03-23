import {loading, error, baseUrl} from './utils'
import axios from 'axios'

export const changeChannelAcces = ( channelId, bool ) => {
  return (dispatch, getState) => {
    const { user } = getState()

    dispatch(loading(true))
    axios.post(`/api`, {
      channelId,
      bool,
      userId: user.id
    })
    .then( () => {
      dispatch(loading(false))
    })
    .catch(e => {
      console.log(e)
      dispatch(loading(false))
      dispatch(error(e.response))
    })
  }
}
