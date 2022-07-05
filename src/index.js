const { MessageEmbed } = require('discord.js');
const MusicBot = require("./structures/Client");
const client = new MusicBot();
const ms = require('ms');

client.connect()

process.on('unhandledRejection', (reason, p) => {
    console.log(reason, p);
});

process.on('uncaughtException', (err, origin) => {
    console.log(err, origin);
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log(err, origin);
});

process.on("multipleResolves", (type, promise, reason) => {
    if (reason.toLocaleString() === "Error: Cannot perform IP discovery - socket closed") return;
});

client.on("messageCreate", async (message) => {
    if(message.content.toLowerCase() == "speed") {
        message.channel.send('https://imgur.com/2DbH3W6').then((msg) => {
          setTimeout(() => msg.delete(), ms('10 seconds'))
      });

    } else if(message.content.toLowerCase() == "troleo divino") {
        message.channel.send('https://i.pinimg.com/736x/c5/3d/47/c53d47cec202c0750d19f80ad671ea7e.jpg');

    } else if(message.content.toLowerCase().includes("amogus")) {
        message.channel.send('https://imgur.com/rkzfboM').then((msg) => {
          setTimeout(() => msg.delete(), ms('10 seconds'))
      });

    } else if(message.content.toLowerCase() == "troleo") {
      message.channel.send('https://cdn.discordapp.com/attachments/697798117772492861/929381393786626058/troleo.jpg');

    } else if(message.content.toLowerCase() == "divino") {
      message.channel.send('https://cdn.discordapp.com/attachments/697798117772492861/929381354318233620/divino.jpg');

    } else if(message.content.toLowerCase() == "dog") {
      message.channel.send('https://imgur.com/tesrTEk').then((msg) => {
        setTimeout(() => msg.delete(), ms('10 seconds'))
    });

    } else if(message.content.toLowerCase() == "cat") {
      message.channel.send('https://imgur.com/IYL2rY7').then((msg) => {
        setTimeout(() => msg.delete(), ms('10 seconds'))
    });

    } else if(message.content.toLowerCase() == "bruh") {
      message.channel.send('https://imgur.com/N5otWu6').then((msg) => {
        setTimeout(() => msg.delete(), ms('10 seconds'))
    });

    }
})

client.manager
  .on("queueEnd", async (player, track) => {

        const playerChannel = client.channels.cache.get(player.textChannel)
        if (!playerChannel.permissionsFor(playerChannel.guild.me).has(["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES",])) return;

        const leaveEmbed = new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription(`🔹 |  Queue Ended - [Thanks for using Rivera Music!]`)
        .setTimestamp()

        await playerChannel.send({ embeds: [leaveEmbed] }).then(msg => { setTimeout(() => { msg.delete() }, 5000) });
  })

module.exports = client; 
