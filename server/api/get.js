import CONFIG from "../discord/config.json"

import axios from "axios"

const handleReq = async (req, res) => {
    try {
        const response = await axios.get(`${CONFIG.baseUrl}/guilds/${CONFIG.guildID}/channels`, {
            headers: {
                Authorization: "Bot " + CONFIG.token
            }
        })

        const channels = response.data
        const safeChannels = []

        for (let i = 0; i < channels.length; i++) {
            const channel = channels[i]
            const permission_overwrites = channels[i].permission_overwrites
            let blockedChannel = false

            for (let j = 0; j < permission_overwrites.length; j++) {
                const overwrite = permission_overwrites[j]
                if (overwrite.type === "role" && overwrite.id === CONFIG.removeRole) {
                    blockedChannel = true
                    break
                }
            }

            if (!blockedChannel) {
                safeChannels.push(channel)
            }
        }

        res.json(safeChannels)
    } catch (e) {
        console.error(e)
        res.status(500).json({ message: "Can't get channels" })
    }
}

export default handleReq
