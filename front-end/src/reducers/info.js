import {id, secret, url} from '../info.json'

const initialState = {
  id,
  secret,
  url,
  token: ''
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
