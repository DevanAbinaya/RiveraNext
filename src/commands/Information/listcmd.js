const { Client, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { readdirSync } = require("fs");
const db = require('../../schema/prefix');

module.exports = {
    name: "other",
    category: "Information",
    aliases: [ "cmdlist", "listcmd" ],
    description: "Show all of prefix commands.",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {

    if (!args[0]) {
      let categories = [];

      const data = await db.findOne({ Guild : message.guild.id })
      .catch(err => console.log(err))

      if(data) {
         custom = data.Prefix;
      } else {
         custom = "-"
      }

      const p = custom;

      readdirSync("./src/commands").forEach((dir) => {
        const commands = readdirSync(`./src/commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          let file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return "No command name.";

          let name = file.name.replace(".js", "");
          let description = file.description;

          return `\`${name}\` : ${description} \n`;
        });

        let datas = new Object();

        datas = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "In progress." : cmds.join(" "),
        };

        categories.push(datas);
      });

        const embed = new MessageEmbed()
        .setTitle("📬 Need help? Here are all of my Normal commands:")
        .addFields(categories)
        .setDescription(
          `Use \`\`${p}help\`\` followed by a command name to get more additional information on a command. For example: \`${p}help invite\`.`
        )
        .setFooter({ text: "If you can't find what you need, ask `Factiven#9110` for help." })
        .setTimestamp()
        .setColor('GREEN');
      return message.channel.send({ embeds: [embed] });
  }

    }
}
