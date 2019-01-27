const express = require('express');
const router = express.Router();

// Require the controller
const votersController = require('../controllers/voters');

// Set up routes to controller
router.get('/test', votersController.test);
router.post('/create', votersController.create);

module.exports = router;
