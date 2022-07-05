const { MessageEmbed, CommandInteraction, Client } = require("discord.js")

module.exports = {
    name: "ping",
    description: "Return websocket ping",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: true
        });
        let circles = {
            green: "<a:Online_Ping:866085733534269440>",
            yellow: "<a:yellowloading:865563744162283541>",
            red: "<a:red:865563826123964416>"
        }
        const pingEmbed = new MessageEmbed()
        
        .setDescription(
            `${client.ws.ping <= 200 ? circles.green : client.ws.ping <= 400 ? circles.yellow : circles.red} ${client.ws.ping}ms`
        )
        interaction.followUp({ embeds: [pingEmbed] });
        // await interaction.editReply({ content: "Pining..." }).then(async () => {
        //     const ping = Date.now() - interaction.createdAt;
        //     const api_ping = client.ws.ping;
// 
        //     await interaction.editReply({
        //         content: "`🏓`",
        //         embeds: [new MessageEmbed().setAuthor({name: `Pong`, iconURL: client.user.displayAvatarURL({ dynamic: true })}).setColor(client.embedColor).setFooter({text: `Requested by ${interaction.member.user.username}`, iconURL: interaction.member.user.displayAvatarURL({ dynamic: true })}).addFields([{ name: "Bot Latency", value: `\`\`\`ini\n[ ${ping}ms ]\n\`\`\``, inline: true }, { name: "API Latency", value: `\`\`\`ini\n[ ${api_ping}ms ]\n\`\`\``, inline: true }]).setTimestamp()]
        //     });
        // })
    }
			}