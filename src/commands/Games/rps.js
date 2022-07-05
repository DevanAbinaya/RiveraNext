const { Client, Message, MessageEmbed } = require('discord.js');
const { RockPaperScissors } = require('../../../modules/djs-games');

module.exports = {
    name: "rps",
    category: "Games",
    aliases: [ "rockpaperscissors" ],
    description: "Play Rock Paper Scissors with your firends!",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
 execute: async (message, args, client, prefix) => {
    const game = new RockPaperScissors({
            message: message,
          })
          game.start()
	}
}
