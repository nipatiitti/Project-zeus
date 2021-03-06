//Requirements
import Discord from "discord.js"
import config from "./config.json"

import moment from "moment"

const bot = new Discord.Client()

const startingDate = moment()

bot.login(config.token).catch(e => {
    console.error(e)
})

//Informs successful login to the console
bot.on("ready", () => {
    console.log("Connected")
    console.log("Bot has started. Logged in as " + bot.user.username + ". Connected to " + bot.guilds.size + " servers")
    bot.user.setGame(config.currentGame)
})

bot.on("message", msg => {
    if (msg.content === "Zeus ping") {
        msg.reply("Time since last crash: " + startingDate.fromNow())
    }
})

export default bot
