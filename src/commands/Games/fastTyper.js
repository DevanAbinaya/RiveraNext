const { Client, Message, MessageEmbed } = require('discord.js');
const { FastTyper } = require('../../../modules/djs-games');

module.exports = {
    name: "fasttyper",
    category: "Games",
    aliases: [ "ft", "fasttype" ],
    description: "Let see how fast are you!",
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
    const game = new FastTyper({
            message: message,
          })
          game.start()
	}
}