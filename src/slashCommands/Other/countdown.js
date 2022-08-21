const { Client, CommandInteraction, MessageEmbed, Message } = require('discord.js');

module.exports = {
    name: 'countdown',
    description: 'create a countdown',
    options: [
        {
          name: "year",
          description: "what year?",
          type: "NUMBER",
          required: true,
        },
        {
          name: "month",
          description: "what month?",
          type: "STRING",
          required: true,
        },
        {
          name: "date",
          description: "pick a number from 1-31",
          type: "NUMBER",
          required: true,
        },
        {
          name: "hour",
          description: "pick a number from 1-60",
          type: "NUMBER",
          required: true,
        },
        {
          name: "minute",
          description: "pick a number from 1-60",
          type: "NUMBER",
          required: true,
        },
        {
          name: "seconds",
          description: "pick a number from 1-60",
          type: "NUMBER",
          required: true,
        },
        {
          name: "text",
          description: "need a text?",
          type: "STRING",
          required: false,
        }

    ],
  
    /** 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[]} args 
     */
    run: async(client, interaction, args) => {
        await interaction.deferReply();
        let options = interaction.options;
        const text = options.getString('text')
        const year = options.getNumber('year')
        const month = options.getString('month')
        const date = options.getNumber('date')
        const hour = options.getNumber('hour')
        const minute = options.getNumber('minute')
        const seconds = options.getNumber('seconds')
        
        var myDate = new Date(`${month} ${date}, ${year} ${hour}:${minute}:${seconds}`); // Your timezone!
        var myEpoch = myDate.getTime()/1000.0;

        interaction.followUp(`${text} <t:${myEpoch}:R>`)
        console.log(myEpoch);
    }
 } 