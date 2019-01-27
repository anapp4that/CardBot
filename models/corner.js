const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Participant = require('./participant.js');
const ParticipantSchema = mongoose.model('Participant').schema;

const Voter = require('./voter.js');
const VoterSchema = mongoose.model('Voter').schema;

let CornerSchema = new Schema(
  {
    participants: [ParticipantSchema],
    voters: [VoterSchema]
  },
  {
    timestamps: true
  }
);

// Export the model
module.exports = mongoose.model('Corner', CornerSchema);
