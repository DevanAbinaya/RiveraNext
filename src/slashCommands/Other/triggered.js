const { Client, CommandInteraction, MessageAttachment } = require('discord.js');
const Canvas = require('canvas');

module.exports = {
    name: 'triggered',
    description: 'Make you triggered',
    options: [
        {
            name: 'user',
            description: 'user to mention',
            type: 'USER',
            required: false
        }
    ],
    /**
     * 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        await interaction.deferReply();
        
        let options = interaction.options;
        const member = options.getMember('user');

        if (!member) {

            const canvas = Canvas.createCanvas(800, 1000);
            const context = canvas.getContext('2d');
            const background = await Canvas.loadImage('./modules/triggered.jpg')

            context.drawImage(background, 0, 0, canvas.width, canvas.height);
            const userAvatar = await Canvas.loadImage(interaction.user.displayAvatarURL({ format: 'jpg' }));
            context.drawImage(userAvatar, 0, 0, 800, 800);
            const sepia = await Canvas.loadImage('./modules/sepia.png');
            context.drawImage(sepia, 0, 0, 800, 800);

            const finalImage = new MessageAttachment(canvas.toBuffer(), 'finalImage.png');

            interaction.followUp({ content: `**${interaction.user.username} is triggered!!!**`, files: [finalImage] });

        } else {

            const canvas = Canvas.createCanvas(800, 1000);
            const context = canvas.getContext('2d');
            const background = await Canvas.loadImage('./modules/triggered.jpg')

            context.drawImage(background, 0, 0, canvas.width, canvas.height);
            const userAvatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
            context.drawImage(userAvatar, 0, 0, 800, 800);
            const sepia = await Canvas.loadImage('./modules/sepia.png');
            context.drawImage(sepia, 0, 0, 800, 800);

            const finalImage = new MessageAttachment(canvas.toBuffer(), 'finalImage.png');

            interaction.followUp({ content: `**${member.user.username} is triggered!!!**`, files: [finalImage] });
        }
    },
};