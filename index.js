const Discord = require('discord.js')
const bot = new Discord.Client()
const CLEAR_MESSAGES = '!clearMessages';

bot.on('ready', function () {
  console.log("Je suis connecté !")
})


bot.on('message', message => {
    if (message.content === '!ping') {
      message.reply('pong !')
    }
  })

  bot.on('message', message => {
    if (message.content === '!ip') {
      message.reply('l.ip du serveur est bloquer pour les joueurs pour le moments')
    }
  })


  bot.on('ready', () => {
    console.log('Clear ON');
    bot.on('message', message => {
      if (message.content == '!clear')  {
  
  
        if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
          message.channel.sendMessage("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
          console.log("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
          return;
        } else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES")) {
          message.channel.sendMessage("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
          console.log("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
          return;
        }
  
        // Only delete messages if the channel type is TextChannel
        // DO NOT delete messages in DM Channel or Group DM Channel
        if (message.channel.type == 'text') {
          message.channel.fetchMessages()
            .then(messages => {
              message.channel.bulkDelete(messages);
              messagesDeleted = messages.array().length; // number of messages deleted
  

            })
            .catch(err => {
              console.log('Error while doing Bulk Delete');
              console.log(err);
            });
            message.reply('La purge est fait')
        }
      }
    });
  });
  


  


bot.login('NjQ4MTIzMzA0NzkxNTA2OTQ1.XdprVQ.RJYbnajxbZ89qcerVXr08qAAclc')