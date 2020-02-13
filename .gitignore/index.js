const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";

client.login("");

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "d'ou tu parle a ma meuf"){
        message.channel.send("nan mais mec je peux tout t'expliquer, je pensais juste a elle sous la douche")
    }
    if (message.content === prefix + "hello"){
         message.channel.send("wsh " + message.author)
}
});
