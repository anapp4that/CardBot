var SlackBot = require('slackbots');
//file system object
const fs = require('fs');

var botToken = fs.readFileSync('./token.txt', 'utf-8');
botToken = botToken.toString();
botToken = botToken.trim();

// create a bot
var bot = new SlackBot({
    token: botToken,
    name: 'CardBot'
});

bot.on('start', function() {
    var params = {
        icon_emoji: ':female-judge:'
    };

    bot.postMessage('test', 'test', params);

});
