import axios from 'axios'

export const changeAccess = (channelId, bool) => (dispatch, getState) => {
    const { user } = getState().main
    return axios.post(`/api`, {
        channelId,
        bool,
        userId: user.id
    })
}
