// JavaScript source code
const Discord = require("discord.js");
const prefix = "!";
Client = new Discord.Client;

Client.on("ready", () => {
    console.log("The bot is ready to be used");

});

/*Client.on("message", message => {
    if (message.content === "test") {
        message.channel.send("Hello world");
    }
});*/


Client.login("Nzc5ODIyNjUxMzIwMzAzNjY3.X7mIcA.FSuaXra1L2w9c0pNnuJtnass2Ww");
