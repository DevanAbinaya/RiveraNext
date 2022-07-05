const { Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: "pause",
    category: "Music",
    description: "Pause the currently playing music",
    args: false,
    usage: "",
    permission: [],
    dj: true,
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
    /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
    execute: async (message, args, client, prefix) => {
    
		const player = message.client.manager.get(message.guild.id);

        let user = message.author

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription("🔸 |  There is nothing in the queue.");
            return message.reply({embeds: [thing]});
        }

        const emojipause = client.emoji.pause;

        if (player.paused) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription(`🔸 |  The player is already paused.`)
                .setTimestamp()
                return message.reply({embeds: [thing]});
        }

        player.pause(true);

        const song = player.queue.current;

        let thing = new MessageEmbed()
            .setColor(client.embedColor)
            .setTimestamp()
            .setDescription(`🔹 | **Paused**\n[${song.title}](${song.url}) [${user}]`)
          return message.reply({embeds: [thing]});
	
    }
};
