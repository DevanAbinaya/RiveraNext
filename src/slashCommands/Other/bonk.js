const { Client, CommandInteraction, MessageEmbed } = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: 'bonk',
    description: 'bonks horni people',
    options: [
      {
        name: "user",
        description: "User that you want to bonk",
        type: "USER",
        required: true,
      }
  ],
  
    /** 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[]} args 
     */
    run: async(client, interaction, args) => {
        await interaction.deferReply();
        const member = interaction.guild.members.cache.get(args[0]) 
        if (member.id == interaction.member.id) return interaction.followUp('You cannot bonk yourself')
          const { body } = await superagent
            .get("https://api.waifu.pics/sfw/bonk");
                const embed = new MessageEmbed()
            .setColor('BLUE')
            .setDescription(`${member} Get bonked by ${interaction.user.tag}`)
            .setImage(body.url)
            .setTimestamp()
        if (
        member.id === client.user.id
      ) {
        return interaction.followUp(
          `${interaction.member}, Why me I'm not Horni!`
        );
      }
        interaction.followUp( {embeds: [embed]}); 

    }
 } 