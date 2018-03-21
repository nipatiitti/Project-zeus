import {baseUrl} from './utils'

export const login = () => {
  return (dispatch, getState) => {
    const { info } = getState()


    window.location = `${baseUrl}/oauth2/authorize?response_type=code&client_id=${info.id}&scope=identify&redirect_uri=${encodeURI(info.url)}`
  }
}
