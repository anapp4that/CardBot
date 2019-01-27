const Participant = require('../../models/participant');

//Simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send('Greetings from the Participant Test controller!');
};

exports.create = (req, res, next) => {
  let participant = new Participant({
    name: req.body.name
  });

  participant.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send('Participant created successfully');
  });
};
