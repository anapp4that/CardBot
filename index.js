var SlackBot = require('slackbots');

botToken = process.env.SLACK_TOKEN

// create a bot
var cardBot = new SlackBot({
    token: botToken,
    name: 'CardBot'
});

cardBot.on('start', function() {
    var params = {
        icon_emoji: ':female-judge:'
    };

    cardBot.postMessage('test', 'test', params);

});
