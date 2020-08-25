const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const client = new discord.Client();
client.login(process.env.token);

client.on("ready", async => {

console.log(`${client.user.username} is klaar voor gebruik`);
client.user.setActivity("Minecraft", {type: "PLAYING"});


});



client.on("message", async message => {

 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}hallo`) {
 
        return message.channel.send("Hallo!!");
    

    }

    if (message.content == '!roll') 
    {
        var roll =(Math.floor(Math.random()*200)+1);
        if (roll == 2)
        {
            message.reply('Wowza!');
        }
        else 
        {
            message.reply('4');
        }
        {
            message.reply('3');
        }
        {
            message.reply('lol!');
        }
        {
            message.reply('lol!');
        }
        {
            message.reply('2');
        }
        {
            message.reply('1');
        }
        {
            message.reply('l');
        }
        {
            message.reply('lo');
        }
        {
            message.reply('!');
        }
        {
            message.reply('lol!');
        }
    }
}


);