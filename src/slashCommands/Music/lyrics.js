const { CommandInteraction, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const config = require('../../config');
const Genius = require('genius-lyrics');
const Client = new Genius.Client(config.geniusAPI);

module.exports = {
  name: "lyrics",
  description: "Prints the lyrics of a song",
  permissions: [],
  player: false,
  dj: false,
  inVoiceChannel: true,
  sameVoiceChannel: true,
  options: [
    {
      name: "song",
      description: "The song to get lyrics for.",
      type: "STRING",
      required: false,
    },
  ],

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args 
   */

  run: async (client, interaction, args) => {
    await interaction.reply({
      embeds: [
        new MessageEmbed()
          .setColor(client.embedColor)
          .setDescription("🔎 **Searching...**"),
      ],
      ephemeral: false
    });
    
    try{
    
    const arg = interaction.options.getString('song');

    const searches = await Client.songs.search(arg);
    const firstSong = searches[0];
    const lyrics = await firstSong.lyrics();

    // let player;
    // if (client.manager) {
    //   player = client.manager.players.get(interaction.guild.id);
    // } else {
    //   return interaction.reply({
    //     embeds: [
    //       new MessageEmbed()
    //         .setColor("RED")
    //         .setDescription("Lavalink node is not connected"),
    //     ],
    //   });
    // }
// 
    // const args = interaction.options.getString("song");
    // if (!args && !player) {
    //   return interaction.editReply({
    //     embeds: [
    //       new MessageEmbed()
    //         .setColor("RED")
    //         .setDescription("There's nothing playing"),
    //     ],
    //   });
    // }
// 
    // let search = args ? args : player.queue.current.title;
    // // Lavalink api for lyrics
    // let url = `https://api.darrennathanael.com/lyrics?song=${search}`;
// 
    // let lyrics = await fetch(url)
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .catch((err) => {
    //     return err.name;
    //   });
    // if (!lyrics || lyrics.response !== 200 || lyrics === "FetchError") {
    //   return interaction.editReply({
    //     embeds: [
    //       new MessageEmbed()
    //         .setColor("RED")
    //         .setDescription(
    //           `❌ | No lyrics found for ${search}!\nMake sure you typed in your search correctly.`
    //         ),
    //     ],
    //   });
    // }
// 
    // let text = lyrics.lyrics;
    // let lyricsEmbed = new MessageEmbed()
    //   .setColor(client.embedColor)
    //   .setTitle(`${lyrics.full_title}`)
    //   .setURL(lyrics.url)
    //   .setThumbnail(lyrics.thumbnail)
    //   .setDescription(text);
    let text = lyrics;
      let lyricsEmbed = new MessageEmbed()
        .setColor(client.embedColor)
        .setTitle(`${firstSong.fullTitle}`)
        .setURL(firstSong.url)
        .setThumbnail(firstSong.thumbnail)
        .setDescription(text);

    if (text.length > 4096) {
      text = text.substring(0, 4090) + "[...]";
      lyricsEmbed
        .setDescription(text)
        .setFooter({ text: "Truncated, the lyrics were too long." });
    }

    return interaction.editReply({ embeds: [lyricsEmbed] });
   } catch(e) {
     return interaction.channel.send({
       embeds: [
         new MessageEmbed()
         .setColor('RED')
         .setDescription(`${e}`)
       ],
     })
 }
}
};
