const discord = require('discord.js')

const possible_words = require('../../words.json');

class fastTyper {

    constructor(options) {
        if (!options.message) throw new TypeError('Missing argument: message')
        this.word = ""
        this.message = options.message
    }

    start() {

        let word = possible_words[Math.floor(Math.random() * possible_words.length)]

        let beginEmbed = new discord.MessageEmbed()
            .setColor("#960202")
            .setTitle(`Fast Typer`)
            .setDescription(`**Choosing a word...**`)
            .setTimestamp()

        this.message.channel.send({ embeds: [beginEmbed] }).then(emsg => {

            const filter = m => (m.content.toLowerCase() === word)
            this.message.channel.awaitMessages({ filter, max: 1, time: 60000 })
                .then(async collected => {

                    let firstCollected = collected.first().content

                    collected.first().react('🎉')

                    let winnerEmbed = new discord.MessageEmbed()
                        .setColor("GREEN")
                        .setTitle(`Fast Typer`)
                        .setDescription(`\`\`\`ㅤㅤㅤㅤㅤㅤㅤㅤㅤThe word is [ ${word} ]ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\`\`\`\n**GG! The winner is ${collected.first().author}**`)
                        .setTimestamp()
                    emsg.edit({ embeds: [winnerEmbed] })
                }).catch(err => {

                    let timeEmbed = new discord.MessageEmbed()
                        .setColor("#960202")
                        .setTitle(`Fast Typer`)
                        .setDescription(`**You guys were to late to type the word correctly!**`)
                        .setTimestamp()
                    return emsg.edit({ embeds: [timeEmbed] })
                })

            setTimeout(() => {

                let second1 = new discord.MessageEmbed()
                    .setColor("#b80404")
                    .setTitle(`Fast Typer`)
                    .setDescription(` **Games begins in 5 seconds...**`)
                    .setTimestamp()

                emsg.edit({ embeds: [second1] })

                setTimeout(() => {

                    let second2 = new discord.MessageEmbed()
                        .setColor("#ff0000")
                        .setTitle(`Fast Typer`)
                        .setDescription(`**Games begins in 4 seconds...**`)
                        .setTimestamp()

                    emsg.edit({ embeds: [second2] })

                    setTimeout(() => {

                        let second3 = new discord.MessageEmbed()
                            .setColor("#c45f00")
                            .setTitle(`Fast Typer`)
                            .setDescription(`**Games begins in 3 seconds...**`)
                            .setTimestamp()

                        emsg.edit({ embeds: [second3] })

                        setTimeout(() => {

                            let second4 = new discord.MessageEmbed()
                                .setColor("#e06e02")
                                .setTitle(`Fast Typer`)
                                .setDescription(`**Games begins in 2 seconds...**`)
                                .setTimestamp()

                            emsg.edit({ embeds: [second4] })

                            setTimeout(() => {

                                let second5 = new discord.MessageEmbed()
                                    .setColor("#ff7c00")
                                    .setTitle(`Fast Typer`)
                                    .setDescription(`**Games begins in 1 seconds...**`)
                                    .setTimestamp()

                                emsg.edit({ embeds: [second5] })

                                setTimeout(() => {

                                    let second6 = new discord.MessageEmbed()
                                        .setColor("#00ff00")
                                        .setTitle(`Fast Typer`)
                                        .setDescription(`Games begins in 0 seconds...\n**The word is... ${word}**`)
                                        .setTimestamp()

                                    emsg.edit({ embeds: [second6] })

                                }, 1000)

                            }, 1000)

                        }, 1000)

                    }, 1000)

                }, 1000)

            }, 1000)

        })
    }

}

module.exports = fastTyper
