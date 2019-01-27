const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ParticipantSchema = new Schema(
  {
    name: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

// Export the model
module.exports = mongoose.model('Participant', ParticipantSchema);
