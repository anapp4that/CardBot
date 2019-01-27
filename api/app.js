// app.js

// Dependencies
const env = require('node-env-file');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Route files
const votersRoutes = require('./routes/voters'); // Imports routes for the voters
const participantsRoutes = require('./routes/participants'); // Imports routes for the participants
const cardsRoutes = require('./routes/cards'); // Imports routes for the cards
const matchesRoutes = require('./routes/matches'); // Imports routes for the matches

// Get the environment variables from the .env file
env(__dirname + '/../.env');

// Set up mongoose connection
// Connect to MongoDB with our ODM: Mongoose
let dbConnectionURI = 'mongodb://' + process.env.DB_HOST;
if (process.env.DB_PORT) {
  dbConnectionURI += ':' + process.env.DB_PORT;
}

mongoose.Promise = global.Promise;

mongoose
  .connect(dbConnectionURI, {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    dbName: process.env.DB_NAME,
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch(err => {
    console.log('Could not connect to the database. Error:', err);
    console.log('Exiting application');
    process.exit();
  });

let db = mongoose.connection;

// Set up the HTTP server
const app = express();
let port = 8080;

// Setup bodyParser for the HTTP server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup routes
app.get('/status', (req, res) => {
  res.json({ status: 'CardBot API is up and running' });
});
app.use('/voters', votersRoutes);
app.use('/participants', participantsRoutes);
app.use('/cards', cardsRoutes);
app.use('/matches', matchesRoutes);

app.listen(port, () => {
  console.log('Server is up and running on port: ' + port);
});
