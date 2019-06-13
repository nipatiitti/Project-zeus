import bot from "../discord"
import config from "../discord/config.json"

import { getId } from "../codes"

async function handleReq(req, res) {
    try {
        const { channelId, token, bool } = req.body
        const userId = getId(token)
        if (userId) {
            const guild = bot.guilds.get(config.guildID)

            const channel = guild.channels.get(channelId)

            channel
                .overwritePermissions(userId, {
                    READ_MESSAGES: bool
                })
                .then(() => res.send({ success: true }))
                .catch(e => {
                    console.error(e)
                    res.status(500).send(e)
                })
        } else {
            res.status(500).json({ message: "Invalid access token" })
        }
    } catch (msg) {
        console.error(msg)
        res.status(500).send(msg)
    }
}

export default handleReq
