# CardBot

CardBot is Slack bot and web app that is used for generating a match card for various types of sporting events.

It is built off of [botkit](https://github.com/howdyai/botkit) and the [botkit-starter-slack](https://github.com/howdyai/botkit-starter-slack) project.

## What's Included

- [Botkit core](https://botkit.ai/docs/core.html) - a complete programming system for building conversational software
- [Pre-configured Express.js webserver](https://expressjs.com/) including:
  - A customizable "Install my Bot" homepage
  - Login and oauth endpoints that allow teams to install your bot
  - Webhook endpoints for communicating with platforms
- Next.js for running the rest of the web UI
- React for a nice and reactive web UI
- MUI, a package for Material UI inspired React componments
- A Slack bot working to the extent that it will respond to mentions of it in a channel with a preconfigured response

## Getting Started

#### Install CardBot

Clone this repository using Git:

`git clone https://github.com/howdyai/botkit-starter-slack.git`

Install the dependencies:

```
cd CardBot
npm install
```

#### Set up your Slack Application

Once you have installed CardBot, the next thing you will want to do is set up a new Slack application via the [Slack developer portal](https://api.slack.com/). This is a multi-step process, but only takes a few minutes.

- [Read this step-by-step guide](https://botkit.ai/docs/provisioning/slack-events-api.html) to make sure everything is set up.

Update the `.env` file with your newly acquired tokens.

Launch your bot application by typing:

`npm start`

Now, visit your new bot's login page: http://localhost:8080/login

### Start up the Web UI

The web UI provides a normal website interaction with CardBot. Here you can use forms to create, set up, and run cards outside of Slack. Any changes made to cards in the web UI will be reflect when interacting with CardBot through the Slack bot as well. To start it up, first you'll need to build it with:

`npm run build`

Then launch the Next.js server on a different port than the Slack bot. The default is 3000:

`npm run startNext`

## Development

### Extend CardBot's Functionality

CardBot is built ontop of Botkit and Botkit Starter Kit for Slack. So you can add skills to it just like in Botkit Starter Kit for Slack, by adding them as modules in the `skills/` folder. The main bot application will automatically include any files placed there.

A skill module should be in the format:

```
module.exports = function(controller) {

    // add event handlers to controller
    // such as hears handlers that match triggers defined in code
    // or controller.studio.before, validate, and after which tie into triggers
    // defined in the Botkit Studio UI.

}
```

### Customize Storage

By default, the starter kit uses a simple file-system based storage mechanism to record information about the teams and users that interact with the bot. While this is fine for development, or use by a single team, most developers will want to customize the code to use a real database system.

There are [Botkit plugins for all the major database systems](https://botkit.ai/readme-middlewares.html#storage-modules) which can be enabled with just a few lines of code.

Botkit has enabled their [Mongo middleware]() for starters in this project. To use your own Mongo database, just fill out `MONGO_URI` in your `.env` file with the appropriate information. For tips on reading and writing to storage, [check out these medium posts](https://botkit.groovehq.com/knowledge_base/categories/build-a-bot)
