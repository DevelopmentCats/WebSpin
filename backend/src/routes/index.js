const express = require('express');
const router = express.Router();
const { healthCheck } = require('../controllers');

// Define routes
router.get('/api/health', healthCheck);

module.exports = router;