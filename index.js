const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('NDYxNjE2NTI0Mjk0MDk0ODU4.DhaO6Q.lSYCKH9qFt_tRUO7s0dsfCuvwOQ');

bot.on('message', message => {
let responseObject = {
    "/ip" : "Nosso Ips: MCPlayCraft.pvp.host",
    "/site" : "Em Manutenção.",
    "/yt" : "200 Subs YTMirin, 500 Subs YT, 1k YTPlus",
    "/youtuber" : "200 Subs YTMirin, 500 Subs YT, 1k YTPlus",
    "/tw" : "@MCPlayCraftNet",
    "/twitter" : "@MCPlayCraftNet",
    "/form" : "Link: https://goo.gl/ZoW7CM",
    "/aplicar" : "Link: https://goo.gl/ZoW7CM"
};

if(responseObject[message.content]){
    message.channel.send(responseObject[message.content]);
}

if (message.content.startsWith("/roleta")){
    randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
    if(randomNumber == 2){
        message.reply("Morreu!");
    }
    else{
        message.reply("Sobreviveu!");
    }
}

let role = message.guild.roles.find("name", "Master");
if(message.content.startsWith("/limparchat")){
    msgDel = 100;
    let numberMessages = parseInt(msgDel);
    message.channel.fetchMessages({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages));
    
const client = new Discord.Client();
    client.ping; // Bot's ping to discord
}

});
