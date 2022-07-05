const { Client, Message, MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = {
    name: "clear",
    category: "Mod",
    aliases: [ "purge" ],
    description: "Delete messages from the channel.",
    args: false,
    usage: "<amount of messages>",
    permission: ['MANAGE_MESSAGES'],
    owner: false,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
   execute: async (message, args, client, prefix) => {
    await message.delete();
    let amount = Number(args[0], 10) || parseInt(args[0]);
    if (isNaN(amount) || !Number.isInteger(amount)) {
      return message.channel.send("Please enter a number of messages to purge.", {
        message
      });
    } else if (!amount || amount < 2) {
      return message.channel.send("Please enter a number of message between 2", {
        message
      });
    }
    if (amount <= amount + 200) {
      if (Math.floor(amount / 100) % 100 === 0) {
        message.channel.bulkDelete(amount, true).then(m => {
          message.channel.send(`✅  Cleared **${m.size}**/**${amount}** messages!`, {
            timeout: 4000,
            message
          }).then((msg) => {
            setTimeout(() => msg.delete(), ms('5 seconds'))
        });
        });
      } else if (Math.floor(amount / 100) % 100) {
        setTimeout(() => {
          for (let i = 0; i < Math.floor(amount / 100) % 100; i++) {
            message.channel.bulkDelete(100, true);
          }
        }, 1000);
        setTimeout(() => {
          message.channel.send(`✅  Cleared **${amount}**/**${amount}** messages!`, {
            timeout: 4000,
            message
          }).then((msg) => {
            setTimeout(() => msg.delete(), ms('5 seconds'))
        });
        }, 3000);
      } else if (amount % 100 === 0) {
        message.channel.bulkDelete(amount, true).then(m => {
          message.channel.send(`✅  Cleared **${m.size}**/**${amount}** messages!`, {
            timeout: 4000,
            message
          }).then((msg) => {
            setTimeout(() => msg.delete(), ms('5 seconds'))
        });
        });
      } else {
        let s = await message.channel.bulkDelete(amount % 100, true);
        message.channel.send(`✅  Cleared **${s.size}**/**${amount}** messages!`, {
          timeout: 4000,
          message
        }).then((msg) => {
          setTimeout(() => msg.delete(), ms('5 seconds'))
      });
      }
    }

    }
}
