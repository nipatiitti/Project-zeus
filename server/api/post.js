import bot from '../discord'
import config from '../discord/config.json'

async function handleReq(req, res) {
  try {
    const { channel, userId, bool } = req.body

    const guild = bot.guilds.get(config.guildID)

    const channel = guild.channels.get(channel)

    channel.overwritePermissions(userId, {
      READ_MESSAGES: bool
    })
    .then(updated => res.send(updated.permissionOverwrites.get(userId)))

  } catch(msg) {
    console.log(msg)
    res.status(500).send(msg)
  }
}

export default handleDelete
