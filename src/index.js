const { MessageEmbed } = require('discord.js');
const MusicBot = require("./structures/Client.js");
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

// Secret-ch Event

client.on("messageCreate", async(message) => {
  if(message.content.toLowerCase() == "-hen") {
    message.delete(1000);
      message.member.roles.add('900662797698990080');
        
        const henEmbed = new MessageEmbed()
          .setAuthor({name: 'AftervareBOT'})
          .setDescription(`Good job you unlocked the <#934847781724635196> ( ͡° ͜ʖ ͡°)`)
          .setColor('NOT_QUITE_BLACK')
          .setFooter({text: "*This message will disappeared after 50 seconds"})

        message.channel.send({ embeds: [henEmbed] }).then((msg) => {
          setTimeout(() => msg.delete(), ms('50 seconds'))
      })
        sleep(3600000).then(() => { message.member.roles.remove('900662797698990080');
        message.author.send(`<@${message.author.id}> Udah sejam nih, segitu dulu aja ya scientific researchnya :v`).then((msg) => {
          setTimeout(() => msg.delete(), ms('50 seconds'))
      });
     });
  }
});

// Chat Event...

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

        const exclude = client.channels.cache.get("")
        const playerChannel = client.channels.cache.get(player.textChannel)
        if (!playerChannel.permissionsFor(playerChannel.guild.me).has(["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES",])) return;

        const leaveEmbed = new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription(`🔹 |  Queue Ended - [Thanks for using Rivera Music!]`)
        .setTimestamp()

        if (exclude) {
          return
        } else {
          await playerChannel.send({ embeds: [leaveEmbed] }) //.then(msg => { setTimeout(() => { msg.delete() }, 5000) });
        }
        
  })

module.exports = client; 
