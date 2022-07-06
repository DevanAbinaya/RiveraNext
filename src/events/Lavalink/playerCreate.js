const { MessageActionRow, MessageButton } = require("discord.js");
const db = require("../../schema/setup");

module.exports = async (client, player) => {

	client.logger.log(`Player has been created in ${player.guild}`, "log");
	let guild = client.guilds.cache.get(player.guild);
	if (!guild) return;
	const data = await db.findOne({ Guild: guild.id });
	if (!data) return;

	let channel = guild.channels.cache.get(data.Channel);
	if (!channel) return;

	let message;

	try {

		message = await channel.messages.fetch(data.Message, { cache: true });

	} catch (e) { };

	if (!message) return;

	let pausebut = new MessageButton().setCustomId(`pause_but_${guild.id}`).setEmoji("<:m_play:994130210188439573>").setStyle("SECONDARY").setDisabled(false);

	let lowvolumebut = new MessageButton().setCustomId(`lowvolume_but_${guild.id}`).setEmoji("<:voldown:994130330246201374>").setStyle("SECONDARY").setDisabled(false);

	let highvolumebut = new MessageButton().setCustomId(`highvolume_but_${guild.id}`).setEmoji("<:volup:994130357173624923>").setStyle("SECONDARY").setDisabled(false);

	let previousbut = new MessageButton().setCustomId(`previous_but_${guild.id}`).setEmoji("<:m_previous:994130242757210172>").setStyle("SECONDARY").setDisabled(false);

	let skipbut = new MessageButton().setCustomId(`skipbut_but_${guild.id}`).setEmoji("<:m_next:994130188789104670>").setStyle("SECONDARY").setDisabled(false);

	const row1 = new MessageActionRow().addComponents([lowvolumebut, previousbut, pausebut, skipbut, highvolumebut]);

	await message.edit({ content: "__**Join a voice channel and queue songs by name/url.**__\n\n", components: [row1] }).catch(() => { });


}