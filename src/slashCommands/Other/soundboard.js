const { Client, CommandInteraction, MessageEmbed } = require('discord.js');
const SoundBoard = require('../../../modules/djs-soundboard');
const system_embed_colour = "RANDOM"

module.exports = {
    name: 'soundboard',
    description: 'Play a bunch of sound!',
    inVoiceChannel: true,
    options: [
        {
          name: 'anime',
          description: 'choose a sound!',
          type: 'SUB_COMMAND',
          options: [{ name: "sound", description: "Choose a sound", type: "STRING", required: true,
          choices: [
              {name: "Ara-Ara", value: "ara-ara"},
              {name: "Arigatou", value: "arigato"},
              {name: "F*ck You", value: "fuck-you"},
              {name: "Kamehameha", value: "kamehameha"},
              {name: "Katon", value: "katon"},
              {name: "Kawaiii", value: "kawaii"},
              {name: "Kira Laugh", value: "kiras_laugh"},
              {name: "Nani?!?", value: "nani_Pmxf5n3"},
              {name: "Nico Nico Nii", value: "niconiconii"},
              {name: "Oni-Chan", value: "oni-chan"},
              {name: "Senpai", value: "senpai"},
              {name: "Tutturuu", value: "turuturu"},
      
          ]}]
        },
        {
          name: 'effects',
          description: 'choose a sound!',
          type: 'SUB_COMMAND',
          options: [{ name: "sound", description: "Choose a sound", type: "STRING", required: true,
          choices: [
              {name: "AMONG US", value: "amongus"},
              {name: "Bass Boost", value: "bass-boost"},
              {name: "Discord Notification", value: "discord-notification"},
              {name: "Error", value: "error"},
              {name: "Fart", value: "fart"},
              {name: "He he he ha", value: "heheheha"},
              {name: "HEEEEEEE", value: "heeee"},
              {name: "Baby laughing sound effect - No Copyright", value: "laugh"},
              {name: "MitsUBisHi MatErIAls", value: "materials"},
              {name: "Ok Bye", value: "okbye"},
              {name: "Roblox Death", value: "roblox-death"},
              {name: "Shutdown", value: "shutdown"},
              {name: "WIWU WIWU", value: "wiwu"},
              {name: "Technoblade Bruh", value: "tecnobladebruh"},
              {name: "Villager", value: "villager"},
      
          ]}]
        },
        {
          name: 'memes',
          description: 'choose a sound!',
          type: 'SUB_COMMAND',
          options: [{ name: "sound", description: "Choose a sound", type: "STRING", required: true,
          choices: [
              {name: "And his name is john cena", value: "and-his-name-is-john-cena-1"},
              {name: "Are ya winning son", value: "are-ya-winning-son"},
              {name: "Bruh", value: "bruh"},
              {name: "Coffin Dance", value: "coffin-dance"},
              {name: "cum monster", value: "cum"},
              {name: "Directed By", value: "directed-by-robert-b_voI2Z4T"},
              {name: "Enemy Spotted", value: "enemy-spotted"},
              {name: "F*cked Up", value: "fucked-up"},
              {name: "Helicopter Helicopter", value: "helicopter-helicopter"},
              {name: "Hello There!", value: "hello-there"},
              {name: "Ah shit here we go again", value: "herewegoagain"},
              {name: "it was at this moment that he knew he f-cked up", value: "it-was-at-this-moment-that-he-he-knew-he-f-cked-up"},
              {name: "Lesgo", value: "lesgo"},
              {name: "Pirates moment", value: "hoho"},
              {name: "Noice", value: "noice"},
              {name: "Ok simp", value: "ok-simp"},
              {name: "Rickroll", value: "rickroll"},
              {name: "SuckAdick", value: "suckAdick"},
              {name: "super idol", value: "super-idol"},
              {name: "Surprise Motherfucker", value: "surprise-motherfucker"},
              {name: "Oooooh", value: "the-rap-battle-parody-oh"},
              {name: "Under the water", value: "underthewater"},
              {name: "Virus", value: "virus"},
              {name: "Why are you running", value: "why-are"},
              {name: "x files theme song", value: "x-files-theme-song-copy"},
      
          ]}]
        }
      ],
  
   
    /** 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[]} args 
     */
    run: async(client, interaction, args) => {
        /// const valueId = interaction.options.getString('sound');
        const { options, member, guild, channel } = interaction;
        /// interaction.reply({content: `Playing **${valueId}**`, ephemeral: true});
        
        let sound = new SoundBoard
        let VoiceChannel = member.voice.channel

        // sound.play(channel, valueId)

        try {
            switch(options.getSubcommand()) {
              case "anime" : {
                switch(options.getString("sound")) {
                  case "ara-ara" :
                    await sound.play(VoiceChannel, "ara-ara")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "arigato" :
                    await sound.play(VoiceChannel, "arigato")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "fuck-you" :
                    await sound.play(VoiceChannel, "fuck-you")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "kamehameha" :
                    await sound.play(VoiceChannel, "kamehameha")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "katon" :
                    await sound.play(VoiceChannel, "katon")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "kawaii" :
                    await sound.play(VoiceChannel, "kawaii")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "kiras_laugh" :
                    await sound.play(VoiceChannel, "kiras_laugh")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "nani_Pmxf5n3" :
                    await sound.play(VoiceChannel, "nani_Pmxf5n3")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "niconiconii" :
                    await sound.play(VoiceChannel, "niconiconii")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "oni-chan" :
                    await sound.play(VoiceChannel, "oni-chan")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "senpai" :
                    await sound.play(VoiceChannel, "senpai")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "turuturu" :
                    await sound.play(VoiceChannel, "turuturu")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                }
              }
              case "effects" : {
                switch(options.getString("sound")) {
                  case "amongus" :
                    await sound.play(VoiceChannel, "amongus")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "bass-boost" :
                    await sound.play(VoiceChannel, "bass-boost")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "discord-notification" :
                    await sound.play(VoiceChannel, "discord-notification")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "error" :
                    await sound.play(VoiceChannel, "error")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "fart" :
                    await sound.play(VoiceChannel, "fart")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "heheheha" :
                    await sound.play(VoiceChannel, "heheheha")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "heeee" :
                    await sound.play(VoiceChannel, "heeee")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "laugh" :
                    await sound.play(VoiceChannel, "laugh")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "materials" :
                    await sound.play(VoiceChannel, "materials")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "okbye" :
                    await sound.play(VoiceChannel, "okbye")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "roblox-death" :
                    await sound.play(VoiceChannel, "roblox-death")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "shutdown" :
                    await sound.play(VoiceChannel, "shutdown")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "wiwu" :
                    await sound.play(VoiceChannel, "wiwu")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "tecnobladebruh" :
                    await sound.play(VoiceChannel, "tecnobladebruh")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "villager" :
                    await sound.play(VoiceChannel, "villager")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                }
              }
              case "memes" : {
                switch(options.getString("sound")) {
                  case "and-his-name-is-john-cena-1" :
                    await sound.play(VoiceChannel, "and-his-name-is-john-cena-1")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "are-ya-winning-son" :
                    await sound.play(VoiceChannel, "are-ya-winning-son")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "bruh" :
                    await sound.play(VoiceChannel, "bruh")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "coffin-dance" :
                    await sound.play(VoiceChannel, "coffin-dance")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "cum" :
                    await sound.play(VoiceChannel, "cum")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "directed-by-robert-b_voI2Z4T" :
                    await sound.play(VoiceChannel, "directed-by-robert-b_voI2Z4T")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "enemy-spotted" :
                    await sound.play(VoiceChannel, "enemy-spotted")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "fucked-up" :
                    await sound.play(VoiceChannel, "fucked-up")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "helicopter-helicopter" :
                    await sound.play(VoiceChannel, "helicopter-helicopter")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "hello-there" :
                    await sound.play(VoiceChannel, "hello-there")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "herewegoagain" :
                    await sound.play(VoiceChannel, "herewegoagain")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "it-was-at-this-moment-that-he-he-knew-he-f-cked-up" :
                    await sound.play(VoiceChannel, "it-was-at-this-moment-that-he-he-knew-he-f-cked-up")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "lesgo" :
                    await sound.play(VoiceChannel, "lesgo")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "hoho" :
                    await sound.play(VoiceChannel, "hoho")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "noice" :
                    await sound.play(VoiceChannel, "noice")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "ok-simp" :
                    await sound.play(VoiceChannel, "ok-simp")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "rickroll" :
                    await sound.play(VoiceChannel, "rickroll")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "suckAdick" :
                    await sound.play(VoiceChannel, "suckAdick")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "super-idol" :
                    await sound.play(VoiceChannel, "super-idol")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "surprise-motherfucker" :
                    await sound.play(VoiceChannel, "surprise-motherfucker")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "the-rap-battle-parody-oh" :
                    await sound.play(VoiceChannel, "the-rap-battle-parody-oh")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "underthewater" :
                    await sound.play(VoiceChannel, "underthewater")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "virus" :
                    await sound.play(VoiceChannel, "virus")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "why-are" :
                    await sound.play(VoiceChannel, "why-are")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                  case "x-files-theme-song-copy" :
                    await sound.play(VoiceChannel, "x-files-theme-song-copy")
                    return interaction.reply({embeds: [new MessageEmbed().setColor(system_embed_colour).setDescription("Playing a sound..")], ephemeral: true});
                }
              }
            }
        } catch (e) {
          const errorEmbed = new MessageEmbed()
          .setColor("RED")
          .setTitle(`Error`)
          .setDescription(`${e}`)
          return interaction.reply({embeds: [errorEmbed], ephemeral: true});
      }
    }
  }   
