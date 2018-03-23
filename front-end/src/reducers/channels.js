const initialState = {
  channels: []
}

const channels = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_CHANNELS':
      return {
        channels: action.channels
      }
    default:
      return state
  }
}

export default channels
