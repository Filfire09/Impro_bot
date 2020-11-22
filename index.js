// JavaScript source code
const Discord = require("discord.js");
const prefix = "!";
const fs = require("fs")
const { token } = require("./token.js");
Client = new Discord.Client;


Client.on("ready", () => {
    console.log("The bot is ready to be used");

});

Client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
    if (message.content.startsWith(prefix + "test")) {
        message.channel.send("Hello world");
    }
});


Client.login(token);
