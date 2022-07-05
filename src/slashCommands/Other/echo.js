const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'say',
    description: 'Let the bot say what you type',
    options: [
      {
        name: "text",
        description: "Text you want me to say",
        type: "STRING",
        required: true,
      }
  ],
    /** 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[]} args 
     */
    run: async(client, interaction, args) => {
        
        await interaction.reply({ content: "Message Has been Sent!",
        ephemeral: true });
        interaction.channel.send(interaction.options.data[0].value);
    }
 } 