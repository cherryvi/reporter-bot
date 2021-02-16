require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'ODEwODY5MDEzMTA1NzM3NzQ3.YCp6nQ.hZb74doG-cN4Th4koq1c9DtLgUc';

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
    
  } else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Please tag a valid user!');
    }
  }
});
