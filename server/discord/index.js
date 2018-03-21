//Requirements
import Discord from 'discord.js';
import config from './config.json';

const bot = new Discord.Client();

bot.login(config.token)
	.catch((e) => {
		console.log(e)
	})

//Informs successful login to the console
bot.on('ready', () => {
	console.log('Connected')
	console.log("Bot has started. Logged in as " + bot.user.username + ". Connected to " + bot.guilds.size + " servers")
	bot.user.setGame(config.currentGame)
});

export default bot
