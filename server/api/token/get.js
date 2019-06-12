import { addCode, removeCode } from "../../codes"
import axios from "axios"

import CONFIG from "../../discord/config.json"

const handleReq = async (req, res) => {
    const { code } = req.query

    if (!code) {
        res.status(500).send("Unvalid code returned from discord api")
    }

    try {
        const response = await axios.post(
            `${CONFIG.baseUrl}/oauth2/token`,
            `client_id=${CONFIG.id}&client_secret=${
                CONFIG.secret
            }&grant_type=authorization_code&code=${code}&redirect_uri=${encodeURI(CONFIG.redirect_url)}`
        )
        const { access_token, expires_in } = response.data

        const userResponse = await axios.get(`${CONFIG.baseUrl}/users/@me`, {
            headers: {
                Authorization: "Bearer " + access_token
            }
        })

        addCode(access_token, userResponse.data)
        setTimeout(() => removeCode(access_token), expires_in * 100)

        res.redirect(`${CONFIG.frontend_url}/token?${access_token}`)
    } catch (e) {
        console.error(e.response ? e.response : e)
        res.status(500).send("Unvalid shit in the discord request check CONFIG.json and all the params")
    }
}

export default handleReq
