const { MessageEmbed, CommandInteraction, Client } = require("discord.js")

module.exports = {
  name: "pause",
  description: "Pause the currently playing music",
  permissions: [],
  dj: true,
  player: true,
  inVoiceChannel: true,
  sameVoiceChannel: true,


  /**
   * 
   * @param {Client} client 
   * @param {CommandInteraction} interaction 
   */

  run: async (client, interaction) => {
    await interaction.deferReply({
      ephemeral: false
    });

    const {
      options,
      member,
      guild
  } = interaction;

    const player = interaction.client.manager.get(interaction.guildId);

    if (!player.queue.current) {
      let thing = new MessageEmbed()
        .setColor("RED")
        .setDescription("🔸 |  There is nothing in the queue.");
      return interaction.editReply({ embeds: [thing] });
    }

    const emojipause = client.emoji.pause;

    if (player.paused) {
      let thing = new MessageEmbed()
        .setColor("RED")
        .setDescription(`🔸 |  The player is already paused.`)
        .setTimestamp()
      return interaction.editReply({ embeds: [thing] });
    }

    player.pause(true);

    const song = player.queue.current;

    let thing = new MessageEmbed()
      .setColor(client.embedColor)
      .setTimestamp()
      .setDescription(`🔹 | **Paused**\n[${song.title}](${song.url}) [${member}]`)
      return interaction.editReply({ embeds: [thing] });

  }
};
