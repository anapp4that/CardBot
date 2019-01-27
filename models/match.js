const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Corner = require('./corner.js');
const CornerSchema = mongoose.model('Corner').schema;

let MatchSchema = new Schema(
  {
    type: { type: String, required: true },
    corners: [CornerSchema],
    winner: CornerSchema,
    comments: [],
    isLocked: false,
    isComplete: false
  },
  {
    timestamps: true
  }
);

MatchSchema.methods.getType = function() {
  return this.type;
};

MatchSchema.methods.setType = function(type) {
  this.type = type;
};

MatchSchema.methods.getComments = function() {
  return this.comments;
};

MatchSchema.methods.addComment = function(comment) {
  this.comment.push('comment');
};

MatchSchema.methods.clearComments = function() {
  this.comments = [];
};

MatchSchema.methods.lockMatch = function() {
  this.isLocked = true;
};

MatchSchema.methods.unlockMatch = function() {
  this.isLocked = false;

  if (isComplete) {
    this.isComplete = false;
  }
};

MatchSchema.methods.setWinner = function(name) {
  for (var i = 0; i < this.participants.length; i++) {
    if (this.participants[i] == name) {
      this.winner = i;

      //break out of the loop
      i = this.participants.length;
    }
  }
};

MatchSchema.methods.markComplete = function() {
  if (this.winner != null) {
    this.isComplete = true;
    this.isLocked = true;
  } else {
    console.log('You must mark a winner before closing the match');
    //throw exception
  }
};

// Export the model
module.exports = mongoose.model('Match', MatchSchema);
