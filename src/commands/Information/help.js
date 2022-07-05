const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");
const { readdirSync } = require("fs");
const client = require('../../structures/Client');
let color = "#ffae29";

// Prefix
const db = require('../../schema/prefix');
// const prefix = require('../../src/config/config.json').prefix;


module.exports = {
    name: "help",
    category: "Information",
    aliases: [ "h" ],
    description: "Return all commands, or one specific command",
    args: false,
    usage: "",
    permission: [],
    owner: false,
 execute: async (message, args, client, prefix) => {
   

   if (!args[0]) {
      let categories = [];

      let ignored = ["owner"];

      const data = await db.findOne({ Guild : message.guild.id })
      .catch(err => console.log(err))

      if(data) {
         custom = data.Prefix;
      } else {
         custom = "-"
      }

      const p = data.Prefix || "-"

      const row = new MessageActionRow()
          .addComponents(
              new MessageSelectMenu()
              .setCustomId("select")
              .setPlaceholder("Pilih opsi yang kamu inginkan!")
              .addOptions([
                  {
                      label: "/Slash Commands!",
                      description: "Click here to see the Slash Commands section",
                      value: "first"
                  },
                  {
                      label: "Info Commands!",
                      description: "Click here to see the commands section",
                      value: "second"
                  },
                  {
                      label: "Without Prefix Commands!",
                      description: "Click here to see the commands",
                      value: "third"
                  },
                  
              ])
          )

      const rows = new MessageActionRow()
              .addComponents(
                  new MessageSelectMenu()
                  .setCustomId("Disabled")
                  .setPlaceholder("You took too long - Disabled!")
                  .setDisabled(true)
                  .addOptions([
                      {
                          label: "label",
                          description: "description",
                          value: "disabled"
                      },
                      {
                          label: "another label",
                          description: "another description",
                          value: "still disabled"
                      },
                  ])
              )

      // fetch command that available

      readdirSync("./src/commands").forEach((dir) => {
        if (ignored.includes(dir.toLowerCase())) return;
        const name = `${[dir.toLowerCase()]} ${dir.toUpperCase()}`;
        let cats = new Object();

        cats = {
          name: name,
          value: `\`${p}help ${dir.toLowerCase()}\``,
          inline: true,
        };

        categories.push(cats);
      });
          
      let embed = new MessageEmbed()
          .setTitle("Help Menu!")
          .setDescription(`**Pilih menu di bawah sesuai dengan kategorinya!**\n> Untuk melihat kategori, pakai command \`\`${p}help [category]\`\` atau \`\`/help\`\` untuk melihat slash command!`)
          .setColor(color)
          .setThumbnail('https://cdn.discordapp.com/attachments/938406741526323210/992382386476163102/anime-girl-laying-with-cat-4k-wallpaper-uhdpaper.com-2880g.jpg')
          .addFields(
              {name: "Prefixes!",value: `\`\`Prefix = [${p}]\`\`` , inline: true,},
              {name: "Invite Me!",value: `[Click Me](https://discord.com/api/oauth2/authorize?client_id=927193694937952276&permissions=8&scope=applications.commands%20bot)`, inline: true,},
              {name: "ㅤ",value: `ㅤ`, inline: true,}
          )
          .addFields(
              {name: '<:SlashCommand:939011353627226132> Slash Commands',value: "`/help`", inline: true},
              {name: '❓ Info!', value: `\`\`${p}help info\`\``, inline: true},
              {name: '🔎 Other', value: `\`\`${p}other\`\``, inline: true}
          )
          .setTimestamp()
          .setFooter({ text: "If you can't find what you need, ask `Factiven#9110` for help." });

      let sedmsg = await message.channel.send({
          content: "ㅤ",
          ephemeral: true,
          embeds: [embed],
          components: [row]
      })

      let embed1 = new MessageEmbed()
          .setTitle("/ Slash Commands!")
          .setDescription("Use the slash commands")
          .setColor(color)
          .addFields(
              {name: "Discord Activity",value: "`/activities` = Lakukan berbagai aktivitas bersama di Discord!"},
              {name: "Utilities",value: "`/ping` = Returns websocket ping\n`/clean (Not Available)` = Remove the amount of message you want to delete\n`/bonk` = No horni\n`/triggered` = Pake ini kalo ke-triggered."},
              {name: 'Music Commands *(Moved To Prefix Command)*',value: "`/play` = Play a song!\n`/skip` = Skip the current song\n`/pause` = Pause the current song\n`/resume` = Resume the current song\n`/queue` = Display the queue\n`/volume` = Change or check the volume of the current song\n`/lyrics` = Display lyrics for the current song or a specific song\n`/now-playing` = Shows information about the current song."}
          )
          .setTimestamp()
          .setFooter({ text: "If you can't find what you need, ask `Factiven#9110` for help." });

      let embed2 = new MessageEmbed()
          .setTitle("Commands!")
          .setDescription("This commands need Prefix!")
          .setColor(color)
          .addFields(
              {name: "Future Moderation", value: `\`-prefix\` = Check the server prefix\n\`-setprefix\` = Set your custom prefix\n\`-prefix-reset\` = Reset the prefix to default`},
              {name: "General", value: `\`-help\` = For Help!\n\`-ping\` = Returns websocket ping\n\`-invite\` = Get the bot invitation\n\`-hen\` = Unlock a secret channel (sst don't tell anyone about this command). *this command only works in [this server](https://discord.gg/v5fjSdKwr2)`},
              {name: "Games", value: `\`-gunfight\` = Tag temanmu untuk bermain gunfight\n\`-akinator\` = Penebak handal`}
          )
          .setTimestamp()
          .setFooter({ text: "If you can't find what you need, ask `Factiven#9110` for help." });



      let embed3 = new MessageEmbed()
          .setTitle("Without Prefix Commands")
          .setDescription("No need prefix to use this commands")
          .setColor(color)
          .addFields(
              {name: 'Commands', value: '`speed` = Hamster be like: "wooosh"\n`troleo divino` = ima put ma balls in yo jaw\n`troleo` = half of me be like\n`divino` = and yes another half of me be like\n`amogus` = S U S\n`dog` = yoo ma dog whatcha doin over there?\n`cat` = smiling cat ( yes thats it ).'}
          )
          .setTimestamp()
          .setFooter({ text: "If you can't find what you need, ask `Factiven#9110` for help." });

      const collector = message.channel.createMessageComponentCollector({
          componentType: "SELECT_MENU"
      })

      collector.on("collect", async (collected) => {
         await collected.deferReply({
            ephemeral: true
        });
          const value = collected.values[0]

          if (value === "first") {
              collected.followUp({
                  embeds: [embed1],
                  ephemeral: true
              })
          }

          if (value === "second") {
              collected.followUp({
                  embeds: [embed2],
                  ephemeral: true
              })
          }

          if (value === "third") {
              collected.followUp({
                  embeds: [embed3],
                  ephemeral: true
              })
          };

      });

      setTimeout(function () {
          sedmsg.edit({ embeds: [embed], components: [rows] });
        }, 300000);
    } else {
      let cots = [];
      let catts = [];
      
      readdirSync("./src/commands/").forEach((dir) => {
        if (dir.toLowerCase() !== args[0].toLowerCase()) return;
        const commands = readdirSync(`./src/commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          let file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return "No command name.";

          let name = file.name.replace(".js", "");

          let des = `${client.commands.get(name).description}`;
          let emo = `✅`;

          let obj = {
            cname: `${emo} \`${name}\``,
            des,
          };

          return obj;
        });

        let dota = new Object();

        cmds.map((co) => {
          dota = {
            name: `${cmds.length === 0 ? "In progress." : co.cname}`,
            value: co.des ? co.des : "No Description",
            inline: true,
          };
          catts.push(dota);
        });

        cots.push(dir.toLowerCase());
      });

      const data = await db.findOne({ Guild : message.guild.id })
      .catch(err => console.log(err))

      if(data) {
         custom = data.Prefix;
      } else {
         custom = "-"
      }

      // console.log(cots);
      const p = data.Prefix || "-"

      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (cots.includes(args[0].toLowerCase())) {
        const combed = new MessageEmbed()
          .setTitle(
            `__${
              args[0].charAt(0).toUpperCase() + args[0].slice(1)
            } Commands!__`
          )
          .setDescription(
            `Use \`${p}help\` followed by a command name to get more information on a command.\nFor example: \`${p}help ping\`.\n\n`
          )
          .addFields(catts)
          .setColor(color);

        return message.channel.send({ embeds: [combed] });
      }

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(
            `❌ Invalid command! Please Use \`${p}help\` To see my all commands`
          )
          .setColor("RED");
        return message.channel.send({ embeds: [embed] });
      }

      const embed = new MessageEmbed()
        .setTitle("Command Details:")
        .addField(
          "Command:",
          command.name ? `\`${command.name}\`` : "No name for this command."
        )
        .addField(
          "Aliases:",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "No aliases for this command."
        )
        .addField(
          "Usage:",
          command.usage
            ? `\`${p}${command.name} ${command.usage}\``
            : `\`${p}${command.name}\``
        )
        .addField(
          "Command Description:",
          command.description
            ? command.description
            : "No description for this command."
        )
        .setFooter(
          `Rivera`,
          message.client.user.displayAvatarURL({
            dynamic: true,
          })
        )
        
        .setColor(color);
      return message.channel.send({ embeds: [embed] });
    }
   }
 }
