const { Util, MessageEmbed, Message, Permissions } = require("discord.js");
const { parse } = require("twemoji-parser");
const Color = "RANDOM";

module.exports = {
    name: "addemoji",
    category: "Mod",
    aliases: [ "ae" ],
    description: "Steal emoji from other server.",
    args: false,
    usage: "<emojiname> or <link>",
    permission: ['MANAGE_EMOJIS_AND_STICKERS'],
    owner: false,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
   execute: async (message, args, client, prefix) => {
        const emoji = args[0];
        if(!emoji) return message.channel.send(`**Please give me a emoji to add**`);
        
        let customemoji = Util.parseEmoji(emoji);
        
        if(customemoji.id) {
          const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${customemoji.animated ? "gif" : "png"}`;
          const name = args.slice(1).join(" ");
          message.guild.emojis.create(
            `${Link}`,
            `${name || `${customemoji.name}`}`
            );
            
            const Added = new MessageEmbed()
            .setColor(Color)
            .setDescription(`Emoji Has Been Added!\nName: ${name || `${customemoji.name}`}\nPreview: [Click Me](${Link})`);
            return message.channel.send({ embeds: [Added] });
        } else {
          let CheckEmoji = parse(emoji, { assetType: "png" });
          if (!CheckEmoji[0])
          return message.channel.send(`Please Give Me a Valid Emoji`);
          
          message.channel.send(`You can use normal emoji without adding in server`);
        }
         
    }
}
