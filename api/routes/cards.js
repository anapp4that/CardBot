const express = require('express');
const router = express.Router();

// Require the controller
const cardsController = require('../controllers/cards');

// Set up routes to controller
router.get('/test', cardsController.test);
router.post('/create', cardsController.create);
router.get('/', cardsController.findAll);
router.get('/:id', cardsController.findOne);
router.get('/lock/:id', cardsController.lockCard);
// router.put('/:id', cardsController.update);
router.delete('/:id', cardsController.delete);

module.exports = router;
