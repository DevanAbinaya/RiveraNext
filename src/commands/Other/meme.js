const { Message, Client, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
var ee = require('../../utils/embed.json');

module.exports = {
    name: "meme",
    category: "Other",
    aliases: [ "mem", "m" ],
    description: "See Meme",
    args: false,
    usage: "",
    permission: ['SEND_MESSAGES'],
    owner: false,
    /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   execute: async (message, args, client, prefix) => {
    const res = await fetch(`https://meme-api.herokuapp.com/gimme`);

    const json = await res.json();

    const Embed = new MessageEmbed()
      .setColor(ee.embed_color)
      .setURL(json.postLink)
      .setTitle(json.title)
      .setImage(json.url)
      .setFooter({text: `👍 ${json.ups || 0} | Author ${json.author || " "}`})
      .setTimestamp();

    return message.channel.send({ embeds: [Embed] });
    }
}
