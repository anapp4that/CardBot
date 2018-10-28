module.exports = function(controller) {
  controller.on('user_channel_join,user_group_join', function(bot, message) {
    bot.reply(message, 'Welcome, <@' + message.user + '>');
  });

  // controller.on("app_mention", function(bot, message) {
  //   console.log("Responding to mention with: You called?");
  //   bot.reply(message, "You called?");
  // });

  controller.on('direct_message', function(bot, message) {
    console.log('Responding to DM with: Hi, this is my DMs');
    bot.reply(message, 'Hi, this is my DMs');
  });

  // controller.on("ambient", function(bot, message) {
  //   console.log(
  //     "Responding to message in channel with: Oh hey, people are talking"
  //   );
  //   bot.reply(message, "Oh hey, people are talking");
  // });

  // controller.hears("crap", "direct_message", function(bot, message) {
  //   bot.reply(message, "Oh no, what'd you do this time?");
  // });

  // add a middleware to log messages sent
  controller.middleware.send.use(function(bot, message, next) {
    console.log('Sending: ', message);
    next();
  });

  // add a middleware to log messages received
  controller.middleware.receive.use(function(bot, message, next) {
    console.log('Sending: ', message);
    next();
  });
};
