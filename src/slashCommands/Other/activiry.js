const { MessageEmbed, Invite } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'activities',
    description: 'Collection of mini-game for voice channels!',
    options: [
      {
        name: 'mini-games',
        description: 'choose the mini-game',
        type: 'STRING',
        required: true,
        choices: [
          {
            name: 'Betrayal.io',
            value: '773336526917861400'
          },
          {
            name: 'chess-in-the-park',
            value: '832012774040141894'
          },
          {
            name: 'chess-in-the-park-development',
            value: '832012586023256104'
          },
          {
            name: 'Fishington.io',
            value: '814288819477020702'
          },
          {
            name: 'Poker-Night',
            value: '755827207812677713',
          },
          {
            name: 'Watch-Together',
            value: '880218394199220334'
          },
          {
            name: 'Sketch-Heads',
            value: '902271654783242291'
          },
          {
            name: 'Spellcast',
            value: '852509694341283871'
          }
        ]
      }
    ],
    /** 
       * @param {Client} client 
       * @param {CommandInteraction} interaction 
       * @param {String[]} args 
       */
    run: async(client, interaction) => {
      await interaction.deferReply();
  
      const ApplicationId = interaction.options.getString('mini-games');
  
      const channel = interaction.member.voice.channel;
  
      if(!channel)
        return interaction.followUp({
          embeds: [
            new MessageEmbed()
              .setTitle('**Discord-Activities**')
              .setDescription('Please join a voice channel before using this command!')
              .setColor('#ff0000')
              .setFooter({text: 'This message will disappear in 10 seconds!'})
              .setTimestamp()
          ]
        }).then(m => {
          setTimeout(() => {
            m.delete()
          }, 10000)
        })
  
  
  
      fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
        method: 'POST',
        body: JSON.stringify({
          max_age: 86400,
          max_uses: 0,
          target_application_id: `${ApplicationId}`,
          target_type: 2,
          temporary: false,
          validate: null
        }),
        headers: {
          "Authorization": `Bot ${client.token}`,
          "Content-Type": "application/json"
        }
      }).then(res => res.json())
        .then(invite => {
          if(!invite.code)
            return interaction.followUp({
              embeds: [
                new MessageEmbed()
                  .setTitle('**Discord-Activities**')
                  .setDescription('Unable to start activities please try again!')
                  .setColor('#ff0000')
                  .setTimestamp()
                  .setFooter({text: 'This message will disappear in 10 seconds!'})
              ]
            }).then(m => {
              setTimeout(() => {
                m.delete()
              }, 10000)
            })
  
            interaction.followUp({
                content: 'ㅤ'
            }).then(m => {
              setTimeout(() => {
                m.delete()
              }, 1000)
            })
  
            interaction.channel.send({
              content: `https://discord.com/invite/${invite.code}`
            })
          
        })
    }
  }