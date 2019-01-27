const Match = require('../../models/match');

//Simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send('Greetings from the Match Test controller!');
};

exports.create = (req, res, next) => {
  let match = new Match({
    type: req.body.type,
    name: req.body.name,
    date: req.body.date,
    matches: []
  });

  match.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send('Match created successfully');
  });
};
