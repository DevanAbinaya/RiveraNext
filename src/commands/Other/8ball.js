const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "8ball",
    category: "Other",
    aliases: [ "" ],
    description: "Ask the 8ball a question.",
    args: false,
    usage: "<question>",
    permission: [],
    owner: false,
    /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
   execute: async (message, args, client, prefix) => {
    let replies = [
        "I think so",
        "Yes",
        "I guess",
        "Yeah absolutely",
        "Maybe",
        "Possibly",
        "No",
        "Most likely",
        "I Didnt Ask",
        "I dont know",
        "Without a doubt",
        "Indeed",
        "For sure",
        "I dont care"
      ];
  
      let result = Math.floor(Math.random() * replies.length);
      let question = args.join(" ");
  
      let embed = new MessageEmbed()
  
        .setColor("#000488")
        .addField(`**${message.author.username}'s question**`, question)
        .addField("**the 8ball says**", replies[result])
        .setThumbnail(message.author.displayAvatarURL());
  
      message.reply({ embeds: [embed] });
 
    }
}
