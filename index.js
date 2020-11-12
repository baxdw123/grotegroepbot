const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const client = new discord.Client();
client.login(process.env.token);

client.on("ready", () => {

console.log(`${client.user.username} is klaar voor gebruik`);
client.user.setActivity("Fortnite", {type: "PLAYING"});


});



client.on("message", async message => {

 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}hulp`) {
 
        return message.channel.send("dit team probeert de grootste discord server te maken (heel europe).en wij Hoopen dat jij ook mee wil helpen om het doel te Halen.");

    }

    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}jullian`) {
 
        return message.channel.send("jullian is appart");

    }

    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}blockhead`) {
 
        return message.channel.send("https://cdn.discordapp.com/emojis/700299738737672192.png?v=1");

    }

    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}leaderboard`) {
 
        return message.channel.send("https://mee6.xyz/leaderboard/699929047190470677");

    }


    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}levels`) {
 
        return message.channel.send("https://mee6.xyz/leaderboard/699929047190470677");

    }
    
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}sterk`) {
 
        return message.channel.send("https://cdn.discordapp.com/attachments/729347667674529865/730041854216765500/unknown.png");

    }
    

    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}cool`) {
 
        return message.channel.send("jij ben niet cool maar baxdw123 en cooleman wel");

    }
});