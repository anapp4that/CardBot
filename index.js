var SlackBot = require('slackbots');
//file system object
const fs = require('fs');

var botToken = fs.readFileSync('./token.txt', 'utf-8');
botToken = botToken.toString();
botToken = botToken.trim();
//console.log(botToken);

// create a bot
var cardBot = new SlackBot({
    token: botToken,
    name: 'CardBot'
});

cardBotot.on('start', function() {
    var params = {
        icon_emoji: ':female-judge:'
    };

    cardBot.postMessage('test', 'test', params);

});
