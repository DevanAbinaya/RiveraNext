const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const config = require('../../config');
const Genius = require('genius-lyrics');
const Client = new Genius.Client(config.geniusAPI);

module.exports = {
  name: "lyrics",
  category: "Music",
  description: "Prints the lyrics of a song",
  permissions: [],
  usage: "lyrics <song name>",
  player: false,
  args: true,
  dj: false,
  inVoiceChannel: true,
  sameVoiceChannel: true,

  execute: async (message, args, client, prefix) => {

    // let player;
    // if (client.manager) {
    //   player = client.manager.players.get(message.guild.id);
    // } else {
    //   return message.channel.send({
    //     embeds: [
    //       new MessageEmbed()
    //         .setColor("RED")
    //         .setDescription("Lavalink node is not connected"),
    //     ],
    //   });
    // }
// 
    // if (!args && !player) {
    //   return message.channel.send({
    //     embeds: [
    //       new MessageEmbed()
    //         .setColor("RED")
    //         .setDescription("There's nothing playing"),
    //     ],
    //   });
    // }
// 
    // let search = args ? args : player.queue.current.title;
// 
    // const searches = await Client.songs.search(search);
    // const firstSong = searches[0];
    // let lyrics = await firstSong.lyrics();
// 
    // // // Lavalink api for lyrics
    // // let url = `https://api.darrennathanael.com/lyrics?song=${search}`;
// // 
    // // let lyrics = await fetch(url)
    // //   .then((res) => {
    // //     return res.json();
    // //   })
    // //   .catch((err) => {
    // //     return err.name;
    // //   });
    // 
// 
    // let text = lyrics.lyrics;
    // let lyricsEmbed = new MessageEmbed()
    //   .setColor(client.embedColor)
    //   .setTitle(`${lyrics.full_title}`)
    //   .setURL(lyrics.url)
    //   .setThumbnail(lyrics.thumbnail)
    //   .setDescription(text);

    try{
      const song = args.join(' ')
      if (!song) return message.channel.send("Please provide a title of the song.")
      const searches = await Client.songs.search(song);
      const firstSong = searches[0];
      let lyrics = await firstSong.lyrics();

      if (!firstSong) {
           return message.channel.send({
             embeds: [
               new MessageEmbed()
                 .setColor("RED")
                 .setDescription(
                   `❌ | No lyrics found for ${song}!\nMake sure you typed in your search correctly.`
                 ),
             ],
           });
         }


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
  
      return message.channel.send({ embeds: [lyricsEmbed] });


    } catch(e) {
      return message.channel.send({
        embeds: [
          new MessageEmbed()
          .setColor('RED')
          .setDescription(`${e}`)
        ]
      })
  }

    
  }
};
