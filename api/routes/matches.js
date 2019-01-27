const express = require('express');
const router = express.Router();

// Require the controller
const matchesController = require('../controllers/matches');

// Set up routes to controller
router.get('/test', matchesController.test);
router.post('/create', matchesController.create);

module.exports = router;
