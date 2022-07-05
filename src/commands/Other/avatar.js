const { Client, Message, MessageEmbed } = require("discord.js");
var ee = require('../../utils/embed.json');

module.exports = {
    name: "avatar",
    category: "Other",
    aliases: [ "av" ],
    description: "Show yout Avatar.",
    args: false,
    usage: "[mention author || message author]",
    permission: [],
    owner: false,
    /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   execute: async (message, args, client, prefix) => {

    let user = message.author || message.mentions.users.first();
    let avs = new MessageEmbed()
      .setAuthor(
        `${user.username}`,
        user.displayAvatarURL({ dynamic: true })
      )
      .setColor(ee.color)
      .addField(
        "📸 PNG",
        `[\`LINK\`](${user.displayAvatarURL({ format: "png" })})`,
        true
      )
      .addField(
        "📸 JPEG",
        `[\`LINK\`](${user.displayAvatarURL({ format: "jpg" })})`,
        true
      )
      .addField(
        "📸 WEBP",
        `[\`LINK\`](${user.displayAvatarURL({ format: "webp" })})`,
        true
      )
      .setURL(
        user.displayAvatarURL({
          dynamic: true,
        })
      )
      .setFooter(ee.footertext, ee.footericon)
      .setImage(
        user.displayAvatarURL({
          dynamic: true,
          size: 512,
        })
      );

      message.reply({embeds : [avs],
        allowedMentions: {
          repliedUser: false
      } })
 
    }
}
