const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let VoterSchema = new Schema(
  {
    name: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

// Export the model
module.exports = mongoose.model('Voter', VoterSchema);
