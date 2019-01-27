const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Match = require('./match.js');
const MatchSchema = mongoose.model('Match').schema;

let CardSchema = new Schema(
  {
    type: { type: String, required: true },
    name: { type: String, required: true },
    date: { type: Date, default: Date.now, required: true },
    matches: [MatchSchema],
    winner: [], //is array to account for ties
    comments: [],
    isLocked: { type: Boolean, default: false, required: true },
    isComplete: { type: Boolean, default: false, required: true },
    isCurrentCard: { type: Boolean, default: false, required: true }
  },
  {
    timestamps: true
  }
);

CardSchema.methods.lockCard = function() {
  this.isLocked = true;
};

CardSchema.methods.unlockCard = function() {
  this.isLocked = false;
};

CardSchema.methods.getCardName = function() {
  return this.name;
};

CardSchema.methods.setCardName = function(name) {
  this.name = name;
};

CardSchema.methods.getType = function() {
  return this.type;
};

CardSchema.methods.setType = function(type) {
  this.type = type;
};

CardSchema.methods.getCardDate = function() {
  return this.date;
};

CardSchema.methods.setCardDate = function(date) {
  this.date = date;
};

CardSchema.methods.clearComments = function() {
  this.comments = [];
};

CardSchema.methods.addComment = function(comment) {
  this.comments.push(comment);
};

CardSchema.methods.addMatchToCard = function(match) {
  this.matches.push(match);
};

CardSchema.methods.removeMatchFromCard = function(match) {
  for (var i = 0; i < this.matches.length; i++) {
    if (this.matches[i] == match) {
      this.matches.splice(i, 1);

      return;
    }
  }
};

CardSchema.methods.setCardWinner = function(name) {
  if (Array.isArray(name)) {
    this.winner = name;
  } else {
    this.winner.push(name);
  }
};

CardSchema.methods.markCardComplete = function() {
  this.isComplete = true;
  this.isCurrentCard = false;
};

CardSchema.methods.markCardIncomplete = function() {
  this.isComplete = false;
};

CardSchema.methods.setIsComplete = function(flag) {
  this.isComplete = flag;
};

// Export the model
module.exports = mongoose.model('Card', CardSchema);
