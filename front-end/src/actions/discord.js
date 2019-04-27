import { TOKEN, USER, CHANNELS } from './types'

import INFO from 'constants'

export const getToken = () => (dispatch, getState) => {
    const { code } = getState().main

    return dispatch({
        type: TOKEN,
        payload: {
            request: {
                method: 'POST',
                url: '/oauth2/token',
                data: `client_id=${INFO.id}&client_secret=${
                    INFO.secret
                }&grant_type=authorization_code&code=${code}&redirect_uri=${encodeURI(
                    INFO.url
                )}`
            }
        }
    })
}

export const getUser = () => (dispatch, getState) => {
    const { token } = getState().main

    return dispatch({
        type: USER,
        payload: {
            request: {
                method: 'GET',
                url: '/users/@me',
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }
        }
    })
}

export const getChannels = () => ({
    type: CHANNELS,
    payload: {
        request: {
            method: 'GET',
            url: `/guilds/${INFO.guildID}/channels`,
            headers: {
                Authorization: `Bot ${INFO.botToken}`
            }
        }
    }
})
