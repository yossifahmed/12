const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Hi ${client.user.tag} , This Code by : YossiF `);
  console.log('')
  console.log(`i Have  [ " ${client.guilds.size} " ]`);
});

const developers = ["504392863451316224"]
const adminprefix = "y";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**Status You   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wat')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Status You   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'lis')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Status You  ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/i_kahrba999");
      message.channel.send(`**Status You ${argresult} **`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client.on('guildMemberAdd', member => {
const Yossif = member.guild.channels.get("497896363757928459");//ايدي الشات
if(!Yossif) return;
if(Yossif) {
Yossif.send(`**Welcome  :cupid:  **`);          
}
});




client.login("NTA0MzkyODYzNDUxMzE2MjI0.DrthnQ.3ipInF1aK7SCRJUNya0RiuBMSVI");
