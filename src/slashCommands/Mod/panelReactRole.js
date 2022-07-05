const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js')
const rrModel = require('../../schema/reactionRole');

module.exports = {
    name: 'roles-panel',
    description: 'reaction role panel',
    permissions: ['ADMINISTRATOR'],
  
    /** 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[]} args 
     */
    run: async(client, interaction, args) => {
        await interaction.deferReply();
        const guildData = await rrModel.findOne({ guildId: interaction.guildId });
        if(!guildData?.roles) return interaction.followUp("There is no roles in this server!");

        const options = guildData.roles.map((x) => {
            const role = interaction.guild.roles.cache.get(x.roleId);

            return {
                label: role.name,
                value: role.id,
                description: x.roleDescription || "No description",
                emoji: x.roleEmoji
            };
        });

        const panelEmbed = new MessageEmbed()
            .setTitle('Select Your Roles!')
            .setDescription(`Choose an option from the menu below!`)
            .setImage('https://cdn.discordapp.com/attachments/903994184225144853/941262725898698792/PICK_ROLES_1.gif')
            .setColor('BLUE')

        const components = [
            new MessageActionRow().addComponents(
                new MessageSelectMenu()
                    .setCustomId('reaction-roles')
                    .setMaxValues(1)
                    .addOptions(options)
            )
        ];

        interaction.channel.send({ embeds: [panelEmbed], components });

    }
 }  
