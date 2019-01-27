module.exports = function(controller) {
  controller.on('app_mention', function(bot, message) {
    var input = message.text;

    var parsedInput = input.split(' ');
    var action = parsedInput[1].toLowerCase();
    var object = '';

    if (parsedInput[2] != undefined) {
      object = parsedInput[2].toLowerCase();
    }

    switch (action) {
      case 'add':
        if (object == 'card') {
          bot.reply(message, 'Im sorry, You can not add a card at the moment.');
        } else if (object == 'match') {
          bot.reply(message, 'Im sorry, You can not add a match at the moment');
        } else {
          bot.reply(message, 'You didnt specifiy what you wanted to add.');
        }

        break;
      case 'remove':
        if (object == 'card') {
          bot.reply(
            message,
            'Im sorry, You can not remove a card at the moment.'
          );
        } else if (object == 'match') {
          bot.reply(
            message,
            'Im sorry, You can not remove a match at the moment'
          );
        } else {
          bot.reply(message, 'You didnt specifiy what you wanted to remove.');
        }

        break;
      case 'view':
        if (object == 'card') {
          bot.reply(
            message,
            'Im sorry, You can not view a card at the moment.'
          );
        } else if (object == 'match') {
          bot.reply(
            message,
            'Im sorry, You can not view a match at the moment'
          );
        } else {
          bot.reply(message, 'You didnt specifiy what you wanted to view.');
        }

        break;
      default:
        bot.reply(
          message,
          'I dont recognize that command. \nUse the help command to see avaliable commands'
        );
    }
  });
};
