
const express = require('express');
const router = express.Router();
const authenticateToken = require('../app/middleware/authenticateToken');
router.use(authenticateToken);
// router.get('/');
module.exports = router
