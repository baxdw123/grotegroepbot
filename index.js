const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const Swearwords = require("./Data/scheldworden.json");

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
 
    if (!message.content.startsWith(prefix)) {

var msg = message.content.toLowerCase();

for (let index = 0; index < Swearwords.length; index++) {
    const swearWord = Swearwords[index];
    
    if(msg.includes(swearWord.toLowerCase())){

        message.delete();
        return message.channel.send("Baxdw123: je mag niet schelden idioot")
    }
}

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
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `family`) {
 
        return message.channel.send("dom toretto");

    }
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `klopt`) {
 
        return message.channel.send("ik was het daar ook mee eens");

    }
    
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}commands`) {
 
        return message.channel.send("leuk dat je het vraagt de commands zijn: !cool, !sterk, !leaderboard, !blockhead, !jullan, !hulp ");

    }
    client.on('message', message => {
        if (message.content === '!ping') {  
          message.channel.send(`pong ${Math.round(client.ws.ping)}ms`);
        }});

        client.on('message', message => {
            if (message.content === 'ik ben cool') {  
            message.delete();
            return message.channel.send("ben je niet").then(msg =>{
                setTimeout(() => {
                    message.delete()
                }, 5000);
            })

            }});
    

 
});