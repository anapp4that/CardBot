const Card = require('../../models/card');

//Simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send('Greetings from the Card Test controller!');
};

exports.create = (req, res, next) => {
  let card = new Card({
    type: req.body.type,
    name: req.body.name,
    date: req.body.date,
    matches: []
  });

  card.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send('Card created successfully');
  });
};

exports.findAll = (req, res, next) => {
  Card.find()
    .then(cards => {
      res.send(cards);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'An error occured while retrieving the cards'
      });
    });
};

exports.findOne = (req, res, next) => {
  Card.findById(req.params.id)
    .then(card => {
      if (!card) {
        return res.status(404).send({
          message: 'Card not found with id: ' + req.params.id
        });
      }

      res.send(card);
    })
    .catch(err => {
      if ((err.kind === 'ObjectId') | (err.name === 'NotFound')) {
        return res.status(404).send({
          message: 'Card not found with id: ' + req.params.id
        });
      }

      return res.status(500).send({
        message:
          err.message ||
          'An error occured while retrieving card with id:' + req.params.id
      });
    });
};

exports.delete = (req, res, next) => {
  Card.findOneAndDelete(req.params.id)
    .then(card => {
      if (!card) {
        return res.status(404).send({
          message: 'Card not found with id: ' + req.params.id
        });
      }

      res.send({
        message: 'Card with id ' + req.params.id + ' deleted successfully'
      });
    })
    .catch(err => {
      if ((err.kind === 'ObjectId') | (err.name === 'NotFound')) {
        return res.status(404).send({
          message: 'Card not found with id: ' + req.params.id
        });
      }

      return res.status(500).send({
        message: 'Could not delete card with id: ' + req.params.id
      });
    });
};

exports.lockCard = (req, res, next) => {
  Card.findById(req.params.id)
    .then(card => {
      if (!card) {
        return res.status(404).send({
          message: 'Card not found with id: ' + req.params.id
        });
      }

      console.log('Card locked: ' + card.isLocked);
      card.lockCard();
      console.log('Card locked: ' + card.isLocked);

      res.send(card);
    })
    .catch(err => {
      if ((err.kind === 'ObjectId') | (err.name === 'NotFound')) {
        return res.status(404).send({
          message: 'Card not found with id: ' + req.params.id
        });
      }

      return res.status(500).send({
        message:
          err.message ||
          'An error occured while retrieving card with id:' + req.params.id
      });
    });
};
