const initialState = {
  loading: false
}

const loading = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_ACTION':
      return Object.assign({}, state, {
        loading: action.bool
      })

    default:
      return state
  }
}

export default loading
