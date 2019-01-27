const express = require('express');
const router = express.Router();

// Require the controller
const participantsController = require('../controllers/participants');

// Set up routes to controller
router.get('/test', participantsController.test);
router.post('/create', participantsController.create);

module.exports = router;
