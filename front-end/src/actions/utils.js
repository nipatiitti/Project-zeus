export const loading = (bool) => {
  return {
    type: 'LOADING_ACTION',
    bool
  }
}

export const error = (text) => {
  return {
    type: 'ERROR_MESSAGE',
    msg: text.msg
  }
}

export const baseUrl = ""
