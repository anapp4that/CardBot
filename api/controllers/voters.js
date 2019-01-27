const Voter = require('../../models/voter');

//Simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send('Greetings from the Voter Test controller!');
};

exports.create = (req, res, next) => {
  let voter = new Voter({
    name: req.body.name
  });

  voter.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send('Voter created successfully');
  });
};
