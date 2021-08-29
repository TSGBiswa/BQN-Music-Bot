module.exports = {
  Admins: ["729575913208938547"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: ">>", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/nM2jsW7EAw", //Support Server Link
  Token: process.env['Token'],
 //Discord Bot Token
  ClientID: "878474185729511455", //Discord Client ID
  ClientSecret: "CulxwrHkL2TMdT_105DvpTRV4O5eocCF", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is epic", //A Secret like a password
  IconURL:
    "https://cdn.discordapp.com/attachments/879696355965165589/880680366103466054/bqn.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
    secure: false, // Set this to true if you're self-hosting lavalink on replit.
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
    secure: false // Set this to true if you're self-hosting lavalink on replit.
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: "d92d056fcf25498290631170ca6a2f14", //Spotify Client ID
    ClientSecret:  "e5a009be48b843dcb53da2f3292762a2", //Spotify Client Secret
  },
};
