const { Client, Message, MessageEmbed } = require('discord.js');
const akinator = require('../../../modules/discord.js-akinator/src');

module.exports = {
    name: "akinator",
    category: "Games",
    aliases: [ "aki" ],
    description: "Let me guess your character!",
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
        akinator(message, client);
	}
}