const initialState = {
  msg: ''
}

const error = (state = initialState, action) => {
  switch (action.type) {
    case 'ERROR_MESSAGE':
      return {
        msg: action.msg
      }
    default:
      return state
  }
}

export default error
