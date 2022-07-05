const { Client, Message, MessageEmbed } = require('discord.js');
const canvacord = require("canvacord");

module.exports = {
    name: "comment",
    category: "Other",
    aliases: [ "ytc" ],
    description: "For youtube comment.",
    args: false,
    usage: "<text>",
    permission: ["ATTATCH_FILES"],
    owner: false,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
   execute: async (message, args, client, prefix) => {
    const comment = args.join("");
    if (!comment)
      return client.send(
        `${await client.emoji("DGH_error")} Provide something to Comment!`,
        {message}
      );
    let yt = await canvacord.Canvas.youtube({
      avatar: message.author.displayAvatarURL({ format: "png" }),
      username: message.author.username,
      content: args.join(" ")
    });
    message.channel.send({ files: [{ attachment: yt, name: "comment.png" }] });
 
    }
}
