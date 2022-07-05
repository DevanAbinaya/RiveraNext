const { Client, Message, MessageEmbed } = require('discord.js');
const { Pokemon } = require('../../../modules/djs-games');

module.exports = {
    name: "pokewho",
    category: "Games",
    aliases: [ "poke" ],
    description: "Who's that Pokemon?!",
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
    const game = new Pokemon({
            message: message,
            token: 'MTY0NDY1MjYwNw.dUzqnFnMP3FTkBkmWOTZXdlMiwmQO57V.08298f69fcd5fbad', // Get Your Api Token at https://dagpi.xyz/dashboard
            maxAttempts: 10,
          })
          game.start()
	}
}