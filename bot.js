const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`IST Server`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




client.on("message", msg => {
  if(msg.content === '.' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| يلعب :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true)
          .addField('🤖| هل هو بوت ؟', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});









const d = require("discord.js");
const client = new d.Client();
var prefix ="."
var colors = new Array(100);

client.on("message", (message) => {
    var command = message.content.split(" ")[0].slice(prefix.length);
    switch(command) {
        case "cc" :
        if (!message.channel.type == "text") return;
        if (!message.member.hasPermission("MANAGE_ROLES")) return
        for(var x = 0;x<colors.length;x++){
            message.guild.createRole({name : x, color : colors[x]});
        };
    };
}).login("NDgyODkxNDQ3NjUwMjIyMDgw.DmLfUw.Qc_cFJfLcwEBwu-InQ6vLperq_M");
function sin_to_hex(i, phase) {
    var sin = Math.sin(Math.PI / size * 2 * i + phase);
    var int = Math.floor(sin * 127) + 128;
    var hex = int.toString(16);
  
    return hex.length === 1 ? '0'+hex : hex;
};
for(var x=0;x<colors.length;x++) {
    let r   = sin_to_hex(i, 0 * Math.PI * 2/3);
    let b  = sin_to_hex(i, 1 * Math.PI * 2/3);
    let g = sin_to_hex(i, 2 * Math.PI * 2/3);
    colors[x] = '#'+ r + g + b;
};







client.login(process.env.BOT_TOKEN);
