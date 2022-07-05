const { Message, MessageEmbed } = require("discord.js");

module.exports = {
	name: "resume",
    aliases: ["r"],
    category: "Music",
    description: "Resume currently playing music",
    args: false,
    usage: "<Number of song in queue>",
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
  
		const player = client.manager.get(message.guild.id);
        const song = player.queue.current;
        const user = message.author

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription("There is no music playing.");
            return message.reply({embeds: [thing]});
        }

        const emojiresume = client.emoji.resume;

        if (!player.paused) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription(`${emojiresume} The player is already **resumed**.`)
                .setTimestamp()
          return message.reply({embeds: [thing]});
        }

        player.pause(false);

        let thing = new MessageEmbed()
            .setDescription(`🔹 | **Resumed**\n[${song.title}](${song.url}) [${user}]`)
            .setColor(client.embedColor)
            .setTimestamp()
        return message.reply({embeds: [thing]});
	
    }
};