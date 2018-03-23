const initialState = {
  id: '',
  username: ''
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER':
      const { id, username } = action.userObject
      return {
        id,
        username
      }
    default:
      return state
  }
}

export default user
