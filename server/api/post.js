import bot from '../discord'
import config from '../discord/config.json'

async function handleReq(req, res) {
  try {
    const { channelId, userId, bool } = req.body

    const guild = bot.guilds.get(config.guildID)

    const channel = guild.channels.get(channelId)

    channel.overwritePermissions(userId, {
      READ_MESSAGES: bool
    })
    .then(() => res.send({succes: true}))

  } catch(msg) {
    console.log(msg)
    res.status(500).send(msg)
  }
}

export default handleReq
