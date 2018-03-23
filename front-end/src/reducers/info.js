import {id, secret, url, guildID, botToken, removeRole} from '../info.json'

const initialState = {
  id,
  secret,
  url,
  token: '',
  guildID,
  botToken,
  removeRole
}

const info = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_TOKEN':
      return Object.assign({}, state, {
        token: action.token
      })
    default:
      return state
  }
}

export default info
