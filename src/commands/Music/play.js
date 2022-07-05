const { MessageEmbed, Permissions } = require("discord.js");
const { convertTime } = require('../../utils/convert.js');

module.exports = {
  name: "play",
  category: "Music",
  aliases: ["p"],
  description: "Plays audio from YouTube or Soundcloud",
  args: true,
  usage: "<YouTube URL | Video Name | Spotify URL>",
  permission: [],
  owner: false,
  player: false,
  inVoiceChannel: true,
  sameVoiceChannel: true,
  execute: async (message, args, client, prefix) => {

    if (!message.guild.me.permissions.has([Permissions.FLAGS.CONNECT, Permissions.FLAGS.SPEAK])) return message.channel.send({ embeds: [new MessageEmbed().setColor(client.embedColor).setDescription(`I don't have enough permissions to execute this command! please give me permission \`CONNECT\` or \`SPEAK\`.`)] });

    const { channel } = message.member.voice;

    if (!message.guild.me.permissionsIn(channel).has([Permissions.FLAGS.CONNECT, Permissions.FLAGS.SPEAK])) return message.channel.send({ embeds: [new MessageEmbed().setColor(client.embedColor).setDescription(`I don't have enough permissions connect your vc please give me permission \`CONNECT\` or \`SPEAK\`.`)] });

    const emojiaddsong = message.client.emoji.addsong;
    const emojiplaylist = message.client.emoji.playlist

    const player = client.manager.create({
      guild: message.guild.id,
      voiceChannel: message.member.voice.channel.id,
      textChannel: message.channel.id,
      selfDeafen: true,
      volume: 80,
    });

    if (player.state != "CONNECTED") await player.connect();
    const search = args.join(' ');
    let res;

    try {
      res = await player.search(search, message.author);
      if (!player)
        return message.channel.send({ embeds: [new MessageEmbed().setColor(client.embedColor).setTimestamp().setDescription("Nothing is playing right now...")] });
      if (res.loadType === 'LOAD_FAILED') {
        if (!player.queue.current) player.destroy();
        throw res.exception;
      }
    } catch (err) {
      return message.reply(`There was an error while searching: ${err.message}`);
    }
    switch (res.loadType) {
      case 'NO_MATCHES':
        if (!player.queue.current) player.destroy();
        return message.channel.send({ embeds: [new MessageEmbed().setColor(client.embedColor).setTimestamp().setDescription(`No matches found for - ${search}`)]});
      case 'TRACK_LOADED':
        var track = res.tracks[0];
        player.queue.add(track);
        if (!player.playing && !player.paused && !player.queue.size) {
          return player.play();
        } else {
          const thing = new MessageEmbed()
            .setColor(client.embedColor)
            .setTimestamp()
            .setDescription(`🔹 |  Enqueued **[${res.tracks[0].title}](${res.tracks[0].uri})** \`[${convertTime(track.duration)}] || "Undetermined"} - ${member}]\``);
          return message.channel.send({ embeds: [thing] });
        }
      case 'PLAYLIST_LOADED':
        player.queue.add(res.tracks);
        if (!player.playing && !player.paused && player.queue.totalSize === res.tracks.length) player.play();
        const thing = new MessageEmbed()
          .setColor(client.embedColor)
          .setDescription(`🔹 |  **[${res.playlist.name}](${query})** [${member}]has been added to the queue.`)
          .addField("Enqueued", `\`${res.tracks.length}\` tracks`)
        return message.channel.send({ embeds: [thing] });
      case 'SEARCH_RESULT':
        var track = res.tracks[0];
        player.queue.add(track);
        if (!player.playing && !player.paused && !player.queue.size) {
          return player.play();
        } else {
          const thing = new MessageEmbed()
            .setColor(client.embedColor)
            .setTimestamp()
            .setDescription(`🔹 |  Enqueued **[${res.tracks[0].title}](${res.tracks[0].uri})** \`[${convertTime(track.duration)}] || "Undetermined"} - ${member}]\``);
          return message.channel.send({ embeds: [thing] });
        }
    }
  }
}
