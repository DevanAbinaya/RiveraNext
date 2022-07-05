const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    category: "Information",
    aliases: [ "addme" ],
    description: "invite Rivera",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
         
    const inviteEmbed = new MessageEmbed()
      .setColor('ORANGE')
      .setAuthor({name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true })})
      .setThumbnail('https://cdn.discordapp.com/attachments/938406741526323210/992382386476163102/anime-girl-laying-with-cat-4k-wallpaper-uhdpaper.com-2880g.jpg')
      .setTitle("Invite & Support Link!")
      .addField("**Invite Link**", `[Click here to invite me](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)`)
      .addField("**Support Server**", `[Click to join support Server](https://discord.gg/UFjyySQSgc)`)
      .setFooter({text: `Requested by ${message.author.tag}`, iconURL: client.user.displayAvatarURL()})
      .setTimestamp()
      
      message.reply({ embeds: [inviteEmbed] })
    }
}
