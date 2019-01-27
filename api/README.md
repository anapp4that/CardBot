# cardbot-api
This is the API for CardBot. It is intended to provide a simple interface for the
persistence layer and to use when developing the core logic separate from the
Slack bot interface.

# Getting Started
* Set up your database connection details in the .env file
* Run `npm run start-api` or `node api/app.js` to start the API
* Start querying the endpoints

# File Structure
The core CardBot models are found in the CardBot (root) > models folder. Named
with singular version of the model's name. E.g: Card in card.js.  
Each model has a route and controller file as well, located at CardBot (root) >
api > routes and CardBot (root) > api > controllers respectively. Those are named
with the plural vrsion of the model's name: E.g: cards.js.  
The api > app.js is the main API file.

API File structure example:
* CardBot (root)
  * models
      * card.js
  * api
    * app.js
    * controllers
      * cards.js
    * routes
      * cards.js

# Environment Variables
The API utilizes the same .env file in the base of the project that the rest of
CardBot uses. CardBot uses MongoDB to store it's data, so it pulls the connection
details and credentials from the environment variables. It utilizes the following
variables from that file:
* `DB_HOST`: The hostname of the server that is hosting the database
* `DB_PORT`: The port that Mongo is running on, on the host
* `DB_NAME`: The specific database in Mongo to use
* `DB_USER`: The username for connecting to Mongo
* `DB_PASS`: The password for connecting to Mongo
