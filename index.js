const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const client = new discord.Client();
client.login(process.env.token);

client.on("ready", () => {

console.log(`${client.user.username} is klaar voor gebruik`);
client.user.setActivity("Minecraft", {type: "PLAYING"});


});



client.on("message", async message => {

 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}hulp`) {
 
        return message.channel.send("dit team probeert de grootste discord server te make (heel europe).en wij Hoopen dat jij ook mee wil helpen om het doel te Halen.");

    }

    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}jullian`) {
 
        return message.channel.send("jullian is de owner van de server");

    }

    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}blockhead`) {
 
        return message.channel.send("https://cdn.discordapp.com/emojis/700299738737672192.png?v=1");

    }

    if (command === "!hallo"){

        const choices = [
          {
            message: "hallo"
          },
          {
            message: "hi"
          },
          {
            message: "hoi."
          }       
``      ];
    
}});