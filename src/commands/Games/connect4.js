const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: "connect",
    category: "Games",
    aliases: [ "conect4", "connectdots" ],
    description: "Connect 4 dots",
    args: false,
    usage: "<mention opponent",
    permission: [],
    owner: false,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
 execute: async (message, args, client, prefix) => {
        const { ConnectFour } = require('../../../modules/djs-games')
        const game = new ConnectFour({
          message: message,
          player1: '🔴',
          player2: ':blue_circle:',
        })
        game.start()
	}
}