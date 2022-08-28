require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "",  // your bot token
    prefix: process.env.PREFIX || "-", // bot prefix
    geniusAPI: process.env.GENIUSAPI || "",
    ownerID: process.env.OWNERID || "", //your discord id
    SpotifyID: process.env.SPOTIFYID || "",
    SpotifySecret: process.env.SPOTIFYSECRET || "",
    mongourl: process.env.MONGO_URI || "", // MongoDb URL
    embedColor: process.env.COlOR || "#2f3136", // embed colour
    logs: process.env.LOGS || "904628290000662560", // channel id for guild create and delete logs
    links: {
        img: process.env.IMG || 'https://cdn.discordapp.com/attachments/986579286397964290/993392503778721792/2825704.gif', //setup system background image 
        support: process.env.SUPPORT || 'https://discord.gg/v5fjSdKwr2', //support server invite link
        invite: process.env.INVITE || 'https://discord.com/api/oauth2/authorize?client_id=991578084622991441&permissions=8&scope=applications.commands%20bot' //bot invite link
    },
    nodes: [
        {
            host: process.env.NODE_HOST || "lavalink.oops.wtf",
            identifier: process.env.NODE_ID || "main",
            port: parseInt(process.env.NODE_PORT || "2000"),
            password: process.env.NODE_PASSWORD || "www.freelavalink.ga",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),

        }
    ],

}

function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
